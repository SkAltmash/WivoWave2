const mainwebsit = document.querySelector(".mainwebsit");
const loginPage = document.querySelector(".loginPage");
const login = document.getElementById("login");
const singup = document.getElementById("Singup");
const username = document.getElementById("username");
const usernameerror = document.getElementById("usernameerror");
const username1 = document.getElementById("username1");
const usernameerror1 = document.getElementById("usernameerror1");
const password = document.getElementById("password");
const passworderror =document.getElementById("passworderror");
const password1 = document.getElementById("password1");
const passworderror1 =document.getElementById("passworderror1");
const mobileerror =document.getElementById("mobileerror");
const mobile =document.getElementById("mobile");
const userid = document.getElementById("userid");
const otp = document.getElementById("otp");
const mobileverify = document.getElementById("mobileverify");
const otperror = document.getElementById("otperror");
const time =document.getElementById("time");
const cartitem = document.getElementById("cartitem");
const cart = document.getElementById("cart");
const mobileotp =document.getElementById("mobileotp");
const slide = document.querySelectorAll(".slide");
const hamburger = document.querySelectorAll(".hamburger");
const Products = document.getElementById("Products");
const catlogs=document.getElementById("catlogs");
const productimage=document.getElementById("product-image");
const price=document.getElementById("price");
const foot=document.getElementById("foot"); 
const remocart=document.getElementById("remocart");
const productrate = document.getElementById("productrate");
const body  = document.querySelector('body');
const closecart = document.querySelector(".close");
const listCart = document.querySelector(".listCart");
const plus = document.querySelector("plus");
const minus = document.querySelector("minus");
const moreproduct = document.querySelector(".moreproduct");
const moremenproduct = document.querySelector(".moremenproduct");
const morewomenproduct = document.querySelector(".morewomenproduct");
const likemens = document.querySelector(".likemen");
const likewomens = document.querySelector(".likewomen");


function gotocart()
{
  body.classList.toggle("showcart");
}
let index;
let carts=[];
var count =0;


function main(){
    
    let test=0;

    if(username.value.length <= 0)
    {
        username.style.border="1px solid red";
        usernameerror.innerHTML="Please enter first name and last name ";
    }
    else
    {
      test++;
      username.style.border="1px solid black";
        usernameerror.innerHTML="";
    }
    
    if(password.value.length <= 0)
    {
    password.style.border="1px solid red";
    passworderror.innerHTML ="please enter password";
    }
    else if(password.value.length <= 5)
    {
    password.style.border="1px solid red";
    passworderror.innerHTML ="Password must contain 6 characters";
    }
    else
    {
        test++;
        password.style.border="1px solid black";
        passworderror.innerHTML ="";
    }
    if(mobile.value.length <= 0)
    {
    mobile.style.border="1px solid red";
    mobileerror.innerHTML ="please enter mobile no";
    }
    else if(mobile.value.length <= 9)
    {
    mobile.style.border="1px solid red";
    mobileerror.innerHTML ="please enter valid mobile no";
    }
    else
    {
        test++;
        mobile.style.border="1px solid black";
        mobileerror.innerHTML ="";
    }
    if(test==3)
    {
    i=55;
    otppage();
    savedata();
    }
}


slide.forEach(
    (slide,index)=>{
        slide.style.left=`${index*100}%`
    }
)

function slideimage()
{
    slide.forEach(
        (slide)=>{
         slide.style.transform = `translateX(-${count*100}%)`;
        }
    )
}

function next()
{

    if(count==slide.length-1)
    {
    count=0;
    slide.style.transform = `translateX(+${count*100}%)`;
    }
    count++;
    slideimage();
}
setInterval(()=>{
    if(count==slide.length-1)
    {
    count=0;
    slide.style.transform = `translateX(-${count*100}%)`;
    }
    count++;
    slideimage();
},3000);
function prve()
{
   
    count--;
    slideimage();
}
let imgcontainMarginTop =true;
function hamburgercall()
{
    navbar=document.querySelector(".nav-bar");
    imgcontain=document.getElementById("imgcontain");
    if(imgcontainMarginTop ==true)
    {
    imgcontain.style.marginTop = "465px";
    Products.style.marginTop = "465px";
    moreproduct.style.marginTop = "465px";

    imgcontain.style.transition = "0.2s";
    Products.style.transition = "0.2s";
    moreproduct.style.transition = "0.2s";

    imgcontainMarginTop=false;
    }
    else
    {
    imgcontain.style.marginTop = "0px";
    Products.style.marginTop = "0px";
    moreproduct.style.marginTop = "0px";

    imgcontain.style.transition = "0.2s";
    imgcontain.style.transition = "0.2s";
    Products.style.transition = "0.2s";


    imgcontainMarginTop=true;
    }
    navbar.classList.toggle("active");

}
one=document.getElementById("one");
two=document.getElementById("two");
three=document.getElementById("three");
four=document.getElementById("four");
five=document.getElementById("five");
let url;
catlogproduct=document.querySelectorAll(".catlog-product");
let num1;
let worm;
let indexi;
let carturl;
let rate=0;
let productname;
let product_id;
let url2;
function c( num,num1,Rate,productn,pid)
{
    productname=productn;
    rate=Rate;
    indexi=num;
    index = num1;
    product_id=pid;
    price.innerHTML =` Add to cart ${Rate}`;
    productrate.innerHTML=`Rs ${Rate}`;
    imgcontain.style.display="none";
    Products.style.display="block";
    catlogs.style.display="none";
    moreproduct.style.display="none";

    if(num===1)
    {
    
    worm=1;
    url=`<img src="assict/tshirt/t${num1}.webp">`;
    url2=url;
    likemen();
    productimage.innerHTML = url;
    carturl=url;
    url=`<img src="assict/tshirt/t${num1}/t${num1}.1.jpg">`;
    one.innerHTML = url;
    url=`<img src="assict/tshirt/t${num1}/t${num1}.2.jpg">`;
    two.innerHTML = url;
    url=`<img src="assict/tshirt/t${num1}/t${num1}.3.jpg">`;
    three.innerHTML = url;
    url=`<img src="assict/tshirt/t${num1}/t${num1}.4.jpg">`;
    four.innerHTML = url;
    url=`<img src="assict/tshirt/t${num1}/t${num1}.5.jpg">`;
    five.innerHTML = url;

    }
    else if(num===2)
    {
        worm=2;
        likewomen();
        url=`<img src="assict/wweres/w${num1}.webp">`;
        productimage.innerHTML = url;
        url2=url;
        carturl=url;
        url=`<img src="assict/wweres/w${num1}/w${num1}.1.jpg">`;
        one.innerHTML = url;
        url=`<img src="assict/wweres/w${num1}/w${num1}.2.jpg">`;
        two.innerHTML = url;
        url=`<img src="assict/wweres/w${num1}/w${num1}.3.jpg">`;
        three.innerHTML = url;
        url=`<img src="assict/wweres/w${num1}/w${num1}.4.jpg">`;
        four.innerHTML = url;
        url=`<img src="assict/wweres/w${num1}/w${num1}.5.jpg">`;
        five.innerHTML = url;
    }
    scrollTo(0,window.screenY -50);
}

function backtohome()
{
    imgcontain.style.display="flex";
    Products.style.display="none";
    catlogs.style.display="block";
    catlogs.style.display="block";
 // window.location.reload(true)
}
const addCartToMemory=() =>{
  localStorage.setItem("carts",JSON.stringify(carts));
}


function addToCart()
{
    if(localStorage.getItem("carts"))
  {
    carts = JSON.parse(localStorage.getItem("carts"));
    addCartToHtmal();
  }
  let positionThisProductInCart = carts.findIndex((value) => value.product_id == product_id);
   console.log(rate)
   if(carts.length<=0)
   {
    
    carts=[{
      name:productname,
      product_id:product_id,
      rate : rate,
      quentety:1,
      imagescr:url2,
    }]

   }
   else if(positionThisProductInCart < 0)
   {
      carts.push({
        name:productname,
        product_id:product_id,
        rate : rate,
        quentety:1,
        imagescr:url2,

    })
   }
   else
   {
    carts[positionThisProductInCart].quentety =   carts[positionThisProductInCart].quentety + 1;
   }
   addCartToMemory();
   addCartToHtmal();

}
function addCartToHtmal()
{
  console.log("s");
  listCart.innerHTML="";

  if(carts.length >0)
  {
    carts.forEach(carts => 
      {
      let newcart = document.createElement("div");
      newcart.classList.add("item");
      newcart.innerHTML=`
      <div class="image">
                ${carts.imagescr}
            </div>
            <div class="nameinfo">
            ${carts.name}
            </div>
            <div class="totalprice">
            ${carts.rate}
            </div>
            <div class="quentity">
                <span class="minus"><i class="fa-solid fa-minus"></i></span>
                <span>${carts.quentety}</span>
                <span class="plus"><i class="fa-solid fa-plus"></i></span>

            </div>`;
     listCart.appendChild(newcart);
    });
  
  }
}
function removeitem()
{
  localStorage.removeItem("carts");
  addCartToMemory();
  addCartToHtmal();
}
listCart.addEventListener('click',(event)=>{
  let positiononClick = event.target;
  if(positiononClick.classList.contains('minus')||positiononClick.classList.contains('plus'))
  {
    //positiononClick.parentElement.parentElement.parentElement.remove();
   
  }
  else
  {
  console.log("one");
  }
});

function big(imgindex)
{ 
    if(worm==1)
    {
    url=`<img src="assict/tshirt/t${index}/t${index}.${imgindex}.jpg">`;
   
    }
    if(worm==2)
    url=`<img src="assict/wweres/w${index}/w${index}.${imgindex}.jpg">`;
    console.log(imgindex);
    console.log(url);
    productimage.innerHTML=url;
}

cart.addEventListener('click',()=>{
  body.classList.toggle("showcart");
});
closecart.addEventListener('click',()=>{
  body.classList.toggle("showcart");
});
function getmoremenproduct()
{
  imgcontain.style.display="none";
  catlogs.style.display="none";
  moreproduct.style.display="block";
  scrollTo(0,window.screenY -50);

}
let to = localStorage.getItem("amount")*100;
var options = {
    "key": "rzp_test_9XbJPu0vOzevBn", // Enter the Key ID generated from the Dashboard
    "amount": "100",
    "currency": "INR",
    "description": "cccc",
    "image": "https://s3.amazonaws.com/rzp-mobile/images/rzp.jpg",
    "prefill":
    {
      "email": "gaurav.kumar@example.com",
      "contact": +919823856261,
    },
    config: {
      display: {
        blocks: {
          utib: { //name for Axis block
            name: "Pay using Axis Bank",
            instruments: [
              {
                method: "card",
                issuers: ["UTIB"]
              },
              {
                method: "netbanking",
                banks: ["UTIB"]
              },
              {
              method: "upi"
              }
            ]
          },
          other: { //  name for other block
            name: "Other Payment modes",
            instruments: [
              {
                method: "card",
                issuers: ["ICIC"]
              },
              {
                method: 'netbanking',
              }
            ]
          }
        },
        hide: [
          {
  
          }
        ],
        sequence: ["block.utib", "block.other"],
        preferences: {
          show_default_blocks: false // Should Checkout show its default blocks?
        }
      }
    },
    "handler": function (response) {
      alert(response.razorpay_payment_id);
    },
    "modal": {
      "ondismiss": function () {
        if (confirm("Are you sure, you want to close the form?")) {
          txt = "You pressed OK!";
          console.log("Checkout form closed by the user");
        } else {
          txt = "You pressed Cancel!";
          console.log("Complete the Payment")
        }
      }
    }
  };
  var rzp1 = new Razorpay(options);
  document.getElementById('rzp-button1').onclick = function (e) {
    rzp1.open();
    e.preventDefault();
  }


  addCartToHtmal();



 
  function menproduct()
  {
    moremenproduct.style.height="100%";
    morewomenproduct.style.height="0px";

  }
  function womenproduct()
  {
    morewomenproduct.style.height="100%";
    moremenproduct.style.height="0px";

  }
  function likewomen()
  {
    likemens.style.height="0px";
    likewomens.style.height="100%";
    console.log("c");


  }
  function likemen()
  {
    likewomens.style.height="0px";
    likemens.style.height="100%";
    console.log("l");
  }