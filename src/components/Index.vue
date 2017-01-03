<template>
  <q-layout>
    <div slot="header" class="toolbar">
      <q-toolbar-title :padding="1">
        Quasar Framework v{{quasarVersion}}
      </q-toolbar-title>
    </div>

    <!--
      Replace following "div" with
      "<router-view class="layout-view">" component
      if using subRoutes
    -->
    
    <div class="container" style="width:100%">
			<div style="width:500px">
				 <div class="" @mouseleave="isHover=true">
            <i class="arrow arr-up" :class="{'hideArrow': isHover}" @click="upArrow"></i><br>
            <i class="arrow arr-left" :class="{'hideArrow': isHover}" @click="leftArrow"></i>
            <button class="plus-btn" @mouseenter="isHover=false">+</button>
            <i class="arrow arr-right" :class="{'hideArrow': isHover}" @click="rightArrow"></i><br>
            <i class="arrow arr-down" :class="{'hideArrow': isHover}" @click="downArrow"></i>						
          </div>
			</div>
			<div></div>
    </div>
      
    </div>
  </q-layout>

</template>
<style type="text/css">
  .container{
    display: grid;
    grid-template-columns: 40px 50px auto 50px 40px;
    grid-template-rows: 25% 100px auto;
  }

 .item-a{
    grid-column-start: 2;
    grid-column-end: five;
    grid-row-start: row1-start;
    grid-row-end: 3
  }

  .item-a{
    grid-column-start: 2;
    grid-column-end: five;
    grid-row-start: row1-start;
    grid-row-end: 3
  }
  .plus-btn{
    font-size: 50px;
    cursor: default;
  }

  .arrow{
    border:       5px dashed #666;
    border-width: 0 .2em .2em 0;    
    padding:      .30em;
    font-size:    30px;
    cursor:       pointer;
  }

  .hideArrow{visibility: hidden;}
  /*.showArrow{display: inline-block;}*/

  .arr-right {transform:rotate(-45deg);}
  .arr-left  {transform:rotate(135deg);}
  .arr-up    {transform:rotate(-135deg);margin-left: 46px;}
  .arr-down  {transform:rotate(45deg); margin-left: 46px;}

</style>
<script>
import Quasar from 'quasar'
import 'jquery.splitter'
export default {
  data () {
    return {
      quasarVersion: Quasar.version,
      isHover: true
    }
  },
  methods: {
    upArrow () {
      console.log('up')
    },

    downArrow () {
      console.log('down')
    },

    leftArrow () {
      console.log('left')
    },

    rightArrow () {
      console.log('right')
      $('.container').split({
        orientation: 'vertical',
        limit: 150,
        position: '80%'
      })
    }
  }
}
</script>

<style lang="styl">
.logo-container
  width 192px
  height 268px
  perspective 800px
  position absolute
  top 50%
  left 50%
  transform translateX(-50%) translateY(-50%)
.logo
  position absolute
  transform-style preserve-3d 
</style>
