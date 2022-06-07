const sentence = 'hello there from lighthouse labs \n';
let time = 500;
for (let char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, time);
  time += 500;
}
