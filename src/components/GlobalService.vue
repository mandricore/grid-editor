<template>
  <section id="global-service-examples">
    <div class="examples">
      <div class="parent">
        <label>Move stuff between these two containers. Note how the stuff gets inserted near the mouse pointer? Great stuff.</label>
         <div class="panel-container-vertical">

            <div class="container">
              <div class="panel-top">
                  <div v-for="(text, index) in colOne" ><span class="close" @click="removeItem('colOne', index)">X</span>{{text}} [click me]</div>
              </div>
              
              <div class="splitter-horizontal"></div>
              
              <div class="panel-bottom">
                  <div v-for="(text, index) in colTwo"><span class="close" @click="removeItem('colTwo', index)">X</span><span class="handle">+</span><span>{{text}}</span></div>
              </div>
            </div>
        </div>
        <!--div class="  ">
          <div class="container panel-top" v-dragula="colOne" drake="first">
            <div v-for="text in colOne" @click="onClick">{{text}} [click me]</div>
          </div>

          <div class="splitter-horizontal"></div>

          <div class="container" v-dragula="colTwo" drake="first">
              <div v-for="text in colTwo">
              <span class="handle">+</span>
              <span>{{text}}</span>
            </div>
          </div>

        </div-->
        <h4>Result</h5>
        <p>
          <h5>colOne</h5>
          <div v-for="text in colOne">{{text}}</div>  
        </p>

        <p>
          <h5>colTwo</h5>
          <div v-for="text in colTwo">{{text}}</div>
        </p>
      </div>
    </div>

    <div class="examples" id="examples-2">
      <div class="parent">
        <label>Modify items in drake with transition</label>
        <div class="wrapper" v-for="container in categories">
          <div class="container" v-dragula="container" drake="second">
            <div v-for="number in container" transition="scale">{{number}}</div>
          </div>
        </div>
        <button @click="testModify">Modify Items</button>
      </div>
    </div>

    <div class="examples" id="examples-3">
      <div class="parent">
        <label>Copy between containers</label>
        <div class="wrapper">
          <div class="container" v-dragula="copyOne" drake="third">
            <div v-for="text in copyOne" track-by="$index">{{text}}</div>
          </div>
          <div class="container" v-dragula="copyTwo" drake="third">
            <div v-for="text in copyTwo" track-by="$index">{{text}}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style type="text/css">
  .close{
    float: right;
    font-weight: bold;
    margin-left: 15px;
  }

  .panel-container-vertical {
  display: flex;
  flex-direction: column;
  height: 500px;
  border: 1px solid silver;
  overflow: hidden;
}

.panel-top {
  flex: 0 0 auto;
  /* only manually resize */
  padding: 10px;
  height: auto;
  min-height: 90px;
  width: 100%;
  /*white-space: nowrap;*/
  background: #838383;
  color: white;
  y-overflow:auto;
}

.splitter-horizontal {
  flex: 0 0 auto;
  height: 18px;
  background: url(https://raw.githubusercontent.com/RickStrahl/jquery-resizable/master/assets/hsizegrip.png) center center no-repeat #535353;
  cursor: row-resize;
}

.panel-bottom {
  flex: 1 1 auto;
  /* resizable */
  padding: 10px;
  min-height: 200px;
  background: #eee;
  x-overflow:auto;

}

label {
  font-size: 1.2em;
  display: block;
  font-weight: bold;
  margin: 30px 0 10px;
}
</style>
<script>
var $ = require('jquery')
$ = $.extend(require('jquery-resizable'))
export default {
  name: 'globalService',

  data () {
    return {
      colOne: [
        'You can move these elements between these two containers',
        'Moving them anywhere else isn"t quite possible',
        'Moving them anywhere else isn"t quite possible11.',
        'There"s also the possibility of moving elements around in the same container, changing their position'
      ],
      colTwo: [
        'This is the default use case. You only need to specify the containers you want to use',
        'More interactive use cases lie ahead',
        'Another message'
      ],
      categories: [
        [1, 2, 3],
        [4, 5, 6]
      ],
      copyOne: [
        'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        'Aenean commodo ligula eget dolor. Aenean massa.'
      ],
      copyTwo: [
        'Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
        'Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.'
      ]
    }
  },
  mounted () {
    $('.panel-top').resizable({
      handleSelector: '.splitter-horizontal',
      resizeWidth: false
    })
  },
  created () {
    console.log('GLOBAL SERVICE: created')
    let service = this.$dragula.$service

    // IMPORTANT!! setup empty named drakes matching
    // directive drake configs in template
    // otherwise may (currently) result in conflict

    service.options('first', {
    })

    service.options('second', {
    })

    service.options('third', {
      copy: true
    })

    console.log('GLOBAL SERVICE: ready')
  },
  methods: {
    onClick () {
     // window.alert('click event')
    },
    testModify () {
      this.categories = [
        ['a', 'b', 'c'],
        ['d', 'e', 'f']
      ]
    },
    removeItem (ary, item) {
      // console.log(this.colOne[item])
      this[ary].splice(item, 1)
    }
  }
}
/*
$(document).ready(() => {
  $('.panel-top').resizable({
    handleSelector: '.splitter-horizontal',
    resizeWidth: true
  })
})  */
</script>