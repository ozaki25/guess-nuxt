<template>
  <header>
    <TheNav />
    <p>Navigate through the application to see the magic</p>
    <p>The user will likely visit</p>
    <no-ssr>
      <ul>
        <li v-for="(c, index) in predictions" :key="index">{{ c }}</li>
      </ul>
    </no-ssr>
    <div>I used the statistics you already have to make this prediction.</div>
  </header>
</template>

<script>
import TheNav from "@/components/TheNav";
export default {
  components: { TheNav },
  computed: {
    predictions() {
      return this.$store.state.predictions;
    }
  }
};
</script>
