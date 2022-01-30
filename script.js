$(document).ready(function(){
    
      var typed = new Typed('.typed', {
        strings: ['Hello!', 'You can find some Weather info'],
        smartBackspace: true,
        loop:true,
        typeSpeed:100,
      });
    
    $("#inputValue").on("keyup",function(e){
        let cityname = e.target.value;
        const APIKey ="621eca70dc2c9ddf388683b3f02b2b7a";

        $.ajax({
            url:`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${APIKey}&units=metric`       

        }).done(function(weatherdata){
            console.log(weatherdata);
            $(".profile").html(`
            <div class="container" style="background-color:lavender;">
                <div class="row">
                  <div class="col-sm-4">
                    <img src="http://openweathermap.org/img/wn/${weatherdata.weather[0].icon}@2x.png" class="card-img-top" alt="..." style="height:18em; width:18em;">
                  </div>
                  <div class="col-sm-8" style="padding:6%;">
                    <h5 style="font-size:2.25rem;">${weatherdata.weather[0].description}</h5>
                    <p style="font-size:25px;">The temperature at ${cityname} is = ${weatherdata.main.temp} &#8451; and it feels like it is ${weatherdata.main.feels_like} &#8451;.</p>
                    <a href="https://www.google.com/search?q=${cityname}" class="btn btn-primary">Learn more about this state</a>
                  </div>
                </div>
            </div>
            `);
        })
    });
});
