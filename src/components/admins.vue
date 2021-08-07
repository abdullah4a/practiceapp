<template>
  <div id="usercontainer">
    <div class="header">
      <h4>Admin</h4>
      <p>{{ fullNameAdmin | Capt }}</p>
    </div>
    <div class="content">
      <div class="field">
        <label for="id"> Admin ID </label><br />
        <input type="text" id="id" v-model="clonedAdmin.aid" readonly />
      </div>
      <div class="field">
        <label for="firstname"> First Name</label><br />
        <input type="text" id="firstname" v-model="clonedAdmin.afirstName" />
      </div>
      <div class="field">
        <label for="lastame"> Last Name</label><br />
        <input type="text" id="lastname" v-model="clonedAdmin.alastname" />
      </div>
      <div class="field">
        <label for="aage"> Admin Age </label><br />
        <input type="text" id="aage" v-model="clonedAdmin.aage" />
      </div>
      <div class="btndiv">
        <button class="btn" @click="cancelbtn">
          {{ btnCancel | SaveSentenceCase }}
        </button>
      </div>
      <div class="btndiv">
        <button class="btn" @click="saveBtn">
          {{ btnSave | SaveSentenceCase }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Admin",
  props: {
    admin: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      btnSave: "save",
      btnCancel: "cancel",
      message: "This is message",
      clonedAdmin: { ...this.admin },
    };
  },
  methods: {
    cancelbtn() {
      this.$emit("cancel");
    },
    saveBtn() {
      this.$emit("save", this.clonedAdmin);
    },
  },
  computed: {
    fullNameAdmin() {
      return this.clonedAdmin
        ? `${this.clonedAdmin.afirstName} ${this.clonedAdmin.alastname}`
        : "";
    },
  },
};
</script>
