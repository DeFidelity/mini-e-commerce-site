console.log('this is working');

if (localStorage.getItem('cart')==null) {
  var cart = {};
}else {
  cart = JSON.parse(localStorage.getItem('cart'));
}
$(document).on('click','.atc',function() {
  console.log('add to cart clicked')
  var item_id = this.id.toString();
  console.log(item_id);

  if (cart[item_id] != undefined) {
    quantity = cart[item_id][0] + 1;
    cart[item_id][0] = quantity
  }else {
    quantity = 1;
    if(document.getElementById("abk"+item_id) != null){
      name = document.getElementById("abk"+item_id).innerHTML;
  }
    cart[item_id] = [quantity,name]
    console.log();
  }
  console.log(cart[item_id]);
  localStorage.setItem('cart',JSON.stringify(cart));
  if(document.getElementById("cart") != null){
    document.getElementById("cart").innerHTML = "Cart ("+ Object.keys(cart).length +")";
}
  console.log(Object.keys(cart).length);
})

window.onload = (function(){displayCart()});
// displayCart(cart)
function displayCart(cart){
  var cartString = "";
  cartString += "<h5>This is your cart</h5>";
  cartIndex = 1;

  for (var i in cart) {
    cartString += cartIndex;
    cartString += document.getElementById("abk"+i).innerHTML + "Qty: "+cart[i][0] + "</br>";
    cartIndex +=1;
  }
  cartString += "<a href={% url 'checkout' %}><button class='btn btn-outline-success'>checkout</button></a>"
  document.getElementById("cart").setAttribute('data-content',cartString);
  console.log(cartString);
  $('[data-toggle="popover"]').popover();
}
if (localStorage.getItem('cart')==null) {
  var cart = {};
}else{
  cart = JSON.parse(localStorage.getItem('cart'));
}
for (item in cart){
  let name = cart[item][1]
  let quantity =cart[item][0]
  let price = cart[item][2]

  itemString = `<td><img src="https://dummyimage.com/50x50/55595c/fff" /> </td>
  <td>${name}</td>
  <td>In stock</td>
  <td>${quantity}</td>
  <td class="text-right">${price}</td>
  <td class="text-right"><button class="btn btn-sm btn-danger"><i class="fa fa-trash"></i> </button> </td>`
  $('#item_list').append(itemString);
}
