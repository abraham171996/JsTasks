const div = document.querySelector("div")
let url = "https://api.github.com/users/Ali-GreenHeart"

async function getUserData(url) {
	try {
		const response = await axios.get(url);
       const data = response.data
       console.log(data);
       return div.innerHTML = `<img src=${data.avatar_url} alt="">
       <p>Public repo: ${data.public_repos}</p>
       <p>Followers: ${data.followers}</p>
       <p>Following: ${data.following}</p>
       `


	}
	catch (error) {
		console.log(error);
	}
}

getUserData(url)