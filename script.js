// VIEWERS
let viewers = 1200;
setInterval(() => {
  viewers += Math.floor(Math.random() * 20 - 10);
  if (viewers < 1000) viewers = 1000;
  document.getElementById("viewerCount").innerText =
    `👁 ${viewers.toLocaleString()} watching`;
}, 2000);

// TIMER
let seconds = 0;
setInterval(() => {
  seconds++;
  let m = String(Math.floor(seconds / 60)).padStart(2,'0');
  let s = String(seconds % 60).padStart(2,'0');
  document.getElementById("timer").innerText =
    `Streaming Now • ${m}:${s}`;
}, 1000);

// CHAT
const messages = [
  "🔥 Awesome stream!",
  "Hello from India 🇮🇳",
  "Nice bro!",
  "😂😂",
  "Keep going 💪"
];

function addMessage(msg){
  let box = document.getElementById("chatBox");
  let p = document.createElement("p");
  p.innerText = msg;
  box.appendChild(p);
  box.scrollTop = box.scrollHeight;
}

// AUTO CHAT
setInterval(()=>{
  let msg = messages[Math.floor(Math.random()*messages.length)];
  addMessage(msg);
},1500);

// USER CHAT
function sendMessage(){
  let input = document.getElementById("chatInput");
  if(input.value.trim() !== ""){
    addMessage("You: " + input.value);
    input.value = "";
  }
}