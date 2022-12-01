<template>
    <div class="maindiv">
        <v-row>
        <TopBar />
        <NavBar />
        <v-col cols="7">
            <h4>Vendor Information</h4>
            <VendorsTable />
        </v-col>
        <v-col cols="3">
            <br><br>
        <VendorsForm />
        </v-col>
        </v-row>
    </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import TopBar from '../components/TopBar.vue'
import NavBar from '../components/NavBar.vue'

export default {
  name: 'HomeView',
  components: {
    TopBar,
    NavBar
  }
}

</script>

<style scoped>
*{
    list-style-type: none;
    text-decoration: none;
    font-family: 'Jost';
}

h4 {
    margin-top: 40px;
    margin-left: 80px;
    margin-bottom: 0;
}

</style>
