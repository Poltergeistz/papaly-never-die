<template>
    <div>
        <!-- Modal add links -->
    <v-dialog
        v-model="dialog_add_link"
        width="500"
      >
      <v-btn small slot="activator" outline color="indigo">
      <v-icon small>link</v-icon> link</v-btn>
        <v-card>
          <v-card-title
            class="headline blue lighten-5"
            primary-title
          >
            Add Link
          </v-card-title>

          <v-card-text>
          <v-text-field label="Link url" v-model="link_url"></v-text-field>
          </v-card-text>
  
          <v-divider></v-divider>
  
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn flat @click="dialog_add_link = false">Cancel</v-btn>
            <v-btn
              color="success"
              flat
              @click="addBookmark()"
            >
              Add
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
      dialog_add_link: false,
      link_url: null,
      links: []
    }
  },
  methods: {
    addBookmark() {
    // Create new link
    db.collection('link').add({
      link_url: this.link_url,
    }).then((docRef) => {console.log(`Document written with ID: ${docRef.id}`)})
    this.links.push(this.link_url)
    this.dialog_add_link = false
    },
  }
}
</script>
