<template>
    <v-responsive>
        <div id="map"></div>
    </v-responsive>
</template>

<script>
/* eslint-disable */
import Map from 'ol/Map'
import View from 'ol/view'
import TileLayer from 'ol/layer/Tile'
import XYZ from 'ol/source/XYZ'
export default {
  data () {
    return {
    }
  },
  mounted () {
    this.initMap()
  },
  methods: {
    initMap: function () {
      new Map({
        target: 'map',
        layers: [
          new TileLayer({
            source: new XYZ({
              url: 'https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
          })
        ],
        view: new View({
          projection: 'EPSG:3857',
          center: [0, 0],
          zoom: 3
        })
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#map {
    width: 100%;
    height: 100%;
}
</style>