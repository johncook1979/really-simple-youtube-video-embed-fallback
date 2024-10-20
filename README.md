# Really simple youtube video embed fallback
A really simple YouTube video fallback that allows you to add multiple videos to a html page and if the first is removed, the second will play. Feel free to customise the scripts to your own needs. This does not need the api to work and relies on the json response instead.

Note: You need to add the ids of main-video and fallback-video to the iframes with a style of display:none to the fallback video. You can also use a data-attribute with the fallback video url in the main iframe and simply replace the iframe URL with the fallback if the main video doesn't load. This can reduce the HTML content on the page. In short, the possibilities are endless.

Also note: This probably won't work with embed blocked or country blocked videos. Just test.
