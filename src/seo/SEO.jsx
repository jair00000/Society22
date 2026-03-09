import { Helmet } from "react-helmet-async"

export default function SEO({ title, description, keywords }) {
  return (
    <Helmet>
      <title>{title ? `${title} | Society` : "Society"}</title>
      <meta name="description" content={description || "Society project"} />
      {keywords && <meta name="keywords" content={keywords} />}
    </Helmet>
  )
}
