//#region node_modules/.nitro/vite/services/ssr/assets/nexusId-CU7anTOa.js
var NEXUS_ID_PATTERN = /^10\d{8}$/;
function stripPrefix(value) {
	return String(value || "").trim().replace(/^#\s*/, "").replace(/^NEXUS(?:\s*[-:]?\s*)/i, "");
}
function parseNexusId(value) {
	const source = stripPrefix(value);
	if (!source) return {
		status: "partial_match",
		value: "",
		displayValue: ""
	};
	if (!/^[0-9\s-]+$/.test(source)) return {
		status: "invalid",
		value: "",
		displayValue: source
	};
	const digits = source.replace(/[\s-]/g, "").replace(/^0+(?=\d)/, "");
	if (digits.length < 10) return {
		status: "partial_match",
		value: digits,
		displayValue: formatNexusId(digits)
	};
	if (!NEXUS_ID_PATTERN.test(digits)) return {
		status: "invalid",
		value: digits,
		displayValue: formatNexusId(digits)
	};
	return {
		status: "exact_match",
		value: digits,
		displayValue: formatNexusId(digits)
	};
}
function normalizeNexusId(value) {
	return cleanNexusId(value);
}
function cleanNexusId(input) {
	const parsed = parseNexusId(input);
	return parsed.status === "exact_match" ? parsed.value : null;
}
function getMemberNexusId(member) {
	return normalizeNexusId(member?.nexus_id || member?.member_id || member?.nexusId || member?.memberId);
}
function formatNexusId(value) {
	const digits = String(value || "").replace(/\D/g, "").slice(0, 10);
	if (digits.length <= 2) return digits;
	if (digits.length <= 6) return `${digits.slice(0, 2)}-${digits.slice(2)}`;
	return `${digits.slice(0, 2)}-${digits.slice(2, 6)}-${digits.slice(6)}`;
}
//#endregion
export { parseNexusId as i, getMemberNexusId as n, normalizeNexusId as r, formatNexusId as t };
