

console.log('#'.repeat(77));
console.log('Question 2');
console.log('#'.repeat(77));
// Exercise 2 - Promises 
// Using the below getMovieInfo function, which is a Promised-base function, write an asynchronous function (.then().catch() or async/await) called printMovieInfo that will take in a movie title and then either displays the movie information or logs an error with a console.warn().

function getMovieInfo(movieName){
    return new Promise((resolve, reject) => {
        if (movieName.length > 5){
            let movie = {
                id: 123,
                title: movieName,
                director: 'Christopher Spielberg',
                runtime: 157,
                description: 'Good vs Evil'
            }
            resolve(movie)
        } else {
            reject(`${movieName} cannot be accessed because it is too short.`)
        }
    })
}

function printMovieInfo(){};

// Example 1
printMovieInfo('Indiana Jones and the Dark Knight')
// Output: Indiana Jones and the Dark Knight directed by Christopher Spielberg. A story of Good vs Evil that runs for 157 minutes.

// Example 2
printMovieInfo('ET')
// Output: *Warning* ET cannot be accessed because it it too short

async function printMovieInfo(movieTitle) {
    try {
        const movie = await getMovieInfo(movieTitle);
        console.log('Movie Information:');
        console.log(`Title: ${movie.title}`);
        console.log(`Director: ${movie.director}`);
        console.log(`Runtime: ${movie.runtime} minutes`);
        console.log(`Description: ${movie.description}`);
    } catch (error) {
        console.warn(error);
    }
}


