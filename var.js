// console.log('Abu Rayhan', 'Abu Rayhan'.length);

// throw new Error('Something went wrongR')


// the above code is an example of runtime error



// console.log('Abu Rayhan', 'Abu Rayhan'.length);

// 1213215631515641g54g;

// the above code is compile time error


// console.log(x);  // undefined (no error)
// var x = 10;
// console.log(x);  // 10


// the above is an example of var hoisting




let names = [
    'abu rayhan', 'shaker hossain', 'akib ahmad', 'alvi chowdhuri'
];

let index = -1 ; 

let name = names[++index]


setInterval(()=>{
    name = names[index++];
    console.log(name, name.length);


    if(index === names.length){
        index = 0;
    }
}, 1000)

// console.log(name, name.length);

