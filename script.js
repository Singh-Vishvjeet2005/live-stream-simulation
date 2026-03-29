// VIEWERS
let viewers = 1200;

setInterval(() => {
  viewers += Math.floor(Math.random() * 20 - 10);
  if (viewers < 1000) viewers = 1000;
  document.getElementById("viewerCount").innerText =
    `👁 ${viewers.toLocaleString()} watching`;
}, 2000);


// TIMER
let sec = 0;
setInterval(() => {
  sec++;
  let m = String(Math.floor(sec/60)).padStart(2,'0');
  let s = String(sec%60).padStart(2,'0');
  document.getElementById("timer").innerText =
    `🔴 Streaming Now • ${m}:${s}`;
}, 1000);


// EMOJI CHAT MESSAGES
const msgs = [
  "🔥 Awesome stream bro!",
  "Hello from India 🇮🇳❤️",
  "Nice content 😍",
  "😂😂 LOL",
  "Keep going 💪🔥",
  "First time watching 👀",
  "Amazing quality 🎥✨",
  "Bro OP 🔥🔥",
  "Legend 🔥👑",
  "जय श्री राधे 🙏❤️"
];

function addMsg(msg){
  let p = document.createElement("p");
  p.innerText = msg;
  document.getElementById("chatBox").appendChild(p);

  // auto scroll
  let box = document.getElementById("chatBox");
  box.scrollTop = box.scrollHeight;
}


// AUTO CHAT
setInterval(()=>{
  let m = msgs[Math.floor(Math.random()*msgs.length)];
  addMsg(m);
},1500);


// USER CHAT
function sendMessage(){
  let input = document.getElementById("chatInput");
  if(input.value.trim() !== ""){
    addMsg("🧑 You: " + input.value + " 😎");
    input.value = "";
  }
}