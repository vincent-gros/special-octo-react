import React from 'react';

const Card = ({ country }) => {
    return (
        <li className='card'>
            <img src={country.flags.svg} alt={"drapeau" + country.translations.fra.common} />
            <div className='infos'>
                <h3>{country.translations.fra.common}</h3>
                <p>Population: {country.population.toLocaleString()}</p>
                <p>Region: {country.region}</p>
            </div>
        </li>
    );
};

export default Card;