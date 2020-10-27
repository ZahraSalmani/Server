

 /*fetch('../src/users.json')
     .then(res => res.json())
     .then((out) => {
         console.log('Output: ', out);
 }).catch(err => console.error(err));


 $.getJSON( "../src/users.json", function( data ) {
     var items = [];
     $.each( data, function( key, val ) {
       items.push( '<li id="' + key + "'>" + val + '</li>' );
     });
   
     $( "<ul/>", {
       "class": "my-new-list",
       html: items.join( "" )
     }).appendTo( "body" );
   });


     // Create XMLHttpRequest object.
     var oXHR = new XMLHttpRequest();
 
     // Initiate request.
     oXHR.onreadystatechange = reportStatus;
     oXHR.open("GET", "../src/users.json", true);  // get json file.
     oXHR.send();
 
     function reportStatus() {
         if (oXHR.readyState == 4) {		// Check if request is complete.
             //Write data to a DIV element.
             document.getElementById('showData').innerHTML = this.responseText;
             console.log(this.responseText);
         }
     }*/

     fetch('https://jsonplaceholder.typicode.com/users')
     // fetch('../src/users.json')
     .then(function (response) {
                  return response.json();
              })
              .then(function (data) {
                  appendData(data);
              })
              .catch(function (err) {
                  console.log('error: ' + err);
              });
          function appendData(data) {
              console.log(data);
              var mainContainer = document.getElementById("showData");
              for (var i = 0; i < data.length; i++) {
                  var div = document.createElement("div");
                  div.innerHTML = 'user '+(i+1)+':  ' + data[i].name ;
                  mainContainer.appendChild(div);
              }
          }
