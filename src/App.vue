<template>
  <div id="app">
    <img id="logo" alt="Vue logo" src="./assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <User></User>
    <ButtonCounter v-bind:text="'Button Counter 1'"></ButtonCounter>
    <ButtonCounter v-bind:text="'Button Counter 2'"></ButtonCounter>
    <!-- <Blog ></Blog> -->
    <div id="blog-posts-events-demo">
      <div :style="{ fontSize: postFontSize + 'em' }">
        <Blog
        v-on:enlarge-text="postFontSize += $event"
        v-on:reset-text-size="postFontSize = 1"
        v-for="post in posts"
        v-bind:key="post.id"
        v-bind:title="post.title"></Blog>
      </div>
    </div>
    <CustomInput></CustomInput>
    <br>
    <AlertBoxSlot>
      Something bad happened (slot)
    </AlertBoxSlot>
    <BaseCheckBox v-model="lovingVue"></BaseCheckBox>
    <SpecificObjectType class="addBooks"></SpecificObjectType>
    <br>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import HelloWorld from './components/HelloWorld.vue';
import User from './components/User.vue';
import ButtonCounter from './components/basics/ButtonCounter.vue';
import Blog from './components/basics/Blog.vue';
import posts from './data/posts'
import CustomInput from './components/basics/CustomInput.vue';
import AlertBoxSlot from './components/basics/AlertBoxSlot.vue';
import BaseCheckBox from './components/custom-events/BaseCheckBox.vue';
import SpecificObjectType from './components/samples/SpecificObjectType.vue';

interface Post {
    id: Number,
    title: String
}

const print = (show: boolean, arg: any):void=>{
  if(show) console.log(arg)
}

@Component({
  components: {
    // HelloWorld,
    User,
    ButtonCounter,
    Blog,
    CustomInput,
    AlertBoxSlot,
    BaseCheckBox,
    SpecificObjectType
  },
  data: function(){
    return {
      posts: posts as Post[],
      postFontSize: 1 as Number,
      lovingVue: false as Boolean
    }
  },
  // setup(){
  //   console.log('0 Setup Composition Api')
  //   // alert('1 Setup Composition Api')
  // },
  beforeCreate(){
    // console.log('1 beforeCreate')
    print(true, '1 beforeCreate')
    // alert('0 beforeCreate')
  },
  created(){
    print(false, '1 created')
    // alert('0 beforeCreate')
  },
  beforeMount(){
    print(false, '1 beforeMount')
    // alert('0 beforeCreate')
  },
  mounted(){
    print(false, '1 mounted')
    // alert('0 beforeCreate')
  },  
  beforeUpdate(){
    print(false, '1 beforeUpdate')
    // alert('0 beforeCreate')
  },
  updated(){
    print(true, '1 updated')
    // alert('0 beforeCreate')
  },
  beforeDestroy(){
    print(false, '1 beforeDestroy')
    // alert('0 beforeCreate')
  },
  activated(){ // MIXINS?
    print(false, '1 activated')
    // alert('0 beforeCreate')
  },
  destroyed(){
    print(false, '1 destroyed')
    // alert('0 beforeCreate')
  },
})
export default class App extends Vue {
  posts: any;
  postFontSize: any;
  lovingVue: any;
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#logo {
  width: 40px;
  height: 40px;
}

</style>
