async function greet() {
return "Hello World!";
}
async function main() {
const message = await greet();
console.log(message);
}
main();