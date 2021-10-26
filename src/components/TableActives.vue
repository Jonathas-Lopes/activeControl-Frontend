<template>
  <div>
    <table
      class="
        table table-striped table-dark table-hover table-bordered
        text-center
      "
    >
      <thead>
        <tr>
          <th scope="col">Status</th>
          <th scope="col">Modelo</th>
          <th scope="col">ID</th>

          <th scope="col">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="active in actives" :key="active.id">
          <td style="vertical-align: middle">
            <span
              v-if="active.status == 'disp'"
              class="material-icons"
              style="color: green"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Disponível"
            >
              check_box
            </span>
            <span
              v-if="active.status == 'indisp'"
              class="material-icons"
              style="color: orange"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Indisponível"
            >
              radio_button_unchecked
            </span>
            <span
              v-if="active.status == 'afer'"
              class="material-icons"
              style="color: yellow"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Aferindo"
            >
              build
            </span>
            <span
              v-if="active.status == 'man'"
              class="material-icons"
              style="color: red"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Em reparo"
            >
              handyman
            </span>
          </td>

          <td style="vertical-align: middle">{{ active.model }}</td>
          <td style="vertical-align: middle">{{ active.serialNumber }}</td>

          <td style="vertical-align: middle">
            <div class="d-flex justify-content-evenly" style="height:60px">
              <button v-if="active.status=='disp'"
                @click="reserveActive(active._id)"
                class="btn btn-silicon-success"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Reservar"
              >
                <span class="material-icons"> shopping_cart </span>Reservar
              </button>
              <button
              v-if="active.userId===userId"
              @click="giveBackActive(active._id)"
                class="btn btn-secondary"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Devolver"
              >
                <span class="material-icons"> assignment_return </span>Devolver
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  components: {},

  props: ["actives", "userId"],
  data() {
    return {};
  },
  computed: {},
  beforeMount() {},
  mounted() {},

  methods: {
    reserveActive(activeId) {
      this.$emit("reserveActive", activeId);
    },
    giveBackActive(activeId) {
      this.$emit("giveBackActive", activeId);
    },
  },
};
</script>
