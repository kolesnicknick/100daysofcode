const axios = require('axios');
let users = (axios.get(`${'https://kwrisandbox.docebosaas.com'}/manage/v1/user/`, {
        headers: {
            'Authorization': `Bearer ${'e6556c2f8a130d6370473f70122b5ed05ae889a3'}`,
            'content-type': 'application/json'
        },
        params: {match_type: 'full', search_text: 466748}

    }
)).then(response => {
    // console.log(response.status);
    console.log(response.data.data.items);
    // console.log(JSON.stringify(response.config.headers));
});

