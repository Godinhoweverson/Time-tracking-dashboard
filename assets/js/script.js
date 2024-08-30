const daily = document.getElementById('daily')
const weekly = document.getElementById('weekly')
const monthly = document.getElementById('monthly')
const time = [...document.querySelectorAll('.time > p')]
const previous = [...document.querySelectorAll('.last-update > span')]

// Declare variables to store the time tracking data and to check if a timeframe has been selected
let timeTracking 
let timeframes = false 

// Get the Json file
fetch('data.json').then((request) =>{
    if(!request.ok){
        console.log('Oops! Something went wrong.')
        return null
    }
    return request.json()
}).then((data) => {
    timeTracking = data// Store the data in timeTracking
    handleData() // Call the function to handle the data
})



//Initial Display
const displayData = function (){
    weekly.style.color = 'white'
    time.map((t , i) =>{
        t.innerHTML = `${timeTracking[i]. timeframes.weekly.current}hrs`
    })

    previous.map((p , i) =>{
        p.innerHTML = `Last Week - ${timeTracking[i]. timeframes.weekly.previous}hrs`
    })
}



const dailyData = daily.addEventListener('click', () => {
    
timeframes = true

    // Update the time elements with the weekly current hours data
    time.map((t , i) =>{
        t.innerHTML = `${timeTracking[i]. timeframes.daily.current}hrs`
    })

    // Update the previous elements with the weekly previous hours data
    previous.map((p , i) =>{
        p.innerHTML = `Last Week - ${timeTracking[i]. timeframes.daily.previous}hrs`
    })
   
    if(timeframes){
        // Change button colors to indicate the active selection
        daily.style.color = 'white'
        weekly.style.color = 'hsl(235, 45%, 62%)'
        monthly.style.color = 'hsl(235, 45%, 62%)'
    }

    
})

const WeeklylData = weekly.addEventListener('click', () => {
    
    timeframes = true
        
    // Update the time elements with the weekly current hours data
    time.map((t , i) =>{
        t.innerHTML = `${timeTracking[i]. timeframes.weekly.current}hrs`
    })

    // Update the previous elements with the weekly previous hours data
    previous.map((p , i) =>{
        p.innerHTML = `Last Week - ${timeTracking[i]. timeframes.weekly.previous}hrs`
    })
 
    if(timeframes){
        // Change button colors to indicate the active selection
        weekly.style.color = 'white'
        daily.style.color = 'hsl(235, 45%, 62%)'
        monthly.style.color = 'hsl(235, 45%, 62%)'
    }
})

const monthlyData = monthly.addEventListener('click', () => {
    
    timeframes = true

    // Update the time elements with the weekly current hours data
    time.map((t , i) =>{
        t.innerHTML = `${timeTracking[i]. timeframes.monthly.current}hrs`
    })

     // Update the previous elements with the weekly previous hours data
    previous.map((p , i) =>{
        p.innerHTML = `Last Week - ${timeTracking[i]. timeframes.monthly.previous}hrs`
    })
    
    if(timeframes){
        // Change button colors to indicate the active selection
        monthly.style.color = 'white'
        daily.style.color = 'hsl(235, 45%, 62%)'
        weekly.style.color = 'hsl(235, 45%, 62%)'
    }
})

// Function to handle the data once it's fetched and display the initial data
const handleData = function  (){
    displayData()// Call the displayData function to set the initial view
}


