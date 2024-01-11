import './App.css';
import { useState, useRef } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const passwordRef = useRef(null);

  const copyPassWordToClipboard = () => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
  };

  const passwordGenerator = () => {
    let generatedPass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (numberAllowed) str += '0123456789';
    if (charAllowed) str += '!@#$%^&*-_+=[]{}~`';

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      generatedPass += str.charAt(char);
    }

    setPassword(generatedPass);
  };

  return (
    <>
      <div className='PasswordMain'>
        <h1>Welcome to Password generator</h1>
        <br />
        <div className='inputs flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type='text'
            placeholder='Your Password'
            value={password}
            readOnly
            ref={passwordRef}
          />
          <button onClick={passwordGenerator}> Generate </button>
          <button id='copyButton' onClick={copyPassWordToClipboard}>
            Copy
          </button>
        </div>

        <div className='inputConditions flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              className='lengthInput'
              type='range'
              name='length'
              min='0'
              max='16'
              value={length}
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label className='text-orange-500'>Length {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              name='NumIncluded'
              onChange={() => {
                setNumberAllowed((prev) => !prev);
              }}
            />
            <label className='text-orange-500'>Include Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input
              type='checkbox'
              name='CharacterIncluded'
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
            />
            <label className='text-orange-500'>Include Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
