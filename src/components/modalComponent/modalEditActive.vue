<template>
  <div>
    <div class="modal-dialog">
      <div class="modal-content text-center">
        <div class="modal-header justify-content-around">
          <h5 class="modal-title" id="exampleModalLabel">Editar Ativo</h5>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-2">
              <label for="recipient-name" class="col-form-label">Nome:</label>
              <input
                type="text"
                class="form-control"
                id="recipient-name"
                v-model="Arguments.Modelo"
              />
            </div>
            <div class="mb-2">
              <label for="recipient-name" class="col-form-label">Serial:</label>
              <input
                type="text"
                class="form-control"
                id="recipient-name"
                v-model="Arguments.Serial"
              />
            </div>
            <div class="mb-2">
              <label for="recipient-name" class="col-form-label"
                >Data aferição:</label
              >
              <input
                type="text"
                class="form-control"
                id="recipient-name"
                v-model="Arguments.Afericao"
              />
            </div>

            <div v-if="Arguments.Status != 'ind'" class="mb-2">
              <label class="col-form-label">Status:</label>
              <select
                class="form-select"
                aria-label="Default select example"
                @change="setStatus($event)"
              >
                <option value="disp" selected
                  >Defina um Status para o Ativo</option
                >
                <option value="disp">disponivel</option>
                <option value="afer">Aferir</option>
                <option value="rep">Reparar</option>
              </select>
            </div>

            <div class="mb-3">
              <label for="message-text" class="col-form-label"
                >Descrição:</label
              >
              <textarea
                class="form-control"
                id="message-text"
                v-model="Arguments.Desc"
              ></textarea>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            @click="changeVisibility()"
          >
            Close
          </button>
          <button
            type="button"
            class="btn btn-silicon-success"
            @click="changeVisibility(), updateThisActive()"
          >
            Atualizar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: ["modaltype", "arguments"],
  data() {
    return {};
  },
  methods: {},
};
</script>
