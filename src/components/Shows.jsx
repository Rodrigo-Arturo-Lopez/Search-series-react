import Show from './Show'

const Shows = ({ data }) => {
  return (
    <section>
      <div className='flex justify-center text-cyan-700 mt-4'>
        <p className='font-mono text-5xl font-bold'>Shows</p>
      </div>
      {
        data.length === null
          ? ('Sorry. We can not found any shows')
          : (
            <section className='grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 cursor-pointer m-4'>
              {data.map((item) => (
                <Show key={item.id} {...item} />
              ))}
            </section>
            )
      }
    </section>
  )
}

export default Shows
