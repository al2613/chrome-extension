var apiUrl, myResult;

// store api url in variable
apiUrl = "https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&api_key=bc1b5549bb490dcce777b6659b9740f7&gallery_id=72157690043876864&per_page=8&format=json&nojsoncallback=1";

$(window).on('load', function () {	
	AOS.init({
		duration: 1200,
	}) 

	// Make ajax call to Flickr's API to obtain photo data
	// $.each method allows us to iterate over the photo object 
	// Construct the img url based on flickr's documentation 	
    $.getJSON(apiUrl, function(json) {
      $.each(json.photos.photo, function(i, myResult) {
      	var imgSrc = "http://farm" + 
      	myResult.farm + 
      	".static.flickr.com/" + 
      	myResult.server + 
      	"/" + 
      	myResult.id + 
      	"_" +  
      	myResult.secret + 
      	"_b.jpg";

      var imgThumb = $("<img>").attr({"src":imgSrc, "id":"img-id"})
      	$(imgThumb).appendTo("#results");
		$(imgThumb).click(function() {
		  $(this).toggleClass("full-screen");
		});

	  /* For some reason, it displays part of of the data in console up to a certain point and throws syntax error
	  var data = myResult.title;
	  console.log(data);
	  $(data).appendTo("#test");
      	*/
     });
  });

   // works just fine if I manually append the data one by one? 
   $.ajax({
    type:"get",
    url: apiUrl,
    success: function(data){
    result="";
    	result+= "<li>" + data['photos'].photo[0].title + "</li>" 
    	result+= "<li>" + data['photos'].photo[1].title + "</li>" 
    	result+= "<li>" + data['photos'].photo[2].title + "</li>" 
    	result+= "<li>" + data['photos'].photo[3].title + "</li>" 
    	result+= "<li>" + data['photos'].photo[4].title + "</li>" 
    	result+= "<li>" + data['photos'].photo[5].title + "</li>"
    	result+= "<li>" + data['photos'].photo[6].title + "</li>" 
    	result+= "<li>" + data['photos'].photo[7].title + "</li>" 
    	result+= "<li>" + data['photos'].photo[8].title + "</li>" 
    	result+= "<li>" + data['photos'].photo[9].title + "</li>" 
    	result+= "<li>" + data['photos'].photo[10].title + "</li>" 
    	result+= "<li>" + data['photos'].photo[11].title + "</li>" 
    	result+= "<li>" + data['photos'].photo[12].title + "</li>" 
    	result+= "<li>" + data['photos'].photo[13].title + "</li>" 
    	result+= "<li>" + data['photos'].photo[14].title + "</li>" 

    $("#images").html(result);
    }
  });
})

// This will replace the 'ytplayer' element w/ the <iframe> once the player after the API code loads
// Loads the ifame player asynchronously 

var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Construct the video player object 
 var player;
 function onYouTubePlayerAPIReady() {
    player = new YT.Player('ytplayer', {
        height: '800',
        width: '1200',
        playerVars : {
            autoplay : 0
        },
        videoId:'MeTQplAmuTU'
       });
    }
 	// Use jQuery scroll method to add scolling behavior and make video play and stop based 
 	// upon user's scrolling behavior
    $(window).scroll(function() {
    	$("iframe").each( function() {
            if( $(window).scrollTop() > $(this).offset().top - 200 ) {
            	$(this).css('opacity',1);
                player.playVideo();
            } else {
              $(this).css('opacity',0);
              player.stopVideo();
            }
        }); 
    });

