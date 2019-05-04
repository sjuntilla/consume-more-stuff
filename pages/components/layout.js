import Header from './header'
import { dark } from 'grommet/themes';

const headerStyle = {
    margin: 15,
    display: "flex",
    alignContent: "center"
};

const wrapperStyle = {
    marginLeft: 0,
    marginRight: 0,
    backgroundColor: "#111111",
}

const layoutWidth = {
    margin: 0,
    padding: 0
}

const Layout = props => (
    <div style={wrapperStyle}>
        <div style={headerStyle}>
            <Header />
        </div>
        <div style={layoutWidth}>
            {props.children}
        </div>
    </div>
)

export default Layout;