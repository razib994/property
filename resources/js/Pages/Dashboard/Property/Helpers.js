import { format } from "date-fns";

export const formatDateTime = (dateTime = "", dateFormat = "dd/MM/yyyy, p") => {
	if (dateTime) {
		let date = format(new Date(dateTime), dateFormat);
		return date;
	} else {
		return "";
	}
};

export const findValue = (val = null, options = []) => {
	let obj = null;
	if (val && (val.constructor.name == "String" || val.constructor.name == "Number")) {
		options.map((i, k) => {
			if (i.value == val) {
				obj = i;
			}
		});
	} else if (val && val.constructor.name == "Array") {
		obj = [];
		val.map((j) => {
			obj.push(findValue(j, options));
		});
	}

	return obj;
};

export const makeRandomString = (n = 6) => {
	let text = "";
	let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

	for (let i = 0; i < n; i++) text += possible.charAt(Math.floor(Math.random() * possible.length));
	return text.toUpperCase();
};

// GA & PIXEL
export const makeGAEvent = (action, params = { event_category, event_label, value }) => {
	if (process.env.NODE_ENV == "development") {
		console.log("%cTHIS WILL BE SENT TO GOOGLE ANALYTICS:", "background: #000; color: #bada55");
		// console.log(`%cwindow.gtag("event", ${JSON.stringify(action, null, 2)}, ${JSON.stringify(params, null, 2).replace(/"([^"]+)":/g, "$1:")});`, "color: #bada55");
		console.log(`%cwindow.gtag("event", ${JSON.stringify(action, null, 2)}, ${JSON.stringify(params, null, 2)});`, "color: #bada55");
	} else {
		if (window && window.gtag && typeof window.gtag === "function") {
			// console.log("%cTHIS WILL BE SENT TO GOOGLE ANALYTICS:", "background: #000; color: #bada55");
			// console.log(`%cwindow.gtag("event", ${JSON.stringify(action, null, 2)}, ${JSON.stringify(params, null, 2)});`, "color: #bada55");
			window.gtag("event", action, params);
		}
	}
};

export const handleChangeByIndex = ({ event, values, setValues, index, keyName = null, action = "update", template = null }) => {
	if (Array.isArray(keyName) || Array.isArray(index)) {
		if (!Array.isArray(keyName) || !Array.isArray(index)) {
			return null;
		}
	}

	if (action == "update") {
		let updatedValues = { ...values };
		const key = event.target.name;
		const value = event.target.value;
		if (keyName) {
			if (Array.isArray(keyName)) {
				// if (!updatedValues[keyName[0]][index[0]][keyName[1]]) {
				// 	updatedValues[keyName[0]][index[0]][keyName[1]] = [];
				// }
				const changedItems = updatedValues[keyName[0]][index[0]][keyName[1]];
				changedItems[index[1]][key] = value;
				updatedValues[keyName[0]][index[0]][keyName[1]] = changedItems;
			} else {
				const changedItems = updatedValues[keyName];
				changedItems[index][key] = value;
				updatedValues[keyName] = changedItems;
			}
		} else {
			updatedValues[index][key] = value;
		}
		setValues(updatedValues);
	} else if (action == "add") {
		const updatedValues = { ...values };
		if (keyName) {
			if (Array.isArray(keyName)) {
				if (!updatedValues[keyName[0]][index[0]][keyName[1]]) {
					updatedValues[keyName[0]][index[0]][keyName[1]] = [];
				}
				const changedItems = updatedValues[keyName[0]][index[0]][keyName[1]];
				changedItems.push(template);
				updatedValues[keyName[0]][index[0]][keyName[1]] = changedItems;
			} else {
				const changedItems = updatedValues[keyName];
				changedItems.push(template);
				updatedValues[keyName] = changedItems;
			}
		} else {
			updatedValues.push(template);
		}
		setValues(updatedValues);
	} else if (action == "remove") {
		let updatedValues = { ...values };
		if (keyName) {
			if (Array.isArray(keyName)) {
				const changedItems = updatedValues[keyName[0]][index[0]][keyName[1]];
				changedItems.splice(index[1], 1);
				updatedValues[keyName[0]][index[0]][keyName[1]] = changedItems;
			} else {
				const changedItems = updatedValues[keyName];
				changedItems.splice(index, 1);
				updatedValues[keyName] = changedItems;
			}
		} else {
			changedItems.splice(index, 1);
		}
		setValues(updatedValues);
	}
};

export const isValidHttpUrl = (string) => {
	let url;
	try {
		url = new URL(string);
	} catch (_) {
		return false;
	}
	return url.protocol === "http:" || url.protocol === "https:";
};
