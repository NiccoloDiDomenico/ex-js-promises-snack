// Snack 1 
function getPostTitle(id) {
    return new Promise((resolve, reject) => {
        fetch(`https://dummyjson.com/posts/${id}`)
            .then(response => response.json())
            .then(resolve)
            .catch(reject)
    })
}

// getPostTitle(3)
//     .then(data => console.log(data))
//     .catch(error => console.error(error))


// Snack 1 (Bonus)
function getPost(id) {
    return new Promise((resolve, reject) => {
        fetch(`https://dummyjson.com/posts/${id}`)
            .then(response => response.json())
            .then(post => {
                fetch(`https://dummyjson.com/user/${post.userId}`)
                    .then(response => response.json())
                    .then(user => resolve({ ...post, user }))
            })
            .catch(reject)
    })
}

// getPost(2)
//     .then(data => console.log(data))
//     .catch(error => console.error(error))

