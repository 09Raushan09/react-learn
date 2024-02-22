import { useEffect } from "react";
import { useRef } from "react";
import { useState, useCallback } from "react";
import { MdOutlineContentCopy } from "react-icons/md";

function App() {
  const [passwords, setPasswords] = useState("");
  const [numberallow, setNumberallow] = useState(false);
  const [specialchar, setSpecialchar] = useState(false);
  const [length, setLength] = useState(6);

  const passwordRef = useRef(null);

  const PasswordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberallow) str += "0123456789";
    if (specialchar) str += "!@#$%^&*()-_+={}[]~`|:<>?";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);

      pass += str.charAt(char);
    }
    setPasswords(pass);
  }, [length, numberallow, specialchar, setPasswords]);

  const Copypasswordtochip = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 20);
    window.navigator.clipboard.writeText(passwords);
  }, [passwords]);

  useEffect(() => {
    PasswordGenerator();
  }, [length, numberallow, specialchar, setPasswords]);

  return (
    <div className="w-full h-60 max-w-md mx-auto my-48 shadow-md rounded-lg px-4 py-2 text-orange-500 bg-gray-500 text-center">
      <h1 className="text-4xl text-center text-white py-2">
        Password Generator
      </h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4 py-2 px-2 flex-wrap">
        <input
          type="text"
          value={passwords}
          placeholder="password"
          readOnly
          className="ouline-none w-72 py-2 px-3 rounded-lg"
          ref={passwordRef}
        />
        <button
          className="outline-none bg-blue-500 text-white w-18 rounded-lg mx-1 px-4 py-1 shrink-0"
          onClick={Copypasswordtochip}
        >
          <span className="flex flex-nowrap text-center">
            <MdOutlineContentCopy className="text-2xl size-lg mx-1" />
            Copy
          </span>
        </button>
      </div>
      <div className="flex text-md gap-x-2 py-4 justify-evenly">
        <div className="flex items-center gap-x-2">
          <input
            type="range"
            min={6}
            max={20}
            value={length}
            className="cursor-pointer w-16"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label className="text-white">Length : {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberallow}
            id="numberInput"
            onChange={() => {
              setNumberallow((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput" className="text-white">Number</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={specialchar}
            id="specialchar"
            onChange={() => {
              setSpecialchar((prev) => !prev);
            }}
          />
          <label htmlFor="CharacterInput" className="text-white">Special Character</label>
        </div>
      </div>
    </div>
  );
}

export default App;
