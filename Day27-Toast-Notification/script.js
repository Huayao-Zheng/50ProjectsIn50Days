const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums',
];

async function asyPromise(urls) {
    const [users, posts, albums] = await Promise.all(urls.map((url) => fetch(url).then((resp) => resp.json())));

    console.log({ users, posts, albums });
}
