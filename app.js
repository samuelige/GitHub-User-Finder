// Init GitHub
const gitHub = new GitHub;
// Init UI
const ui = new UI;
//  Seach Input
const inputField = document.getElementById('searchUser');
//  Search Inpt Event listener
inputField.addEventListener('keyup', (e) => {
    // Get Input
    const userText = e.target.value;

    if(userText !== ''){
        // Make HTTP call   
        gitHub.getUser(userText)
            .then(data => {
                if(data.profile.message === 'Not Found') {
                    //  Show alert 
                    ui.showAlert('User not found', 'alert alert-danger');
                }else {
                    // Show Profile
                    ui.showProfile(data.profile);
                    ui.showRepos(data.repos);
                }
            })
    }else {
        //  Clear profile
        ui.clearProfile();
    }
});