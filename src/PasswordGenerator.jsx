import React from 'react';
import { useState } from 'react';
import './App.css';

export const PasswordGenerator = () => {
  const [length, setLength] = useState(8);
  const [includeUpper, setIncludeUpper] = useState(true);
  const [includeLower, setIncludeLower] = useState(true);
  const [includeNumber, setIncludeNumber] = useState(true);
  const [includeSymbol, setIncludeSymbol] = useState(true);
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    let charset = '';
    if (includeUpper) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeLower) charset += 'abcdefghijklmnopqrstuvwxyz';
    if (includeNumber) charset += '0123456789';
    if (includeSymbol) charset += '!@#$%^&*()_+~`€';
    
    let generatedPassword = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randomIndex];
    }
    setPassword(generatedPassword);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert('Password copied to clipboard');
  };

  return (
    <div className="passwordGenerator">
      <h2>Strong Password Generator</h2>
      <div className="input-container">
        <label htmlFor="num">Password Length:</label>
        <input
          type="number"
          id="num"
          value={length}
          onChange={(e) => setLength(parseInt(e.target.value))}
          min="1"
        />
        <div className="checkbox-group">
          <input
            type="checkbox"
            id="upper"
            checked={includeUpper}
            onChange={(e) => setIncludeUpper(e.target.checked)}
          />
          <label htmlFor="upper">Include Uppercase</label>
        </div>
        <div className="checkbox-group">
          <input
            type="checkbox"
            id="lower"
            checked={includeLower}
            onChange={(e) => setIncludeLower(e.target.checked)}
          />
          <label htmlFor="lower">Include Lowercase</label>
        </div>
        <div className="checkbox-group">
          <input
            type="checkbox"
            id="number"
            checked={includeNumber}
            onChange={(e) => setIncludeNumber(e.target.checked)}
          />
          <label htmlFor="number">Include Numbers</label>
        </div>
        <div className="checkbox-group">
          <input
            type="checkbox"
            id="symbol"
            checked={includeSymbol}
            onChange={(e) => setIncludeSymbol(e.target.checked)}
          />
          <label htmlFor="symbol">Include Symbols</label>
        </div>
        <button className="generate-btn" onClick={generatePassword}>
          Generate Password
        </button>
        <div className="generated-password">
          <input type="text" readOnly value={password} />
          <button className="copy-btn" onClick={copyToClipboard}>
            Copy
          </button>
          
        </div>
        
        <p className='copyright'>
          Designed By <span>Sridhar Vijayan`</span>
        </p>
      </div>
    </div>
  );
};
