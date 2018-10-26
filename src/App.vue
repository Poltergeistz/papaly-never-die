<template>
  <v-app>
    <v-toolbar color="blue lighten-3" app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Papaly</span>
        <span class="font-weight-light">NEVER DIE</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <router-link to="/" class="link"><v-btn flat>Board</v-btn></router-link>
      <router-link to="/login" class="link"><v-btn flat>Login</v-btn></router-link>
      <router-link to="/signin" class="link"><v-btn flat>Sign In</v-btn></router-link>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

