#!/usr/bin/env node

// create hashing function with createHasher()
// where chars is the group of hashable characters
// and init and num are used to create the hash

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
