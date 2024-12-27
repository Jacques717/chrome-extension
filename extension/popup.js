document.getElementById('fetchData').addEventListener('click', async () => {
  const query = document.getElementById('query').value;
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = 'Fetching...';

  try {
    const response = await fetch('https://api.your-backend.com/data', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('authToken')}` // Secure token
      },
      body: JSON.stringify({ query })
    });

    if (response.ok) {
      const data = await response.json();
      resultDiv.innerHTML = `<pre>${JSON.stringify(data, null, 2)}</pre>`;
    } else {
      resultDiv.innerHTML = 'Error fetching data.';
    }
  } catch (error) {
    resultDiv.innerHTML = 'An error occurred.';
    console.error(error);
  }
});
