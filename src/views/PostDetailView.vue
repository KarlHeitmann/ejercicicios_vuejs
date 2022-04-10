<template>
  <div class="post-detail">
    <h1>This is a post page</h1>
    <textarea v-autofocus/>
    <p>Display the content of post with ID of {{ $route.params.id }} here!</p>
    <div>
      <button @click="showPostId">Show Post ID</button>
    </div>
    <p><RouterLink to="/posts">&lt; Back </RouterLink></p>
  </div>
</template>

<script setup>
/*
  imports
*/
  import { vAutofocus } from '@/directives/vAutofocus'
  import { useRoute } from 'vue-router'

  const route = useRoute() // route equivalente a this.$route

  const showPostId = () => {
    console.log("showPostId")
    alert(`The ID of this post is: ${ route.params.id }`)
  }

</script>