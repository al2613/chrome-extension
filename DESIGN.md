Background: I worked for a software consulting firm that specializes in travel/hospitality. I am looking to backpack within the next year so I wanted to draw some inspiration from that for this final project. I decided to implement a chrome extension where upon users opening a new tab, you could scroll through different destinations in the form of a gallery. I really wanted to make the focus of this visual so it awakens the urgency to travel within every user.  


Design considerations:
	- Emphasis on the travel photos listed and make the images the focal point of my application. This includes a header image area and gallery section where different travel photos will be displayed
	- I wanted to make the chrome extension simple. I don't expect users to have a lot of interactivity, as the point of the extension is to get users inspired to travel via all the visual elements  
	- The app should be responsive so it adjusts based on the user's screen size 

Technical Implementations:
	- Per Chrome's developer platform, the first step invovled setting up a manifest.json file. This json file details metadata about the extension including default functionality i.e. browser actions. There are specific fields that are required in order for the extension to work. 

	Full details can be see at: https://developer.chrome.com/extensions/manifest

	- Instead of hardcoding images, I wanted to use Flickr's and Unsplash's API to obtain the photos. Flickr's API is well documented. Once I completed creating and account and obtaining an API key, I was able to test out specific API calls to see the JSON response right on their website. Back in my code, I had to make AJAX calls to the API and construct the img URLs via the different parameters to render the photos based on Flickr's documentation. This involved using jQuery methods such as attr. and appendTo. Looking at the JSON response I was also able to extract the title property and append it to the DOM by iterating through it with a for loop. By doing so, I can show more details about each image to the user

	Flickr's API: https://www.flickr.com/services/api/
	Constructing URLs: https://www.flickr.com/services/api/misc.urls.html

	I used Unsplash's API just for the header image. Unsplash's API was even easier to use, as it was simply updating the query string to pull in the data that I wanted to show. For instance, as I wanted to pull in an updated photo everytime the API call was made, it invovled appending search term parameters in the URL string to filter the data. In my specific case, I filtered based on the search term "travel"   

	- For styling, I used CSS grid to ensure the page was responsive and adjusted to the user's screen. Using CSS grid bypassed having to use slightly more hacky solutions i.e. floating elements/clearfix to make the images appear like a gallery

	- To add more interactivity to the page, I additionally embedded a Youtube video. For UX considerations, I only wanted to play the video when the users scrolls down to it. This involved implementing logic via jquery and looking at Youtube's API reference for iframe embeds.

	- Srolling library (AOS): Used a scrolling library to integrate a scrolling effect as users navigate the page. Using this library allowed me to designate specific scrolling behavior (i.e. have the gallery slowly move up as the user scrolls) based upon specific class attributes set in the HTML.  

Roadblocks/Solutions:
	- Initially the Youtube video wasn't rendering when I was getting people to beta test it. It seemed to be an issue with the opacity set. However, using !important in style.css allowed me to override the CSS declaration and have the video show up properly. While this probably isn't the best solution, previous failed attemps makes me think that it might be a chrome/youtube behavior that's affecting this selector  
	- Because of Chrome's content security policies, it was difficult to add third party scrips due to more stringent security concerns. In order to use Youtube or any third party CDN, I essentially had to whitelist them in order to use it. Without dong so, I was getting a lot of CSP violation warnings in console  





