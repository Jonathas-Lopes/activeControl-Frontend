<template>
  <div class="row">
    <nav class="navbar navbar-dark bg-dark">
      <div class="navbar-brand logo">
        <p>ACTIVE CONTROL</p>
      </div>
      <div style="display: flex">
        <a class="navbar-brand" href="#">
          <img
            src="/images/foto-de-perfil-para-trabalho.jpg"
            width="50"
            height="50"
            class="d-inline-block align-top rounded-circle"
            alt=""
          />
        </a>
        <div>
          <p class="text-light">Bem vindo</p>
          <h6 class="text-light">{{userName}}</h6>
        </div>
      </div>
      <div class="foto-perfil">
        <a class="navbar-brand" href="#">
          <button class="material-icons" @click="logout()">
            power_settings_new
          </button>
        </a>
      </div>
    </nav>
    <section
      class="side-menu col col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3"
    >
      <div class="card business-header"></div>
      <button @click="setScreen(0)" class="btn">Ativos</button>
      <button @click="setScreen(1)" class="btn">Status</button>
      <button @click="setScreen(2)" class="btn">Relatórios</button>
      <button v-if="currentUserAdmin" @click="setScreen(3)" class="btn">
        Gerenciar
      </button>
      <img
        src="/images/JOJO4.png"
        width="100%"
        height="40%"
        class="d-inline-block align-top"
        alt=""
      />
    </section>
    <section class="col-md-9 col-lg-9 col-xl-9 bg-secondary">
      <slot name="tableActives" v-if="screen == 0"></slot>
      <slot name="notifications" v-if="screen == 1"></slot>
      <slot name="cadastroSpace" v-if="screen == 3"></slot>
      
    </section>
  </div>
</template>

<script>
import env from "../../env";
import service from "../services/mainPage.service"
// import TableActives from "./TableActives.vue"

export default {
  components: {
    // TableActives,
    
  },
  props: ["userName", "currentUserAdmin"],
  name: "MainPage",
  data() {
    return {
      screen: 0,
      username: "",
      password: "",
    };
  },

  methods: {
    logout:function(){return(service.logout(`http://${env.server}:3010/users/logout`, this))},
    setScreen:function(state) {service.setScreen(state, this)}
    


  },
};
</script>
