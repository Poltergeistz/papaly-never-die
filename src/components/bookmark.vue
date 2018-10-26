<template>
<div>
  <v-layout justify-center>
    <!-- Board -->
    <v-flex xs12 sm10 md10>
      <v-card>
    <!-- Categories -->
    <v-flex xs12 sm6 md4>
    <v-card>
      <v-card-text 
        class="headline blue lighten-5"
        primary-title>
        Category
        <!-- Modal add categories -->
    <v-dialog
        v-model="dialog"
        width="500"
      >
      <v-icon slot="activator">add</v-icon>
        <v-card>
          <v-card-title
            class="headline blue lighten-5"
            primary-title
          >
            New Category
          </v-card-title>

          <v-card-text>
          <v-text-field label="Category Name"></v-text-field>
          </v-card-text>
  
          <v-divider></v-divider>
  
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat @click="dialog = false">Cancel</v-btn>
            <v-btn
              color="success"
              flat
              @click="dialog = false"
            >
              Add
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <!-- Modal end -->
      </v-card-text>
      <v-container
      fluid
      grid-list-md
      ><v-text-field label="bookmark link"  v-model="link"></v-text-field>
      <v-btn @click="addBookmark">Link<v-icon right>fas fa-link</v-icon></v-btn>
      <!-- Links -->
      <v-card wrap sx6 md6 md4 v-for="(bookmark, index) in bookmarks" v-bind:key="index">
        <v-card color="blue lighten-4" sx6 md6 md4>
          <!-- Modal edit link -->
          <v-dialog
        v-model="dialog2"
        width="500"
      >
        <v-btn
          slot="activator"
          color="red lighten-2"
          dark
        >
          <v-icon>fas fa-pencil-alt</v-icon>
        </v-btn>
  
        <v-card>
          <v-card-title
            class="headline blue lighten-5"
            primary-title
          >
            Modify link
          </v-card-title>

          <v-card-text>
          <v-text-field label="link name">{{bookmark}}</v-text-field>
          <v-text-field label="link url"></v-text-field>
          <v-textarea
            name="input-7-4"
            label="Short resume"
            value=""
            no-resize
          ></v-textarea>
          <p class="font-italic caption">Max char 100</p>
          </v-card-text>
  
          <v-divider></v-divider>
  
          <v-card-actions>
              <v-btn color="deep-orange darken-3" @click="removeBookmark(index)" flat>Delete this link</v-btn>
            <v-spacer></v-spacer>
            <v-btn flat @click="dialog2 = false">Cancel</v-btn>
            <v-btn
              color="success"
              flat
              v-model="editLink"
              @click="dialog2 = false"
            >
              Accept
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <!-- Modal end -->
          <a v-bind:href="bookmark" class="card-title">{{bookmark}}</a>
        </v-card>
      </v-card>
      </v-container>
    </v-card>
    </v-flex>
    </v-card>
    </v-flex>
    </v-layout>
    
  </div>
</template>
<script>
    export default {
        data(){
          return {
             dialog:false,
             dialog2:false,
             bookmarks: []
            }
             },
        methods: {
        addBookmark() {
          this.bookmarks.push(this.link)
          },
        removeBookmark(index) {
          this.bookmarks.splice(index, 1)
          }
  },
  computed: {
    editLink: {
      get: function(){
        return this.link
      },
      set: function(value){
        this.link = value
        console.log(value)
      }
    }
  }
}
</script>
<style>

a{
  color:#42b983;
}
</style>


 