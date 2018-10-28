<template>
    <div>
        <!-- Modal edit link -->
          <v-dialog
        v-model="dialog_edit_link"
        width="500"
      >
        <v-btn
          slot="activator"
          icon
        >
          <v-icon>edit</v-icon>
        </v-btn>
  
        <v-card>
          <v-card-title
            class="headline blue lighten-5"
            primary-title
          >
            Modify link
          </v-card-title>

          <v-card-text>
          <v-text-field label="Link name" v-model="link_name"></v-text-field>
          <v-text-field label="Link url" v-model="link_url"></v-text-field>
          <v-textarea
            name="input-7-4"
            label="Description"
            value=""
            no-resize
            v-model="link_desc"
          ></v-textarea>
          <small class="font-italic caption">Max char 100</small>
          </v-card-text>
  
          <v-divider></v-divider>
  
          <v-card-actions>
              <v-btn color="deep-orange darken-3" @click="deleteLink(index)" flat>Delete this link</v-btn>
            <v-spacer></v-spacer>
            <v-btn flat @click="dialog_edit_link = false">Cancel</v-btn>
            <v-btn
              color="success"
              flat
              @click="updateLink()"
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
    return {
      dialog_edit_link: false,
      link_name: null,
      link_url: null,
      link_desc: null,
      // bookmarks: []
    }
  },
  methods: {
  fetchData(index){
    // Fetch all categories
    db.collection('link').where('link_id', '==', index).get()
    .then(querySnapshot => {
    querySnapshot.forEach(doc => {
      this.link_name = doc.data().link_name
      this.link_url = doc.data().link_url
      this.link_desc = doc.data().link_desc
      })
      })
    },
  deleteLink(index) {
    // Confirm delete
    if(confirm('Are you sure ?')){
      db.collection('link').where('link_id','==',index).get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          doc.ref.delete()
        })
      })
    }
    /* this.bookmarks.splice(index, 1) */
    this.dialog_edit_link = false
          },
  /* editLink(event) {
    this.bookmarks = event.target.value
    this.$emit('linkChanged', this.link_name)
    this.dialog_edit_link = false
          }, */
  updateLink(index){
    // Fetch data
      db.collection('link').where('link_id', '==', index).get()
          .then(querySnapshot => {
            querySnapshot.forEach(doc => {
                // Then modify
                doc.ref.update({
                  link_name: this.link_name,
                  link_url: this.link_url,
                  link_desc: this.link_desc
                })
            })
          })
  },
}

}
</script>
