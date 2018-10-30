<template>
    <div>
        <!-- Modal edit categories -->
    <v-dialog
        v-model="dialog_edit_category"
        width="500"
      >
      <v-btn small slot="activator" outline color="indigo">
      <v-icon small>edit</v-icon> Edit</v-btn>
        <v-card>
          <v-card-title
            class="headline blue lighten-5"
            primary-title
          >
            Edit Category
          </v-card-title>

          <v-card-text>
          <v-text-field label="Category Name" v-model="category_name"></v-text-field>
          </v-card-text>
  
          <v-divider></v-divider>
  
          <v-card-actions>
            <v-btn color="deep-orange darken-3" @click="removeCategory(index)" flat>Delete this category</v-btn>
            <v-spacer></v-spacer>
            <v-btn flat @click="dialog_edit_category = false">Cancel</v-btn>
            <v-btn
              color="success"
              flat
              @click="updateCategory()"
            >
              Accept
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
      <!-- Modal end -->
    </div>
</template>
<script>
import db from '../firebaseinit.js'
export default {
  data(){
    return{
      dialog_edit_category: false,
      categories: [],
      category_name: null
    }
  },
  created(){
    // Fetch all categories
    /* db.collection('category').where('id', '==', docRef.id).get()
    .then(querySnapshot => {
      querySnapshot.forEach(doc => {
      const data = {
        'id': doc.id,
        'category_name': doc.data().category_name
      }
      this.categories.push(data)
      })
    }) */
  },
  methods:{
    removeCategory(index){
      // Confirm delete
      if(confirm('Are you sure ?')){
      db.collection('category').where('category_id','==',index).get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          doc.ref.delete()
        })
      })
    }
    this.dialog_edit_category = false
      },
    updateCategory(index){
      // Fetch data
      db.collection('category').where('category_id', '==', index).get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                // Then modify
                doc.ref.update({
                  category_name: this.category_name
                })
            })
          })
    }
  }
}
</script>
