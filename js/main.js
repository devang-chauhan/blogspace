
const blogsEl = document.getElementById("blogs");

function injectPosts(posts) {
    let html = '';
    for (let post of posts){
        html += `
            <div class="post">
                <h3>${post.title}</h3>
                <p>${post.body}</p>
                <hr />
            </div>
        `;
    }
    blogsEl.innerHTML = html;
}




fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(response => response.json())
    .then(data => {
        const posts = data.slice(0, 5);
        injectPosts(posts);
    });
    





