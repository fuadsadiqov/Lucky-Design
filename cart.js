(function(){
    const cartBtn = document.querySelectorAll('.item__button');
    var sebet = document.getElementById("sebet__confirm");
    cartBtn.forEach(function(btn){
      btn.addEventListener('click', function(event){  
        // console.log(event.target);

        if(event.target.parentElement.classList.contains('item__button')){
            let fullPath =
            event.target.parentElement.previousElementSibling.src;
            let pos = fullPath.indexOf("img") + 38;
            let partPath = fullPath.slice(pos);

            const item = {};
            item.img = `public/Products${partPath}`;
            let name =  event.target.parentElement.parentElement.nextElementSibling.children[0].textContent;
            item.name = name;

            let price =  event.target.parentElement.parentElement.nextElementSibling.children[1].textContent;

            let finalPrice = price.slice(0).trim();

            item.price = finalPrice;
            // console.log(finalPrice);
            // console.log(name);

            // console.log(item);

            const cartItem = document.createElement("div");
            cartItem.classList.add("cart-item");
            

            cartItem.innerHTML =  `
            <div class="cart-item">
                    <tr>
                    <td><img src="${item.img}" alt=""></td>
                    <td><div class="cart__name"><strong>Məhsul adı: </strong> ${item.name}</div></td>
                    <td>
                            <div class="product__buy">
                            <strong>Say:</strong>
                            <button onclick="decrement(this)">-</button>
                            <input class="increment__input" id=demoInput type=number value="1" min=1 max=100>
                            <button onclick="increment(this)">+</button>
                        </div>
                    </td>
                    <td><div class="cart__price"><strong>Qiymət: </strong> ${item.price}
                    <button onclick="remove(this)" class="large__confirm__button" style="background-color: rgb(200, 35, 51); color: #FFFF; border: none;">X</button>
                    <button onclick="remove(this)" class="hidden__info small__confirm__button">Sil</button>
                    </div></td> 
                    </tr>
                </div> <hr>
        `  ;
        // select cart
        const cart = document.getElementById('cart');
        const total = document.querySelector('confirm');

        cart.insertBefore(cartItem, total);
        alert("Məhsul səbətə əlavə edildi.");
        sebet.style.display = "block";
      }
      });
    });
  })();
  // All item remove function
  function  removeFunction() {
    const element = document.getElementById("cart");
    element.remove();
  }
// End of All item remove function

  // Top Function  
var mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// End of Top Function
/* Favourite Icon */
$(document).ready(function(){
  $(".like").click(function(){
    $(this).toggleClass("heart");
  });
});
// Each element remove
function remove(el) {
  var element = el;
  element.parentElement.parentElement.parentElement.remove();
}
// Each element remove
// Mobile Nav Toggle
function navFunction(x) {
  x.classList.toggle("change");
}
// Mobile Nav Toggle
