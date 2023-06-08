const div = document.querySelector("div")
let url = "https://api.github.com/users/Ali-GreenHeart"

async function reposData(url) {
	try {
		const response = await axios.get(url);
       const data = response.data.repos_url
       const res = await axios.get(data)
       const dat = res.data
       let repo = []
       dat.forEach(element => {
            repo.push(`${element.name} <br>`)
       });
       div.innerHTML = `${repo.join("").toUpperCase()}`


	}
	catch (error) {
		console.log(error);
	}
}

reposData(url)