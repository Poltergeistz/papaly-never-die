<template>
<v-dialog
        v-model="dialog"
        width="500"
      >
        <v-btn
          slot="activator"
          color="red lighten-2"
          dark
        >
          Click Me
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
              <v-btn color="deep-orange darken-3" flat>Delete this link</v-btn>
            <v-spacer></v-spacer>
            <v-btn flat @click="dialog = false">Cancel</v-btn>
            <v-btn
              color="success"
              flat
              @click="dialog = false"
            >
              Accept
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
</template>

<script>
    export default{
        data(){
            return{
                dialog:false
            }
        }
    }
</script>