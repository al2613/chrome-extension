var myResult;
var headerUrl =
  'https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=bc1b5549bb490dcce777b6659b9740f7&photoset_id=72157655762735509&privacy_filter=1&per_page=1&format=json&nojsoncallback=1';
var apiUrl =
  'https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=bc1b5549bb490dcce777b6659b9740f7&gallery_id=72157690043876864&per_page=8&format=json&nojsoncallback=1';

$(window).on('load', function() {
  AOS.init({
    duration: 1200
  });

  $.getJSON(headerUrl, function(json) {
    $.each(json.photoset.photo, function(i, myResult) {
      var imgSrc =
        'http://farm' +
        myResult.farm +
        '.static.flickr.com/' +
        myResult.server +
        '/' +
        myResult.id +
        '_' +
        myResult.secret +
        '_b.jpg';
      var imgThumb = $('<img>').attr({ src: imgSrc, id: 'header-img' });
      $(imgThumb).appendTo('.main');
    });
  });

  $.getJSON(apiUrl, function(json) {
    $.each(json.photos.photo, function(i, myResult) {
      var imgSrc =
        'http://farm' +
        myResult.farm +
        '.static.flickr.com/' +
        myResult.server +
        '/' +
        myResult.id +
        '_' +
        myResult.secret +
        '_b.jpg';
      var imgThumb = $('<img>').attr({
        src: imgSrc,
        id: 'img-id',
        class: 'hvrbox-layer_bottom'
      });
      $(imgThumb).appendTo('#results');
      $(imgThumb).click(function() {
        $(this).toggleClass('full-screen');
      });
    });
  });
});

var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/player_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Replace the 'ytplayer' element with an <iframe> and
// YouTube player after the API code downloads.
var player;
function onYouTubePlayerAPIReady() {
  player = new YT.Player('ytplayer', {
    height: '800',
    width: '1200',
    playerVars: {
      autoplay: 0
    },
    videoId: 'MeTQplAmuTU'
  });
}
$(window).scroll(function() {
  $('iframe').each(function() {
    if ($(window).scrollTop() > $(this).offset().top - 200) {
      $(this).css('opacity', 1);
      player.playVideo();
    } else {
      $(this).css('opacity', 0);
      player.stopVideo();
    }
  });
});
