<template>
  <v-form>
  <!--
    <v-text-field
      v-model="name"
      :counter="10"
      :rules="nameRules"
      label="Name"
      required
    ></v-text-field> -->

    <v-text-field
      v-model="email"
      label="E-mail"
      required
    ></v-text-field>

    <v-text-field
      v-model="password"
      label="Password"
      required
    ></v-text-field>

<!--    <v-select
      v-model="select"
      :items="items"
      :rules="[v => !!v || 'Item is required']"
      label="Item"
      required
    ></v-select>

    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || 'You must agree to continue!']"
      label="Do you agree?"
      required
    ></v-checkbox>
-->
    <v-btn
      color="success"
      @click="submitUser({id, email, password})"
    >
      {{id ? 'Edit' : 'Submit'}}
    </v-btn>
<!--
    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      Reset Form
    </v-btn>

    <v-btn
      color="warning"
      @click="resetValidation"
    >
      Reset Validation
    </v-btn> -->
  </v-form>
</template>

<script>
  export default {

    computed:{
      id:{
        get(){
          return this.$store.state.user.id
        },
        set(value){
          this.$store.commit("user/storeId", value)
        }
      },

      email:{
        get(){
          return this.$store.state.user.email
        },
        set(value){
          this.$store.commit("user/storeEmail", value)
        }
      },

      password:{
        get(){
          return this.$store.state.user.password
        },
        set(value){
          this.$store.commit("user/storePassword", value)
        }
      }

    },

    methods:{
      async submitUser(user){
        if(user.id){
          await this.$axios.post("http://localhost:8000/users/" + user.id, user)
        }else{
          await this.$axios.post("http://localhost:8000/users/", user)
        }
        await this.resetForm({id:0, email:'', password:''})
        await this.$axios.commit("users/storeData", (await this.$axios.get('http://localhost:8000/users/')).data)
      },
      resetForm(user){
        this.$store.commit("user/storeId", user.id);
        this.$store.commit("user/storeEmail", user.email);
        this.$store.commit("user/storePassword", user.password);
      },
    },
   
  };
</script>

<style>

</style>