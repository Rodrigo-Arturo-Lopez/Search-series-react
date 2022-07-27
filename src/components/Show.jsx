const Show = ({ show }) => {
  return (
    <article className='shadow border bg-cyan-900 rounded-lg'>
      <img className='h-96 rounded-lg w-full' src={show.image.original} alt={show.name} />
      <div className='text-center text-white font-mono font-semibold'>
        <h5>{show.name}</h5>
        {
          show.premiered
            ? (
              <p>
                {show.premiered.slice(0, 4)}
              </p>
              )
            : ''
        }
      </div>
    </article>
  )
}

export default Show
