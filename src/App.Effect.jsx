import {useEffect, useState} from "react";

export default function App() {
  const  [liked, setLike] = useState('pending')
  const like = () => {setLike('like')}
  const dislike = () => {setLike('dislike')}
  return (
    <>
      <h1>Do you like this cat?</h1>

      <RandomCat dislike={liked} />
      {liked === 'pending' || liked === 'dislike' ? (
        <div>
          <button onClick={like}>Like</button>
          <button onClick={dislike}>Dislike</button>
        </div>
      ) :(
        ''
      )}
      {liked === 'like' ? <p>Like</p> : ''}
    </>
  )
}

function RandomCat({ dislike }) {
  const [catUrl, setCatUrl] = useState('')

  console.log(dislike)
  useEffect(() => {
    if (dislike !== 'like' )
    fetch('https://api.thecatapi.com/v1/images/search')
      .then((response) => response.json())
      .then((cats) => setCatUrl(cats[0].url))
  }, [dislike])

  return catUrl ?(
    <img width={200} height={200} alt={'random cat'} src={catUrl} />
  ) : (
    'loading'
  )
}