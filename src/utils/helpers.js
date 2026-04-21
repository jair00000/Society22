const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000/api"

function getApiOrigin() {
	try {
		return new URL(API_BASE_URL).origin
	} catch {
		return "http://localhost:8000"
	}
}

function trimTrailingSlash(value) {
	return value.replace(/\/+$/, "")
}

function trimLeadingSlash(value) {
	return value.replace(/^\/+/, "")
}

export const STORAGE_BASE_URL =
	import.meta.env.VITE_STORAGE_BASE_URL || `${getApiOrigin()}/storage`

export function resolveFeaturedImageUrl(path, fallback = "") {
	if (!path) return fallback

	if (/^https?:\/\//i.test(path)) {
		return path
	}

	if (path.startsWith("/images/")) {
		return path
	}

	if (path.startsWith("/storage/")) {
		return `${getApiOrigin()}${path}`
	}

	const base = trimTrailingSlash(STORAGE_BASE_URL)
	const normalizedPath = trimLeadingSlash(path)
	return `${base}/${normalizedPath}`
}
