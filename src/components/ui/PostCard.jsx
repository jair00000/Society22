import { Link } from "react-router-dom"

import { resolveFeaturedImageUrl } from "../../utils/helpers"

function getPostLink(type, id) {
  if (type === "event") return `/events/${id}`
  return `/blog/${id}`
}

function getButtonLabel(type) {
  if (type === "event") return "View Event"
  return "Read Article"
}

export default function PostCard({ post, type }) {
  const postType = type || post?.type || "blog"
  const imageSrc = resolveFeaturedImageUrl(
    post?.featured_image,
    "/images/events/events-card1.webp"
  )

  return (
    <article className="overflow-hidden rounded-xl border border-[#C49A45]/35 bg-[#101010] shadow-[0_14px_22px_-16px_rgba(196,154,69,0.7)]">
      <div className="h-56 overflow-hidden bg-black">
        <img src={imageSrc} alt={post?.title || "Post image"} className="w-full h-full object-cover" />
      </div>

      <div className="p-5">
        <h3 className="font-ibm-plex text-lg text-white mb-3">{post?.title || "Untitled"}</h3>
        <p className="font-ibm-plex text-sm text-[#D5D5D5] mb-5">
          {post?.excerpt || "No summary available."}
        </p>

        <div className="flex items-center justify-between gap-3">
          <p className="text-xs text-[#C49A45] uppercase tracking-[0.22em] font-montserrat">
            {post?.published_at ? new Date(post.published_at).toLocaleDateString() : "Unscheduled"}
          </p>

          <div className="flex items-center gap-2">
            {postType === "event" && (
              <Link
                to="/join"
                className="text-sm bg-[#C49A45] text-black border border-[#C49A45] px-4 py-2 rounded-full hover:bg-[#A67C2F] transition-colors duration-300"
              >
                Join Us
              </Link>
            )}

            <Link
              to={getPostLink(postType, post?.id)}
              className="text-sm text-white border border-[#C49A45]/55 px-4 py-2 rounded-full hover:bg-[#C49A45] hover:text-black transition-colors duration-300"
            >
              {getButtonLabel(postType)}
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
