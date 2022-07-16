console.log(`asynchronous programming`);

setTimeout(() => {
    
    for (let i = 1; i < 1000; i++) {
        const element = i;
        console.log(i);
    }
}, 200);



console.log(`printing is going on!!`);