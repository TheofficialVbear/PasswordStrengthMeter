
let passfound = doucment.getElementById("passfound");
function checkdatabase() {
    let password = document.getElementById("password").value;
    let files = ["Files/rockyou.txt", "Files/000webhost.txt"];
    
    document.getElementById("checkDBbutton").textContent = "Checking databases...";
    Promise.all(files.map(files => fetch(files)))
    .then(response => Promise.all(response.map(response => response.text())))
    .then(data => {
        // Split the data by newline to get an array of passwords
        let passwordlist = data.reduce((acc, data) => acc.concat(data.split('\n')), []);
        
        // Check if the entered password exists in the array
        if (passwordlist.includes(password)) {
            document.getElementById("checkDBbutton").textContent = "You should not be using this password ";
            document.getElementById("passfound").textContent = 1;
            strengthText.textContent = 'Password found in database';
            strengthText.style.color = 'red';
            strengthMeter.style.backgroundColor = 'red';

        } else {
            document.getElementById("checkDBbutton").textContent = "Wasn't found in our database";
            document.getElementById("passfound").textContent = 2;
        }   
        })
        
    }; 
    

