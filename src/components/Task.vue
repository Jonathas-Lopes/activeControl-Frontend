<template>
  <li v-bind:class="activeClassName">
    <input
      type="checkbox"
      readOnly
      v-bind:checked="!!this.active.checked"
      @click="toggleChecked"
    />
    <span class="text">{{ this.active.text }}</span>
    <button class="delete" @click="deleteThisActive">×</button>
  </li>
</template>
<script>
export default {
  props: ["active"],
  data() {
    return {};
  },
  computed: {
    activeClassName: function () {
      return this.active.checked ? "checked" : "";
    },
  },
  methods: {
    deleteThisActive() {
      Meteor.call("actives.remove", this.active._id);
    },
    toggleChecked() {
      // Set the checked property to the opposite of its current value
      Meteor.call("actives.setIsChecked", this.active._id, !this.active.isChecked);
    },
  },
};
</script>