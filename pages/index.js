import Link from 'next/link';
import Header from './components/header';
import Layout from './components/myLayout';
import withLayout from './components/myLayout';

const Page = () => <p>Hello Next.js</p>

export default withLayout(Page);