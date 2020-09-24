function main(){
    let string = "";
    return {
        append:(inputString)=>{
            string+=inputString;
        },
        removeStart:(num2Remove)=>{
            //string = string.substring(num2Remove,string.length);
            string = string.substring(num2Remove);
            
        },
        removeEnd:(num2Remove)=>{
            string = string.substring(0,string.length-num2Remove);
        },
        print:()=>{
            console.log(string);
        }
    };
}



let firstZeroTest = main();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();


let secondZeroTest = main();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();
