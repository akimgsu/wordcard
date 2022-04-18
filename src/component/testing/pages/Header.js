
const Header = ({ isDark }) => {
    return (
        <header className="header"
            style={{
                backgroudColor: isDark ? 'black' : 'lightgray',
                color: isDark ? 'white' : 'black'
            }}>
            <h1>Welcome Abe</h1>
        </header>
    );
}

export default Header