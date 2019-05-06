<template>
  <div class="container">
    <TheHeader />
    <nuxt />
  </div>
</template>

<script>
import TheHeader from "@/components/TheHeader";
export default {
  components: { TheHeader }
};
</script>

<style>
html {
  font-family: Roboto;
}

a:-webkit-any-link {
  text-decoration: none !important;
  color: #999;
  transition: color 0.2s;
}

a:-webkit-any-link:hover {
  color: #000;
}
</style>