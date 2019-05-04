// import { withRouter } from 'next/router'
// import Layout from './components/myLayout.js'

// const Page = withRouter(props => (
//     <Layout>
//         <h1>{props.router.query.title}</h1>
//         <p>This is the item post content.</p>
//     </Layout>
// ))

// export default Page


// import { withRouter } from 'next/router'
// import Layout from './components/myLayout.js';

// const Content = withRouter(props => (
//     <div>
//         <h1>{props.router.query.title}</h1>
//         <p>holy shit man</p>
//     </div>
// ))

// const Page = props => (
//     <Layout>
//         <Content />
//     </Layout>
// )

// export default Page

import Layout from './components/layout';
import Link from 'next/link';

const PostLink = props => (
    <li>
        <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
            <a>{props.title}</a></Link>
    </li>
)

export default function Items() {
    return (
        <Layout>
            <h1>My Items</h1>
            <ul>
                <PostLink id="lady-tech-gear" title="Lady Tech Gear" />
                <Post Link id="tech-bling" title="Tech Bling" />
                <PostLink id="tech-accessories" title="Tech Accessories" />
            </ul>
        </Layout>
    )
}