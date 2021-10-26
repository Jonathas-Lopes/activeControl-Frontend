<template>
  <div>
    <div class="modal " tabindex="-1" role="dialog">
      <div class="modal-dialog">
        <div class="modal-content text-center">
          <div class="modal-header justify-content-around">
            <h5 class="modal-title" id="exampleModalLabel">Novo Ativo</h5>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3">
                <label for="recipient-name" class="col-form-label"
                  >Modelo:</label
                >
                <input
                required
                  type="text"
                  class="form-control"
                  id="recipient-name"
                  v-model="this.newActive.model"
                />
              </div>
              <div class="mb-3">
                <label for="recipient-name" class="col-form-label"
                  >Identificador:</label
                >
                <input
                required
                  type="text"
                  class="form-control"
                  id="recipient-name"
                  v-model="newActive.serialNumber"
                />
              </div>

              <div class="mb-3">
                <label for="message-text" class="col-form-label"
                  >Descrição:</label
                >
                <textarea
                  class="form-control"
                  id="message-text"
                  v-model="newActive.description"
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
              @click="changeVisibility(), newEntity()"
            >
              Criar
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
  data() {
    return {
      newActive: { model: "", serialNumber: "", description: "" },
    };
  },
  methods: {
    changeVisibility() {
      this.$emit("visibility", "newActive");
    },
    newEntity() {
      this.$emit("newEntity", {entity:'active', data:this.newActive});
    },
  },
};
</script>
