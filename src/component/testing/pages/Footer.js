const Footer = ({ isDark, setIsDark }) => {
    const toggleTheme = () => {
        setIsDark(!isDark)
    }
    return (
        <footer className="footer"
            style={{
                backgroudColor: isDark ? 'black' : 'lightgray'
            }}>
            <button className='button' onClick={toggleTheme}>Dark Mode</button>
        </footer>
    );
}

export default Footer;