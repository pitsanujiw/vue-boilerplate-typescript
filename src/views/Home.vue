<template>
  <article class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Hello world" />
  </article>
</template>

<script lang="ts">
import HelloWorld from "@/components/HelloWorld.vue";
import { Component, Prop, Vue } from "vue-property-decorator";

@Component({
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {}
</script>
