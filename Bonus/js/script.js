var app = new Vue({

  el: '#root',

  data: {
    firstname: '',
    lastname: '',
    image: 'johndoe.png',
    imageBubble: 'bubble.png',
    hiddenDisplay: 'none',
    cheerDisplay: 'none',
    visibleDisplay: 'block',
  },

  methods: {
    cheerFirst: function() {
      this.visibleDisplay = 'none',
      this.hiddenDisplay = 'block'
    },
    cheerLast: function() {
      this.hiddenDisplay = 'none',
      this.cheerDisplay = 'block'
    },
    reset: function() {
      this.cheerDisplay = 'block',
      this.hiddenDisplay = 'none',
      this.visibleDisplay = 'block'
    },
  }

});




Vue.config.devtools = true;
