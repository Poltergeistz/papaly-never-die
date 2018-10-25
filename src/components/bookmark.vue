<template>
<div>
  <div class="container">
    <div class="form">
    <div class="form-group">
      <div class="form-group">
        <label>Bookmark link</label>
        <input class="form-control" type="text" v-model="link">
      </div>
    </div>
    <button class="btn btn-primary" @click="addBookmark">Submit</button>
  </div>
  <div class="col-sm-12">
    <div class="col-sm-4" v-for="(bookmark, index) in bookmarks" v-bind:key="index">
      <div class="alert alert-primary" role="alert">
        <button class="close" @click="removeBookmark(index)">&times;</button>
        <a v-bind:href="bookmark" class="card-title">{{bookmark}}</a>
        Modifier lien : <input type="text" v-model="editLink">
      </div>
    </div>
  </div>
  </div>
  </div>
</template>
<script>
    export default {
        data(){
          return {
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


 