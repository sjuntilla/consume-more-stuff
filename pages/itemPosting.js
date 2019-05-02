// import { withRouter } from 'next/router'
// import Layout from './components/myLayout.js'

// const Page = withRouter(props => (
//     <Layout>
//         <h1>{props.router.query.title}</h1>
//         <p>This is the item post content.</p>
//     </Layout>
// ))

// export default Page


import { withRouter } from 'next/router'
import Layout from './components/myLayout.js';

const Content = withRouter(props => (
    <div>
        <h1>{props.router.query.title}</h1>
        <p>holy shit man</p>
    </div>
))

const Page = props => (
    <Layout>
        <Content />
    </Layout>
)

export default Page