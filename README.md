# Really simple youtube video embed fallback
A really simple YouTube video fallback that allows you to add multiple videos to a html page and if the first is removed, the second will play. Feel free to customise the scripts to your own needs. This does not need the api to work and relies on the json response instead.

Note: You need to add the ids of main-video and fallback-video to the iframes with a style of display:none to the fallback video. You can also use a data-attribute with the fallback video url in the main iframe and simply replace the iframe URL with the fallback if the main video doesn't load. This can reduce the HTML content on the page. In short, the possibilities are endless.

Also note: This probably won't work with embed blocked or country blocked videos. Just test.

### Updated to 2 versions
The html file contains 2 sections of code. The first uses 2 embedded iframes. This is probably easiest for people who aren't comfortable coding and just want to coy and paste with limited editing. Use with either of the 2 files fallback-video-vanilla.js or fallback-video-jquery.js.

If you opt for the truncated and dynamic version, use the 2nd single iframe code, modify it as needed and use the data-fallback-video-jquery.js or data-fallback-video-vanilla.js. These js files will automatically extract the unique ID and apply the fallback. This is ideal if you want to place one js file site-wide and use it on multiple embeds.
