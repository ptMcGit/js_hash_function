#!/usr/bin/env node

var letters = "acdegilmnoprstuw";

var num = 37;


function myHash64(s){
    var h = 7;
    var i;
    for(i = 0; i < s.length; i++)
        h = (h * num + letters.indexOf(s[i]));
    return h;
}
console.log(myHash64("leepadg"));

function reverseMyHash64(n){
    var s ='';
    while(n > 7){
        for(i = 0; i < letters.length; i++) {
            if((n - i) % num === 0) {
                n = ((n - i) / num);
                if(n > 0)
                    s += letters[i];

            }
        }
    }
    return s.split("").reverse().join("");
}

console.log(reverseMyHash64(930846109532517));

console.log(myHash64("leepadg"));
console.log(reverseMyHash64(680131659347));