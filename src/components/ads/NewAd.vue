<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3 font-weight-light">Create new ad.</h1>
        <v-form
          ref="form"
          v-model="valid"
          class="mb-3"
          validation>
          <v-text-field
            name="title"
            label="Ad title"
            type="text"
            v-model="title"
            required
            :rules="[v => !!v || 'Title is required']"
          >
          </v-text-field>
          <v-textarea
            name="description"
            label="Description"
            type="text"
            v-model="description"
            required
            :rules="[v => !!v || 'Title is required']"
          >
          </v-textarea>
        </v-form>
        <v-layout row class="mb-3">
          <v-flex xs12>
            <v-btn
              color="blue-grey"
              class="white--text"
              @click.native=""
            >Upload
              <v-icon right dark>cloud_upload</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <img src="https://cdn.vuetifyjs.com/images/carousel/sky.jpg" height="100">
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <v-switch
              label="Add to promo?"
              v-model="promo"
              color="primary"
            ></v-switch>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex xs12>
            <v-spacer></v-spacer>
            <v-btn
              class="success"
              @click="createAdd"
              :disabled="!valid"
            >Create ad
            </v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        title: '',
        description: '',
        promo: false,
        valid: false
      }
    },
    methods: {
      createAdd () {
        if (this.$refs.form.validate()) {
          // logic
          const ad = {
            title: this.title,
            description: this.description,
            promo: this.promo
          }
          console.log(ad)
        }
      }
    }
  }
</script>

<style scoped>

</style>
