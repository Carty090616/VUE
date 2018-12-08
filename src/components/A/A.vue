<template>
    <div>
        {{ hello }}
        <!-- 自定义事件 -->
        <button @click="emitMyEvent">emit</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            hello: 'i am hello'
        }
    },
    methods: {
        // 自定义事件
        emitMyEvent () {
            this.$emit('my-event', this.hello)
        }
    }
}
</script>

<style>

</style>