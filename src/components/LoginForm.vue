<template>
  <div class="row">
    <section
      class="form-section col col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3
      "
    >
      <form class="text-center " @submit.prevent="autenticate()">
        <div class="">
          <div>
            <label for="username">Faça seu Login</label>
            <input
              class="form-control"
              id="username"
              name="username"
              type="text"
              placeholder="Username"
              required
              v-model="username"
            />
          </div>

          <div>
            <!-- <label for="password">Password</label> -->
            <input
              class="form-control"
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              required
              v-model="password"
            />
          </div>

          <div>
            <button class="btn" type="submit">Entrar</button>
          </div>
          <br />
          <div>
            <a href="#">Esqueci minha senha</a>
          </div>
          <br />
          <br />
          <div>
            <a href="#">Criar conta</a>
          </div>
        </div>
      </form>
    </section>
    <section
      class="presentation col col-xs-1 col-sm-1 col-md-9 col-lg-9 col-xl-9"
    ></section>
  </div>
</template>

<script>
import env from "../../env";
import axios from "axios";
import tokenService from "../services/token.service"
import io from "socket.io-client";
export default {
  name: "LoginForm",
  data() {
    return {
      response: "",
      username: "",
      password: "",
    };
  },
  methods: {
    autenticate: async function() {
      let response = await axios.post(`http://${env.server}:3010/users/login`, {
        email: this.$data.username,
        password: this.$data.password,
      });
      tokenService.newCookie("userCookie", 8, response.data.token)
      io.connect(`http://${env.server}:3010`, {
        extraHeaders: {
          Authorization: `Bearer ${tokenService.getToken("userCookie")}`,
        },
      })
      

      this.$emit("login", {});
       
    },
  },
};
</script>
