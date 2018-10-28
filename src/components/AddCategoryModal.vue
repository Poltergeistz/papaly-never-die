<template>
        <!-- Modal add categories -->
    <v-dialog
        v-model="dialog_add_categories"
        width="500"
      ><v-btn slot="activator" outline color="indigo">
      <v-icon>add</v-icon> Add a category</v-btn>
        <v-card>
          <v-card-title
            class="headline blue lighten-5"
            primary-title
          >
            New Category
          </v-card-title>

          <v-card-text>
          <v-text-field label="Category Name" v-model="category_name"></v-text-field>
          </v-card-text>
  
          <v-divider></v-divider>
  
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat @click="dialog_add_categories = false">Cancel</v-btn>
            <v-btn
              color="success"
              flat
              @click="addCategory()"
            >
              Add
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <!-- Modal end -->
</template>
<script>
import db from '../firebaseinit.js'
export default {
  data(){
    return{
      dialog_add_categories: false,
      categories: [],
      category_name: null
    }
  },
  methods: {
    addCategory(){
      // Create new category
      db.collection('category').add({
        category_name: this.category_name
      }).then((docRef) => {console.log(`Document written with ID: ${docRef.id}`)})
      this.categories.push(this.category_name)
      this.dialog_add_categories = false
    }
  }
}
</script>

