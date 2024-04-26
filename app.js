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
let index;
var count =0;
cheekdata();
cheekdata1();

function loginpage(){
    login.style.display="block";
    singup.style.display="none";
    
}
function singuppage(){
    login.style.display="none";
    singup.style.display="block";

}
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
function main1(){
    let test1 =0;

    if(username1.value.length <= 0)
    {
        username1.style.border="1px solid red";
         usernameerror1.innerHTML="Please enter first name and last name ";
    }
    else
    {
       test1++;
       username1.style.border="1px solid black";
       usernameerror1.innerHTML="";
    }
    if(password1.value.length <= 0)
    {
    password1.style.border="1px solid red";
    passworderror1.innerText ="please enter password";
    }
    else if(password1.value.length <= 5)
    {
    password1.style.border="1px solid red";
    passworderror1.innerHTML ="Password must contain 6 characters";
    }
    else
    {
        test1++;
        password1.style.border="1px solid black";
        passworderror1.innerText ="";
    }
    if(test1==2)
    {
    webs(username1.value);
    savedata();
    cheekdata1();
    }
}
function webs(user)
{
    loginPage.style.display="none";
    mainwebsit.style.display="block";
    userid.innerText =`${user}`;
}
function logs()
{
    loginPage.style.display="block";
    mainwebsit.style.display="none";
    loginPage.style.display="flex";

}

  
function savedata()
{
    localStorage.setItem("data",username.value);
    localStorage.setItem("data1",username1.value);

}
function cheekdata()
{
if((localStorage.getItem("data").length)<1)
{
}
else
{
   webs(localStorage.getItem("data"));
}
}
function cheekdata1()
{
if((localStorage.getItem("data1").length)<1)
{
}
else
{
   webs(localStorage.getItem("data1"));
}
}
function deletedata()
{
    localStorage.clear();
   logs();
}
function votp()
{
    
    if(otp.value==7713)
    {
        cheekdata1();
        mobileverify.style.display="none";
        webs(username.value);
        singup.style.display="block";
        otp.style.border="1px solid black"
        otperror.innerText="";
        otp.value="";
    }
    else
    {
        otperror.innerText="pless enter valid otp";
        otp.style.border="1px solid red"
    }

}
function otppage()
{
    singup.style.display="none";
    mobileverify.style.display="block";
    mobileotp.innerText=`Enter OTP send to +91${mobile.value}`;
}
i=60;
let intervalId = setInterval(()=>{
    time.innerText="";
    time.innerText=`resend in ${i} s`;
    i--;
    if(i<=0)
    {
    time.innerText="resend";
    time.style.color="blue";
    }
},1000);
function resend(){
 if(i<=0)
 {
  i=60;
  time.style.color="black";
 }
}
let cartdisplay =false;
function displaycart(){
    if(cartdisplay==false)
    {
    cartitem.style.display="block";
    cartdisplay=true;
    Products.style.marginTop="100px";
    imgcontain.style.marginTop = "50px";
    cart.style.backgroundColor="#fff";
    cart.style.color="#000";
    imgcontain.style.transition = "0s";

    }
    else
    {
     cartitem.style.display="none";
     cartdisplay=false;
     Products.style.marginTop="485px";
     cart.style.backgroundColor="transparent";
     cart.style.color="#fff";
     imgcontain.style.marginTop = "485px";
     imgcontain.style.transition = "0s";
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
},5000);
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
    imgcontain.style.marginTop = "485px";
    Products.style.marginTop = "485px";
    imgcontain.style.transition = "0.2s";
    Products.style.transition = "0.2s";
    cartitem.style.marginTop = "485px";
    cartitem.style.transition = "0.2s";
    imgcontainMarginTop=false;
    }
    else
    {
    imgcontain.style.marginTop = "50px";
    Products.style.marginTop = "50px";
    imgcontain.style.transition = "0.2s";
    imgcontain.style.transition = "0.2s";
    cartitem.style.marginTop = "50px";
    cartitem.style.transition = "0.2s";
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
function c( num,num1,Rate)
{
    rate=Rate;
    console.log(rate);
    indexi=num;
    index = num1;

    imgcontain.style.display="none";
    Products.style.display="block";
    catlogs.style.display="none";
    if(num===1)
    {
    worm=1;
    url=`<img src="assict/tshirt/t${num1}.webp">`;
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
        url=`<img src="assict/wweres/w${num1}.webp">`;
        productimage.innerHTML = url;
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
    imgcontain.style.display="block";
    Products.style.display="none";
    catlogs.style.display="block";
    catlogs.style.display="block";
  window.location.reload(true)
}
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
const emptydiv=document.getElementById("emptydiv");
const cartitemdiv=document.getElementById("cartitemdiv");
let p;
let pincart;
let url2 =`<img src="empty.png">`
const total = document.getElementById("Rate");
function putcartdaat()
{ 
    cartitemdiv.innerHTML=`${localStorage.getItem("cartdata")}`;
    console.log(localStorage.getItem("cartdata".length));
   
}
putcartdaat();

function removecartdata()
{
    localStorage.removeItem("cartdata");
    putcartdaat();
    removetotal();
}
let gtotal=0;
function additem()
{
    if(localStorage.getItem("cartdata".length)=="")
    {
    emptydiv.innerHTML=carturl;
    emptydiv.classList.add("cartimage");
    const divi = document.createElement("div");
    emptydiv.appendChild(divi);
    localStorage.setItem("cartdata",cartitemdiv.innerHTML);
    divi.classList.add("dis");
    ik++;
    p=emptydiv;
    }
    else
    {
      const divv =document.createElement("div");
      cartitemdiv.appendChild(divv);
      divv.innerHTML=carturl;
      divv.classList.add("cartimage");
      divv.innerHTML+="500";
      localStorage.setItem("cartdata",cartitemdiv.innerHTML);
      if(localStorage.getItem("cartdata".length)=="")
      {
      localStorage.setItem("gt",rate);
      }
      console.log(localStorage.getItem("gt"));
    }
}
function removetotal()
{
    localStorage.removeItem("gt");
}