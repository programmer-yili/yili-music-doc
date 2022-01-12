<template>
  <div class="flex-box">
    <div class="content">
      <iframe ref="iframe" width="100%" height="100%" :src="src"  scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: "Bili",
  props: {
    src: {
      type: String
    }
  },
  mounted() {
  }
}
</script>

<style scoped>
.flex-box {
  margin: 30px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.flex-box .content {
  width: 800px;
  height: 600px;
}

</style>
