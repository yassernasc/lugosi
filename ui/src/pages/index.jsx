import Head from 'next/head'
import { useState } from 'react'
import { Error, Player } from '../components'

const Root = () => {
  const [error, setError] = useState(null)
  return (
    <>
      <Head>
        <title>Lugosi</title>
      </Head>
      {error ? <Error message={error} /> : <Player onError={setError} />}
    </>
  )
}

export default Root
