<template>
  <div class="main">
    <h2>Überschrift</h2>
    <div class="container">
      <div class="row">
        <div class="col-4 my-4">
          <div class="met-layout bg-white p-3">
            <img class="img-fluid my-4" src="https://via.placeholder.com/550x440" />
            <p>Description</p>
          </div>
        </div>
        <div class="col-4 my-4">
          <div class="met-layout bg-white p-3">
            <img class="img-fluid my-4" src="https://via.placeholder.com/550x440" />
            <p>Description</p>
          </div>
        </div>
        <div class="col-4 my-4">
          <div class="met-layout bg-white p-3">
            <img class="img-fluid my-4" src="https://via.placeholder.com/550x440" />
            <p>Description</p>
          </div>
        </div>
        <div class="col-4 my-4">
          <div class="met-layout bg-white p-3">
            <img class="img-fluid my-4" src="https://via.placeholder.com/550x440" />
            <p>Description</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class MainScreen extends Vue {
  @Prop(String) name!: string
}
</script>

<style lang="scss" scoped>
.main {
  background-color: #eee;
  padding: 3rem;
  text-align: center;
}

.met-layout {
  &:hover {
    cursor: pointer;
    border: 2px solid darkblue;
  }
}
</style>
