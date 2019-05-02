import Link from 'next/link';
import Layout from './components/myLayout';
import Header from './components/header';


const PostLink = props => (
  <li>
    <Link href={`/itemPosting?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
)


export default function Shop() {
  return (
    <Layout>
      <h1>My Shop</h1>
      <ul>
        <PostLink title="Login Here" />
        <PostLink title="Learn Next.js is awesome" />
        <PostLink title="Deploy apps with Zeit" />
      </ul>
    </Layout>
  )
}