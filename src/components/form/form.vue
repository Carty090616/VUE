<template>
    <div>
        <!-- v-model 及其修改器 -->
        <input v-model.lazy="myValue" type="text">
        {{ myValue }}
        <input v-model="myBox" type="checkbox" value="apple01">
        <input v-model="myBox" type="checkbox" value="apple02">
        <input v-model="myBox" type="checkbox" value="apple03">
        {{ myBox }}
        <select v-model="selectValue">
            <option v-for="item in selectOperations" :value="item.value">{{ item.text }}</option>
        </select>
        {{ selectValue }}

        <!-- 计算属性 -->
        <input v-model="myValue" type="text">
        {{ myValueWithoutNum }}

        <!-- 事件监听 -->
        <input v-model="myValue00" type="text">

    </div>
</template>

<script>
export default {
    data() {
        return {
            myValue: '',
            myValue00: '',
            myBox: [],
            selectOperations: [
                {
                    text: 'text00',
                    value: 0
                },
                {
                    text: 'text01',
                    value: 1
                },
                {
                    text: 'text02',
                    value: 2
                }
            ],
            selectValue: null
        }
    },
    // 计算属性
    computed: {
        myValueWithoutNum () {
            // 当myValue的值不在变化时myValueWithoutNum的值也不再变化
            return this.myValue.replace(/\d/g, '')
        }
    },
    // 事件监听
    watch: {
        myValue00 (val1, oldVal) {
            console.log(val1, oldVal)
        }
    }
}
</script>

<style>

</style>