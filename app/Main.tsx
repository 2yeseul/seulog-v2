import Link from '@/components/Link'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'

const MAX_DISPLAY = 10

export default function Home({ posts }) {
  return (
    <>
      <div>
        <div className="space-y-2 pb-8 pt-2 md:space-y-5" style={{ paddingLeft: '9px' }}>
          <p className="leading-7" style={{ fontWeight: 400, fontSize: 15, paddingLeft: '3px' }}>
            좋아하는 것을 좋아한다고 말하기
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && '🥺 EMPTY'}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags, images } = post

            return (
              <li key={slug} className="py-6 flex">
                <div className="w-1/6 pr-6">
                  {images?.[0] && (
                    <div
                      className="rounded-3xl overflow-hidden"
                      style={{
                        aspectRatio: '1/1',
                        marginRight: '6px',
                      }}
                    >
                      <img
                        src={images?.[0]}
                        alt={`Thumbnail for ${title}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </div>
                <div className="w-3/4">
                  <h2 className="text-lg font-bold leading-8 tracking-tight">
                    <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
                      {title}
                    </Link>
                  </h2>
                  <div className="text-xs leading-6 text-gray-500 dark:text-gray-400">
                    <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                  </div>
                  <div className="flex flex-wrap">
                    {tags.map((tag) => (
                      <Tag key={tag} text={tag} />
                    ))}
                  </div>
                  <div
                    className="text-sm max-w-none text-gray-500 dark:text-gray-400"
                    style={{ paddingTop: '10px' }}
                  >
                    {summary}
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="All posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
    </>
  )
}
