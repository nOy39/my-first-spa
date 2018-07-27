<template>
  <div>
    <v-container fluid>
      <v-layout row>
        <v-flex xs12>
          <v-carousel>
            <v-carousel-item
              v-for="ad in ads"
              :key="ad.id"
              :src="ad.imageSrc">
              <div class="car-link">
                <v-btn class="error" :to="'/ad/' + ad.id">Open</v-btn>
              </div>
              <div class="car-description">
                <h3 class="car-text font-weight-light">{{ad.description}}</h3>
              </div>
            </v-carousel-item>
          </v-carousel>
        </v-flex>
      </v-layout>
    </v-container>
    <v-container grid-list-lg>
      <v-layout row wrap>
        <v-flex
          xs12
          sm6
          md4
          v-for="ad in ads"
          :key="ad.id">
          <v-card>
            <v-card-media
              :src="ad.imageSrc"
              height="200px"
            ></v-card-media>

            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">{{ad.title}}</h3>
                <div>{{ad.description}}</div>
              </div>
            </v-card-title>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat :to="'/ad/' + ad.id">Open</v-btn>
              <v-btn raised class="primary">Buy</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        ads: [
          {
            title: 'First ad',
            description: 'fake description chip and dale eat nuts',
            promo: false,
            imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
            id: 1
          },
          {
            title: 'Second ad',
            description: 'Eagle eat his nogti',
            promo: true,
            imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
            id: 2
          },
          {
            title: 'Third ad',
            description: 'fake description',
            promo: true,
            imageSrc: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
            id: 3
          }
        ]
      }
    }
  }
</script>

<style scoped>
  .car-link{
    position: absolute;
    bottom: 50px;
    right: 0%;
    background: rgba(0,0,0,.5);
    transform: translate(0%,0);
    padding: 5px 10px;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }

  .car-description{
    font-family: "Quicksand";
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0,0,0,.5);
    width: 100%;
    height: auto;
    color: white;
    font-size: 42px;
    text-decoration: none;

  }

  .car-text{
    position: absolute;
    margin-left: 10px;
    margin-right: 10px;
    background: rgba(0,0,0,.5);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    padding: 5px 10px;
  }
</style>
