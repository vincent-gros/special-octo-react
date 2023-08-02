import React from 'react';

const Logo = () => {
    return (
        <div className='logo'>
            {/* Les images importées depuis la balise img sont disponibles dans /public */}
            <img src="./logo192.png" alt="Logo" />
            <h3>React World</h3>
        </div>
    );
};

export default Logo;