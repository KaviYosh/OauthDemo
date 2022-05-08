$(document).ready(function(){
    // client id of this project
    var clientId = "10479065062-02depicr6m5k84kll528eh7d0ehahpcv.apps.googleusercontent.com"
    
     // redirect_uri specifies the redirect path after the authentication
    var redirect_uri = "http://localhost:8080/OAuthProject/upload.html"
    
     // The scope of this project
    var scope = "https://www.googleapis.com/auth/drive"
    
    // the url to which the user is redirected to (Currently not necessary)
    var url=""

    // This will take the clicking event of this button
    $("#loginGauth").click(function (){
        signIn(clientId,redirect_uri,scope,url);
    
    });

    function signIn (clientId,redirect_uri,scope,url){
        
        // This is the actual URL that the user will get redirected to 
        url = "https://accounts.google.com/o/oauth2/v2/auth?redirect_uri="+redirect_uri
        +"&prompt=consent&response_type=code&client_id="+clientId+"&scope="+scope
        +"&access_type=offline";
    
        // redirecting to the URL
        window.location = url;
    
    
    }

});

