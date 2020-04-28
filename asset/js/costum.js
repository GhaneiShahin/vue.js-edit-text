var myApp = new Vue({
  el: "#app",
  data: {
    title: "Hello from Vue.js",
    link: "http://toplearn.com"
  },
  methods: {
    changeTitle: function (event) {
      this.title = event.target.value;
    },
    sayHello: function () {
      return "Hello World";
    },
    sayBye: function () {
      return this.title;
    }
  }
});
