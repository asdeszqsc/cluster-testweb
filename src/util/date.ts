/**
 * ISO 8601 형식의 문자열을 지정된 형식으로 변환
 * @param isoString - YYYY-MM-DDTHH:mm:ss.SSSSSSSSS 형식의 문자열
 * @param format - 변환하려는 날짜 포맷 (예: "YYYY.MM.DD HH:mm")
 * @returns 포맷에 맞게 변환된 문자열
 */
export const formatIsoDate = (isoString: string, format: string): string => {
	const date = new Date(isoString);

	if (Number.isNaN(date.getTime())) {
		return "";
	}

	const components = {
		YYYY: String(date.getFullYear()),
		YY: String(date.getFullYear()).slice(-2),
		MM: String(date.getMonth() + 1).padStart(2, "0"),
		DD: String(date.getDate()).padStart(2, "0"),
		HH: String(date.getHours()).padStart(2, "0"),
		hh: String(date.getHours() % 12 || 12).padStart(2, "0"),
		mm: String(date.getMinutes()).padStart(2, "0"),
		ss: String(date.getSeconds()).padStart(2, "0"),
		A: date.getHours() < 12 ? "AM" : "PM",
	};

	let formattedDate = format;
	Object.entries(components).forEach(([key, value]) => {
		const regex = new RegExp(`\\b${key}\\b`, "g");
		formattedDate = formattedDate.replace(regex, value);
	});

	return formattedDate;
};
