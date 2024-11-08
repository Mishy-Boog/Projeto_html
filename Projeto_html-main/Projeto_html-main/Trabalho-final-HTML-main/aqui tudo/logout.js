document.addEventListener('DOMContentLoaded', function () {
    
    const logoutButton = document.getElementById("logoutBtn");

    
    if (logoutButton) {
        logoutButton.addEventListener("click", function(event) {
            event.preventDefault(); 

            
            const email = localStorage.getItem('email');  
            if (email) {
               
                localStorage.removeItem(email);  
                localStorage.removeItem('email');  
            }

            
            sessionStorage.clear();

            
            document.cookie = "session=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/"; 

            
            window.location.href = 'index.htm'; 
        });
    }
});
