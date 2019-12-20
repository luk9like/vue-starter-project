<template>
  <div class="main">
    <h2>Überschrift</h2>
    <div class="container">
      <div class="row">
        <div class="col-3" v-for="item in 20" :key="item">
          <etikett :name="item"></etikett>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'

@Component
export default class SetupScreen extends Vue {}
</script>

<style lang="scss" scoped>
.main {
  background-color: #eee;
  padding: 3rem;
  text-align: center;
}
</style>
