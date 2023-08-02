import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const Countries = () => {
    const [data, setData] = useState([]);
    const [rangeValue, setRangeValue] = useState(36);
    const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];
    const [selectedRadio, setSelectedRadio] = useState('');
    useEffect(() => {
        axios.get('https://restcountries.com/v3.1/all')
            .then((res) => setData(res.data));
    }, []);

    return (
        <div className='countries'>
            <ul className='radio-container'>
                <input
                    type="range"
                    min="1"
                    max="250"
                    defaultValue={rangeValue}
                    onChange={(e) => setRangeValue(e.target.value)}
                    className="slider"
                    id="myRange" />
                {radios.map((continent) => {
                    return (
                        <li>
                            <input type="radio" value={continent} id={continent} name="region"
                            checked={continent === selectedRadio}
                            onChange={(e) => setSelectedRadio(e.target.id)} />
                            <label htmlFor={continent}>{continent}</label>
                        </li>
                    );
                })}
            </ul>
            {selectedRadio 
            && <button onClick={() => setSelectedRadio("")}>Annuler recherche</button>}
            <ul className='countries-list'>
                {data
                    .filter((country) => country.region.includes(selectedRadio))
                    .sort((a, b) => b.population - a.population)
                    .slice(0, rangeValue).map((country) => (
                    <Card country={country} key={country.cca2} />
                ))}
            </ul>
        </div>
    );
};

export default Countries;