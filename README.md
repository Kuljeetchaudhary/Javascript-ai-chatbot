# Javascript-ai-chatbot
An AI-powered chatbot built with HTML, CSS, JavaScript, and the Groq API, featuring dynamic chat responses, image upload, and interactive UI.
# 🤖 AI Chatbot

An interactive **AI-powered chatbot** built from scratch using **HTML, CSS, and JavaScript**.

The project focuses on understanding how a frontend web application can connect with an AI service through a REST API, send user input, process the response, and dynamically update the chat interface.

---

## 🚀 Live Project

🔗 **GitHub Repository:**  
https://github.com/Kuljeetchaudhary/Javascript-ai-chatbot

---

## ✨ Features

- 💬 Interactive chatbot interface
- 🤖 AI-generated responses using the **Groq API**
- ⚡ API integration using JavaScript `fetch()`
- 🔄 Asynchronous operations with `async/await`
- ⏳ Thinking/typing indicator while the AI response is being generated
- 👤 Dynamic user and bot message creation
- 📎 Image/file upload functionality
- 🖼️ Image preview inside the chat
- 📖 FileReader API for reading uploaded files
- 🔢 Base64 encoding for image data
- 📜 Automatic smooth scrolling
- ⚠️ API error handling
- 🎨 Custom chatbot UI using HTML and CSS

---

## 🛠️ Technologies Used

### Frontend
- **HTML5**
- **CSS3**
- **JavaScript (ES6+)**

### API & Web Technologies
- **Groq API**
- **REST API**
- **Fetch API**
- **JSON**
- **FileReader API**
- **Base64 Encoding**

---

## 🤖 AI Integration

The chatbot currently uses the **Groq Chat Completions API** to generate AI responses.

### Current AI setup

- **AI Provider:** Groq
- **API:** Chat Completions API
- **Model:** `openai/gpt-oss-20b`

The application sends the user's message to the API and receives the AI-generated response, which is then displayed dynamically inside the chatbot interface.

---

## 🔄 Development Journey

I initially started this project using the **Google Gemini API**.

During development, I encountered model availability and API quota limitations. Instead of stopping the project, I explored another solution and migrated the AI functionality to **Groq's Chat Completions API**.

This experience helped me understand that real-world development is not always about getting everything right on the first attempt. Debugging API issues, reading documentation, understanding different request/response structures, and adapting to another API were valuable parts of the development process.

---

## 🧠 What I Learned

This project helped me gain practical experience with:

- DOM manipulation
- Event handling
- JavaScript functions
- Promises
- `async/await`
- REST API integration
- Fetch API
- JSON response handling
- API error handling
- File uploads
- FileReader API
- Base64 encoding
- Dynamic HTML generation
- Handling asynchronous API responses
- Working with AI APIs

---

## 📂 Project Structure

```text
Javascript-ai-chatbot/
│
├── index.html
├── style.css
├── script.js
└── README.md
