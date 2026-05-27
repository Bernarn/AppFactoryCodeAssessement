function palindrome(s){
    const reversedS = s.split('').reverse().join('');
    return s.toLowerCase() === reversedS.toLowerCase();

}

console.log(palindrome('Bob'))