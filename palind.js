function palindrome(s){
    if(s.length<1000){
        const reversedS = s.split('').reverse().join('');
        return s.toLowerCase() === reversedS.toLowerCase();
    }
    
    }
 
console.log(palindrome('Bernard'))

console.log(palindrome('Non'))
