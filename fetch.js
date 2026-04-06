import { apiUrl } from "./read.js";

async function fetchTodo() {

try {
const response = await
fetch(apiUrl);

if (!response.ok) {
throw new Error(`The HTTP error! Status: ${response.status}`);
}

const data = await response.json();

console.log('------The Fetched Data:------');
console.log(data);
} catch (error) {
console.error('Error fetching data now:'
, error.message);
}
}

fetchTodo();

// {
//     "name"
// }