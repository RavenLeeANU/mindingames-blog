import Link from '@/components/Link'
import Tag from '@/components/Tag'
import projectsData from '@/data/projectsData'
import siteMetadata from '@/data/siteMetadata'
import Card from '@/components/Card'
import { formatDate } from 'pliny/utils/formatDate'
import NewsletterForm from 'pliny/ui/NewsletterForm'

const MAX_DISPLAY = 5
const MAX_PROJECT = 4

export default function Home({ posts }) {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-4 pb-8 pt-6 md:space-y-5">
          <h1
            className="mb-4 text-center font-serif text-5xl font-bold tracking-wide md:text-6xl"
            data-aos="zoom-y-out"
          >
            Exploring the
            <span className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
              Nexus
            </span>
            <br />
            AI, Human Cognition, and the Dynamics of Play
          </h1>

          <p className="text-center text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>

        <div className="container py-12">
          <div className="mx-auto w-full text-center md:w-2/3">
            <h1 className="mb-4 font-serif text-3xl font-bold leading-tight">Current Projects</h1>
            <p className="mb-8 text-lg">AI Generative Contents</p>
            <a
              href="/projects"
              className="rounded-full bg-blue-500 px-6 py-3 font-bold text-white hover:bg-blue-700"
            >
              Learn More
            </a>
          </div>

          <div className="mt-8 flex flex-wrap">
            {projectsData.slice(0, MAX_PROJECT).map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>

        <div className="container py-12">
          <div className="mx-auto w-full text-center md:w-2/3">
            <h1 className="mb-4 font-serif text-3xl font-bold leading-tight">Current Blogs</h1>
            <p className="mb-8 text-lg">Relative Blogs</p>
            <a
              href="/blog"
              className="rounded-full bg-blue-500 px-6 py-3 font-bold text-white hover:bg-blue-700"
            >
              Check All Posts
            </a>
          </div>

          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {!posts.length && 'No posts found.'}
            {posts.slice(0, MAX_DISPLAY).map((post) => {
              const { slug, date, title, summary, tags } = post
              return (
                <li key={slug} className="py-12">
                  <article>
                    <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                      <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                          <time dateTime={date}>{formatDate(date, siteMetadata.locale)}</time>
                        </dd>
                      </dl>
                      <div className="space-y-5 xl:col-span-3">
                        <div className="space-y-6">
                          <div>
                            <h2 className="text-2xl font-bold leading-8 tracking-tight">
                              <Link
                                href={`/blog/${slug}`}
                                className="text-gray-900 dark:text-gray-100"
                              >
                                {title}
                              </Link>
                            </h2>
                            <div className="flex flex-wrap">
                              {tags.map((tag) => (
                                <Tag key={tag} text={tag} />
                              ))}
                            </div>
                          </div>
                          <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                            {summary}
                          </div>
                        </div>
                        <div className="text-base font-medium leading-6">
                          <Link
                            href={`/blog/${slug}`}
                            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                            aria-label={`Read more: "${title}"`}
                          >
                            Details &rarr;
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

      {siteMetadata.newsletter?.provider && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
