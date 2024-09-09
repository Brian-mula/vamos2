import { faComments } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

export default function Comments() {
  const url = 'https://tawk.to/chat/66866b5c9d7f358570d6f71d/1i1uh6p7v'
  return (
    <Link href={url} className='h-10 w-10 rounded-full bg-white flex justify-center items-center'>
        <FontAwesomeIcon icon={faComments} className='text-primary h-5' />
    </Link>
  )
}
