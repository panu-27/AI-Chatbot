import { useState } from 'react'
import React from 'react';
import axios from 'axios';

function App() {
  const [inputText, setInputText] = useState("");
  const [ansText, setAnsText] = useState("")

 const generateAns =  async ()=>{
  const loading = "loading..."
    setAnsText(loading)
    const ans = await axios({
      method: 'post',
      url: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyDMGBGqSq7-hxIzI3eXM_J9Ud7Ao4RJtLo',
      data: {
        "contents": [{"parts": [{"text": inputText}]}]
      }
    });
    const generatedText = ans.data.candidates[0].content.parts[0].text;
    setAnsText(generatedText);
    console.log(ans);

  }
  return (
<>
  <div className="flex flex-col items-center bg-gray-100 min-h-screen">
    <div className="flex flex-col justify-center gap-5 m-0 bg-white rounded-lg shadow-lg p-6 w-full h-full max-w-md mx-auto">
      <h1 className="text-2xl text-yellow-500 font-bold text-center mb-4">JIJA AI</h1>
      <textarea
        className="p-4 bg-gray-200 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-400 w-full resize-none"
        rows={4}
        placeholder="Type your input here..."
        value={inputText}
        onChange={(e) => { setInputText(e.target.value) }}
      />
      <button
        className="rounded-md bg-blue-500 text-white font-semibold h-10 w-full transition duration-300 ease-in-out hover:bg-blue-600 active:bg-blue-700"
        onClick={generateAns}
      >
        Generate Ans
      </button>
      <textarea
        className="p-4 bg-gray-200 rounded-lg shadow mt-4 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full h-80 sm:h-96 resize-none"
        value={ansText}
        readOnly
        placeholder="Generated answer will appear here..."
      />
    </div>
  </div>
</>

  

  )
}

export default App
