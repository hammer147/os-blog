import Image from 'next/image'

type Props = {
  src: string
  alt: string
  priority?: string
}

export default function CustomImage({ src, alt, priority }: Props) {
  const isPriority = priority ? true : false

  return (
    <div className='h-full w-full'>
      <Image
        // className='mx-auto rounded-lg'
        className='rounded-lg'
        src={src}
        alt={alt}
        width={768}
        height={768}
        priority={isPriority}
      />
    </div>
  )
}
