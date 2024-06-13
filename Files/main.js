//Some global variables so they are accessible to other scripts
let strengthText = document.getElementById('strength-text');
let strengthMeter = document.getElementById('strength');
let strength = 0;
function checkPasswordStrength() {
    let checkupper = document.getElementById('checkupper');
    let checklower = document.getElementById('checklower');
    let checknumber = document.getElementById('checknumber');
    let checkspecial = document.getElementById('checkspecial');
    let passlength = document.getElementById('passlength');
    let password = document.getElementById('password').value;  
    //Reset strength for each time the user types
    strength = 0;
    let uppaz = 0;
    let lowaz = 0;
    let numbs = 0;
    let spes = 0;
    
    
    
   
    // Adds points to strength for the length of the password
    strength += password.length;

    // Add point for uppercase letter and sets the character-variable to 1 if true
    if (/[A-ZÆØÅ]/.test(password) && uppaz == 0 ) {
        strength += 1;
        uppaz = 1;
        
    }else{        
    }

    // Add point for lowercase letter and sets the character-variable to 1 if true
    if (/[a-zæøå]/.test(password) && lowaz == 0) {
        strength += 1;
        lowaz = 1;
        
    }else{        
    }

    // Add point for number and sets the character-variable to 1 if true
    if (/[0-9]/.test(password) && numbs == 0) {
        strength += 1;
        numbs = 1;
       
    }else{     
    }

    // Add point for special character and sets the character-variable to 1 if true
    if (/[!@#$%^~?&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(password) && spes == 0) {
        strength += 1;
        spes = 1;
       
    }else{        
    }
    
    //Responds according to the character-variable and checks the box if it's true
    if (uppaz == 0) {
        checkupper.textContent = 'Upper case character?'; 
        checkupper.style.color = 'black';      
    }else if (uppaz == 1){
        checkupper.textContent = 'Upper case character?\u2713';
        checkupper.style.color = 'grey';            
    
    }if (lowaz == 0){
        checklower.textContent = 'Lower case character?'; 
        checklower.style.color = 'black';
    }else if (lowaz == 1){
        checklower.textContent = 'Lower case character?\u2713'; 
        checklower.style.color = 'grey';
    
    }if (numbs == 0){
        checknumber.textContent = 'Included numbers?'; 
        checknumber.style.color = 'black';
    }else if (numbs == 1){  
        checknumber.textContent = 'Included numbers?\u2713'; 
        checknumber.style.color = 'grey';  
    
    }if (spes == 0){
        checkspecial.textContent = 'Included special characters?';
        checkspecial.style.color = 'black';
    }else if (spes == 1){
        checkspecial.textContent = 'Included special characters?\u2713';
        checkspecial.style.color = 'grey';
    }
    passlength.textContent = "The length: " + password.length;
    

    //A variable to check if multiple sets of characters were used
    let variety = uppaz + lowaz + numbs + spes;
      
    // Update the strength text and color of the strength bar
    if (password.length > 8 && variety >= 3) {
        strengthText.textContent = 'Strong';
        strengthText.style.color = 'green';
        strengthMeter.style.backgroundColor = 'green'
    
    } else if (password.length >= 16 && variety >= 2) {
        strengthText.textContent = 'Strong';
        strengthText.style.color = 'green';
        strengthMeter.style.backgroundColor = 'green'
    
    }else if (password.length > 5 && variety >= 2) {
        strengthText.textContent = 'Moderate';
        strengthText.style.color = 'orange';
        strengthMeter.style.backgroundColor = 'orange'   
    
    }else if (password.length > 10 && variety >= 1) {
        strengthText.textContent = 'Moderate';
        strengthText.style.color = 'orange';
        strengthMeter.style.backgroundColor = 'orange'   

    }else {
        strengthText.textContent = 'Weak';
        strengthText.style.color = 'red';
        strengthMeter.style.backgroundColor = 'red'
    }
       

        

    // Update the strength bar
    let strengthPercentage = (strength / 10) * 50;
    strengthMeter.style.width = strengthPercentage + '%';

    // Reset the DB-variable and text when the user types in a different password
    document.getElementById("passfound").textContent = 0;
    document.getElementById("checkDBbutton").textContent = "Check if it's in a database"
    }
    
    
    


