    const fetchNews = async (searchTerm = '') => {
        try {
            const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&q=${searchTerm}&apiKey=${apiKey}`);
            const { articles } = await response.json();
            displayNews(articles);
        } catch (error) {
            console.error('Error fetching news data:', error);
        }
    };

    const displayNews = (newsData) => {
        const newsContainer = document.getElementById('news-container');
        newsContainer.innerHTML = ''; // Clear previous content

        newsData.forEach(news => {
            const newsItem = document.createElement('article');
            newsItem.classList.add('news-item');
            newsItem.innerHTML = `<h2>${news.title}</h2><p>${news.description}</p>`;
            newsContainer.appendChild(newsItem);
        });
    };

    const searchNews = () => {
        const searchInput = document.getElementById('search-input');
        const searchTerm = searchInput.value;
        fetchNews(searchTerm);
    };

    const promptApiKey = () => {
        apiKey = prompt('Enter your News API key:');
        if (apiKey) {
            alert('API Key added/updated successfully!');
        } else {
            alert('Invalid API Key. Please try again.');
        }
    };

    // Initial load
    fetchNews();
</script>
