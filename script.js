const chatbody = document.querySelector(".chatbot-body");
const messageinput = document.querySelector(".message-input");

const userMessage = document.querySelector("#send-message");

const fileinput = document.querySelector("#file-input");



//API KEYS gemini

const API_KEY="YOUR_GROQ_API_KEY"

// geminin url .........
// const API_URL =
//   "https://generativelanguage.googleapis.com/v1beta/interactions";


//groq url.........
const API_URL="https://api.groq.com/openai/v1/chat/completions "
const userdata={
    message:null,
    file:null
}

// create message element with dynamic classes  and return
const  createMessageElement =(content,...classes)=>{
   const div= document.createElement("div");
   div.classList.add("message",...classes);
   div.innerHTML=content;
   return div;
}

// API KEY RESOPNSE HANDLING 
const generateBotResponse = async (incomingMessagediv) => {

    const messageElement =
        incomingMessagediv.querySelector(".message-text");

    const requestOptions = {
        method: "POST",

        headers: {
            "Authorization": `Bearer ${API_KEY}`,
            "Content-Type": "application/json"
        },

        body: JSON.stringify({
            model: "openai/gpt-oss-20b",
            messages: [
                {
                    role: "user",
                    content: userdata.message
                }
            ]
        })
    };

    try {

        const response = await fetch(API_URL, requestOptions);

        const data = await response.json();

        if (!response.ok) {
            throw new Error(
                data.error?.message || "GROQ API REQUEST FAILED"
            );
        }

        const botResponse =
            data.choices?.[0]?.message?.content ||
            "No response received.";

        messageElement.innerText = botResponse;

    } catch (error) {

        console.log(error);

        messageElement.innerText = error.message;
        messageElement.style.color = "red";

    } finally {

        userdata.file = null;

        incomingMessagediv.classList.remove("thinking");

        chatbody.scrollTo({
            top: chatbody.scrollHeight,
            behavior: "smooth"
        });
    }
};



//outgoing user message
const handIsOutgoingMessage = (e) => {
    e.preventDefault();

    userdata.message=messageinput.value.trim();
messageinput.value="";
    // display user message
//   const messageContent = `<div class="message-text"></div> 
//   ${userdata.file.data ? `<img src="data:${userdata.file.mine_type}; base64, ${userdata.file.data}" class="attachment"/>`:""}`;
const messageContent = `
  <div class="message-text"></div>
  ${userdata.file?.data
    ? `<img src="data:${userdata.file.mime_type};base64,${userdata.file.data}" class="attachment"/>`
    : ""
  }
`;


 const outgoingMessagediv= createMessageElement(messageContent,"user-message");  
outgoingMessagediv.querySelector(".message-text").textContent= userdata.message;
 chatbody.appendChild(outgoingMessagediv);


 chatbody.scrollTo({top:chatbody.scrollHeight,behavior:"smooth"})


 //bot respone mesage look
setTimeout(()=>{
     const messageContent = `     <svg
            class="bot-avatar"
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="70"
            viewBox="0 0 100 100"
          >
            <defs>
              <!-- Main 3D gradient -->
              <linearGradient id="botHead" x1="15" y1="10" x2="85" y2="90">
                <stop offset="0%" stop-color="#8B5CF6" />
                <stop offset="45%" stop-color="#6366F1" />
                <stop offset="100%" stop-color="#312E81" />
              </linearGradient>

              <!-- Face gradient -->
              <linearGradient id="face" x1="20" y1="20" x2="80" y2="80">
                <stop offset="0%" stop-color="#F5F3FF" />
                <stop offset="100%" stop-color="#C7D2FE" />
              </linearGradient>

              <!-- Eye gradient -->
              <radialGradient id="eye">
                <stop offset="0%" stop-color="#FFFFFF" />
                <stop offset="45%" stop-color="#67E8F9" />
                <stop offset="100%" stop-color="#06B6D4" />
              </radialGradient>

              <!-- Shadow -->
              <filter id="shadow" x="-30%" y="-30%" width="160%" height="160%">
                <feDropShadow
                  dx="0"
                  dy="5"
                  stdDeviation="4"
                  flood-opacity="0.35"
                />
              </filter>
            </defs>

            <!-- Antenna -->
            <path
              d="M47 15V8"
              stroke="#6366F1"
              stroke-width="5"
              stroke-linecap="round"
            />

            <!-- Antenna light -->
            <circle cx="47" cy="6" r="5" fill="#22C55E" />

            <!-- Left ear -->
            <rect x="5" y="38" width="10" height="24" rx="5" fill="#4F46E5" />

            <!-- Right ear -->
            <rect x="79" y="38" width="10" height="24" rx="5" fill="#4F46E5" />

            <!-- Main head -->
            <rect
              x="12"
              y="18"
              width="70"
              height="68"
              rx="22"
              fill="url(#botHead)"
              filter="url(#shadow)"
            />

            <!-- 3D highlight -->
            <path
              d="M22 30C27 23 34 21 43 21H66"
              fill="none"
              stroke="#C4B5FD"
              stroke-width="4"
              stroke-linecap="round"
              opacity="0.65"
            />

            <!-- Face -->
            <rect
              x="20"
              y="33"
              width="54"
              height="40"
              rx="15"
              fill="url(#face)"
            />

            <!-- Left eye -->
            <circle cx="35" cy="49" r="7" fill="url(#eye)" />

            <!-- Right eye -->
            <circle cx="59" cy="49" r="7" fill="url(#eye)" />

            <!-- Eye highlights -->
            <circle cx="33" cy="47" r="2" fill="white" />
            <circle cx="57" cy="47" r="2" fill="white" />

            <!-- Smile -->
            <path
              d="M34 60C39 66 55 66 60 60"
              fill="none"
              stroke="#4F46E5"
              stroke-width="3.5"
              stroke-linecap="round"
            />

            <!-- Bottom 3D section -->
            <path
              d="M30 78H54C51 84 47 88 42 88C37 88 33 84 30 78Z"
              fill="#3730A3"
              opacity="0.9"
            />

            <!-- Ear lights -->
            <circle cx="10" cy="50" r="2.5" fill="#22D3EE" />
            <circle cx="84" cy="50" r="2.5" fill="#22D3EE" />
          </svg>
          <div class="message-text">
            <div class="thinking-indicator">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
            </div>
          </div>`;
 const incomingMessagediv= createMessageElement(messageContent,"bot-message",'thinking');  
 chatbody.appendChild(incomingMessagediv);
  chatbody.scrollTo({top:chatbody.scrollHeight,behavior:"smooth"})
generateBotResponse(incomingMessagediv);

},600);

};


//handle enter key press
messageinput.addEventListener("keydown", (e) => {
  const userMessage = e.target.value.trim();
  if (e.key === "Enter" && userMessage) {
    handIsOutgoingMessage(e);
  }
});

// handle file input
fileinput.addEventListener("change",()=>{
    const file=fileinput.files[0];
    if(!file) return;
    // console.log(file)

    const reader=new FileReader();
    reader.onload=(e)=>{
        const base64String =e.target.result.split(",")[1];
        // store file data in userdata
        userdata.file={
            data:base64String,
            mime_type:file.type
        };
        fileinput.value="";
    }
    reader.readAsDataURL(file);
});



// enojis
const picker = new EmojiMart.Picker({
     theme:"light",
     skinTonePosition:"none",
     previewPosition:"none",
     onEmojiSelect:(emoji)=>{
 const {selectionStart: start,selectionEnd:end}=messageinput;
 messageinput.setRangeText(emoji.native, start,end,"end");
 messageinput.focus();
     },
     onClickOutside:(e)=>{
        if(e.target.id==="emoji-picker"){
            document.body.classList.toggle("show-emoji-picker");
        }
        else{
              document.body.classList.remove("show-emoji-picker");
        }
     }
});

document.querySelector(".chatbot-form").appendChild(picker);


userMessage.addEventListener('click',(e)=>{
    handIsOutgoingMessage(e)
});
document.querySelector("#file-upload").addEventListener("click",()=>
    fileinput.click());
