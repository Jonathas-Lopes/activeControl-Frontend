<template>
  <div class="container-fluid" style="overflow: hidden;">
    <div class="main">
      <template v-if="currentUser">
        <MainPage
          @logout="onLogout"
          v-bind:currentUserAdmin="currentUser.user.admin"
          v-bind:userName="currentUser.user.name"
        >
          <template v-slot:tableActives
            ><table-actives
              @reserveActive="onReserveActive"
              @giveBackActive="onGiveBackActive"
              class="mt-4 p-2 bg-dark"
              v-bind:actives="actives"
              v-bind:userId="currentUser.user._id"
          /></template>
          <template v-slot:notifications>
            <notification v-bind:notifications="actives" />
          </template>
          <template v-slot:cadastroSpace
            ><cadastro-space
              @deleteAction="handleDeleteAction"
              @newAction="handlenewAction"
              v-if="currentUser.user.admin"
              v-bind:users="users"
              v-bind:actives="actives"
              class="mt-3"
            >
              <template v-slot:modalDelete
                ><modalDelete
                  @visibility="handleModalsVisibility"
                  @entityToDelete="handleDeleteEntity"
                  v-if="modals.delete.visibility"
                  :settings="modals.delete"
                />
              </template>

              <template v-slot:modalNewActive>
                <modalNewActive
                  @visibility="handleModalsVisibility"
                  @newEntity="handleNewEntity"
                  v-if="modals.newActive.visibility"
                />
              </template> 
              <template v-slot:modalNewUser>
                <modalNewUser
                  @visibility="handleModalsVisibility"
                  @newEntity="handleNewEntity"
                  v-if="modals.newUser.visibility"
                />
              </template> 
              </cadastro-space
          ></template>
        </MainPage>
      </template>
      <template v-else>
        <LoginForm @login="onLogin" />
      </template>
    </div>
  </div>
</template>

<script>
import env from "../env";
import MainPage from "./components/MainPage.vue";
import TableActives from "./components/TableActives.vue";
import CadastroSpace from "./components/CadastroSpace.vue";
import tokenService from "./services/token.service";
import LoginForm from "./components/LoginForm.vue";
import Notification from "./components/Notification.vue";
import modalDelete from "./components/modalComponent/modalDelete.vue";
import modalNewActive from "./components/modalComponent/modalNewActive.vue";
import modalNewUser from "./components/modalComponent/modalNewUser.vue";
import io from "socket.io-client";

export default {
  components: {
    CadastroSpace,
    LoginForm,
    MainPage,
    TableActives,
    Notification,
    modalDelete,
    modalNewActive,
    modalNewUser,
  },
  data() {
    return {
      socket: io.connect(`http://${env.server}:3010`, {
        extraHeaders: {
          Authorization: `Bearer ${tokenService.getToken("userCookie")}`,
        },
      }),
      actives: "",
      modals: {
        delete: { visibility: false, entity: "", _id: "" },
        newActive: { visibility: false },
        newUser: { visibility: false },
      },
      currentUser: tokenService.getUser(tokenService.getToken("userCookie")),
      users: "",
    };
  },
  beforeMount() {},
  mounted() {
    this.socket.emit("active", { op: "" });
    this.socket.on("actives", (args) => {
      this.$data.actives = args;
    });
    this.socket.emit("user", { op: "" });
    this.socket.on("users", (args) => {
      this.$data.users = args;
    });
  },

  methods: {
    handleDeleteAction(ev) {
      this.modals.delete.entity = ev.entity;
      this.modals.delete._id = ev._id;
      this.modals.delete.visibility = true;
    },
    handlenewAction(ev) {
      switch (ev.entity) {
        case "user":
          this.modals.newUser.visibility = true;
          break;
        case "active":
          this.modals.newActive.visibility = true;
          break;
        default:
          break;
      }
    },

    handleModalsVisibility(ev) {
      switch (ev) {
        case "delete":
          this.modals.delete.visibility = false;
          break;
        case "edit":
          this.modals.edit.visibility = false;
          break;
        case "newActive":
          this.modals.newActive.visibility = false;
          break;
        case "newUser":
          this.modals.newUser.visibility = false;
          break;
        default:
          break;
      }
    },
    handleDeleteEntity(ev) {
      this.socket.emit(ev.entity, { op: "del", id: ev.id });
      console.log(ev, "handleNewEntity");
    },
    handleNewEntity(ev) {
      this.socket.emit(ev.entity, {
        op: "new",
       data:ev.data
      });
      
    },

    onGiveBackActive(ev) {
      this.socket.emit("active", { op: "dev", activeId: ev });
      console.log(ev);
    },
    onReserveActive(ev) {
      this.socket.emit("active", {
        op: "aloc",
        activeId: ev,
        userId: this.currentUser.user._id,
      });
      console.log();
    },
    onLogin() {
      this.$data.socket = io.connect(`http://${env.server}:3010`, {
        extraHeaders: {
          Authorization: `Bearer ${tokenService.getToken("userCookie")}`,
        },
      });
      this.socket.on("actives", (args) => {
        this.$data.actives = args;
      });
      this.currentUser = tokenService.getUser(
        tokenService.getToken("userCookie")
      );
    },
    onLogout() {
      this.currentUser = false;
      this.socket.disconnect();
    },
  },
};
</script>
<style>
@import "./assets/styles/main.css";
</style>
