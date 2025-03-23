/* upload.js */
document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const fileInput = document.getElementById('imageUpload');
    const file = fileInput.files[0];
  
    if (file) {
      const formData = new FormData();
      formData.append('image', file);
  
      // Simulate sending image to backend for processing (replace with actual backend logic)
      fetch('/upload', { // Replace '/upload' with your actual API endpoint
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(data => {
        document.getElementById('result').textContent = 'Detection Result: ' + data.result;
      })
      .catch(error => {
        console.error('Error:', error);
        document.getElementById('result').textContent = 'Error during detection.';
      });
    } else {
      alert('Please select an image.');
    }
  });