import Header from './header'
import { Grommet, Box } from 'grommet';
import { Sidebar } from 'grommet-controls';
import { dark } from 'grommet/themes';



const wrapperStyle = {
    display: "flex",
    flexDirection: "row nowrap",
    backgroundColor: "#111111",
}
const headerStyle = {
    margin: 15,
    display: "flex",
    alignContent: "center"
};

const layoutWidth = {
    display: "flex",
    flexDirection: "column",
    margin: 0,
    justifyContent: "center",
}

const Layout = props => (

    <Grommet theme={dark} full>
        <div style={wrapperStyle}>
            <Sidebar title="// SILK CODE" collapsible={false} width="small" pad="xxsmall">
                <Header />
            </Sidebar>
            <div style={layoutWidth}>
                <Box style={{ width: "cover" }}>
                    {props.children}
                </Box>
            </div>
        </div>
        <style jsx>{
            `@import url('https://fonts.googleapis.com/css?family=Roboto');
        
        h1 {
          font-family: 'Roboto', sans-serif;
          font-weight: bold;
        };
        
        body {
            font-family: 'Roboto', sans-serif;
                }
        ul {
          background-color: #ddd;
          margin: 5px;
        }`
        }
        </style>
    </Grommet>
)

export default Layout;