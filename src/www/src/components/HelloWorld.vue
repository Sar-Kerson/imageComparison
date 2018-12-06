<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <div>
      <img :src='imgsList_1[curIndex]'/>
      <img :src='imgsList_2[curIndex]'/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      curIndex: 0,
      imgsList_1: [],
      imgsList_2: []
    }
  },
  async mounted () {
    this.imgsList_1 = await window.getFileList(1)
    this.imgsList_2 = await window.getFileList(2)
    if (this.imgsList_1.length !== this.imgsList_2.length) {
      console.log('error, length not match.')
    }
    setInterval(() => {
      this.curIndex++
      console.log('update...')
    }, 3000)
  },
  methods: {
    async getFileList (index) {
      await window.getFileList(index)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
