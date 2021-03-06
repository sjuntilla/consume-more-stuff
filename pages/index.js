import Layout from './components/layout';
import Link from 'next/link';
import '../index.css'

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
        `@import url('https://fonts.googleapis.com/css?family=Roboto');
        
        h1 {
          font-family: 'Roboto', sans-serif;
        };
        
        ul {
          background-color: #ddd;
          margin: 5px;
        }`
      }
      </style>
    </Layout>
  )
}