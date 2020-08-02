export const getDataFromApi = async(url) => {
	try {
		const response = await fetch(url);
        const data = await response.json();
        return data;
	} catch (error) {
		console.log(error)
	}
}

export const putDataToApi = async({url, product}) => {
	try {
		const response = await fetch(url, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json" 
			},
			body: JSON.stringify(product)
		});
        const data = await response.json();
        return data;
	} catch (error) {
		console.log(error)
	}
}

export const postDataToApi = async({url, user}) => {
	try {
		const response = await fetch(url, {
			method: "POST",
			headers: {
				"Content-Type": "application/json" 
			},
			body: JSON.stringify(user)
		});
		const data = await response.json();
        return data;
	} catch (error) {
		console.log(error)
	}

}