<template>
  <nav>
    <nuxt-link to="/">HOME</nuxt-link>
    <nuxt-link to="/example">EXAMPLE</nuxt-link>
    <nuxt-link to="/about">ABOUT</nuxt-link>
  </nav>
</template>

<style scoped>
nav {
  text-transform: uppercase;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  text-decoration: none !important;
  font-size: 13px;
}

nav a {
  margin-right: 10px;
}
</style>
