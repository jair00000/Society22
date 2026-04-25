import { useEffect, useState } from "react"
import SEO from "../seo/SEO"
import PageWrapper from "../components/layout/PageWrapper"
import DynamicForm from "../components/DynamicForm"
import { apiClient } from "../utils/api"

export default function Join() {
const [forms, setForms] = useState([])
const [loading, setLoading] = useState(true)
const [error, setError] = useState("")
const [selectedSlug, setSelectedSlug] = useState(null)

useEffect(() => {
let isActive = true

async function fetchForms() {
setLoading(true)
setError("")

try {
const { data } = await apiClient.get("/forms")
if (!isActive) {
return
}

const formsList = Array.isArray(data) ? data : Array.isArray(data?.data) ? data.data : []
setForms(formsList)
} catch (requestError) {
if (!isActive) {
return
}

console.error("Failed to load forms:", requestError)
setForms([])
setError("Unable to load available forms right now. Please try again later.")
} finally {
if (isActive) {
setLoading(false)
}
}
}

fetchForms()

return () => {
isActive = false
}
}, [])

const handleSelectForm = (slug) => {
setSelectedSlug(slug)
}

const handleBackToSelection = () => {
setSelectedSlug(null)
}

if (loading) {
return (
<PageWrapper>
<section className="bg-[#050505] px-4 py-8 font-ibm-plex sm:px-6 lg:px-8">
<div className="mx-auto w-full max-w-5xl">
<div className="flex h-96 items-center justify-center rounded-3xl border border-[#C49A45]/25 bg-[#070707]">
<div className="text-center">
<div className="mb-4 inline-block h-12 w-12 animate-spin rounded-full border-4 border-[#C49A45]/30 border-t-[#C49A45]"></div>
<p className="text-gray-300">Loading available forms...</p>
</div>
</div>
</div>
</section>
</PageWrapper>
)
}

if (selectedSlug) {
return (
<PageWrapper>
<SEO
title="Join Society 22"
description="Society 22 rooftop invitation request form."
/>

<section className="bg-[#050505] px-4 py-8 font-ibm-plex sm:px-6 lg:px-8">
<div className="mx-auto w-full max-w-5xl overflow-hidden rounded-3xl border border-[#C49A45]/25 bg-[#070707] font-ibm-plex shadow-[0_18px_40px_rgba(0,0,0,0.4),0_0_30px_rgba(196,154,69,0.16)]">
<div className="bg-gradient-to-r from-[#1E1A14] via-[#111111] to-[#1A1510] px-6 py-7 sm:px-10 sm:py-8 flex items-center justify-between">
<div>
<h1 className="text-xl font-normal leading-tight text-white sm:text-2xl">
Application Form
</h1>
<p className="mt-2 max-w-3xl text-sm leading-relaxed text-[#F2F2F2] sm:text-[15px]">
Complete this application and we'll review your request.
</p>
</div>
<button
onClick={handleBackToSelection}
className="ml-4 whitespace-nowrap rounded-sm bg-[#C49A45]/20 border border-[#C49A45] px-4 py-2 text-sm font-semibold uppercase tracking-wider text-[#C49A45] transition hover:bg-[#C49A45]/30"
>
Back
</button>
</div>

<div className="border-t border-[#C49A45]/35 bg-[#0a0a0a] px-6 py-7 sm:px-10 sm:py-8">
<DynamicForm slug={selectedSlug} />
</div>
</div>
</section>
</PageWrapper>
)
}

return (
<PageWrapper>
<SEO
title="Join Society 22"
description="Society 22 rooftop invitation request form."
/>

<section className="bg-[#050505] px-4 py-8 font-ibm-plex sm:px-6 lg:px-8">
<div className="mx-auto w-full max-w-5xl overflow-hidden rounded-3xl border border-[#C49A45]/25 bg-[#070707] font-ibm-plex shadow-[0_18px_40px_rgba(0,0,0,0.4),0_0_30px_rgba(196,154,69,0.16)]">
<div className="relative overflow-hidden border-b border-[#C49A45]/20 bg-[radial-gradient(circle_at_top_right,rgba(197,160,89,0.18),transparent_50%),linear-gradient(120deg,#17120d_0%,#0f0f0f_55%,#1a1410_100%)] px-6 py-8 sm:px-10 sm:py-10">
<div className="pointer-events-none absolute right-0 top-0 h-36 w-36 rounded-full bg-[#C49A45]/10 blur-2xl"></div>
<div className="relative z-10">
<p className="inline-flex items-center rounded-full border border-[#C49A45]/50 bg-[#0b0b0b]/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#E3C37E]">
Curated Invitations
</p>
<h1 className="mt-4 max-w-3xl text-2xl font-semibold leading-tight text-white sm:text-4xl">
Choose Your Society 22 Experience
</h1>
<p className="mt-4 max-w-4xl text-sm leading-relaxed text-[#E8E0CF] sm:text-[15px]">
Select an event below, submit your application, and wait for review from our team. Approved applicants receive a private approval ticket to unlock payment.
</p>
<div className="mt-5 flex flex-wrap gap-2 text-[11px] uppercase tracking-[0.14em]">
<span className="rounded-full border border-[#C49A45]/35 bg-[#0A0A0A] px-3 py-1 text-[#D8BC80]">Exclusive Crowd</span>
<span className="rounded-full border border-[#C49A45]/35 bg-[#0A0A0A] px-3 py-1 text-[#D8BC80]">Curated Entry</span>
<span className="rounded-full border border-[#C49A45]/35 bg-[#0A0A0A] px-3 py-1 text-[#D8BC80]">Limited Slots</span>
</div>
</div>
</div>

<div className="border-b border-[#C49A45]/20 bg-[#0A0A0A] px-6 py-7 sm:px-10">
<div className="flex items-end justify-between gap-4">
<div>
<p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C49A45]">Application Journey</p>
<h2 className="mt-2 text-lg font-medium text-white sm:text-xl">How Joining Works</h2>
</div>
<p className="text-xs uppercase tracking-[0.15em] text-[#8d8d8d]">Three Simple Steps</p>
</div>
<div className="mt-5 grid gap-4 md:grid-cols-3">
<div className="rounded-2xl border border-[#C49A45]/30 bg-[#0D0D0D] p-5 shadow-[0_18px_32px_-24px_rgba(197,160,89,0.9)]">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#C49A45] text-xs font-semibold text-[#C49A45]">01</span>
<p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#C49A45]">Pick an Event</p>
</div>
<p className="mt-3 text-sm leading-relaxed text-[#D6D6D6]">Choose the event experience that matches your vibe and group profile.</p>
</div>
<div className="rounded-2xl border border-[#C49A45]/30 bg-[#0D0D0D] p-5 shadow-[0_18px_32px_-24px_rgba(197,160,89,0.9)]">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#C49A45] text-xs font-semibold text-[#C49A45]">02</span>
<p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#C49A45]">Send Your Form</p>
</div>
<p className="mt-3 text-sm leading-relaxed text-[#D6D6D6]">Complete the dynamic application with accurate details and preferences.</p>
</div>
<div className="rounded-2xl border border-[#C49A45]/30 bg-[#0D0D0D] p-5 shadow-[0_18px_32px_-24px_rgba(197,160,89,0.9)]">
<div className="flex items-center gap-3">
<span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#C49A45] text-xs font-semibold text-[#C49A45]">03</span>
<p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#C49A45]">Approval + Payment</p>
</div>
<p className="mt-3 text-sm leading-relaxed text-[#D6D6D6]">If approved, receive your ticket and complete payment through the portal.</p>
</div>
</div>
</div>

<div className="border-t border-[#C49A45]/35 bg-[#0a0a0a] px-6 py-7 sm:px-10 sm:py-8">
{error ? (
<div className="mb-6 rounded-lg border border-red-500/30 bg-red-950/30 px-4 py-4 text-sm text-red-100" aria-live="polite">
{error}
</div>
) : null}

{forms.length === 0 && !error ? (
<div className="rounded-lg border border-[#C49A45]/30 bg-[#0D0D0D] px-6 py-8 text-center">
<p className="text-gray-300">No events currently available. Please check back soon.</p>
</div>
) : (
<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
{forms.map((form) => (
<button
key={form.slug}
onClick={() => handleSelectForm(form.slug)}
className="group relative rounded-lg border border-[#C49A45]/40 bg-[#0D0D0D] p-6 text-left transition hover:border-[#C49A45] hover:bg-[#131313]"
>
<div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[#C49A45]/5 to-transparent opacity-0 transition group-hover:opacity-100"></div>
<div className="relative z-10">
<h3 className="text-base font-semibold text-white group-hover:text-[#C49A45] transition">
{form.event_name}
</h3>
<p className="mt-2 text-xs uppercase tracking-wider text-gray-400 group-hover:text-[#C49A45]/80 transition">
Apply Now {'>'}
</p>
</div>
</button>
))}
</div>
)}
</div>
</div>
</section>
</PageWrapper>
)
}

