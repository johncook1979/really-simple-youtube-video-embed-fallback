// Get the dynamic video ID
let vidId = $('#videoEmbed').attr('src').split("/").pop();;

// Set the json url based on the unique ID
const url = 'https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v='+vidId+'&format=json';

// Set the fallback URL
const fallBack = $('#videoEmbed').attr('data-fallback');

$.get(url)
    .done(function(response) {
        console.log('Success:', response);
        
        // Check if the response contains a valid property indicating the video is available
        if (response && response.html) {
            console.log('Video available');
        } else {
            console.log('Video not available');
			      $('#videoEmbed').attr('src', fallBack);
        }
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
        console.log('Error:', textStatus);
        console.log('Video not available');
		    $('#videoEmbed').attr('src', fallBack);
    });
