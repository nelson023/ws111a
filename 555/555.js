<!DOCTYPE  html>
<html>
    <head>
        <meta charset="utf-8"/>
        <script>

            window.onload = function(){
                
                var oMessageBox = document.getElementById("messageBox");
                var oInput = document.getElementById("myInput");
                var oPostBtn = document.getElementById("doPost");

                            
                oPostBtn.onclick = function(){
                    if(oInput.value){
                        
                        var oTime = document.createElement("div");
                        oTime.className = "time";
                        var myDate = new  Date();
                        oTime.innerHTML = myDate.toLocaleString();
                        oMessageBox.appendChild(oTime);
                        
                        
                        var oMessageContent = document.createElement("div");
                        oMessageContent.className = "message_content";
                        oMessageContent.innerHTML = oInput.value;
                        oInput.value = "";
                        oMessageBox.appendChild(oMessageContent);
                    }
                    
                }
                
            }
        
        </script>
        
   
    </head>

    <body>
        <div class="bg">
            <img src="DOCHI.jpg">
        </div>
    </body>

    <style>
        .bg {
            position: fixed;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            z-index: -999;
        }
        .bg img {
            min-height: 100%;
            width: 100%;
        }
    </style>

    <body>
       
        <div class="content">
            <div style="text-align:center;">
            <div class="title"><font size="5">Bulletin board</font><br></div>
            <div><p> </p></div>
            <div class="message_box" id="messageBox"></div>
            <div><input id="myInput" type="text" placeholder="Please enter your message   "><button id="doPost">submit</button></div>
        </div>
        </div>>
    </body>
</html>
