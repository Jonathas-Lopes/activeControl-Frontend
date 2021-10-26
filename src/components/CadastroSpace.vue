<template>
  <div class="cadastro " >
    <ul class="nav nav-tabs" style="background-color: #28262e">
      <li class="nav-item flex-fill text-center">
        <a
          class="nav-link"
          href="#"
          v-bind:class="{ active: equip }"
          v-on:click="toggleActive('equip')"
          >Equipamentos</a
        >
      </li>
      <li class="nav-item flex-fill text-center">
        <a
          class="nav-link"
          href="#"
          v-bind:class="{ active: user }"
          v-on:click="toggleActive('user')"
          >Usuarios</a
        >
      </li>
    </ul>
    <div v-if="equip" class="mt-5 overflow-auto" style="
    max-height: 70%;">
      <table class="table table-bordered table-dark text-center table-responsive-sm">
        <thead>
          <tr>
            <th scope="col">Serial</th>
            <th scope="col">Equipamento</th>
            <th scope="col">Descrição</th>
            <th scope="col">Aferido em:</th>
            <th scope="col">Status:</th>
            <th scope="col">Ação</th>
          </tr>
        </thead>
        <tbody >
          <tr v-for="active in this.actives" v-bind:key="active._id">
            <td style="vertical-align: middle">{{ active.serialNumber }}</td>
            <td style="vertical-align: middle">{{ active.model }}</td>
            <td style="vertical-align: middle">{{ active.description }}</td>
            <td style="vertical-align: middle">"active.Afericao "</td>
            <td style="vertical-align: middle" v-if="active.status == 'disp'">
              <span
                class="material-icons"
                style="color: green"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Disponível"
              >
                check_box
              </span>
            </td>
            <td
              style="vertical-align: middle"
              v-else-if="active.status == 'indisp'"
            >
              <span
                class="material-icons"
                style="color: orange"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Indisponível"
              >
                radio_button_unchecked
              </span>
            </td>
            <td
              style="vertical-align: middle"
              v-else-if="active.status == 'afer'"
            >
              <span
                class="material-icons"
                style="color: yellow"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Aferindo"
              >
                build
              </span>
            </td>
            <td style="vertical-align: middle" v-else>
              <span
                class="material-icons"
                style="color: red"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Em reparo"
              >
                handyman
              </span>
            </td>

            <td>
              <div class="d-flex justify-content-evenly">
                <button
                  
                  class="btn btn-silicon-success"
                >
                  <span 
                   @click="editAction(user._id, 'active')"
                  class="material-icons"> mode </span>Editar
                </button>
                <button
                  v-on:click="deleteAction(active._id, 'active')"
                  class="btn btn-secondary"
                  data-toggle="modal"
                  data-target="#editModal"
                >
                  <span class="material-icons"> delete </span>Excluir
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="user" class="mt-5 overflow-auto" >
      <table class="table table-bordered table-dark " style="
    max-height: 70%;">
        <thead>
          <tr>
            <th scope="col">Email</th>
            <th scope="col">Nome</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in this.users" v-bind:key="user._id">
            <td style="vertical-align: middle">{{ user.email }}</td>
            <td style="vertical-align: middle">{{ user.name }}</td>

            <td>
              <div class="d-flex justify-content-around">
                <button 
                 @click="editAction(user._id, 'user')"
                class="btn btn-silicon-success">
                  <span class="material-icons"> mode </span>
                  <p>Editar</p>
                </button>
                <button
                  @click="deleteAction(user._id, 'user')"
                  class="btn btn-secondary"
                >
                  <span class="material-icons"> delete </span>
                  <p>Excluir</p>
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <button
      v-if="user"
      class="btn new-item"
      v-on:click="newAction('user')"
    >
      <span class="material-icons"> add </span>
    </button>
    <button
      v-if="equip"
      class="btn new-item"
      v-on:click="newAction('active')"
    >
      <span class="material-icons"> add </span>
    </button>
    <slot name="modalDelete"></slot>
    <slot name="modalNewActive"></slot>
    <slot name="modalEditActive"></slot>
    <slot name="modalNewUser"></slot>
    <slot name="modalEditUser"></slot>
  </div>
</template>
<script>
export default {
  components: {},
  props: ["actives", "users"],

  data() {
    return {
      equip: true,
      user: false,
    };
  },
  computed: {
    activeClassName: function() {
      return this.active.checked ? "checked" : "";
    },
  },
  methods: {
    deleteAction(id, entity) {
    
      this.$emit("deleteAction", { _id: id, entity: entity });
    },
     editAction(id, entity) {
      this.$emit("editAction", { _id: id, entity: entity });
    },
    newAction(entity) {
      this.$emit("newAction", { entity: entity });
    },

    toggleActive(tab) {
      switch (tab) {
        case "equip":
          this.equip = true;
          this.user = false;
          break;
        case "user":
          this.user = true;
          this.equip = false;
          break;

        default:
          break;
      }
    },
  },
};
</script>
