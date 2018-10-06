<template>
  <v-container>
    <h1>Fleet</h1>
    <v-container fluid grid-list-md>
      <v-data-iterator :items="items" :rows-per-page-items="rowsPerPageItems" :pagination.sync="pagination" content-tag="v-layout" row wrap>
        <v-flex slot="item" slot-scope="props" xs12 sm6 md4 lg3>
          <v-card>
            <v-card-title>
              <v-layout row>
                <v-flex xs11>
                  <h4>{{ props.item.airc_registration }}</h4>
                </v-flex>
                <v-flex xs1>
                  <v-list-tile-action>
                    <v-btn icon ripple to="/detail">
                      <v-icon color="grey lighten-1">more_horiz</v-icon>
                    </v-btn>
                  </v-list-tile-action>
                </v-flex>
              </v-layout>
            </v-card-title>
            <v-divider></v-divider>
            <v-list dense>
            <v-list-tile>
              <v-list-tile-content>Typ:</v-list-tile-content>
              <v-list-tile-content class="align-end">{{ props.item.airc_type_full }}</v-list-tile-content>
            </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>msn:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ props.item.airc_serial_number }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>MTOW:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ props.item.airc_mtow_kg }} kg</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Seats (F/Y):</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ props.item.airc_seats_first }} / {{ props.item.airc_seats_economy }}</v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-card>
        </v-flex>
      </v-data-iterator>
    </v-container>
  </v-container>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      rowsPerPageItems: [4, 8, 12, 16],
      pagination: {
        rowsPerPage: 12
      },
      items: []
    }
  },
  mounted () {
    axios.get('http://localhost:3000/api/aircraft', {
      crossDomain: true
    }).then(res => {
      this.items = res.data.data
    }).catch(err => {
      console.log(err)
    })
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
