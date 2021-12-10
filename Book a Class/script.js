const months =[
    {name: "January", days: 31},
    {name: "Febuary", days: 28},
    {name: "March", days: 31},
    {name: "April", days: 30},
    {name: "May", days: 31},
    {name: "June", days: 30},
    {name: "July", days: 31},
    {name: "August", days: 31},
    {name: "September", days: 30},
    {name: "October", days: 31},
    {name: "November", days: 30},
    {name: "December", days: 31},
];

const today = new Date(); 
let pickedMonth = today.getMonth();
let currentYear = today.getFullYear();
// gets the day of the week of previous month
let lastmonthdate = new Date(currentYear, pickedMonth, 0);
let endOfLastMonth = lastmonthdate.getDay();
printyear(endOfLastMonth);

function printyear(endOfLastMonth){
    let currentday = endOfLastMonth+1;
   
    for(let i = 0; i < months.length; i++){
        if(i == pickedMonth){
            for(let j = 1; j <= months[i].days; j++) { 
                let dayoftheweek = currentday % 7;
                addElement(dayoftheweek, j);
                currentday++;
            }
        
        //adding Month name at the top of callendar
        let newDiv = document.createElement("h1");
        newDiv.id ='currentMonthName';
        let newContent = document.createTextNode(months[i].name);
        newDiv.appendChild(newContent);
        let currentDiv = document.getElementById("nameHolder");
        currentDiv.appendChild(newDiv); 
    }
    }
   
}
// creates divs for each day of the week
function addElement(dayoftheweek, number){
    let newDiv = document.createElement("div");
    newDiv.classList.add('dayOfTheWeek');
    let newContent = document.createTextNode(number);
    newDiv.appendChild(newContent);
    
    //adds dashes for numbers of previous month
    if(number == 1 && dayoftheweek != 0){
        for(let i = 0; i < dayoftheweek; i++){
            let newDiv = document.createElement("div");
            let newContent = document.createTextNode("-");
            newDiv.appendChild(newContent);
            if(i == 0){
                let currentDiv = document.getElementById("sun");
                newDiv.classList.add('dayOfTheWeek');
                currentDiv.appendChild(newDiv); 
            }
            else if(i == 1){
                let currentDiv = document.getElementById("mon");
                newDiv.classList.add('dayOfTheWeek');
                currentDiv.appendChild(newDiv); 
            }
            else if(i == 2){
                let currentDiv = document.getElementById("tue");
                newDiv.classList.add('dayOfTheWeek');
                currentDiv.appendChild(newDiv); 
            }
            else if(i == 3){
                let currentDiv = document.getElementById("wen");
                newDiv.classList.add('dayOfTheWeek');
                currentDiv.appendChild(newDiv); 
            }
            else if(i == 4){
                let currentDiv = document.getElementById("thu");
                newDiv.classList.add('dayOfTheWeek');
                currentDiv.appendChild(newDiv); 
            }    
            else if(i == 5){
                let currentDiv = document.getElementById("fri");
                newDiv.classList.add('dayOfTheWeek');
                currentDiv.appendChild(newDiv); 
            }
            else{
                let currentDiv = document.getElementById("sat");
                newDiv.classList.add('dayOfTheWeek');
                currentDiv.appendChild(newDiv); 
            }
        }
    }
    // adds numbers for the correct day of the week
    if(dayoftheweek == 0){
        let currentDiv = document.getElementById("sun");
        newDiv.classList.add('dayOfTheWeek');
        currentDiv.appendChild(newDiv); 
    }
    else if(dayoftheweek == 1){
        let currentDiv = document.getElementById("mon");
        newDiv.classList.add('dayOfTheWeek');
        currentDiv.appendChild(newDiv); 
    }
    else if(dayoftheweek == 2){
        let currentDiv = document.getElementById("tue");
        newDiv.classList.add('dayOfTheWeek');
        currentDiv.appendChild(newDiv); 
    }
    else if(dayoftheweek == 3){
        let currentDiv = document.getElementById("wen");
        newDiv.classList.add('dayOfTheWeek');
        currentDiv.appendChild(newDiv); 
    }
    else if(dayoftheweek == 4){
        let currentDiv = document.getElementById("thu");
        newDiv.classList.add('dayOfTheWeek');
        currentDiv.appendChild(newDiv); 
    }    
    else if(dayoftheweek == 5){
        let currentDiv = document.getElementById("fri");
        newDiv.classList.add('dayOfTheWeek');
        currentDiv.appendChild(newDiv); 
    }
    else{
        let currentDiv = document.getElementById("sat");
        newDiv.classList.add('dayOfTheWeek');
        currentDiv.appendChild(newDiv); 
    }
     
    // adds different colour to todays day 
    if(pickedMonth == today.getMonth()&& number == today.getDate()){
        newDiv.style.backgroundColor= "gray";
    }

}


// adding function to book classes 
const nextMonth = document.getElementById("nextMonth");
const previousMonth = document.getElementById("previousMonth");

previousMonth.addEventListener("click", (e) => {
    //calls the previous month and deletes the one that was displayed

    if(pickedMonth == 0){
        pickedMonth = 12;
    }
    pickedMonth--;    
    pickedMonth = pickedMonth%12;

    if(pickedMonth == 1 || pickedMonth == 11){
        currentYear--;
    }

    lastmonthdate = new Date(currentYear, pickedMonth, 0);
    endOfLastMonth = lastmonthdate.getDay();

   // hide prevoiusly shown month 
    let dayOfTheWeek = document.getElementsByClassName("dayOfTheWeek");
    while(dayOfTheWeek.length > 0){
        dayOfTheWeek[0].parentNode.removeChild(dayOfTheWeek[0]);
    }

    //hide name of previous month
    let currentMonthName = document.getElementById("currentMonthName");
    currentMonthName.remove();

    printyear(endOfLastMonth);

});

nextMonth.addEventListener("click", (e) => {
    // calls the next month to be printed and previous removed.
    
    pickedMonth++;    
    pickedMonth = pickedMonth%12;
    if(pickedMonth == 0){
        currentYear++;
    }
    lastmonthdate = new Date(currentYear, pickedMonth, 0);
    endOfLastMonth = lastmonthdate.getDay();

    
   // hide prevoiusly shown month 
    let dayOfTheWeek = document.getElementsByClassName("dayOfTheWeek");
    while(dayOfTheWeek.length > 0){
        dayOfTheWeek[0].parentNode.removeChild(dayOfTheWeek[0]);
    }

    //hide name of previous month
    let currentMonthName = document.getElementById("currentMonthName");
    currentMonthName.remove();

    printyear(endOfLastMonth);

});

// popup box for booking a class
const calendarContainer = document.getElementById("calendar"); 
const bluredContent = document.getElementById("blur");
const closeButton = document.getElementById("close");
const popupBox = document.getElementById("popup");
const blurFooter = document.getElementById("blurFooter");

calendarContainer.addEventListener("click", (e) => {

    //allows user to only book from todays date onwards not back.
    if(e.target.className == "dayOfTheWeek"){
       
        //if the picked day is this year and picked month is not a previous month (cant book backwards)
        if (today.getFullYear() == currentYear && today.getMonth() < pickedMonth){
            bluredContent.classList.toggle('active');
            popupBox.classList.toggle('active');
            blurFooter.classList.toggle('active');
        }
        //if selected dat is "-"
        else if(e.target.innerHTML == "-"){
        }
        //if the picked day is next year 
        else if(today.getFullYear() < currentYear){
            bluredContent.classList.toggle('active');
            popupBox.classList.toggle('active');
            blurFooter.classList.toggle('active');
        }
        // if the picked day is this month and from today on (cant book backwards)
        else if(today.getMonth() == pickedMonth && today.getDate() <= parseInt(e.target.innerHTML)){
            bluredContent.classList.toggle('active');
            popupBox.classList.toggle('active');
            blurFooter.classList.toggle('active');

        }
        else{
            alert("You cannot book classes that already happened")
        }
    }
})

closeButton.addEventListener("click", () => {
    bluredContent.classList.toggle('active');
    popupBox.classList.toggle('active');
    blurFooter.classList.toggle('active');

})


// Form Validation 
const contactEmail = document.getElementById("inputEmail");
const contactName = document.getElementById("inputName");
const contactClasses = document.getElementsByClassName("class");
const contactSubscribe = document.getElementById("sub");
const contactSubmit = document.getElementById("contactButton");
const errorDisplay = document.getElementById("errorDisplay");
let userClasse = "";

contactSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    userClasse ="";
    errorDisplay.innerHTML =""
    if(!contactEmail.value){
        errorDisplay.innerHTML+= "Make sure You have entered an Emial Adress! <br>"
    }

    if(!contactName.value){
        errorDisplay.innerHTML+= "Make sure You have entered Your Name!<br><br>"
    }

    for(i=0; i < contactClasses.length; i++){
        console.log(contactClasses[i].nextElementSibling.innerHTML)
        if(contactClasses[i].checked){
            userClasse = (contactClasses[i].nextElementSibling.innerHTML).replace(/\s/g,'');
        }
        console.log(userClasse);
    }

    if(contactName.value && contactEmail.value){
        alert("Thank You "+contactName.value+" for registering for "+userClasse)
    }


})
