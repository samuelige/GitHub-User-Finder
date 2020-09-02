class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }

    showProfile(user) {
        this.profile.innerHTML =`
        <div class="card card-body mb-3">
            <div class="row">
                <div class="col-md-3">
                    <img class="img-fluid mb-2" src="${user.avatar_url}">
                    <a href="${user.html_url}" target="_blank" class="btn btn-primary btn-block mb-4">View profile</a>
                </div>
                <div class="col-md-9">
                    <span class="badge badge-secondary"> Public Repos: ${user.public_repos}</span>
                    <span class="badge badge-primary"> Public Gists: ${user.public_gists}</span>
                    <span class="badge badge-success"> Public Followers: ${user.followers}</span>
                    <span class="badge badge-info"> Public following: ${user.following}</span>
                </div>
                <br></br>
                <ul class="list-group">
                    <li class="list-group-item">Company: ${user.company}</li>
                    <li class="list-group-item">Website/Blog: ${user.blog}</li>
                    <li class="list-group-item">Location: ${user.location}</li>
                    <li class="list-group-item">Member Since: ${user.created_at}</li>
                </ul>
            </div>
        </div>
        <h3 class="page-heading mb-3">Latest Repos</h3>
        <div id="repos"></div>
        `;
    }
    //  Show User repos
    showRepos(repos) {
        let output = '';

        repos.forEach((repo) => {
            output += `
                <div class="card card-body mb-2">
                    <div class="row">
                        <div class="col-md-6">
                            <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                            <span class="badge badge-secondary"> Stars: ${repo.stargazers_count}</span>
                            <span class="badge badge-primary"> Watchers: ${repo.watchers_count}</span>
                            <span class="badge badge-secondary"> Forks: ${repo.forms_count}</span>
                        </div>
                    </div>
                </div>
            `;
        });
        // Output repos
        document.getElementById('repos').innerHTML = out
    }
    // Show Alert
    showAlert(message, className){
        // Clear any remaining Alert
        this.clearAlert();
        // Create Div
        const div = document.createElement('div');
        // Add class
        div.className = className;
        // Add text
        div.appendChild(document.createTextNode(message));
        // To insert it. Get parent
        const container = document.querySelector('.searchContainer');
        // Get search box
        const search = document.querySelector('.search');
        // Insert Alert
        container.insertBefore(div, search);

        setTimeout (() => {
            this.clearAlert();
        }, 4000);
        
    }
    clearAlert(){
        const currentAlert = document.querySelector('.alert');
        currentAlert ? currentAlert.remove() : 0;
    }

    clearProfile(user) {
        this.profile.innerHTML = '';
    }
}