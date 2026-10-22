/* Edit this SITE_CONFIG to update store details and products. */
const SITE_CONFIG={
 headline:"Elevate your experience.",subhead:"Discover premium glassware, smoking essentials, and carefully selected accessories at Triple Smoke Shop.",
 address:"",hours:"",phone:"",email:"hello@triplesmoke.shop",social:{Instagram:"",Facebook:"",TikTok:""},mapsUrl:"",
 ageNotice:{enabled:true,minAge:21,leaveUrl:"https://www.google.com",text:"You must be of legal age to view this website. Please confirm your age to continue browsing."},
 legal:"Products are intended for adults of legal age only.",
 collections:[{name:"Glass & Water Pipes"},{name:"Hand Pipes"},{name:"Hookahs"},{name:"Grinders"},{name:"Rolling Accessories"},{name:"Papers & Wraps"},{name:"Lighters & Torches"},{name:"Storage & Accessories"},{name:"Cleaning Supplies"},{name:"Other Accessories"}],
 products:[{name:"Featured glass piece",category:"Glass & Water Pipes",desc:"Replace with a real product.",image:"",price:"",verified:false},{name:"Featured hookah",category:"Hookahs",desc:"Replace with a real product.",image:"",price:"",verified:false},{name:"Featured accessory",category:"Accessories",desc:"Replace with a real product.",image:"",price:"",verified:false}]
};
const $=(s,r=document)=>r.querySelector(s),C=SITE_CONFIG,esc=t=>String(t).replace(/[&<>"']/g,m=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[m]));
function applyImage(el,src){if(!src)return;const i=new Image();i.onload=()=>{el.style.backgroundImage='url("'+src+'")';el.classList.add("has-img")};i.src=src}
document.querySelectorAll("[data-img]").forEach(el=>applyImage(el,el.dataset.img));
$("#yr").textContent=new Date().getFullYear();$("#legal").textContent=C.legal;
$("#collGrid").innerHTML=C.collections.map((c,i)=>'<a class="coll" href="#contact"><h3>'+esc(c.name)+'</h3><span>Explore</span></a>').join("");
$("#prodGrid").innerHTML=C.products.map(p=>'<article class="prod"><div class="ph" role="img" aria-label="'+esc(p.name)+'"></div><h3>'+esc(p.name)+(p.verified?"":'<span class="tag">Sample</span>')+'</h3><small>'+esc(p.category)+(p.price?" · "+esc(p.price):"")+'</small><p>'+esc(p.desc)+'</p><a href="#visit">Ask in store</a></article>').join("");
document.querySelectorAll(".prod .ph").forEach((el,i)=>applyImage(el,C.products[i].image));
const todo=t=>'<span class="todo">'+t+'</span>';
$("#storeInfo").innerHTML='<div><dt>Address</dt><dd>'+(C.address?esc(C.address):todo("Address coming soon"))+'</dd></div><div><dt>Hours</dt><dd>'+(C.hours?esc(C.hours):todo("Hours coming soon"))+'</dd></div><div><dt>Phone</dt><dd>'+(C.phone?esc(C.phone):todo("Phone coming soon"))+'</dd></div>';
const maps=C.mapsUrl||(C.address?"https://www.google.com/maps/search/?api=1&query="+encodeURIComponent("Triple Smoke Shop "+C.address):"");
$("#storeBtns").innerHTML=(maps?'<a class="btn btn-light" href="'+esc(maps)+'" target="_blank" rel="noopener">Get directions</a>':"")+(C.phone?'<a class="btn btn-ghost" href="tel:'+esc(C.phone.replace(/[^\d+]/g,""))+'">Call the store</a>':"");
const items=[];if(C.phone)items.push(["Phone",C.phone,"tel:"+C.phone.replace(/[^\d+]/g,"")]);if(C.email)items.push(["Email",C.email,"mailto:"+C.email]);Object.entries(C.social).forEach(([k,v])=>{if(v)items.push([k,"Follow us",v])});if(maps)items.push(["Directions","Open in Maps",maps]);
$("#contactList").innerHTML=items.map(([k,t,h])=>'<li><a href="'+esc(h)+'"'+(h.startsWith("http")?' target="_blank" rel="noopener"':"")+'><b>'+esc(k)+'</b>'+esc(t)+'</a></li>').join("")||"<li>Contact details coming soon.</li>";
const btn=$(".menu-btn"),nav=$("#nav");const setMenu=o=>{nav.classList.toggle("open",o);btn.setAttribute("aria-expanded",o);btn.setAttribute("aria-label",o?"Close menu":"Open menu")};btn.addEventListener("click",()=>setMenu(!nav.classList.contains("open")));nav.addEventListener("click",e=>{if(e.target.tagName==="A")setMenu(false)});document.addEventListener("keydown",e=>{if(e.key==="Escape")setMenu(false)});
const A=C.ageNotice,age=$("#age");let seen=false;try{seen=sessionStorage.getItem("ageOk")}catch(e){}if(A.enabled&&!seen){$("#ageText").textContent=A.text;$("#ageYes").textContent="I am "+A.minAge+" or older";$("#ageNo").href=A.leaveUrl;age.hidden=false;$("#ageYes").addEventListener("click",()=>{age.hidden=true;try{sessionStorage.setItem("ageOk",1)}catch(e){}})}
