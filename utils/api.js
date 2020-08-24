const api = {
    async getUser (username, reponame){
        const axios = require('axios')
        const {data} = await axios.get(`https://api.github.com/search/repositories?q=${reponame}+user:${username}`)
    if(data.total_count === 0) return false
    return {
        name: data.items[0].owner.login,
        avatar: data.items[0].owner.avatar_url,
        link: data.items[0].owner.html_url,
        title: data.items[0].full_name,
        desc: data.items[0].descirption,
        lic: data.items[0].license
        }
    }
}

module.exports = api