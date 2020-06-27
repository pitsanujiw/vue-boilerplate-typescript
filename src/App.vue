<template>
  <div id="app">
    <div id="nav">
      <router-link
        v-for="item of menuRoutes"
        :key="item.path"
        :to="{path: item.path}"
        v-text="item.label"
        :active="selectedPath.includes(item.path)"
        class="menu-item h-100"
        toggles
      ></router-link>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { Route } from 'vue-router';

const routers = [
  {
    path: '/',
    label: 'Index',
  },
  {
    path: '/about',
    label: 'About',
  },
];

@Component({})
export default class App extends Vue {
  public selectedPath: string = '';
  private menuRoutes = routers;

  @Watch('$route') private changeView({ path }: Route, from: Route) {
    this.selectedPath = path;
  }

  private mounted() {
    this.selectedPath = '/';
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  a {
    margin: 0.5rem;
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
