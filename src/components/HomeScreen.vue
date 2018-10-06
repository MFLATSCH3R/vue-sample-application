<template>
  <v-container>
    <h1>Items</h1>
    <v-container fluid grid-list-md>
      <v-data-iterator :items="items" :rows-per-page-items="rowsPerPageItems" :pagination.sync="pagination" content-tag="v-layout" row wrap>
        <v-flex slot="item" slot-scope="props" xs12 sm6 md4 lg3>
          <v-card>
            <v-card-title>
              <v-layout row>
                <v-flex xs11>
                  <h4>{{ props.item.name }}</h4>
                </v-flex>
                <v-flex xs1>
                  <v-list-tile-action>
                    <v-btn icon ripple to="/">
                      <v-icon color="grey lighten-1">info</v-icon>
                    </v-btn>
                  </v-list-tile-action>
                </v-flex>
              </v-layout>
            </v-card-title>
            <v-divider></v-divider>
            <v-list dense>
            <v-list-tile>
              <v-list-tile-content>Prop 1:</v-list-tile-content>
              <v-list-tile-content class="align-end">{{ props.item.prop1 }}</v-list-tile-content>
            </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Prop 2:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ props.item.prop2 }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>Prop 3:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ props.item.prop3 }}</v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-card>
        </v-flex>
      </v-data-iterator>
    </v-container>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      rowsPerPageItems: [4, 8, 12, 16],
      pagination: {
        rowsPerPage: 12
      },
      items: [
        {
          name: 'Item 1',
          prop1: 'Prop 1',
          prop2: 'Prop 2',
          prop3: 'Prop 3'
        },
        {
          name: 'Item 2',
          prop1: 'Prop 1',
          prop2: 'Prop 2',
          prop3: 'Prop 3'
        },
        {
          name: 'Item 3',
          prop1: 'Prop 1',
          prop2: 'Prop 2',
          prop3: 'Prop 3'
        },
        {
          name: 'Item 4',
          prop1: 'Prop 1',
          prop2: 'Prop 2',
          prop3: 'Prop 3'
        },
        {
          name: 'Item 5',
          prop1: 'Prop 1',
          prop2: 'Prop 2',
          prop3: 'Prop 3'
        },
        {
          name: 'Item 6',
          prop1: 'Prop 1',
          prop2: 'Prop 2',
          prop3: 'Prop 3'
        },
        {
          name: 'Item 7',
          prop1: 'Prop 1',
          prop2: 'Prop 2',
          prop3: 'Prop 3'
        }
      ]
    }
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
