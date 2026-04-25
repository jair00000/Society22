import { useEffect, useMemo, useState } from "react"

import PageWrapper from "../components/layout/PageWrapper"
import PostCard from "../components/ui/PostCard"
import SEO from "../seo/SEO"
import { fetchPublishedPosts } from "../utils/api"

export default function Blog() {
  const [posts, setPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState("")

  useEffect(() => {
    let isMounted = true

    async function loadPosts() {
      try {
        setIsLoading(true)
        setErrorMessage("")

        const data = await fetchPublishedPosts("blog")

        if (!isMounted) return
        setPosts(data)
      } catch (error) {
        if (!isMounted) return
        setErrorMessage(error?.response?.data?.message || "Unable to load blog posts right now.")
      } finally {
        if (isMounted) setIsLoading(false)
      }
    }

    loadPosts()

    return () => {
      isMounted = false
    }
  }, [])

  const hasPosts = useMemo(() => posts.length > 0, [posts])

  return (
    <PageWrapper>
      <SEO
        title="Blog"
        description="Read the latest Society 22 stories, updates, and community insights."
      />

      <section
        className="relative w-full h-[80vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/blogs/lantern.webp')" }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 w-full h-full bg-black/50 backdrop-blur-[2px] flex items-center justify-center px-4">
          <div className="flex flex-col items-center gap-6 text-center max-w-5xl w-full">
            <h1 className="text-white text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-montserrat tracking-[0.22em] font-light uppercase drop-shadow-lg">
              SOCIETY <span className="font-bold text-[#C49A45]">JOURNAL</span>
            </h1>

            <div className="w-24 md:w-32 h-[1px] bg-gradient-to-r from-transparent via-[#C49A45] to-transparent my-4"></div>

            <p className="text-gray-200 font-ibm-plex text-sm sm:text-lg md:text-xl tracking-[0.35em] uppercase font-light drop-shadow-md">
              Stories Beyond Expectations
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-6 lg:px-12 max-w-6xl">
          {isLoading && <p className="text-[#D5D5D5] font-ibm-plex">Loading published posts...</p>}
          {!isLoading && errorMessage && <p className="text-red-400 font-ibm-plex">{errorMessage}</p>}
          {!isLoading && !errorMessage && !hasPosts && (
            <p className="text-[#D5D5D5] font-ibm-plex">No published blog posts yet.</p>
          )}

          {!isLoading && !errorMessage && hasPosts && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} type="blog" />
              ))}
            </div>
          )}
        </div>
      </section>
    </PageWrapper>
  )
}
