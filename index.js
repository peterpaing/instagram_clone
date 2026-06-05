const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]


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






