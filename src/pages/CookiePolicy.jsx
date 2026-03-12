import SEO from "../seo/SEO"
import PageWrapper from "../components/layout/PageWrapper"

export default function CookiePolicy() {
  return (
    <PageWrapper>
      <SEO
        title="Cookie Policy"
        description="Learn how Society 22 uses cookies to improve website functionality and experience."
      />

      <section className="w-full bg-[#0a0a0a] text-white py-20 md:py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <h1 className="font-playfair text-4xl md:text-5xl text-[#C49A45] mb-8">Cookie Policy</h1>
          <div className="space-y-6 font-ibm-plex text-[16px] text-gray-300 leading-relaxed font-light">
            <p>
              Cookies are small text files placed on your device to help websites work more efficiently and
              provide useful insights.
            </p>
            <p>
              Society 22 may use essential cookies to support site functionality and performance cookies to
              understand website traffic and improve user experience.
            </p>
            <p>
              You can manage or disable cookies through your browser settings. Please note that disabling
              certain cookies may affect site functionality.
            </p>
            <p>
              By continuing to use this website, you consent to our use of cookies as described in this
              policy.
            </p>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
