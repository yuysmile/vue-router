<template>
	<p class="text">{{ aa }}</p>
</template>
<script>
export default {
  name: 'info',
  data () {
    return {
      aa: 'Vue前端开发'
    }
  }
}
</script>
<style scoped>
	.text{
		color: red;
		font-size: 30px;
		font-weight: bold;
		position: absolute;
		left: 10px;
		top: 10px;
	}
</style>