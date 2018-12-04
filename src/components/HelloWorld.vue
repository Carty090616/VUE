<template>
  <div class="hello">
    <!-- 字符串里的html标签也会以html形式展现 -->
    <p v-html="msg"></p>
    <!-- 字符串里的html标签会议字符串的形式展现 -->
    {{ msg }}
    <p v-text="msg"></p>
    <!-- “Mustache”语法使用三目运算 -->
    {{ status ? 'true' : 'false' }}
    <!-- v-for 数组 使用index,并为符合条件的index附上class标签 -->
    <p v-for="(item, index) in list" :class="{odd:index % 2}">
      {{ index }} - name: {{ item.name }} - price: {{ item.price }}
    </p>
    <!-- v-for 对象 -->
    <p v-for="(key, value) in obj">
      {{ key }} - {{ value }}
    </p>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        msg: '<span><img>hello</span>',
        status: false,
        list: [
          {
            name: 'apple',
            price: 36
          },
          {
            name: 'banana',
            price: 56
          }
        ],
        obj: {
          name: 'apple',
          price: 34,
          color: 'red',
          weight: 14
        }
      }
    }
  }
</script>

<style scoped>
</style>