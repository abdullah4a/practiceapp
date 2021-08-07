<template>
  <div id="usercontainer">
    <div class="header">
      <h4>Admin</h4>
      <p>{{ fullNameAdmin | Capt }}</p>
    </div>
    <div class="content">
      <div class="field">
        <label for="id"> Admin ID </label><br />
        <input type="text" id="id" v-model="admin.aid" readonly />
      </div>
      <div class="field">
        <label for="firstname"> First Name</label><br />
        <input type="text" id="firstname" v-model="admin.afirstName" />
      </div>
      <div class="field">
        <label for="lastame"> Last Name</label><br />
        <input type="text" id="lastname" v-model="admin.alastname" />
      </div>
      <div class="field">
        <label for="age"> Admin Age </label><br />
        <input type="text" id="age" v-model="admin.aage" />
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
    <div class="message">
      <pre>{{ message }}</pre>
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
    };
  },
  methods: {
    cancelbtn() {
      this.selectedAdmin = undefined;
      this.message = "";
    },
    saveBtn() {
      this.message = JSON.stringify(this.admin, null, "\n");
    },
  },
  computed: {
    fullNameAdmin() {
      return `${this.admin.afirstName} ${this.admin.alastname}`;
    },
  },
};
</script>
