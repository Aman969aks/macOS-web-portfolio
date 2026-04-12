function updateDateTime() {
    const now = new Date();

    // Extract parts manually
    const weekday = now.toLocaleString('en-US', { weekday: 'short' });
    const day = now.getDate();
    const month = now.toLocaleString('en-US', { month: 'short' });

    let time = now.toLocaleString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    });

    // Fix AM/PM spacing (1:19PM → 1:19 PM)
    time = time.replace(/(AM|PM)/, ' $1');

    // Final format
    const formatted = `${weekday} ${day} ${month} ${time}`;

    document.getElementById("datetime").innerText = formatted;
}

// Run
setInterval(updateDateTime, 1000);
updateDateTime();

const icons = document.querySelectorAll('.dock-icon');




// icons.forEach((icon, index) => {
//     icon.addEventListener('mousemove', () => {
//         icons.forEach((i, iIndex) => {
//             let distance = Math.abs(index - iIndex);

//             if (distance === 0) {
//                 i.style.transform = "scale(1.5) translateY(-10px)";
//             } else if (distance === 1) {
//                 i.style.transform = "scale(1.2) translateY(-5px)";
//             } else {
//                 i.style.transform = "scale(1)";
//             }
//         });
//     });

//     icon.addEventListener('mouseleave', () => {
//         icons.forEach(i => {
//             i.style.transform = "scale(1)";
//         });
//     });
// });




let input = document.getElementById('inputBox');
let button = document.querySelectorAll('button');

let string = "";
let arr = Array.from(button);
arr.forEach(button => {
    button.addEventListener('click',(e) => {
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }
        else{string += e.target.innerHTML;
        input.value = string;
        }
    })

})



const calc = document.getElementById("calculator");
const titlebar = document.getElementById("titlebar");

let offsetX = 0, offsetY = 0, isDragging = false;

titlebar.addEventListener("mousedown", (e) => {
    isDragging = true;
    offsetX = e.clientX - calc.offsetLeft;
    offsetY = e.clientY - calc.offsetTop;
});

document.addEventListener("mousemove", (e) => {
    if (isDragging) {
        calc.style.left = (e.clientX - offsetX) + "px";
        calc.style.top = (e.clientY - offsetY) + "px";
    }
});

document.addEventListener("mouseup", () => {
    isDragging = false;
});


//open Calculator
function openCalculator() {
    const calc = document.getElementById("calculator");
    calc.style.display = "block";
}

//close Calculator
function closeApp() {
    document.getElementById("calculator").style.display = "none";
}

function minimizeApp() {
    document.getElementById("calculator").style.display = "none";
}