import makeRequest from './authHelpers.js';
import Auth from './auth.js';

// makeRequest('login, 'POST',  {
//    password: 'user1',
//    email: 'user1@email.com'
//    });

document.querySelector('form').onsubmit = login

function login(event) {
    event.preventDefault();

    const auth = new Auth();

    auth.login(getPosts);

    async function getPosts() {
        const posts = await makeRequest('posts', 'GET', null, auth.token)
        posts.forEach post => {
            const postDiv = document.createElement('div');
            postDiv.innerHTML =
                <h2>${post.title}</h2>
                <p>${post.content}</p>

            document.getElementById('posts').appendChild(postDiv);
        } // )
    }

    return false;

}