const axios = require("axios");

const data = {
  title: 'New Post Title',
  content: 'New Post Content'
};

axios.post("http://localhost:3000/posts", data)
  .then(response => {
    console.log('Post created successfully:', response.data);
  })
  .catch(error => {
    console.error('Error creating post:', error);
  });
