import Layout from './components/layout';
import fetch from 'isomorphic-unfetch';


const Items = ({ items }) => {
    return (
        <Layout>
            {items.map(item => <div>{item.name}</div>)}
        </Layout>
    )
}

Items.getInitialProps = async ({ req }) => {
    const res = await fetch('http://localhost:8080/api/items');
    console.log("ressssss", res)
    const json = await res.json();
    return { items: json }
}

export default Items