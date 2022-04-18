const Content = ({ isDark }) => {
    return (
        <div className="content"
            style={{
                backgroudColor: isDark ? 'black' : 'white',
                color: isDark ? 'white' : 'black'
            }}>
            <h1>Welcome Good dayAbe</h1>
        </div>
    );
}

export default Content;