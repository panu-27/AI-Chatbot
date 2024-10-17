import { useState } from 'react'
import React from 'react';
import axios from 'axios';

function App() {
  const [inputText, setInputText] = useState("");
  const [ansText, setAnsText] = useState("")

 const generateAns =  async ()=>{
  const loading = "loading...";
    setAnsText(loading);
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
      <textarea value={inputText} onChange={(e) => { setInputText(e.target.value) }}></textarea>
      <button onClick={generateAns}>Generate Ans</button>
      <textarea value={ansText} readOnly />
    </> 
  )
}

export default App
