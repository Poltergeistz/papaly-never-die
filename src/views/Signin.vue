<template>
    <v-container>
        <v-responsive>
            <h4>Sign In</h4>
            <v-form>
            <v-text-field label="email adress" v-model="email"></v-text-field>
            <v-text-field
              :append-icon="show3 ? 'visibility_off' : 'visibility'"
              :rules="[rules.required, rules.min]"
              :type="show3 ? 'text' : 'password'"
              name="input-10-2"
              label="Password"
              hint="At least 8 characters"
              value=""
              class="input-group--focused"
              @click:append="show3 = !show3"
              v-model="password"
            ></v-text-field>
  
            <!-- <v-text-field
              :append-icon="show4 ? 'visibility_off' : 'visibility'"
              :rules="[rules.required, rules.emailMatch]"
              :type="show4 ? 'text' : 'password'"
              name="input-10-2"
              label="Confirm password"
              hint="At least 8 characters"
              value=""
              error
              @click:append="show4 = !show4"
            ></v-text-field> -->
            <v-btn @click="register">
                Sign in
            </v-btn>
            </v-form>
        </v-responsive>
    </v-container>
</template>
<script>
import firebase from 'firebase'

export default {
    data(){
        return{
            email: '',
            password: '',
            show3: false,
            show4: false,
            rules: {
            required: value => !!value || 'Required.',
            min: v => v.length >= 8 || 'Min 8 characters',
            emailMatch: () => ('The email and password you entered don\'t match')
            }
        }
    },
    methods: {
        register: (e) => {
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
            .then(user => {
                alert(`Account created for ${user.email}`)
                this.$router.push('/')
            }, 
            error => {
                alert(error.message)
            }) 
            // console.log(register)
            e.preventDefault()
        }
    }
}
</script>
