import {React} from 'react';

const Header = () => {
    return (
        <header className='header'>
            <div className='header-container'>
                <h1 className='app-title'>Cine<span>Magic</span></h1>
                <p className='app-substitle'>Discover Your Next Favourite Movie.</p>
            </div>
            <div className='decorative-circle'></div>
        </header>
    );
}

export default Header;