import { useCallback, useEffect, useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [length, setlength] = useState(0);
  const [numberAllowed, setnumberAllowed] = useState(false);
  const [charAllowed, setcharAllowed] = useState(false);
  const [password, setpassword] = useState("");

  const passwordRef = useRef(password);

  const generatePassword = useCallback(()=>{
    let password = "";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numberAllowed) str += "0123456789";
    if(charAllowed) str += "!@#$%^&*()_+";

    for(let i=1; i<length; i++){
      const char = Math.floor(Math.random() * str.length);
      password += str.charAt(char);
    }
    setpassword(password);
  }, [length, numberAllowed, charAllowed])

  useEffect(()=>{
    generatePassword();
  },[length, numberAllowed, charAllowed])

  const copyToClipboard = ()=>{
    window.navigator.clipboard.writeText(password);
    passwordRef.current?.select();
  }

  return (
    <>
      <div className="bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold bg-center">Password Generator</h1>
        <div>
          <input
            type="text"
            value={password}
            readOnly
            className="w-full p-2 bg-gray-700 text-white rounded mt-2"
            placeholder="password"
          />
          <button className="w-full p-2 bg-blue-500 text-white rounded mt-2" onClick={copyToClipboard}>
            Copy Password
          </button>
          <div className="mt-4">
            <input
              type="range"
              min="1"
              max="20"
              value={length}
              onChange={(e) => setlength(e.target.value)}
              className="w-full mt-2"
            />
            <label htmlFor="length">Length: {length}</label>
          </div>
          <div className="flex items-center mt-2">
            <input
              type="checkbox"
              id="numbers"
              checked={numberAllowed}
              onChange={(e) => setnumberAllowed(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="numbers">Include Numbers</label>
          </div>
          <div className="flex items-center mt-2">
            <input
              type="checkbox"
              id="characters"
              checked={charAllowed}
              onChange={(e) => setcharAllowed(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="characters">Include Special Characters</label>
          </div>
          <button className="w-full p-2 bg-green-500 text-white rounded mt-4">
            Generate Password
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
