<template>
  <section id="global-service-examples">
    <div class="examples">
      <div class="parent">
        <label>Global Service example</label>
        <div class="wrapper">
          <div class="container" v-dragula="colOne" drake="first">
            <div v-for="text in colOne" :key="text.id">{{text.title}}</div>
          </div>

          <div class="container" v-dragula="colTwo" drake="first">
            <div v-for="text in colTwo" :key="text.id">{{text.title}}</div>
          </div>

        </div>
        <h4>Result</h5>
        <p>
          <h5>colOne</h5>
          <div v-for="text in colOne">{{text.title}}</div>
        </p>

        <p>
          <h5>colTwo</h5>
          <div v-for="text in colTwo">{{text.title}}</div>
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

<script>
export default {
  name: 'globalService',

  data () {
    return {
      colOne: [
        {'id': 'a', 'title': '1 You can move these elements between these two containers'},
        {'id': 'b', 'title': '2 Moving them anywhere else isn"t quite possible'},
        {'id': 'c', 'title': '3 There"s also the possibility of moving elements around in the same container, changing their position'}
      ],
      colTwo: [
        {'id': 'd', 'title': '4 This is the default use case. You only need to specify the containers you want to use'},
        {'id': 'e', 'title': '5 More interactive use cases lie ahead'},
        {'id': 'f', 'title': '6 Another message'}
      ],
      col3: [
        '1 You can move these elements between these two containers',
        '2 Moving them anywhere else isn"t quite possible',
        '3 There"s also the possibility of moving elements around in the same container, changing their position'
      ],
      colTwo2: [
        '4 This is the default use case. You only need to specify the containers you want to use',
        '5 More interactive use cases lie ahead',
        '6 Another message'
      ],
      // categories: [
      //   [1, 2, 3],
      //   [4, 5, 6]
      // ],
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
  created () {
    console.log('GLOBAL SERVICE: created')
    // let service = this.$dragula.$service

    // IMPORTANT!! setup empty named drakes matching
    // directive drake configs in template
    // otherwise may (currently) result in conflict

    // service.options('first', {
    // })

    // service.options('second', {
    // })

    // service.options('third', {
    //   copy: true
    // })

    console.log('GLOBAL SERVICE: ready')
  },
  methods: {
    onClick () {
      window.alert('click event')
    },
    testModify () {
      this.categories = [
        ['a', 'b', 'c'],
        ['d', 'e', 'f']
      ]
    }
  }
}
</script>
