const url = 'https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=KZp1I_789-A&format=json';

fetch(url)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Success:', data);
        
        // Check if the response contains a valid property (e.g., "html") indicating the video is available
        if (data && data.html) {
            console.log('Video available');
        } else {
            console.log('Video not available');
            document.getElementById('fallback-video').style.display = 'block';
            document.getElementById('main-video').style.display = 'none';
        }
    })
    .catch(error => {
        console.log('Error:', error.message);
        console.log('Video not available');
        document.getElementById('fallback-video').style.display = 'block';
        document.getElementById('main-video').style.display = 'none';
    });
