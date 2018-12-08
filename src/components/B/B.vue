<template>
    <div>
        <!-- v-bind，可以缩写成一个冒号 -->
        <a v-bind:href="link" :title="title">百度</a>
        <a :href="link" :title="title">百度2</a>

        <!-- v-if v-show -->
        <p v-if="isPartA">partA</p>
        <p v-show="!isPartA">partB</p>
        
        <!-- v-if v-else v-show -->
        <p v-if="isPartA">partA</p>
        <p v-else>no data</p>

        <!-- v-on 缩写 @ -->
        <button @click="toggle">toggle</button>

        <!-- 指令修改器 -->
        <input @keydown.enter="onKeyDown">

        <!-- 自定义事件 -->
        <A @my-event="myEventOnA"></A>
    </div>
</template>

<script>
import A from '@/components/A/A'
export default {
    components: {
        A
    },
    data() {
        return {
            title: 'title',
            link: 'http://www.baidu.com',
            isPartA: true
        }
    },
    methods: {
        toggle() {
            this.isPartA = !this.isPartA
        },
        onKeyDown() {
            console.log('on key dowm')
        },
        // 自定义事件
        myEventOnA(param) {
            console.log('myEventOnA ' + param)
        }
    }
}
</script>

<style scope>

</style>