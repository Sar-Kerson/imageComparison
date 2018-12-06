<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-row>
      <el-col :span='12' class="img-container">
        <img :src='imgsList_1[curIndex]' class="img"/>
      </el-col>
      <el-col :span='12' class="img-container">
        <img :src='imgsList_2[curIndex]' class="img"/>
      </el-col>
    </el-row>
    <el-row>
      <el-button @click="onPrev">prev</el-button>
      <el-button @click="onNext">next</el-button>
    </el-row>
  </div>
</template>

<script>
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

export default {
  name: 'Home',
  data () {
    return {
      msg: 'Hi Boy',
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

    // setInterval(() => {
    //   this.curIndex++
    //   console.log('update...')
    // }, 3000)
  },
  methods: {
    async getFileList (index) {
      await window.getFileList(index)
    },
    onPrev () {
      this.curIndex = (this.curIndex - 1) % this.imgsList_1.length
    },
    onNext () {
      this.curIndex = (this.curIndex + 1) % this.imgsList_1.length
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.img-container {
  padding: 1rem;
}
.img {
  max-width: 100%;
  max-height: 30rem;
}
</style>
