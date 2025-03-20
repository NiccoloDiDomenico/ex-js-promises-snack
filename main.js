// Snack 1 
function getPostTitle(id) {
    return new Promise((resolve, reject) => {
        fetch(`https://dummyjson.com/posts/${id}`)
            .then(response => response.json())
            .then(post => resolve(post.title))
            .catch(reject)
    })
}

// getPostTitle(3)
//     .then(title => console.log(title))
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
                    .catch(reject)
            })
            .catch(reject)
    })
}

// getPost(2)
//     .then(post => console.log(post))
//     .catch(error => console.error(error))


// Snack 2
function lanciaDado() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const diceValue = Math.floor(Math.random() * 6) + 1;
            const isStuck = Math.random()
            if (isStuck < 0.2) {
                reject('Dado incastrato')
            } else {
                resolve(`Dado uscito: ${diceValue}`)
            }
        }, 3000)
    })
}

// lanciaDado()
//     .then(result => console.log(result))
//     .catch(error => console.error(error))


// Snack 2 (Bonus)
function creaLanciaDado() {
    let lastDice = null

    return () => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const diceValue = Math.floor(Math.random() * 6) + 1;
                const isStuck = Math.random() < 0.2;

                if (isStuck) {
                    lastDice = null
                    reject('Dado incastrato')
                } else {
                    if (diceValue === lastDice) {
                        console.log('Incredibile!');
                    }
                    lastDice = diceValue
                    resolve(`Dado uscito: ${diceValue}`)
                }
            }, 3000)
        })
    }
}

const lanciaUnDado = creaLanciaDado();

// lanciaUnDado()
//     .then(result => {
//         console.log(result)
//         lanciaUnDado()
//             .then(result => console.log(result))
//             .catch(error => console.error(error))
//     })
//     .catch(error => console.error(error))