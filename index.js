import {posts} from './data.js'


const postsContainer = document.querySelector(".posts")



function renderPosts() {
    let postHTML = ""

    for (const post of posts) {
        postHTML += `
        <div class="profile">
            <div class="profile-header">
                <img src="${post.avatar}" alt="Avatar Image" class="poster-profile">
                <p>
                    ${post.name}
                    <span class="poster-location">${post.location}</span>
                </p>
            </div>

            <div class="profile-content">
                <img src="${post.post}" alt="Post Image" >
            </div>

            <div class="profile-footer">
                <div class="react-container">
                    <img src="images/icon-heart.png" alt="Heart Icon">
                    <img src="images/icon-comment.png" alt="Comment Icon">
                    <img src="images/icon-dm.png" alt="Share Icon">
                </div>

                <div class="likes-comments">
                    <p>${post.likes} likes</p>
                    <p>${post.username}<span> ${post.comment}</span></p>
                </div>
            </div>
        </div>
        `
    }

    postsContainer.innerHTML = postHTML
}
renderPosts()






