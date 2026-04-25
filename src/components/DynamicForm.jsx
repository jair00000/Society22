import { useEffect, useState } from "react"
import { apiClient } from "../utils/api"

export default function DynamicForm({ slug }) {
	const [schema, setSchema] = useState([])
	const [formData, setFormData] = useState({})
	const [loading, setLoading] = useState(true)
	const [error, setError] = useState("")
	const baseInputClass =
		"p-4 bg-[#0a0a0a] border border-[#c5a059] rounded-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#c5a059]"

	useEffect(() => {
		let isActive = true

		async function fetchSchema() {
			setLoading(true)
			setError("")

			try {
				const { data } = await apiClient.get(`/forms/${slug}`)
				if (!isActive) {
					return
				}

				setSchema(Array.isArray(data?.schema) ? data.schema : [])
			} catch (requestError) {
				if (!isActive) {
					return
				}

				console.error("Failed to load form schema:", requestError)
				setSchema([])
				setError("Unable to load this form right now.")
			} finally {
				if (isActive) {
					setLoading(false)
				}
			}
		}

		if (slug) {
			fetchSchema()
		} else {
			setLoading(false)
			setSchema([])
		}

		return () => {
			isActive = false
		}
	}, [slug])

	const handleChange = (label, value) => {
		setFormData((previous) => ({
			...previous,
			[label]: value,
		}))
	}

	const getOptionValue = (option, optionIndex) => {
		return typeof option === "string" ? option : option?.label || option?.value || `Option ${optionIndex + 1}`
	}

	const renderField = (block, index) => {
		const { type, data = {} } = block || {}
		const label = data.label || `Field ${index + 1}`
		const fieldId = `${slug || "dynamic-form"}-${index}`

		switch (type) {
			case "text_input":
				return (
					<div key={fieldId} className="flex flex-col gap-2">
						<label htmlFor={fieldId} className="text-sm tracking-wider uppercase text-gray-400">
							{label}
						</label>
						<input
							id={fieldId}
							type="text"
							value={formData[label] || ""}
							onChange={(event) => handleChange(label, event.target.value)}
							placeholder={data.placeholder || label}
							required={Boolean(data.required)}
							className={baseInputClass}
						/>
					</div>
				)
			case "textarea":
				return (
					<div key={fieldId} className="flex flex-col gap-2">
						<label htmlFor={fieldId} className="text-sm tracking-wider uppercase text-gray-400">
							{label}
						</label>
						<textarea
							id={fieldId}
							value={formData[label] || ""}
							onChange={(event) => handleChange(label, event.target.value)}
							placeholder={data.placeholder || label}
							rows={data.rows || 5}
							required={Boolean(data.required)}
							className={`${baseInputClass} resize-none`}
						/>
					</div>
				)
			case "checkbox":
				return (
					<div key={fieldId} className="flex flex-col gap-3">
						<span className="text-sm tracking-wider uppercase text-gray-400">{label}</span>
						<div className="flex flex-col gap-3 rounded-sm border border-[#c5a059] bg-[#0a0a0a] p-4">
							{Array.isArray(data.options) && data.options.length > 0 ? (
								data.options.map((option, optionIndex) => {
									const optionValue = getOptionValue(option, optionIndex)
									const currentValues = Array.isArray(formData[label]) ? formData[label] : []
									const isChecked = currentValues.includes(optionValue)

									return (
										<label key={`${fieldId}-${optionIndex}`} className="flex items-center gap-3 text-sm text-gray-200">
											<input
												type="checkbox"
												checked={isChecked}
												onChange={(event) => {
													const nextValues = event.target.checked
														? [...currentValues, optionValue]
														: currentValues.filter((value) => value !== optionValue)

													handleChange(label, nextValues)
												}}
												className="h-4 w-4 rounded border-[#c5a059] bg-transparent text-[#c5a059] focus:ring-[#c5a059]"
											/>
											<span>{optionValue}</span>
										</label>
									)
								})
							) : (
								<label className="flex items-center gap-3 text-sm text-gray-200">
									<input
										type="checkbox"
										checked={Boolean(formData[label])}
										onChange={(event) => handleChange(label, event.target.checked)}
										className="h-4 w-4 rounded border-[#c5a059] bg-transparent text-[#c5a059] focus:ring-[#c5a059]"
									/>
									<span>{data.optionLabel || "Yes"}</span>
								</label>
							)}
						</div>
					</div>
				)
			case "radio":
				return (
					<div key={fieldId} className="flex flex-col gap-3">
						<span className="text-sm tracking-wider uppercase text-gray-400">{label}</span>
						<div className="flex flex-col gap-3 rounded-sm border border-[#c5a059] bg-[#0a0a0a] p-4">
							{Array.isArray(data.options) && data.options.length > 0 ? (
								data.options.map((option, optionIndex) => {
									const optionValue = getOptionValue(option, optionIndex)
									const isChecked = formData[label] === optionValue

									return (
										<label key={`${fieldId}-${optionIndex}`} className="flex items-center gap-3 text-sm text-gray-200">
											<input
												type="radio"
												name={fieldId}
												value={optionValue}
												checked={isChecked}
												required={Boolean(data.required)}
												onChange={(event) => handleChange(label, event.target.value)}
												className="h-4 w-4 border-[#c5a059] bg-transparent text-[#c5a059] focus:ring-[#c5a059]"
											/>
											<span>{optionValue}</span>
										</label>
									)
								})
							) : null}
						</div>
					</div>
				)
			case "select":
				return (
					<div key={fieldId} className="flex flex-col gap-2">
						<label htmlFor={fieldId} className="text-sm tracking-wider uppercase text-gray-400">
							{label}
						</label>
						<select
							id={fieldId}
							value={formData[label] || ""}
							required={Boolean(data.required)}
							onChange={(event) => handleChange(label, event.target.value)}
							className={baseInputClass}
						>
							<option value="">{data.placeholder || `Select ${label}`}</option>
							{Array.isArray(data.options)
								? data.options.map((option, optionIndex) => {
										const optionValue = getOptionValue(option, optionIndex)
										return (
											<option key={`${fieldId}-${optionIndex}`} value={optionValue}>
												{optionValue}
											</option>
										)
								  })
								: null}
						</select>
					</div>
				)
			default:
				return null
		}
	}

	if (loading) {
		return <div className="text-gray-300">Loading form...</div>
	}

	const handleSubmit = async (event) => {
		event.preventDefault()

		const payload = {
			type: "join",
			formData,
		}

		try {
			const response = await apiClient.post("/submissions", payload)

			console.log("Form submission response:", response)
			window.alert(response?.data?.message || "Application submitted successfully!")
			setFormData({})
		} catch (submitError) {
			console.error("Form submission failed:", submitError?.response?.data || submitError)
			const apiMessage = submitError?.response?.data?.message
			const fallbackMessage = submitError instanceof Error ? submitError.message : "Unable to submit form right now."

			setError(apiMessage || fallbackMessage)
		}
	}

	return (
		<form className="flex flex-col gap-6 font-ibm-plex" onSubmit={handleSubmit}>
			{error ? (
				<div className="rounded-lg border border-red-500/30 bg-red-950/30 px-4 py-3 text-sm text-red-100" aria-live="polite">
					{error}
				</div>
			) : null}

			{schema.map((block, index) => renderField(block, index))}

			<div className="pt-4">
				<button
					type="submit"
					className="w-full rounded-sm bg-[#c5a059] px-8 py-4 text-sm font-bold uppercase tracking-widest text-black shadow-lg transition hover:bg-[#a67c2f] focus:outline-none focus:ring-2 focus:ring-[#c5a059] focus:ring-offset-2"
				>
					Submit Application
				</button>
			</div>
		</form>
	)
}