javascript:
    /* Method 1: Copy the code, Go to Inspect Element, Click Console, Paste the code into there, Press Enter */
    /* Method 2: Highlight all the code, drag it to the bookmarks bar, then click the bookmark on an EdPuzzle */
    var blackContainer = document.createElement("div");
    blackContainer.style.position = "fixed";
    blackContainer.style.top = "50%";
    blackContainer.style.left = "50%";
    blackContainer.style.transform = "translate(-50%, -50%)";
    blackContainer.style.backgroundColor = "black";
    blackContainer.style.width = "500px";
    blackContainer.style.height = "300px";
    blackContainer.style.zIndex = "99999";
    blackContainer.style.opacity = "0";
    blackContainer.style.borderRadius = "10px";
    /* title bar */
    var titleBar = document.createElement("div");
    titleBar.style.backgroundColor = "#121212";
    titleBar.style.color = "white";
    titleBar.style.padding = "10px";
    titleBar.style.cursor = "move";
    titleBar.textContent = "EdPuzzle Mod Menu";
    titleBar.style.textAlign = "center";
    titleBar.style.borderTopLeftRadius = "10px";
    titleBar.style.borderTopRightRadius = "10px";
    
    blackContainer.appendChild(titleBar);
    /* other code */
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.type = 'text/css';
    link.href = 'https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500&display=swap';
    document.head.appendChild(link);
    
    titleBar.style.fontFamily = "'Quicksand', sans-serif";
    /* skip button */
    var skipButton = document.createElement("button");
    skipButton.textContent = "Skip Video";
    skipButton.style.position = "absolute";
    skipButton.style.top = "50%";
    skipButton.style.left = "40%";
    skipButton.style.transform = "translate(-50%, -50%)";
    skipButton.style.backgroundColor = "transparent";
    skipButton.style.color = "white";
    skipButton.style.border = "2px solid white";
    skipButton.style.padding = "10px";
    skipButton.style.cursor = "pointer";
    skipButton.style.borderRadius = "10px";
    /* the skip thing code lol */
    skipButton.addEventListener("click", function() {
        skipButton.textContent = "Skipping..";
        /* code - start */
        javascript:function httpGet(url, callback, headers=[], method="GET", content=null) {  var request = new XMLHttpRequest();  request.addEventListener("load", callback);  request.open(method, url, true);  if (headers.length > 0) {    for (const header of headers) {      request.setRequestHeader(header[0], header[1]);    }  }  request.send(content);}function init() {  getCSRF();}function getCSRF() {  var csrfURL = "https://edpuzzle.com/api/v3/csrf";  httpGet(csrfURL, function(){    var data = JSON.parse(this.responseText);    var csrf = data.CSRFToken;    getAssignment(csrf);  });}function getAssignment(csrf) {  var assignment_id = window.location.href.split("/")[4];  var url1 = "https://edpuzzle.com/api/v3/assignments/" + assignment_id + "/attempt";  httpGet(url1, function(){    var data = JSON.parse(this.responseText);    postAttempt(csrf, data);  });}function postAttempt(csrf, data) {  var id = data._id;  var teacher_assignment_id = data.teacherAssignmentId;  var referrer = "https://edpuzzle.com/assignments/"+ teacher_assignment_id +"/watch";;  var url2 = "https://edpuzzle.com/api/v4/media_attempts/" + id + "/watch";  var content = {"timeIntervalNumber": 10};  var headers = [    ['accept', 'application/json, text/plain, */*'],    ['accept_language', 'en-US,en;q=0.9'],    ['content-type', 'application/json'],    ['x-csrf-token', csrf],    ['x-edpuzzle-referrer', referrer],    ['x-edpuzzle-web-version', window.__EDPUZZLE_DATA__.version]  ];    httpGet(url2, function(){    window.location.reload();  }, headers, "POST", JSON.stringify(content));}init();
        /* code - end */
    });
    
    var skipButton2 = document.createElement("button");
    skipButton2.textContent = "Chat with AI";
    skipButton2.style.position = "absolute";
    skipButton2.style.top = "50%";
    skipButton2.style.left = "60%";
    skipButton2.style.transform = "translate(-50%, -50%)";
    skipButton2.style.backgroundColor = "transparent";
    skipButton2.style.color = "white";
    skipButton2.style.border = "2px solid white";
    skipButton2.style.padding = "10px";
    skipButton2.style.cursor = "pointer";
    skipButton2.style.borderRadius = "10px";
    
    skipButton2.addEventListener("click", function() {
        var userInput = prompt("Hello! How can I assist you today?");
        if (userInput) {
            var apiUrl = "https://api.ai21.com/studio/v1/j2-ultra/complete";
            var authToken = "Bearer IWO4ideX3gNOcxJVt2zks1vVc3P7tIms";
            var promptText = "You are GPT-4, an AI by OpenAI. Reply to My Message In Two Sentences Maximum And Simple Words Only. Simple Worlds Only Reply To Message: '" + userInput + "'.";
            var payload = {
                "prompt": promptText,
                "numResults": 1,
                "epoch": 0,
                "maxTokens": 2400,
                "temperature": 1,
                "topKReturn": 8,
                "topP": 1,
                "presencePenalty": {
                    "scale": 1,
                    "applyToNumbers": true,
                    "applyToPunctuations": true,
                    "applyToStopwords": true,
                    "applyToWhitespaces": true,
                    "applyToEmojis": true
                },
                "countPenalty": {
                    "scale": 0.1,
                    "applyToNumbers": true,
                    "applyToPunctuations": true,
                    "applyToStopwords": true,
                    "applyToWhitespaces": true,
                    "applyToEmojis": true
                },
                "frequencyPenalty": {
                    "scale": 5,
                    "applyToNumbers": true,
                    "applyToPunctuations": true,
                    "applyToStopwords": true,
                    "applyToWhitespaces": true,
                    "applyToEmojis": true
                },
                "stopSequences": []
            };
    
            fetch(apiUrl, {
                method: "POST",
                headers: {
                    "Authorization": authToken,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(payload)
            })
            .then(response => response.json())
            .then(data => {
                var completion = data.completions[0].data.text;
                completion = completion.replace(/\n/g, "");
                alert(completion);
            })
            .catch(error => {
                console.error('Error:', error);
                alert("An error occurred while processing your request.");
            });
        }
    });
    
    blackContainer.appendChild(skipButton);
    blackContainer.appendChild(skipButton2);
    
    /* footer text */
    var footerText = document.createElement("div");
    footerText.textContent = "Made by smorenitez - Discord, TikTok, & GitHub: smorenitez";
    footerText.style.position = "absolute";
    footerText.style.bottom = "10px";
    footerText.style.left = "50%";
    footerText.style.transform = "translateX(-50%)";
    footerText.style.color = "#888";
    footerText.style.fontSize = "10px";
    
    blackContainer.appendChild(footerText);
    var footerText2 = document.createElement("div");
    footerText2.textContent = "February 11th, 2024 verison";
    footerText2.style.position = "absolute";
    footerText2.style.bottom = "8%";
    footerText2.style.left = "48%";
    footerText2.style.transform = "translateX(-50%)";
    footerText2.style.color = "#888";
    footerText2.style.fontSize = "10px";
    
    blackContainer.appendChild(footerText2);
    
    document.body.appendChild(blackContainer);
    
    var isDragging = false;
    var initialX, initialY;
    var offsetX, offsetY;
    
    titleBar.addEventListener("mousedown", function(event) {
        isDragging = true;
        initialX = event.clientX;
        initialY = event.clientY;
    
        offsetX = event.clientX - blackContainer.offsetLeft;
        offsetY = event.clientY - blackContainer.offsetTop;
    
        event.preventDefault();
    });
    
    document.addEventListener("mousemove", function(event) {
        if (isDragging) {
            var newX = event.clientX - offsetX;
            var newY = event.clientY - offsetY;
    
            blackContainer.style.left = newX + "px";
            blackContainer.style.top = newY + "px";
        }
    });
    
    document.addEventListener("mouseup", function(event) {
        isDragging = false;
    });
    var startTime = null;
    var duration = 150;
    
    function animate(timestamp) {
        if (!startTime) startTime = timestamp;
        var progress = timestamp - startTime;
        blackContainer.style.opacity = Math.min(progress / duration, 1);
        blackContainer.style.transform = "translate(-50%, -50%) scale(" + (progress / duration) + ")";
        if (progress < duration) {
            requestAnimationFrame(animate);
        }
    }
    requestAnimationFrame(animate);
