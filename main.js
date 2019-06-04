var product = "Socks"

var app = new Vue({
  el : '#app',
  data : {
    product : 'Socks',
    description : "things that keep your feet warm",
    image : './assets/vmSocks-green-onWhite.jpg',
    inventory : 9,
    details : ["80% cotton", "20% polyester", "Gender neutral", "Ali Loves Socks"],
    variants : [
      {
        variantId : 2234,
        variantColor : "green"
      },
      {
        variantId : 2235,
        variantColor : "blue"
      }
    ],
    cart : 0,
  },
  methods : {
    addToCart() {
      this.cart +=1
    }
  }
});