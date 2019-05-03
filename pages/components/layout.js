import Header from './header'

const layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
};

const wrapperStyle = {
    marginLeft: 10,
    marginRight: 0,
    padding: 0
}

const Layout = props => (
    <div style={wrapperStyle}>
        <Header />
        <div style={layoutStyle}>
            {props.children}
        </div>
    </div>
)

export default Layout;