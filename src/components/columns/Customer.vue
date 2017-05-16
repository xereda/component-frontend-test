<template>
  <div class="media">
    <div class="media-left">
      <figure class="image is-32x32">
        <img :src="avatar">
      </figure>
    </div>
    <div class="media-content">
      {{ name }}<br />
      {{ email }}
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'avatar',
    'name',
    'email'
  ]
}
</script>

<style lang="css">
</style>
