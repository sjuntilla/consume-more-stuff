export default () => (
  <div className='hello'>
    <p>Hello World</p>
    <style jsx>{`
      .hello {
        font: 15px Helvetica, Arial, sans-serif;
        background: #eee;
        padding: 100px;
        text-align: right;
        transition: 100ms ease-in background;
      }
      .hello:hover {
        background: #ccc;
      }
    `}</style>
  </div>
)
const Button = (props) => (
  <button>
    {props.children}
    <style jsx>{`
        button {
          color: #999;
          display: inline-block;
          font-size: 2em;
        }
     `}</style>
    <style jsx>{`
        button {
          padding: ${ 'large' in props ? '50' : '20'}px;
          background: ${props.theme.background};
        }
     `}</style>
  </button>
)
