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
        <PostLink id="tech-bling" title="Tech Bling" />
        <PostLink id="tech-accessories" title="Tech Accessories" />
      </ul>

      <style jsx>{
        `h1, a {
          font-family: 'Helvetica', sans-serif
        };
        
        ul {
          background-color: red;
        }`
      }
      </style>
    </Layout>
  )
}