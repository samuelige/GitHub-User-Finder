class GitHub {
    constructor(){
        this.client_id = '162b2c053be682bd79ae';
        this.client_secret = '9a0da76a47bfeaf5e52c0c0bb9c58fb13142710a';
        this.repos_count = 10;
        this.repos_sort = 'created: asc';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const reposResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();
        const repos = await reposResponse.json();
        return{
            profile,
            repos
        }
    }
}