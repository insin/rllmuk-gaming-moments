import Link from 'next/Link'
import Head from 'next/Head'

function Picture(props) {
  let {picture, next, previous} = props.url.query
  return <>
    <Head>
      <title>{picture.game} by {picture.author}</title>
    </Head>

    <div className="picture">
      <div className="previous">
        {previous && <Link href={`/picture/${previous}`} as={`/picture/${previous}`}>
          <a>&laquo; Previous</a>
        </Link>}
      </div>
      <div className="current">
        <p>{picture.game}</p>
        <img src={`/static/full/${picture.src}`}/>
        <p>by <strong>{picture.author}</strong></p>
      </div>
      <div className="next">
        {next && <Link href={`/picture/${next}`} as={`/picture/${next}`}>
          <a>Next &raquo;</a>
        </Link>}
      </div>
    </div>

    <style global jsx>{`
      html,
      body,
      #__next {
        height: 100%;
        margin: 0;
      }
    `}</style>
    <style jsx>{`
      .picture {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
      }
      .current {
        text-align: center;
        margin: 0 1em;
      }
    `}</style>
  </>
}

Picture.getInitialProps = async function({id, picture, next, previous}) {
  return {id, picture, next, previous}
}

export default Picture