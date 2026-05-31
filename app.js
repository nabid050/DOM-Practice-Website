const services = [
{
name:"জাতীয় জরুরি সেবা",
eng:"National Emergency",
number:"999",
category:"সার্বজনীন",
icon:"fa-phone"
},

{
name:"পুলিশ",
eng:"Police",
number:"999",
category:"পুলিশ",
icon:"fa-shield-halved"
},

{
name:"ফায়ার সার্ভিস",
eng:"Fire Service",
number:"999",
category:"ফায়ার",
icon:"fa-fire-extinguisher"
},

{
name:"অ্যাম্বুলেন্স",
eng:"Ambulance",
number:"1994-999999",
category:"স্বাস্থ্য",
icon:"fa-truck-medical"
},

{
name:"নারী ও শিশু সহায়তা",
eng:"Women & Child",
number:"109",
category:"সামাজিক",
icon:"fa-person-dress"
},

{
name:"দুর্নীতি দমন",
eng:"Anti-Corruption",
number:"106",
category:"সরকারি",
icon:"fa-building-shield"
},

{
name:"বিদ্যুৎ বিভ্রাট",
eng:"Electricity Outage",
number:"16216",
category:"বিদ্যুৎ",
icon:"fa-bolt"
},

{
name:"ব্র্যাক",
eng:"Brac",
number:"16445",
category:"এনজিও",
icon:"fa-handshake"
},

{
name:"বাংলাদেশ রেলওয়ে",
eng:"Bangladesh Railway",
number:"163",
category:"পরিবহন",
icon:"fa-train"
}
];

const container =
document.getElementById("cardContainer");

const historyList =
document.getElementById("historyList");

let favCount = 0;
let copyCount = 0;
let coins = 100;

function renderCards(){

container.innerHTML = "";

services.forEach(service=>{

const card = document.createElement("div");

card.className = "service-card";

card.innerHTML = `

<div class="flex justify-between">

<div class="icon-box">
<i class="fa-solid ${service.icon} text-red-400"></i>
</div>

<button class="fav-btn">
<i class="fa-regular fa-heart"></i>
</button>

</div>

<h2 class="font-bold mt-4 text-lg">
${service.name}
</h2>

<p class="text-gray-500 text-sm">
${service.eng}
</p>

<h1 class="text-3xl font-bold mt-3">
${service.number}
</h1>

<span class="badge mt-2">
${service.category}
</span>

<div class="grid grid-cols-2 gap-3 mt-5">

<button class="copy-btn">
<i class="fa-regular fa-copy"></i>
Copy
</button>

<button class="call-btn">
<i class="fa-solid fa-phone"></i>
Call
</button>

</div>
`;

container.appendChild(card);

const favBtn =
card.querySelector(".fav-btn");

favBtn.addEventListener("click",()=>{

favCount++;

document.getElementById(
"favCount"
).innerText = favCount;

favBtn.innerHTML =
'<i class="fa-solid fa-heart text-red-500"></i>';

});

const copyBtn =
card.querySelector(".copy-btn");

copyBtn.addEventListener("click",()=>{

navigator.clipboard.writeText(
service.number
);

copyCount++;

document.getElementById(
"copyCount"
).innerText = copyCount;

alert(
`${service.number} copied`
);

});

const callBtn =
card.querySelector(".call-btn");

callBtn.addEventListener("click",()=>{

if(coins < 20){
alert("Not enough coins");
return;
}

coins -= 20;

document.getElementById(
"coinCount"
).innerText = coins;

const now =
new Date().toLocaleTimeString();

const item =
document.createElement("div");

item.className = "history-item";

item.innerHTML = `
<div class="font-semibold">
${service.name}
</div>

<div class="text-sm text-gray-500">
${service.number}
</div>

<div class="text-xs text-right">
${now}
</div>
`;

historyList.prepend(item);

alert(
`Calling ${service.name}`
);

});

});

}

renderCards();

document
.getElementById("clearHistory")
.addEventListener("click",()=>{

historyList.innerHTML = "";

});