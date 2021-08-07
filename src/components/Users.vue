<template>
  <div id="usercontainer">
    <div class="header">
      <h4>User</h4>
      <p>{{ fullName | Capt }}</p>
    </div>
    <div class="content">
      <div class="field">
        <label for="id"> User ID </label><br />
        <input type="text" id="id" v-model="user.id" readonly />
      </div>
      <div class="field">
        <label for="firstname"> First Name</label><br />
        <input type="text" id="firstname" v-model="user.firstName" />
      </div>
      <div class="field">
        <label for="lastame"> Last Name</label><br />
        <input type="text" id="lastname" v-model="user.lastname" />
      </div>
      <div class="field">
        <label for="age"> User Age </label><br />
        <input type="text" id="age" v-model="user.age" />
      </div>
      <div class="field">
        <label for="age"> User Salary </label><br />
        <input type="text" id="age" v-model="user.Salary" /><br />${{
          user.Salary | Dollars
        }}
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
  name: "Users",
  data() {
    return {
      btnSave: "save",
      btnCancel: "cancel",
      message: "This is message",
    };
  },
  props: {
    user: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    cancelbtn() {
      this.selectedUser = undefined;
      this.message = "";
    },
    saveBtn() {
      this.message = JSON.stringify(this.user, null, "\n");
    },
    fullName() {
      return `${this.user.firstName} ${this.user.lastname}`;
    },
  },
  watch: {
    "user.lastname": {
      immediate: true,
      handler(newValue, oldValue) {
        console.log(`working NewValue = ${newValue} Old Value= ${oldValue}`);
      },
    },
  },
};
</script>
