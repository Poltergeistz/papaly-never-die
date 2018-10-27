<template>
  <v-app>
    <v-toolbar color="blue lighten-3" app :key="$route.fullPath">
      <v-toolbar-title class="headline text-uppercase">
        <span>Papaly</span>
        <span class="font-weight-light">NEVER DIE</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
      <ul>
      <span v-if="isLoggedIn">{{currentUser.email}}</span>
      <li v-if="!isLoggedIn"><router-link to="/">Board</router-link></li>
      <li v-if="isLoggedIn"><router-link to="/editboard">Edit Board</router-link></li>
      <li v-if="!isLoggedIn"><router-link to="/login">Login</router-link></li>
      <li v-if="!isLoggedIn"><router-link to="/signin">Sign In</router-link></li>
      <v-btn v-if="isLoggedIn" flat @click="logout()">Logout</v-btn>
      </ul>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>
<script>
import firebase from 'firebase'

export default {
  data(){
    return {
      isLoggedIn: false,
      currentUser: false
    }
  },
  created(){
    if(firebase.auth().currentUser){
      this.isLoggedIn = true
      this.currentUser = firebase.auth().currentUser.email
    }
  },
  methods: {
    logout: () => {
      firebase.auth().signOut().then( () => {
        this.$router.push('/login')
      })
    }
  }
}
</script>
