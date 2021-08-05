<template>
  <div>
    <h1>This is Admin Page</h1>
  </div>
</template>

<script>
admins = [{ id: 0, firstName: "abdullah", lastname: "Iqbal", age: 23 }];
export default {
  name: "admin",
  data() {
    return {};
  },
  methods: {
    fetchAdmins() {
      this.$emit("selectadmin", admins);
    },
  },
};
</script>
