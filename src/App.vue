<template>
  <v-app dark>
    <v-toolbar flat color="primary" class="">
      <v-toolbar-side-icon to="/"></v-toolbar-side-icon>
       <v-toolbar-items>
         <v-btn dark flat to="/">Vuetify Template</v-btn>
       </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

