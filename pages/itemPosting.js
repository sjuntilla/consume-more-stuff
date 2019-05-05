import Layout from './components/layout';
import Link from 'next/link';
import React from 'react';


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