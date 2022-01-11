let age=function () {
    let diff=new Date().getTime() - new Date('1983.11.02');
    let diffdays = diff / 1000 / (60 * 60 * 24);
    let age=Math.floor(diffdays / 365.25);
    return age;
}  

number=age();

console.log(number);