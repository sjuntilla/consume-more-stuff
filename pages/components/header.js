import Link from 'next/link'

const linkStyle = {
    marginRight: 15
}

const Header = () => (
    <div>
        <Link href="/">
            <a style={linkStyle}>Home</a>
        </Link>
        <Link href="/items">
            <a style={linkStyle}>items</a>
        </Link>


        {/* component styling */}
        <style jsx>{`{
            @import url('https://fonts.googleapis.com/css?family=Roboto');

        div {
            display: flex;
            flex-flow: row nowrap;
            font-size: 25px;
            background-color: #ffffff;
            font-family: 'Roboto', sans-serif;
            opacity: 0.4;
        };
         a {
                text-decoration: none;
                text-transform: uppercase;
                font-weight: bold;
            }
    }`}
        </style>
    </div>


)

export default Header