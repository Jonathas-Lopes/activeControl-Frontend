<template>
  <div class="mt-4 container d-flex flex-row flex-wrap justify-content-between">
    <div
      style="width:32%; background-color:#5e5d5f; color:white"
      v-for="(notification, index) in notifications"
      v-bind:key="index"
      class="card mb-4 notification"
    >
      <div class="card-body text-center notification">
        <h5 class="card-title">{{ notification.model }}</h5>
        <p class="card-text">{{ notification.description }}.</p>
      </div>
      <div class="card-body text-center notification">
        <h5 class="card-title">Status</h5>
        <p v-if="notification.status == 'disp'" class="card-text">
          O equipamento está disponível
        </p>
        <p v-else-if="notification.status == 'indisp'" class="card-text">
          O equipamento está indisponível
        </p>
        <p v-else-if="notification.status == 'man'" class="card-text">
          O equipamento está em reparo
        </p>
        <p v-else class="card-text">
          O equipamento está em aferição
        </p>
      </div>
      
    </div>
  </div>
</template>

<script>
export default {
  props: ["notifications"],
  data() {
    return {};
  },
  methods: {},
};
</script>
