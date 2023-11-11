import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  const href = `/tags/${slug(text)}`
  return (
    <div style={{ paddingTop: '10px' }}>
      <a
        href={href}
        className="mr-1 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 no-underline"
      >
        <button className="text-white bg-blue-700 dark:hover:text-white px-2 py-1 rounded-xl">
          {text}
        </button>
      </a>
    </div>
  )
}

export default Tag
