<template>
    <div>
    <v-content>
      <bookmark/>
    </v-content>
    </div>
</template>

<script>
import bookmark from '../components/bookmark'

export default {
  name: 'App',
  components: {
    bookmark
  },
  data () {
    return {
      //
    }
  }
}
</script>
