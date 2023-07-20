// Que-1 ----------------------------------------------- 
let a = document.getElementById("text");
    console.log(a)




// Que-2 -----------------------------------------------
let b = document.getElementsByTagName("h1");
            console.log(b)



// Que-3 -----------------------------------------------
    let c = document.querySelector(".box");
            console.log(c)


// Que-4 -----------------------------------------------

    let heading1 = document.getElementById("myHeading-1");
            heading1.textContent = "Hello World";
            console.log(heading1)

// Que-5 -----------------------------------------------
        function replaceText() {
            const contentElement = document.querySelector("#abc");
            contentElement.textContent = ("Welcome to Elevation academy");
        }

// Que-6 -----------------------------------------------

        const Heading = document.getElementById("myHeading");
        Heading.style.color = 'red';
        Heading.setAttribute("id", "heading");

// Que-7 -----------------------------------------------

        function changeFlexDirection() {
        const container = document.querySelector('.container');
        const currentFlexDirection = container.style.flexDirection;
        

        if (currentFlexDirection === 'row') {
        container.style.flexDirection = 'column';
        } else {
        container.style.flexDirection = 'row';
        }
    }

// Que-8 -----------------------------------------------

function formatTime(time) {
    return time < 10 ? `0${time}` : time; // Add leading zero if time is less than 10
  }
  
  function updateClock() {
    var now = new Date();
    var hours = formatTime(now.getHours());
    var minutes = formatTime(now.getMinutes());
    var seconds = formatTime(now.getSeconds());
  
    var clock = document.getElementById('clock');
    clock.textContent = hours + ':' + minutes + ':' + seconds;
  }
  

setInterval(updateClock, 1000);