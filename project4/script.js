$(document).ready(function(){
  injectCalendar();
});

function injectCalendar(){
  for(let i=0; i<library.length; i++){
    $('#calendar').append(`
      <div class="cal-grid img${i+1}">
        <span
          class="music-button"
          onclick="play(this)"
          data-title="${library[i].title}"
          data-artist="${library[i].artist}"
          data-mp3-url="${library[i].mp3}"
          data-entrynumber="${library[i].entrynumber}"
          data-entrylink="${library[i].entrylink}"
        >
          <img
            src="${library[i].imgUrl}"
            class="cal-img"
          >
          <span class="songname">${i+1}. ${library[i].title}</span>
        </span>
      </div>
    `);
  }
}

function play(el){
  let mp3Url = $(el).attr('data-mp3-url');
  console.log(mp3Url);
  $('#player').attr('src', mp3Url);
  console.log($('#player')[0]);
  $('#player')[0].play();
  $('.instruction').remove();
  $('.player-container summary').empty();
  $('.player-container summary').append(`
    <h3>${ $(el).attr('data-title') }</h3>
    <p>${ $(el).attr('data-artist') }</p>
    <a href="${ $(el).attr('data-entrylink') }">
      <p class="player-entry link">${ $(el).attr('data-entrynumber') }</p>
    </a>
  `);
}

    // <figure><img
    //   src='${ $(el).children('img').attr('src') }'
    // /></figure>


// music player timeline:

// https://stackoverflow.com/questions/39094273/html-audio-player-timeline-functionality-add/39095226
// http://alexkatz.me/posts/building-a-custom-html5-audio-player-with-javascript/

// audio.addEventListener("timeupdate", function(){
//   var duration = this.duration;
//   var currentTime = this.currentTime;
//   var percentage = (currentTime / duration) * 100;
//   playhead.style.left = percentage * 4 + 'px';
// });
