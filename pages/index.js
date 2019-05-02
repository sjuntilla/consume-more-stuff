import Link from 'next/link';

const Index = () => (
  <div>
    <Link href="/items" title="Items Page">
      <button>Items Page</button>
    </Link>

    <p>Hello Next.js</p>
  </div>
)

export default Index