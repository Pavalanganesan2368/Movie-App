import {React} from 'react';

const Layout = ({children}) => {
    <div className="app-container">
        <header>
            <h1>MovieDB</h1>
        </header>
        <main>{children}</main>
        <footer>
            <p>&copy; {new Date().getFullYear()} Movie App</p>
        </footer>
    </div>
}

export default Layout;