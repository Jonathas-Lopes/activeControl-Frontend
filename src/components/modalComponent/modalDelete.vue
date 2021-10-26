<template>
  <div class="modal text-center" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header text-center">
          <h5 class="modal-title">Atenção!!!</h5>
        </div>
        <div class="modal-body">
          <p>Tem certeza que deseja excluir {{ this.settings._id }}?</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-silicon-success"
            @click="deleteEntity(), changeVisibility()"
          >
            Sim
          </button>
          <button
            type="button"
            class="btn btn-secondary"
            @click="changeVisibility()"
          >
            Não
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["settings"],
  data() {
    return {};
  },
  methods: {
    changeVisibility(){
      this.$emit('visibility', 'delete')

    },
    deleteEntity(){
      this.$emit('entityToDelete', {id:this.settings._id, entity:this.settings.entity})

    }
  },
};
</script>
