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


        // console.log(hour);
        let currentSlant = calcSlant(h)

        changeAngle('#currenttime', currentSlant);
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
let timer = setInterval(calcSlant, 1000);
function changeAngle(element, slant){
  $(element).css('font-variation-settings', "'slnt' "+slant );
}

function calcSlant(hour){
    let slant = 50;
    if ( hour !== 0 ){
      slant = (hour/24) * 150 + 50;
    }
    return slant;
    setTimeout(calcSlant(), 1000);
}

// time zones
  // New York
    let usaTime = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
    let usaSlant = calcSlant( new Date(usaTime).getHours() );

//   // Seoul
    let seoulTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Seoul"});
    let koreaSlant = calcSlant( new Date(seoulTime).getHours() );

// KL
    let klTime = new Date().toLocaleString("en-US", {timeZone: "Asia/Kuala_Lumpur"});
    let malaysiaSlant = calcSlant( new Date(klTime).getHours() );

// Vancouver
    let vancouverTime = new Date().toLocaleString("en-US", {timeZone: "America/Vancouver"});
    let canadaSlant = calcSlant( new Date(vancouverTime).getHours() );

 // Paris
    let parisTime = new Date().toLocaleString("en-US", {timeZone: "Europe/Paris"});
    let franceSlant = calcSlant( new Date(parisTime).getHours() );

// Oslo
    let osloTime = new Date().toLocaleString("en-US", {timeZone: "Europe/Oslo"});
    let norwaySlant = calcSlant( new Date(osloTime).getHours() );


// slider + times
$(document).ready(function(){
  $('#usatime').text(usaTime);
  changeAngle('#newyork', usaSlant);

  $('#koreatime').text(seoulTime);
  changeAngle('#seoul', koreaSlant);

  $('#malaysiatime').text(klTime);
  changeAngle('#kl', malaysiaSlant);

  $('#canadatime').text(vancouverTime);
  changeAngle('#vancouver', canadaSlant);

  $('#francetime').text(parisTime);
  changeAngle('#paris', franceSlant);

  $('#norwaytime').text(osloTime);
  changeAngle('#oslo', norwaySlant);



  $('#vfcontrols').on('input', function() {
    let value = $(this).val();
    let setting = "'slnt'" + value;
    $('p.letters').css('font-variation-settings', setting);
    console.log('slider changed to ' + value);
    $('#value').text('Value: ' + value);
  });

});
