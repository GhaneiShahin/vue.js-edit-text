var myApp = new Vue({
  el: "#app",
  data: {
    counter: 0
  },
  methods: {
    incriment: function () {
      this.counter++;
    }
  }
});
