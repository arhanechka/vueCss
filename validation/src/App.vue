<template>
  <div id="app">
    <div class="container pt-5">
      <h3>{{msg}}</h3>
      <form class="pt-3">
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            class="form-control"
            v-model="email"
            :class="{'is-invalid': $v.email.$error}"
            @blur="$v.email.$touch()"
          >
        </div>
        <div class="invalid-feedback" v-if="!$v.email.required">Please enter email</div>
        <div class="valid-feedback" v-if="!$v.email.email">Email is correct</div>
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            class="form-control"
            v-model="password"
            :class="{'is-invalid': $v.password.$error}"
            @blur="$v.email.$touch()"
          >
          <div class="invalid-feedback" v-if="$v.password.$error">Please enter password</div>
        </div>
      </form>
    </div>
    <pre> {{$v.password}} </pre>
  </div>
</template>


<script>
const { required, minLength, email } = require("vuelidate/lib/validators");

export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      email: "",
      password: ""
    };
  },
  validations: {
    password: {
      required,
      minLength: minLength(6)
    },
    email: {
      required,
      email,
      isUnique: function() {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            const isValid = this.email != "aranvic@inet.ua";
            resolve(isValid);
          }, 1000);
        });
      }
    }
       
  }
};
</script>

