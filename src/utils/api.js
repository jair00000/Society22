import axios from "axios"

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000/api"

export const apiClient = axios.create({
	baseURL: API_BASE_URL,
	headers: {
		"Content-Type": "application/json",
		Accept: "application/json",
	},
	withCredentials: import.meta.env.VITE_API_WITH_CREDENTIALS === "true",
})

export async function submitContactForm(payload) {
	const { data } = await apiClient.post("/submissions", payload)
	return data
}

export async function submitJoinApplication(payload) {
	const { data } = await apiClient.post("/submissions", payload)
	return data
}

function unwrapApiPayload(payload) {
	if (!payload) return []
	if (Array.isArray(payload)) return payload
	if (Array.isArray(payload.data)) return payload.data
	return []
}

export async function fetchPublishedPosts(type) {
	const { data } = await apiClient.get("/posts", {
		params: type ? { type } : undefined,
	})

	return unwrapApiPayload(data)
}

export async function fetchPublishedPostById(id) {
	const { data } = await apiClient.get(`/posts/${id}`)

	if (data && data.data && typeof data.data === "object") {
		return data.data
	}

	return data
}
