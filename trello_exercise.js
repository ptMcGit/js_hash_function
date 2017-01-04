#!/usr/bin/env node

module.exports.createHasher = function createHasher(init, num, chars){
    var init = init;
    var num = num;
    var chars = chars;

    function MyHasher(init){
        this.hash = function(s){
            var h = init;
            for(i = 0; i < s.length; i++)
                h = (h * num + chars.indexOf(s[i]));
            return h
        }
        this.reverseHash = function(n){
            var s ='';
            while(n > init){
                for(i = 0; i < chars.length; i++) {
                    if((n - i) % num === 0) {
                n = ((n - i) / num);
                if(n > 0)
                    s += chars[i];
                    }
                }
            }
            return s.split("").reverse().join("");
        }
    }
    return new MyHasher(init);
}

//var myHasher = createHasher(7,37,'acdegilmnoprstuw');
//console.log(myHasher.hash("leepadg"));
//console.log(myHasher.reverseHash(930846109532517));
