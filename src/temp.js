import React, { useState } from 'react';
import './temp.css';
function TemperatureConverter() {
  const [inputTemp, setInputTemp] = useState('');
  const [inputUnit, setInputUnit] = useState('celsius');
  const [celsiusTemp, setCelsiusTemp] = useState('');
  const [fahrenheitTemp, setFahrenheitTemp] = useState('');
  const [kelvinTemp, setKelvinTemp] = useState('');

  const handleInputChange = (e) => {
    setInputTemp(e.target.value);
  };

  const handleUnitChange = (e) => {
    setInputUnit(e.target.value);
  };

  const convertTemperature = () => {
    const temp = parseFloat(inputTemp);
    if (inputUnit === 'celsius') {
      setCelsiusTemp(temp);
      setFahrenheitTemp((temp * 9/5) + 32);
      setKelvinTemp(temp + 273.15);
    } else if (inputUnit === 'fahrenheit') {
      setFahrenheitTemp(temp);
      setCelsiusTemp((temp - 32) * 5/9);
      setKelvinTemp((temp - 32) * 5/9 + 273.15);
    } else {
      setKelvinTemp(temp);
      setCelsiusTemp(temp - 273.15);
      setFahrenheitTemp((temp - 273.15) * 9/5 + 32);
    }
  };

  return (
    <div className='tmp'> 
      <h1>Temperature Converter</h1>
      <label>
        Input Temperature:
        <input type="number" value={inputTemp} onChange={handleInputChange} />
      </label>
      <label>
        <input type="radio" value="celsius" checked={inputUnit === 'celsius'} onChange={handleUnitChange} />
        Celsius
      </label>
      <label>
        <input type="radio" value="fahrenheit" checked={inputUnit === 'fahrenheit'} onChange={handleUnitChange} />
        Fahrenheit
      </label>
      <label>
        <input type="radio" value="kelvin" checked={inputUnit === 'kelvin'} onChange={handleUnitChange} />
        Kelvin
      </label>
      <button onClick={convertTemperature}>Convert</button>
      <p className='tmp1'>{celsiusTemp !== '' ? `Celsius: ${celsiusTemp.toFixed(2)}` : ''}</p>
      <p className='tmp1'>{fahrenheitTemp !== '' ? `Fahrenheit: ${fahrenheitTemp.toFixed(2)}` : ''}</p>
      <p className='tmp1'>{kelvinTemp !== '' ? `Kelvin: ${kelvinTemp.toFixed(2)}` : ''}</p>
    </div>
  );
}

export default TemperatureConverter;
