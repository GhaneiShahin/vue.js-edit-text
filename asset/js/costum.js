var myApp = new Vue({
  el: "#app",
  data: {
    title: "Hello from Vue.js"
  },
  methods: {
    changeTitle: function (event) {
      this.title = event.target.value;
    }
  }
});
