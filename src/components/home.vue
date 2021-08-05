<template>
  <div class="home">
    <div id="nav">
      <div class="header"><h3>List of Names</h3></div>
      <div class="links">
        <p>Users</p>
        <ul>
          <li v-for="per in Users" :key="per.id">
            <a
              @click="selectUser(per)"
              :class="{ 'is-active': selectedUser === per }"
            >
              {{ per.firstName }}
            </a>
          </li>
        </ul>
        <p>Admins</p>
        <ul>
          <li v-for="ad in Admins" :key="ad.aid">
            <a
              @click="selectAdmin(ad)"
              :class="{ 'is-active': selectedAdmin === ad }"
            >
              {{ ad.afirstName }}
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div id="usercontainer" v-if="selectedAdmin">
      <div class="header">
        <h4>Admin</h4>
        <p>{{ fullNameAdmin }}</p>
      </div>
      <div class="content">
        <div class="field">
          <label for="id"> Admin ID </label><br />
          <input type="text" id="id" v-model="selectedAdmin.aid" readonly />
        </div>
        <div class="field">
          <label for="firstname"> First Name</label><br />
          <input
            type="text"
            id="firstname"
            v-model="selectedAdmin.afirstName"
          />
        </div>
        <div class="field">
          <label for="lastame"> Last Name</label><br />
          <input type="text" id="lastname" v-model="selectedAdmin.alastname" />
        </div>
        <div class="field">
          <label for="age"> Admin Age </label><br />
          <input type="text" id="age" v-model="selectedAdmin.aage" />
        </div>
        <div class="btndiv">
          <button class="btn" @click="cancelbtn">Cancel</button>
        </div>
        <div class="btndiv">
          <button class="btn" @click="saveBtn">Save</button>
        </div>
      </div>
    </div>
    <div id="usercontainer" v-if="selectedUser">
      <div class="header">
        <h4>User</h4>
        <p>{{ fullName }}</p>
      </div>
      <div class="content">
        <div class="field">
          <label for="id"> User ID </label><br />
          <input type="text" id="id" v-model="selectedUser.id" readonly />
        </div>
        <div class="field">
          <label for="firstname"> First Name</label><br />
          <input type="text" id="firstname" v-model="selectedUser.firstName" />
        </div>
        <div class="field">
          <label for="lastame"> Last Name</label><br />
          <input type="text" id="lastname" v-model="selectedUser.lastname" />
        </div>
        <div class="field">
          <label for="age"> User Age </label><br />
          <input type="text" id="age" v-model="selectedUser.age" />
        </div>
        <div class="btndiv">
          <button class="btn" @click="cancelbtn">Cancel</button>
        </div>
        <div class="btndiv">
          <button class="btn" @click="saveBtn">Save</button>
        </div>
      </div>
    </div>
    <div class="message">
      <pre>{{ message }}</pre>
    </div>
  </div>
</template>

<script>
const User = [
  {
    id: 0,
    firstName: "Abdul manan",
    lastname: "Ali",
    age: 22,
  },
  {
    id: 1,
    firstName: "Ahmad",
    lastname: "Raza",
    age: 21,
  },
  {
    id: 2,
    firstName: "Ali",
    lastname: "Raza",
    age: 23,
  },
  {
    id: 3,
    firstName: "Raza",
    lastname: "Mowana",
    age: 24,
  },
  {
    id: 4,
    firstName: "Shabbar",
    lastname: "Raza",
    age: 25,
  },
  {
    id: 5,
    firstName: "Asad ",
    lastname: "Shafique",
    age: 26,
  },
];
const Admin = [
  {
    aid: 0,
    afirstName: "Abdul manan",
    alastname: "Ali",
    aage: 22,
  },
  {
    aid: 1,
    afirstName: "Abdullah",
    alastname: "Iqbal",
    aage: 23,
  },
  {
    aid: 3,
    afirstName: "Abdullah",
    alastname: "Shahid",
    aage: 24,
  },
];
export default {
  name: "Home",
  data() {
    return {
      Users: [],
      Admins: [],
      selectedUser: undefined,
      selectedAdmin: undefined,
      message: "This is message",
    };
  },
  methods: {
    cancelbtn() {
      this.selectedUser = undefined;
      this.selectedAdmin = undefined;
      this.message = "";
    },
    saveBtn() {
      if (this.selectedUser) {
        this.message = JSON.stringify(this.selectedUser, null, "\n");
      } else {
        this.message = JSON.stringify(this.selectedAdmin, null, "\n");
      }
    },
    async GetUsers() {
      return new Promise((resolve) => {
        setTimeout(() => resolve(User), 1500);
      });
    },
    async GetAdmin() {
      return new Promise((resolve) => {
        setTimeout(() => resolve(Admin), 1500);
      });
    },
    async LoadUsers() {
      this.Users = [];
      this.message = "Please wait... Users and Admins are being Loaded";
      this.Users = await this.GetUsers();
      this.Admins = await this.GetAdmin();
      this.message = "";
    },
    selectUser(persons) {
      this.selectedUser = persons;
    },
    selectAdmin(adm) {
      this.selectedAdmin = adm;
    },
  },
  created() {
    this.LoadUsers();
  },
  computed: {
    fullName() {
      return `${this.selectedUser.firstName} ${this.selectedUser.lastname}`;
    },
    fullNameAdmin() {
      return `${this.selectedAdmin.afirstName} ${this.selectedAdmin.alastname}`;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
  margin: 10px;
  padding: 10px;
  border-radius: 4px;
  cursor: -webkit-grab;
}
.header {
  width: auto;
  height: auto;
  margin: 10px;
  padding: 2px;
  border-radius: 4px;
  background-color: #42b984;
}
.home {
  width: 80%;
  height: auto;
  margin: auto;
}
.content {
  background-color: lightgray;
  margin: 10px;
  border-radius: 4px;
}
.content .field {
  padding: 2px;
  margin: auto;
  font-family: Georgia, serif;
}
label {
  float: left;
  margin: 20px;
}
input[type="text"],
select {
  font-size: 18px;
  width: 95%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}
.is-active {
  background-color: #42b980;
  color: aliceblue;
}
.links {
  padding: 10px;
}
.message {
  border-radius: 4px;
  margin: 10px;
  padding: 10px;
  text-align: left;
  font-size: 18px;
  background-color: rgb(29, 160, 204);
}
.btndiv {
  display: inline;
  margin: 10px;
}
.btn {
  padding: 20px 30px;
  border-radius: 4px;
  background-color: rgb(14, 95, 122);
  font-size: 18px;
}
.btn:hover {
  box-shadow: 6px 4px gray;
}
</style>
