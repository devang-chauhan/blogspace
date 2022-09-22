
function injectPosts(posts) {
    let html = '';
    for (let post of posts){
        html += `
            <div class="post">
                <h3>${post.title}</h3>
                <p>${post.body}</p>
            </div>
        `;
    }
    document.getElementById("blogs").innerHTML = html;
}




fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(response => response.json())
    .then(data => {
        const posts = data.slice(0, 5);
        injectPosts(posts);
    });
    



document.getElementById("new-post").addEventListener("submit", function(e) {
    e.preventDefault();
    const title = document.getElementById("title").value;
    const body = document.getElementById("body").value;
    const data = {
        "title": title,
        "body": body
    };
    console.log(data);
});




