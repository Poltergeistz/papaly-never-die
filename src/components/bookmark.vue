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
      <v-toolbar v-for="category in categories" v-bind:key="category.id"
        class="headline blue lighten-5 elevation-0"
        primary-title>{{category.category_name}}
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
      <v-card v-for="link in links" v-bind:key="link.id" wrap sx6 md6 md4>
        <v-card color="blue lighten-4" sx6 md6 md4>
          <a :href="link.link_url" class="card-title"><EditLinkModal/>{{link.link_url}}</a>
        </v-card>
      </v-card>
      </v-container> 
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
             link_desc: null,
             links: [],
             categories: []
            }
            },
        watch: {
          
        },
        created() {
          // Fetch all categories
          db.collection('category').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
              console.log(doc.data().category_name)
              const data = {
                'id': doc.id,
                'category_name': doc.data().category_name
              }
              this.categories.push(data)
              
            })
          }).catch(err => console.log(err))
          
          // Fetch all links
          db.collection('link').get().then(querySnapshot => {
            querySnapshot.forEach(doc => {
              console.log(doc.data().link_url)
              const data = {
                'id': doc.id,
                'link_url': doc.data().link_url,
                'link_name': doc.data().link_name,
                'link_desc': doc.data().link_desc
              }
              this.links.push(data)
            })
          }).catch(err => console.log(err))
        }
}

</script>
<style>

a{
  color:#424eb9;
}
</style>


 