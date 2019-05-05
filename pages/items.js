import Layout from "./components/layout";
import fetch from "isomorphic-unfetch";

import Link from "next/link";
import { Grommet, Heading, Anchor, Menu } from "grommet";
import { dark } from "grommet/themes";

const Items = ({ items }) => {
  return (
    <Grommet theme={dark}>
      <Layout>
        {items.map(item => (
          <div key={item.id}>
            {item.name}
            {item.description}
            {item.price}
            {item.category}
          </div>
        ))}
      </Layout>
    </Grommet>
  );
};

Items.getInitialProps = async ({ req }) => {
  const res = await fetch("http://localhost:8080/api/items");
  // console.log("ressssss", res)
  const json = await res.json();
  return { items: json };
};

export default Items;
// class ItemList extends Component {
//     constructor(props) {
//         super(props);

//         //properties
//         this.state = {
//             items: props.items
//         }
//     }
//     handleRefresh = async(e) => {
//         const res = awaitfetch('http://localhost:8080/api/items')
//         const json = await res.json()
//         this.setState({ items: json});
//     }
//     render() {
//         return (
//             <div>
//                 Next items: {this.state.items}
//                 <button onClick={this.handleRefresh}>Refresh</button>
//             </div>
//         )
//     }
// }

// ItemList.getInitialProps = async ({ req }) => {
//     const res = await
//         fetch('http://localhost:8080/api/items')
//         const json = await res.json()
//         return { items: json}
//     }
