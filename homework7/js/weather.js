function gettingJSON(){
    //Display the forecast
    document.querySelector("#forecast").style.display = "block";

    //Set default location if one isn't provided
    let location = document.querySelector("#location").value;
    if (location == "") {
        location = "Ann Arbor";
    }
    console.log("Location is : " + location);

    //set default temperature format if one isn't provided
    let format = document.querySelectorAll("input[name=temp]:checked")[0];
    if (format == null) {
        format = "imperial";
    }
    else {
        format = format.value
    }
    console.log("Format is : " + format);

    //set the query
    let query = "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=fe408fdb6ba8d5322d42819475d626f9&units=" + format;
    console.log("Query is : " + query);

    //Create and set variables for each of the elements you
    //need to update, location, temp, the image, etc.
    let loc = document.querySelector("#loc");
    let temp = document.querySelector("#temp");
    let tempImg = document.querySelector("#tempImg");


    $.getJSON(query,function(json){
        //Use returned json to update the values of the three 
        //elements in HTML.  
        //I would print the JSON to the console
        console.log(JSON.stringify(json));
        loc.innerHTML = json["name"];
        temp.innerHTML = json["main"]["temp"] + " with " + json["weather"][0]["description"];
        tempImg.setAttribute("src", "https://openweathermap.org/img/wn/" + json["weather"][0]["icon"] + ".png");
        tempImg.setAttribute("alt", json["weather"][0]["description"]);

    });
}
