import { useState } from "react"
import SEO from "../seo/SEO"
import PageWrapper from "../components/layout/PageWrapper"

const HOBBY_OPTIONS = [
	"Fitness / Sports",
	"Business / Entrepreneurship",
	"Travel & Exploration",
	"Music / Arts / Creative Work",
	"Food & Bar Culture",
	"Other (please specify)",
]

const PERSONALITY_OPTIONS = [
	"Outgoing & Social",
	"Reserved but Observant",
	"Competitive & Energetic",
	"Calm & Grounded",
	"Playful & Spontaneous",
	"Other (please specify)",
]

const EVENT_OPTIONS = [
	"Meeting new people",
	"Casual conversations",
	"Interactive games (beer pong, card games, billiards)",
	"Music & rooftop atmosphere",
	"Dancing if the vibe picks up",
	"Singing if the moment calls for it",
	"Enjoying drinks in a relaxed setting",
	"Coming with friends but open to meeting others",
	"Just relaxing and observing",
	"Other (please specify)",
]

export default function Join() {
	const [formData, setFormData] = useState({
		applicantNames: "",
		applicantAges: "",
		applicantGenders: "",
		hobbyType: "",
		hobbyOther: "",
		personalityType: "",
		personalityOther: "",
		eventChoices: [],
		eventOther: "",
		socialHandles: "",
		contactFirstName: "",
		contactLastName: "",
		contactMobile: "",
		contactEmail: "",
		notesAccepted: false,
	})

	const handleChange = (event) => {
		const { name, value, type, checked } = event.target
		setFormData((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }))
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		window.alert("Application submitted.")
	}

	const handleEventChoiceToggle = (option) => {
		setFormData((prev) => {
			const exists = prev.eventChoices.includes(option)

			if (exists) {
				return {
					...prev,
					eventChoices: prev.eventChoices.filter((item) => item !== option),
				}
			}

			if (prev.eventChoices.length >= 3) {
				window.alert("You can only select up to three choices.")
				return prev
			}

			return {
				...prev,
				eventChoices: [...prev.eventChoices, option],
			}
		})
	}

	const fieldClass =
		"h-10 w-full rounded-lg border border-[#C49A45]/45 bg-[#0B0B0B] px-3 py-2 font-ibm-plex text-xs text-white placeholder:text-[#8A8A8A] focus:border-[#C49A45] focus:outline-none"
	const optionTextClass = "text-sm text-white"
	const textAreaClass =
		"min-h-[130px] w-full rounded-lg border border-[#C49A45]/45 bg-[#0B0B0B] px-3 py-2 font-ibm-plex text-xs text-white placeholder:text-[#8A8A8A] focus:border-[#C49A45] focus:outline-none"

	return (
		<PageWrapper>
			<SEO
				title="Join Society 22"
				description="Society 22 rooftop invitation request form."
			/>

			<section className="bg-[#050505] px-4 py-8 font-ibm-plex sm:px-6 lg:px-8">
				<div className="mx-auto w-full max-w-5xl overflow-hidden rounded-3xl border border-[#C49A45]/25 bg-[#070707] font-ibm-plex shadow-[0_18px_40px_rgba(0,0,0,0.4),0_0_30px_rgba(196,154,69,0.16)]">
					<div className="bg-gradient-to-r from-[#1E1A14] via-[#111111] to-[#1A1510] px-6 py-7 sm:px-10 sm:py-8">
						<h1 className="text-xl font-normal leading-tight text-white sm:text-2xl">
							Society 22 - Rooftop Edition Event
							<br />
							Invitation Request
						</h1>
						<p className="mt-2 max-w-4xl text-sm leading-relaxed text-[#F2F2F2] sm:text-[15px]">
							Apply individually or as a group (up to 5 people) for this exclusive Society 22 rooftop
							event. Submission does not guarantee an invitation; final confirmation will be sent upon
							approval.
						</p>
					</div>

					<div className="border-t border-[#C49A45]/35 px-6 py-7 sm:px-10 sm:py-8">
						<form className="space-y-6" onSubmit={handleSubmit}>
							<div>
								<label htmlFor="applicantNames" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.04em] text-white">
									Full Name(s) of Applicant(s) <span className="text-red-500">*</span>
								</label>
								<input
									id="applicantNames"
									name="applicantNames"
									value={formData.applicantNames}
									onChange={handleChange}
									type="text"
									className={fieldClass}
									placeholder="Enter full applicant name(s)"
									required
								/>
							</div>

							<div>
								<label htmlFor="applicantAges" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.04em] text-white">
									Age(s) of Applicant(s) <span className="text-red-500">*</span>
								</label>
								<input
									id="applicantAges"
									name="applicantAges"
									value={formData.applicantAges}
									onChange={handleChange}
									type="text"
									className={fieldClass}
									placeholder="Enter applicant ages"
									required
								/>
							</div>

							<div>
								<label htmlFor="applicantGenders" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.04em] text-white">
									Gender(s) of Applicant(s) <span className="text-red-500">*</span>
								</label>
								<input
									id="applicantGenders"
									name="applicantGenders"
									value={formData.applicantGenders}
									onChange={handleChange}
									type="text"
									className={fieldClass}
									placeholder="Enter applicant genders"
									required
								/>
							</div>

							<div className="space-y-4">
								<div className="rounded-lg border border-[#C49A45]/35 bg-[#0A0A0A] p-4 shadow-[0_14px_22px_-16px_rgba(196,154,69,0.7)] sm:p-5">
									<p className="mb-3 text-sm font-normal text-white">
										Which hobby best describes you or your group? <span className="text-red-500">*</span>
									</p>
									<div className="space-y-2.5">
										{HOBBY_OPTIONS.map((option) => (
											<label key={option} className="flex items-center gap-3">
												<input
													type="radio"
													name="hobbyType"
													value={option}
													checked={formData.hobbyType === option}
													onChange={handleChange}
													className="h-4 w-4 accent-[#C49A45]"
												/>
												<span className={optionTextClass}>{option}</span>
											</label>
										))}
									</div>
									{formData.hobbyType === "Other (please specify)" && (
										<input
											name="hobbyOther"
											value={formData.hobbyOther}
											onChange={handleChange}
											type="text"
											placeholder="Please specify"
											className="mt-3 h-10 w-full rounded-lg border border-[#C49A45]/45 bg-[#0B0B0B] px-3 py-2 text-xs text-white placeholder:text-[#8A8A8A] focus:border-[#C49A45] focus:outline-none"
										/>
									)}
								</div>

								<div className="rounded-lg border border-[#C49A45]/35 bg-[#0A0A0A] p-4 shadow-[0_14px_22px_-16px_rgba(196,154,69,0.7)] sm:p-5">
									<p className="mb-3 text-sm font-normal text-white">
										How would you describe your personality or group dynamic? <span className="text-red-500">*</span>
									</p>
									<div className="space-y-2.5">
										{PERSONALITY_OPTIONS.map((option) => (
											<label key={option} className="flex items-center gap-3">
												<input
													type="radio"
													name="personalityType"
													value={option}
													checked={formData.personalityType === option}
													onChange={handleChange}
													className="h-4 w-4 accent-[#C49A45]"
												/>
												<span className={optionTextClass}>{option}</span>
											</label>
										))}
									</div>
									{formData.personalityType === "Other (please specify)" && (
										<input
											name="personalityOther"
											value={formData.personalityOther}
											onChange={handleChange}
											type="text"
											placeholder="Please specify"
											className="mt-3 h-10 w-full rounded-lg border border-[#C49A45]/45 bg-[#0B0B0B] px-3 py-2 text-xs text-white placeholder:text-[#8A8A8A] focus:border-[#C49A45] focus:outline-none"
										/>
									)}
								</div>

								<div className="rounded-lg border border-[#C49A45]/35 bg-[#0A0A0A] p-4 shadow-[0_14px_22px_-16px_rgba(196,154,69,0.7)] sm:p-5">
									<p className="mb-3 text-sm font-normal text-white">
										What are you most looking forward to at this Society 22 event? (Select up to three) <span className="text-red-500">*</span>
									</p>
									<div className="space-y-2.5">
										{EVENT_OPTIONS.map((option) => (
											<label key={option} className="flex items-center gap-3">
												<input
													type="checkbox"
													checked={formData.eventChoices.includes(option)}
													onChange={() => handleEventChoiceToggle(option)}
													className="h-4 w-4 accent-[#C49A45]"
												/>
												<span className={optionTextClass}>{option}</span>
											</label>
										))}
									</div>
									{formData.eventChoices.includes("Other (please specify)") && (
										<input
											name="eventOther"
											value={formData.eventOther}
											onChange={handleChange}
											type="text"
											placeholder="Please specify"
											className="mt-3 h-10 w-full rounded-lg border border-[#C49A45]/45 bg-[#0B0B0B] px-3 py-2 text-xs text-white placeholder:text-[#8A8A8A] focus:border-[#C49A45] focus:outline-none"
										/>
									)}
								</div>

							<div>
								<label htmlFor="socialHandles" className="mb-1.5 block text-xs font-semibold uppercase tracking-[0.04em] text-white">
									Social Media Handle(s) (Instagram / Facebook; LinkedIn is optional)
								</label>
								<textarea
									id="socialHandles"
									name="socialHandles"
									value={formData.socialHandles}
									onChange={handleChange}
									className={textAreaClass}
									placeholder="@yourhandle"
								/>
							</div>

							<div className="rounded-lg border border-[#C49A45]/35 bg-[#0A0A0A] p-4 shadow-[0_14px_22px_-16px_rgba(196,154,69,0.7)] sm:p-5">
								<p className="mb-3 text-sm font-normal text-white">
									Contact Person - Full Name (for group applications, assign one main contact) <span className="text-red-500">*</span>
								</p>
								<div className="grid gap-3 sm:grid-cols-2">
									<div>
										<input
											id="contactFirstName"
											name="contactFirstName"
											value={formData.contactFirstName}
											onChange={handleChange}
											type="text"
											className={fieldClass}
											placeholder="First Name"
											required
										/>
									</div>
									<div>
										<input
											id="contactLastName"
											name="contactLastName"
											value={formData.contactLastName}
											onChange={handleChange}
											type="text"
											className={fieldClass}
											placeholder="Last Name"
											required
										/>
									</div>
								</div>
							</div>

							<div className="rounded-lg border border-[#C49A45]/35 bg-[#0A0A0A] p-4 shadow-[0_14px_22px_-16px_rgba(196,154,69,0.7)] sm:p-5">
								<p className="mb-3 text-sm font-normal text-white">
									Contact Person - Mobile Number <span className="text-red-500">*</span>
								</p>
								<input
									id="contactMobile"
									name="contactMobile"
									value={formData.contactMobile}
									onChange={handleChange}
									type="tel"
									className="h-10 w-full max-w-md rounded-lg border border-[#C49A45]/45 bg-[#0B0B0B] px-3 py-2 text-xs text-white placeholder:text-[#8A8A8A] focus:border-[#C49A45] focus:outline-none"
									placeholder="(000) 000-0000"
									required
								/>
								<p className="mt-2 text-xs text-[#C9C9C9]">Please enter a valid phone number.</p>
							</div>

							<div className="rounded-lg border border-[#C49A45]/45 bg-[#0A0A0A] p-4 shadow-[0_14px_22px_-16px_rgba(196,154,69,0.7)] sm:p-5">
								<p className="mb-3 text-sm font-normal text-white">Contact Person - Email (optional)</p>
								<input
									id="contactEmail"
									name="contactEmail"
									value={formData.contactEmail}
									onChange={handleChange}
									type="email"
									className="h-10 w-full max-w-md rounded-lg border border-[#C49A45]/45 bg-[#0B0B0B] px-3 py-2 text-xs text-white placeholder:text-[#8A8A8A] focus:border-[#C49A45] focus:outline-none"
									placeholder="example@example.com"
								/>
								<p className="mt-2 text-xs text-[#C9C9C9]">example@example.com</p>
							</div>

							<div className="rounded-lg border border-[#C49A45]/35 bg-[#0A0A0A] p-4 shadow-[0_14px_22px_-16px_rgba(196,154,69,0.7)] sm:p-5">
								<h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-[#A67C2F]">Important Notes:</h3>
								<ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-[#F4C062]">
									<li>Maximum of 5 people per application</li>
									<li>Groups may be separated during certain activities to encourage interaction</li>
									<li>Submission of this form does not guarantee an invitation</li>
									<li>Final confirmation will be sent upon approval</li>
								</ul>
								<label className="mt-3 flex items-start gap-2 text-xs text-white">
									<input
										type="checkbox"
										name="notesAccepted"
										checked={formData.notesAccepted}
										onChange={handleChange}
										className="mt-0.5 h-4 w-4 accent-[#C49A45]"
										required
									/>
									I understand and agree with these notes.
								</label>
							</div>

							<div className="pt-2 text-center">
								<button
									type="submit"
									className="rounded-md bg-[#C49A45] px-8 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-black shadow-[0_0_22px_rgba(196,154,69,0.35)] transition hover:bg-[#A67C2F]"
								>
									Submit Application
								</button>
							</div>
							</div>
						</form>
					</div>
				</div>
			</section>
		</PageWrapper>
	)
}
