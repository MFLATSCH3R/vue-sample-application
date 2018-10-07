<template>
  <v-app dark>
    <v-toolbar flat color="primary" class="">
      <v-toolbar-side-icon to="/home"></v-toolbar-side-icon>
      <v-toolbar-title>Vuejs Sample Application</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat to="/home">Home</v-btn>
        <v-btn flat to="/map">Karte</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

