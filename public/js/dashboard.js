const displayFormHandler = async (event) => {
  event.preventDefault();

  document.querySelector('.new-blog-display').classList.remove('hide');
  document.querySelector('.add-new-blog').classList.add('hide');
}

const newFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#blog-title').value.trim();
    const blogBody = document.querySelector('#blog-body').value.trim();
  
    console.log(title);
    console.log(blogBody);


    if (title && blogBody) {
      console.log('hello')
      const response = await fetch(`/api/blogs`, {
        method: 'POST',
        body: JSON.stringify({ title: title, body: blogBody }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to create blog');
      }
    }
  };
  
  const delButtonHandler = async (event) => {
    if (event.target.hasAttribute('data-id')) {
      const id = event.target.getAttribute('data-id');
  
      const response = await fetch(`/api/blogs/${id}`, {
        method: 'DELETE',
      });
  
      if (response.ok) {
        document.location.replace('/dashboard');
      } else {
        alert('Failed to delete blog');
      }
    }
  };
  
  document
  .querySelector('.add-new-blog')
  .addEventListener('click', displayFormHandler);

  document
    .querySelector('.new-blog-form')
    .addEventListener('submit', newFormHandler);
  
  document
    .querySelector('.blog-list')
    .addEventListener('click', delButtonHandler);
  
  