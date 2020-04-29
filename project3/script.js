let hour = 0;
let slant = 50;

function time(id)
{
        let date = new Date;
        let year = date.getFullYear();
        let month = date.getMonth();
          let months = new Array('January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December');
          let d = date.getDate();
          let day = date.getDay();
          let days = new Array('Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday');
        let h = date.getHours();

        hour = h;
        // console.log(hour);

        if ( hour == 0 ){
          slant = 50;
        }else{
           slant = (hour/24) * 150 + 50;
        }

        changeAngle('#currenttime', slant);
        // console.log(slant);

          if(h<10)
          {
                h = "0"+h;
          }
        let m = date.getMinutes();
          if(m<10)
          {
                m = "0"+m;
          }
        let s = date.getSeconds();
          if(s<10)
          {
                s = "0"+s;
          }
        let result = ''+days[day]+' '+months[month]+' '+d+' '+year+' '+h+':'+m+':'+s;
        document.getElementById(id).innerHTML = result;
        setTimeout('time("'+id+'");','1000');
        return true;
}


// title slant change
// lowest value (slnt 50): 0:00, highest value (slnt 200)24:00
function changeAngle(element, slant){
  $(element).css('font-variation-settings', "'slnt' "+slant );
}

// vfont slant change depending on timezone? similar to code above?


// time zone -showing times
  // New York
    let usaTime = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
      usaTime = new Date(usaTime);
      console.log('New York time: '+usaTime.toLocaleString())

    function usatime(id) {
      let result = 'current time ' +usaTime.toLocaleString();
      document.getElementById('usatime').innerHTML = result;
      setTimeout('time("'+id+'");','1000');
      return result;
    }


// UTC offset method
    var d = new Date();
    var utc_offset = d.getTimezoneOffset();
    d.setMinutes(d.getMinutes() + utc_offset);
      //console.log("UTC: " + d);
    var newyork_offset = -4 * 60;
    d.setMinutes(d.getMinutes() + newyork_offset);
    console.log("New York: " + d);


    // if ( hour == 0 ){
    //   slant = 50;
    // }
    // else{
    //    slant = (hour/24) * 150 + 50;
    // }



  // Seoul
    let seoulTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Seoul"});
    seoulTime = new Date(seoulTime);
      //console.log('Seoul time: '+seoulTime.toLocaleString())

 // Paris
    let parisTime = new Date().toLocaleString("en-US", {timeZone: "Europe/Paris"});
    parisTime = new Date(parisTime);
      //console.log('Paris time: '+parisTime.toLocaleString())
// Oslo
    let osloTime = new Date().toLocaleString("en-US", {timeZone: "Europe/Oslo"});
    osloTime = new Date(osloTime);
      //console.log('Oslo time: '+osloTime.toLocaleString())
// KL
    let klTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Kuala_Lumpur"});
    klTime = new Date(klTime);
      //console.log('KL time: '+klTime.toLocaleString())
// Vancouver
    let vanTime = new Date().toLocaleString("en-US", {timeZone: "America/Vancouver"});
    vanTime = new Date(vanTime);
      // console.log('Vancouver time: '+vanTime.toLocaleString())




// slider
$(document).ready(function(){
  $('#vfcontrols').on('input', function() {
    let value = $(this).val();
    let setting = "'slnt'" + value;
    $('p.letters').css('font-variation-settings', setting);
    console.log('slider changed to' + value);
  });
});
