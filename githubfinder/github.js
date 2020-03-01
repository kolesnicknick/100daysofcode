class Github{
    constructor(){
         this.clientID = '8594d67c5bc309743f5a';
         this.clientSecret = '6b414d88144b8abae6857c914bcf40d50263919f';
    }

    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}
        ?client_id=${this.clientID}&client_secret=${this.clientSecret}`)

        const profileData = await profileResponse.json();

        return {
            profile: profileData
        };
    }
}