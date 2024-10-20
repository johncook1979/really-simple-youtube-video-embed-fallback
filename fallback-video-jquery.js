$.get(url)
    .done(function(response) {
        console.log('Success:', response);
        
        // Check if the response contains a valid property (e.g., "html") indicating the video is available
        if (response && response.html) {
            console.log('Video available');
        } else {
            console.log('Video not available');
			      $('#fallback-video').show();
			      $('#main-video').hide();
        }
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
        console.log('Error:', textStatus);
        console.log('Video not available');
		    $('#fallback-video').show();
		    $('#main-video').hide();
    });
