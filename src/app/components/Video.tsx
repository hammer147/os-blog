type Props = {
  id: string
}

export default function Video({ id }: Props) {
  return (
    <div className='my-2 max-w-3xl'>
      <div className='aspect-h-9 aspect-w-16'>
        <iframe
          src={`https://www.youtube.com/embed/${id}`}
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        />
      </div>
    </div>
  )
}
