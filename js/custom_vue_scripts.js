var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
})

/* Example 2*/
var app2 = new Vue({
    el: '#app-2',
    data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
    }
})

/* Example 3*/
var app3 = new Vue({
    el: '#app-3',
    data: {
        seen: true
    }
})

/* Example 4*/ 
var app4 = new Vue({
    el: '#app-4',
    data: {
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ]
    }
  })
//   In the console, enter app4.todos.push({ text: 'New item' }). You should see a new item appended to the list.

/* Example 5*/ 
var app5 = new Vue({
    el: '#app-5',
    data: {
      message: 'Hello Vue.js!'
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      }
    }
  })
/* Example 6*/ 

var app6 = new Vue({
    el: '#app-6',
    data: {
      message: 'Hello Vue!'
    }
  })

  // Define a new component called todo-item
  Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
  })
  
  var app7 = new Vue({
    el: '#app-7',
    data: {
      groceryList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' }
      ]
    }
  })
// The Vue Instance
  // Creating a Vue Instance
  var vm = new Vue({
    // options
  })

  // Data and Methods
  // Our data object
var data = { a: 1 }

// The object is added to a Vue instance
var vm = new Vue({
  el: '#app-8',
  data: data
})

// Getting the property on the instance
// returns the one from the original data
vm.a == data.a // => true

// Setting the property on the instance
// also affects the original data
vm.a = 2
data.a // => 2

// ... and vice-versa
data.a = 3
vm.a // => 3

// Add a new property
vm.b = 'hi' //Then changes to b will not trigger any view updates

// set some initial value
/**
data: {
  newTodoText: '',
  visitCount: 0,
  hideCompletedTodos: false,
  todos: [],
  error: null
}
 * */ 

//  Use of Object.freeze(), which prevents existing properties from being changed

var obj = {
  foo: 'bar'
}

Object.freeze(obj)

new Vue({
  el: '#app-9',
  data: obj
})


// In addition to data properties, Vue instances expose a number of useful instance properties and methods. These are prefixed with $ to differentiate them from user-defined properties
var data = { a: 1 }
var vm = new Vue({
  el: '#app-10',
  data: data
})

vm.$data === data // => true
vm.$el === document.getElementById('app-10') // => true
// alert(vm.$el === document.getElementById('app-10'))
// $watch is an instance method
vm.$watch('a', function (newValue, oldValue) {
  // This callback will be called when `vm.a` changes
  alert('triggered')
})

// Instance Lifecycle Hooks :-
  // The created hook can be used to run code after an instance is created
new Vue({
  el: '#app-11',
  data: {
    a: 1
  },
  created: function () {
    // `this` points to the vm instance
    console.log('a is: ' + this.a)
  }
})
// => "a is: 1"
  // There are also other hooks which will be called at different stages of the instance’s lifecycle, such as mounted, updated, and destroyed. All lifecycle hooks are called with their this context pointing to the Vue instance invoking it
// End The Vue Instance


// Template Syntax :-
  // Interpolations
  new Vue({
    el: '#app-12',
    data: {
      msg: 'Hi, This is Animesh From Bihar',
      rawHtml: 'Using mustaches: <span style="color: red">This should be red.</span>',
      dynamicId: 1,
      isButtonDisabled: 'disabled',
      number: 1,
      ok: true,
      message: 'Animesh Kumar',
      id:3,
    }
  })
  // Directives
  new Vue({
    el: '#app-13',
    data: {
      seen: true,
      url: 'https://www.google.com',
      attributename: 'href', //Instead of attributeName, attributename is here because in HTML part attributeName is converted to lowercase (attributename) by the browser
      eventname: 'click'
    },
    methods: {
        doSomething: function () {
          this.seen = false
      }
    }
  })

  // Shorthands
  new Vue({
    el: '#app-14',
    data: {
      seen: true,
      url: 'https://www.google.com',
      key: 'href',
      event: 'click'
    },
    methods: {
        doSomething: function () {
          console.log(this.seen)
      }
    }
  })

  // Computed Properties and Watchers
    // Computed Properties
  var vm = new Vue({
    el: '#app-15',
    data: {
      message: 'Hello'
    },
    computed: {
      // a computed getter
      reversedMessage: function () {
        // `this` points to the vm instance
        return this.message.split('').reverse().join('')
      }
    }
  })

console.log(vm.reversedMessage) // => 'olleH'
vm.message = 'Goodbye'
console.log(vm.reversedMessage) // => 'eybdooG'

// End Computed Properties 

// Computed Caching vs Methods (See inedx.html file)

// Computed vs Watched Property
/**
var vm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar',
    fullName: 'Foo Bar'
  },
  watch: {
    firstName: function (val) {
      this.fullName = val + ' ' + this.lastName
    },
    lastName: function (val) {
      this.fullName = this.firstName + ' ' + val
    }
  }
})
**/
// The above code is imperative and repetitive. Compare it with a computed property version:
/**
var vm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar'
  },
  computed: {
    fullName: function () {
      return this.firstName + ' ' + this.lastName
    }
  }
})
*/

// Computed Setter

var vm = new Vue({
  el: '#demo',
  data: {
    firstName: 'Foo',
    lastName: 'Bar'
  },
  computed: {
    fullName: {
      // getter
      get: function () {
        return this.firstName + ' ' + this.lastName
      },
      // setter
      set: function (newValue) {
        var names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[names.length - 1]
      }
    }
  }
})


// Watchers
var watchExampleVM = new Vue({
  el: '#watch-example',
  data: {
    question: '',
    answer: 'I cannot give you an answer until you ask a question!'
  },
  watch: {
    // whenever question changes, this function will run
    question: function (newQuestion, oldQuestion) {
      this.answer = 'Waiting for you to stop typing...'
      this.debouncedGetAnswer()
    }
  },
  created: function () {
    // _.debounce is a function provided by lodash to limit how
    // often a particularly expensive operation can be run.
    // In this case, we want to limit how often we access
    // yesno.wtf/api, waiting until the user has completely
    // finished typing before making the ajax request. To learn
    // more about the _.debounce function (and its cousin
    // _.throttle), visit: https://lodash.com/docs#debounce
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
  },
  methods: {
    getAnswer: function () {
      if (this.question.indexOf('?') === -1) {
        this.answer = 'Questions usually contain a question mark. ;-)'
        return
      }
      this.answer = 'Thinking...'
      var vm = this
      axios.get('https://yesno.wtf/api')
        .then(function (response) {
          vm.answer = _.capitalize(response.data.answer)
        })
        .catch(function (error) {
          vm.answer = 'Error! Could not reach the API. ' + error
        })
    }
  }
})