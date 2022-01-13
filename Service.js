async function create(data){
	await axios.post("http://localhost:8080/databarang/pendataan", data)
	.then((result) => {
			console.log(result)
			return result.data
	}).catch((err) => {
			console.error(err)
	});
}

function getAll(){
	const respon = axios.get("http://localhost:8080/databarang/pendataan")
	const dr = respon.then(resp => resp.data)
	return dr

}

