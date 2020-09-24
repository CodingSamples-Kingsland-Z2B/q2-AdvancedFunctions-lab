function main(inputNum){
    let holder = inputNum;
    return function(ad  dNum){
      /*   holder+= addNum; */
        
        return holder +addNum;
    };
}


let add5 =main(5/* inputNum */);
console.log(main(5)(2)+"\n");

console.log(add5(2/* addNum */));
console.log(add5(3));