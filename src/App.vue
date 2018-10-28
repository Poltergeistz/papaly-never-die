<template>
  <v-app>
    <v-toolbar color="blue lighten-3" app :key="$route.fullPath">
      <v-toolbar-title class="headline text-uppercase">
        <span>Papaly</span>
        <span class="font-weight-light">NEVER DIE</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <span v-if="isLoggedIn">{{currentUser.email}}</span>
        <!-- menu -->
        <v-menu :nudge-width="100"> 
            <!-- <v-btn slot="activator" icon>
        <v-icon>more_vert</v-icon>
            </v-btn> -->
            <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
          <v-list>
            <v-list-tile v-if="isLoggedIn">
              <router-link to="/editboard">Edit Board</router-link>
            </v-list-tile>
            <v-list-tile v-if="!isLoggedIn">
                <router-link to="/">Board</router-link>
            </v-list-tile>
            <v-list-tile v-if="!isLoggedIn">
              <router-link to="/login">Login</router-link>             
            </v-list-tile>
            <v-list-tile v-if="!isLoggedIn">
              <router-link to="/signin">Register</router-link>
            </v-list-tile>
          </v-list>
        </v-menu>
        <!-- menu end -->
      <v-btn v-if="isLoggedIn" flat @click="logout()">Logout</v-btn>
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
