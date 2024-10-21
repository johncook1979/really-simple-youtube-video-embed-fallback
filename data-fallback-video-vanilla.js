// Get the video ID from the src attribute of the videoEmbed element
let videoEmbed = document.getElementById('videoEmbed');
let vidId = videoEmbed.src.split("/").pop();

// Construct the oEmbed URL using the video ID
const url = 'https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=' + vidId + '&format=json';
const fallBack = videoEmbed.getAttribute('data-fallback');

// Fetch the oEmbed data
fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
        
        // Check if the response contains a valid property indicating the video is available
        if (data && data.html) {
            console.log('Video available');
        } else {
            console.log('Video not available');
            videoEmbed.src = fallBack; // Update the src attribute to the fallback video
        }
    })
    .catch(error => {
        console.log('Error:', error.message);
        console.log('Video not available');
        videoEmbed.src = fallBack; // Update the src attribute to the fallback video
    });
