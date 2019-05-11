import Header from './header'
import { Grommet, Box } from 'grommet';
import { Sidebar } from 'grommet-controls';
import { dark } from 'grommet/themes';



const wrapperStyle = {
    display: "flex",
    flexDirection: "row nowrap",
    backgroundColor: "#111111",
    justifyContent: "space-around"
}

const layoutWidth = {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    margin: 0,
    justifyContent: "center",
}

const Layout = props => (

    <Grommet theme={dark} full>
        <div style={wrapperStyle}>
            <Sidebar title="// SILK CODE" collapsible={false} width="medium" vertical="full" pad="xxsmall" background="backgroundColor">
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