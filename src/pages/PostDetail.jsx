import { useEffect, useMemo, useState } from "react"
import { Link, useParams } from "react-router-dom"

import PageWrapper from "../components/layout/PageWrapper"
import SEO from "../seo/SEO"
import { fetchPublishedPostById } from "../utils/api"
import { resolveFeaturedImageUrl } from "../utils/helpers"

function getBackRoute(postType) {
  if (postType === "event") return "/events"
  return "/blog"
}

export default function PostDetail({ expectedType }) {
  const { id } = useParams()

  const [post, setPost] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {
    let isMounted = true

    async function loadPost() {
      try {
        setIsLoading(true)
        setErrorMessage("")

        const data = await fetchPublishedPostById(id)

        if (!isMounted) return

        if (expectedType && data?.type !== expectedType) {
          setErrorMessage("This content does not belong to this section.")
          setPost(null)
          return
        }

        setPost(data)
      } catch (error) {
        if (!isMounted) return
        setErrorMessage(error?.response?.data?.message || "Unable to load this post right now.")
      } finally {
        if (isMounted) setIsLoading(false)
      }
    }

    loadPost()

    return () => {
      isMounted = false
    }
  }, [id, expectedType])

  const pageTitle = useMemo(() => {
    if (post?.title) return post.title
    return expectedType === "event" ? "Event" : "Blog"
  }, [post, expectedType])

  const backRoute = getBackRoute(expectedType)
  const featuredImageUrl = resolveFeaturedImageUrl(post?.featured_image)

  return (
    <PageWrapper>
      <SEO
        title={pageTitle}
        description={post?.excerpt || "Society 22 published content details."}
      />

      <section className="py-16 md:py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-6 lg:px-12 max-w-4xl">
          <Link
            to={backRoute}
            className="inline-flex items-center text-sm text-[#C49A45] border border-[#C49A45]/50 rounded-full px-4 py-2 mb-8 hover:bg-[#C49A45] hover:text-black transition-colors duration-300"
          >
            Back
          </Link>

          {isLoading && <p className="text-[#D5D5D5] font-ibm-plex">Loading content...</p>}
          {!isLoading && errorMessage && <p className="text-red-400 font-ibm-plex">{errorMessage}</p>}

          {!isLoading && !errorMessage && post && (
            <article className="rounded-2xl border border-[#C49A45]/30 bg-[#101010] overflow-hidden">
              {featuredImageUrl && (
                <div className="w-full h-[320px] md:h-[440px] bg-black">
                  <img
                    src={featuredImageUrl}
                    alt={post.title || "Post image"}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="p-6 md:p-10">
                <p className="text-xs md:text-sm text-[#C49A45] tracking-[0.25em] uppercase font-montserrat mb-4">
                  {post.type || expectedType}
                </p>

                <h1 className="text-3xl md:text-5xl text-white font-playfair mb-4">
                  {post.title}
                </h1>

                {post.published_at && (
                  <p className="text-sm text-[#D5D5D5] font-ibm-plex mb-8">
                    {new Date(post.published_at).toLocaleDateString()}
                  </p>
                )}

                {post.excerpt && (
                  <p className="text-[#D5D5D5] text-base md:text-lg font-ibm-plex mb-8">
                    {post.excerpt}
                  </p>
                )}

                {(post.type === "event" || expectedType === "event") && (
                  <div className="mb-8">
                    <Link
                      to="/join"
                      className="inline-flex items-center rounded-full border border-[#C49A45] bg-[#C49A45] px-5 py-2.5 text-sm font-semibold uppercase tracking-[0.08em] text-black transition-colors duration-300 hover:bg-[#A67C2F]"
                    >
                      Join Us
                    </Link>
                  </div>
                )}

                {post.content ? (
                  <div
                    className="prose prose-invert max-w-none [&_*]:!text-white prose-headings:text-white prose-strong:text-white"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                  />
                ) : (
                  <p className="text-[#D5D5D5] font-ibm-plex">No content available for this post yet.</p>
                )}
              </div>
            </article>
          )}
        </div>
      </section>
    </PageWrapper>
  )
}