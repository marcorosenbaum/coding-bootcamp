<template>
  <LayoutHeader />
  <BookList />
  <!-- <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Welcome to Your Vue.js App" /> -->
</template>

<script>
import LayoutHeader from "./components/LayoutHeader";
import BookList from "@/components/BookList";

export default {
  name: "App",
  components: {
    LayoutHeader,
    BookList,
  },
};

// import HelloWorld from "./components/HelloWorld.vue";

// export default {
//   name: "App",
//   components: {
//     HelloWorld,
//   },
// };
</script>

<style>
@import url("@/assets/global.css");
/* @import url("./assets/base.css");
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
