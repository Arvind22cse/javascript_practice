// let a="hi";
// var b=20;
// const c=30
// alert(typeof(a))
// console.log(a);
// b=40;
// console.log(b);

// console.log(c);
// let c=0;
// const click=document.getElementById("click");
// function myFunction(){
// c++;
// click.textContent=`you have clicked ${c} times`;
// }

// let eren=document.getElementById("eren");
// window.addEventListener("load",start);
// function start(){
//    eren.addEventListener("mouseover",over);
//    eren.addEventListener("mouseout",out);
// }
// function over(e){
//     e.target.setAttribute("src","https://i.pinimg.com/736x/d9/46/45/d9464559d0fd38e8d5610a95d2209143.jpg");
//     document.getElementById("tatake").textContent="Ready";
// }
// function out(e){
//     e.target.setAttribute("src","https://qph.cf2.quoracdn.net/main-qimg-1b8d58cf300feb80b2fa8d5f36db5497-lq"); 
//     document.getElementById("tatake").textContent="tatake";
// }
// var a=new Array(6);
// var b=new Array();
// for(i=1;i<=6;i++){
//     a[i]=i;
// }
// content='<h1>Table</h1>';
// content+="<table border='1'><thead><th>Roll.no</th><th>student</th></thead><tbody>";
// var length=a.length;
// for(i=1;i<length;i++){
//     content+='<tr><td>'+a[i]+'</td><td>student'+i+'</td></tr>';
// }
// content+="</tbody></table>";
// document.getElementById("content").innerHTML=content;

// function moveone(){
//     document.getElementById("move").innerHTML="KEC";
// }
// function leaveone(){
//     document.getElementById("move").innerHTML="Arvind";
// }


// window.addEventListener("load",begin,false);
// function start(){
//     document.getElementById("h").addEventListener("mousemove",move,false);
//     document.getElementById("h").addEventListener("mouseout",out,false);

// }
// function move(e){
// e.target.innerHTML="Hello";
// }
// function out(e){
//     e.target.innerHTML="bye";
// }

// function begin(){
//     document.getElementById("name").addEventListener("focus",focusone,false);
//     document.getElementById("name").addEventListener("blur",blurone,false);
//     document.getElementById("form").addEventListener("submit",submitfun,false);
//     document.getElementById("form").addEventListener("reset",Resetfun,false);
// }
// function focusone(){
//     document.getElementById("res").innerHTML="Enter name";
// }
// function blurone(){
//     document.getElementById("res").innerHTML="";
// }
// function submitfun(){
//     window.alert("thank you");
// }
// function Resetfun(){
//     window.alert("Reset success")
// }


const para=document.createElement("p");
const element=document.createTextNode("BE");
para.appendChild(element);
const p1=document.getElementById("p1");
const div=document.getElementById("div");
div.appendChild(para);
document.getElementById("p2").remove();
// div.insertBefore(para,p1);
const p=document.createElement("p");
const elem=document.createTextNode("BE CSE");
p.appendChild(elem);

div.replaceChild(p,p1)

function sum1(a){
    let len=a.length;
    let s=0;
    for(i=0;i<len;i++){
        s=s+a[i]
    }
    return s;
}
function sum2(b){
    let len=a.length;
    let s=0;
    for(i=0;i<len;i++){
        s=s+b[i]
    }
    return s;
}
let a=[1,2,3,4];
let b=[5,6,7,8];
let res1=sum1(a);
let res2=sum2(b);
console.log(res1);
console.log(res2);


function fun1(e)
{ 
    e.target.style.width = "400px";
    document.getElementById("p1").innerHTML = "You hovered over item 1";
}
function fun2(e)
{ 
    e.target.style.width = "200px";
    document.getElementById("p1").innerHTML = "";
}