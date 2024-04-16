import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="mr-4 rounded-sm border bg-blue-100 px-2 py-1 text-sm font-semibold text-blue-700"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
