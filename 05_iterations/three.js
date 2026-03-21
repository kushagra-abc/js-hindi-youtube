//for of
// ['',""]
// [{},{}]

const arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(num);
    
}

const greeting= "HEllo world"
for (const greet of greeting) {
    // console.log(`each char is ${greet}`);
        
}

//maps

const map = new Map()
map.set('IN',"India")
map.set('USA', "United states of america")
map.set('Fr',"France")

map.set('USA', "United states of america")
map.set('Fr',"France")

// console.log(map);

for (const [key,val] of map) {
    // console.log(key,':-',val);
    
}

const myObj={
    gane1:'NFS',
    game2:'spiderman'
}

// for (const [key,val] of myObj) {
//     console.log(key,':-',val);
// }

