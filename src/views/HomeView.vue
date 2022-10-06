<script setup lang="ts">
import { inject } from "vue";

const color = inject("color");
</script>

<template>
  <ul>
    <li>
      <router-link to="/flex">dsa</router-link>
    </li>
    <li>
      <router-link to="/grid">dada</router-link>
    </li>
    <li>
      <router-link to="/grid">{{ color }}</router-link>
    </li>
  </ul>
</template>
