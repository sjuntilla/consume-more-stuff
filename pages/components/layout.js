import Header from './header'
import { Grommet } from 'grommet';
import { dark } from 'grommet/themes';


const wrapperStyle = {
    marginLeft: 0,
    marginRight: 0,
    backgroundColor: "#111111",
}
const headerStyle = {
    margin: 15,
    display: "flex",
    alignContent: "center"
};

const layoutWidth = {
    margin: 0,
    padding: 0
}

const Layout = props => (

    <Grommet theme={dark} full>
        <div style={wrapperStyle}>
            <div style={headerStyle}>
                <Header />
            </div>
            <div style={layoutWidth}>
                {props.children}
            </div>
        </div>
        <style jsx>{
            `@import url('https://fonts.googleapis.com/css?family=Roboto');
        
        h1 {
          font-family: 'Roboto', sans-serif;
          font-weight: bold;
        };
        
        ul {
          background-color: #ddd;
          margin: 5px;
        }`
        }
        </style>
    </Grommet>
)

export default Layout;