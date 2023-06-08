const div = document.querySelector("div")
let url = "https://api.github.com/users/Ali-GreenHeart"

async function follower(url) {
	try {
		const response = await axios.get(url);
        const data = response.data.followers_url
       
        const res = await axios.get(data)
        const dat = res.data
        
        let empty = []
      
        dat.forEach(element => {
            
           empty.push(`<h1>${element.login}</h1> <img src=${element.avatar_url} alt="">`)
           
        });
        div.innerHTML = empty
        
       


	}
	catch (error) {
		console.log(error);
	}
}

follower(url)