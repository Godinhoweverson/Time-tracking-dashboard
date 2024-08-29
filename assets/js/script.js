let timeTracking 


fetch('/data.json').then((request) =>{
    if(!request.ok){
        console.log('Oops! Something went wrong.')
        return null
    }
    return request.json()
}).then((data) => {
    timeTracking = data
    handleData()
})
let data = [];
const handleData = function  (){
 
    timeTracking.forEach(element => {
        data.push(timeTracking[i])
    });
       
    
    
}

console.log(data.length)

