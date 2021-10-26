<template>
   <div>
    <div class="modal">
      <div class="modal-dialog">
        <div class="modal-content text-center">
          <div class="modal-header justify-content-around">
            <h5 class="modal-title" id="exampleModalLabel">Novo Usuário</h5>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3">
                <label for="recipient-name" class="col-form-label"
                  >Nome:</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="recipient-name"
                  v-model="newUser.name"
                />
              </div>
              <div class="mb-3">
                <label for="recipient-name" class="col-form-label"
                  >Setor:</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="recipient-name"
                  v-model="newUser.sector"
                />
              </div>
              <div class="mb-3">
                <label for="recipient-name" class="col-form-label"
                  >Identificador:</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="recipient-name"
                  v-model="newUser.identity"
                />
              </div>
               <div class="mb-3">
                <label for="recipient-name" class="col-form-label"
                  >Email:</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="recipient-name"
                  v-model="newUser.email"
                />
              </div>
              <div class="mb-3">
                <label for="recipient-name" class="col-form-label"
                  >Password:</label
                >
                <input
                  type="text"
                  class="form-control"
                  id="recipient-name"
                  v-model="newUser.password"
                />
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
  
  props: [],
  data() {
    return {
      newUser:{name:'', email:'', password:'', identity:'', sector:''}
    };
  },
  methods: {
     changeVisibility() {
      this.$emit("visibility", "newUser");
    },
    newEntity() {
      this.$emit("newEntity", {entity:'user', data:this.newUser});
    },
  },
};
</script>
