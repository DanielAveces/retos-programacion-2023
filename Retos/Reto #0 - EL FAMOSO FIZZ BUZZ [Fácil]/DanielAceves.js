function fizzBuzz () {
    for (let i = 1; i < 101; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('FizzBuzz \n');
        } 
        else if (i % 5 === 0) {
            console.log('Buzz \n');
        }
        else if (i % 3 === 0) {
            console.log('Fizz \n');
        }
        else {
            console.log(i + "\n");
        }
    }
}

fizzBuzz();