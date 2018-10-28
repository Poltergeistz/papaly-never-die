<template>
<div>
  <v-layout justify-center>
    <!-- Board -->
    <v-flex xs12 sm10 md10>
      <AddCategoryModal/>
      <v-card>
    <!-- Categories -->
    <v-flex xs12 sm6 md4>
    <v-card>
      <v-toolbar
        class="headline blue lighten-5 elevation-0"
        primary-title>
        {{category_name}}
        <v-spacer></v-spacer>
        <!-- menu -->
        <v-menu :nudge-width="100"> 
            <v-btn slot="activator" icon>
        <v-icon>more_vert</v-icon>
            </v-btn>
  
          <v-list>
            <v-list-tile>
              <AddLinkModal/>
              <EditCategoryModal/>
            </v-list-tile>
          </v-list>
        </v-menu>
        <!-- menu end -->
      </v-toolbar>
      <v-container
      fluid
      grid-list-md
      >
      <!-- Links -->
      <v-card wrap sx6 md6 md4>
        <!-- v-for="(bookmark, index) in bookmarks" v-bind:key="index" -->
        <v-card color="blue lighten-4" sx6 md6 md4>
          <EditLinkModal/>
          <a class="card-title">{{link_url}}</a>
        </v-card>
      </v-card>
      </v-container>
    <!-- New categories -->  
    <v-card wrap sx6 md6 md4>
      <!-- v-for="(category, index) in categories" v-bind:key="index" -->
      <v-toolbar
        class="headline blue lighten-5 elevation-0"
        primary-title>{{category_name}}
        
        <v-spacer></v-spacer>
        <!-- menu -->
        <v-menu :nudge-width="100"> 
            <v-btn slot="activator" icon>
        <v-icon>more_vert</v-icon>
            </v-btn>
  
          <v-list>
            <v-list-tile>
              <AddLinkModal/>
              <EditCategoryModal/>
            </v-list-tile>
          </v-list>
        </v-menu>
        <!-- menu end -->
      </v-toolbar>
        <v-container
      fluid
      grid-list-md></v-container>
    </v-card>
    <!-- Category card end -->  
    </v-card>
    </v-flex>
    <!-- Board end -->
    </v-card>
    </v-flex>
    </v-layout>
    
  </div>
</template>
<script>
import AddCategoryModal from '../components/AddCategoryModal'
import EditCategoryModal from '../components/EditCategoryModal'
import AddLinkModal from '../components/AddLinkModal'
import EditLinkModal from '../components/EditLinkModal'
import db from '../firebaseinit.js'
    export default {
      components: {
        AddCategoryModal,
        AddLinkModal,
        EditCategoryModal,
        EditLinkModal
        },
        data(){
          return {
             category_name: null,
             link_name: null,
             link_url: null,
             link_desc: null
            }
            },
        watch: {
          
        },
        methods: {
          fetchCategories(){
          // Fetch all categories
          db.collection('category').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
              this.category_name = doc.data().category_name
            })
          })
          },
          fetchLinks(){
          // Fetch all links
          db.collection('link').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
              this.link_url = doc.data().link_url
            })
          })
        }
        }
}
</script>
<style>

a{
  color:#424eb9;
}
</style>


 