import Link from 'next/link';
import Header from './components/header';

const Index = () => (
  <div>
    <Header />
    <Link href="/items" title="Items Page">
      <a>Items Page</a>
    </Link>

    <p>Hello Next.js</p>
  </div>
)

export default Index