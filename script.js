document.getElementById('word-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get the text input value
    const text = document.getElementById('text-input').value;

    // Split text into words and count frequencies
    const words = text.toLowerCase().match(/\b\w+\b/g);
    const wordCount = {};
    
    if (words) {
        words.forEach(word => {
            wordCount[word] = (wordCount[word] || 0) + 1;
        });
    }

    // Generate the word cloud
    const wordCloud = document.getElementById('word-cloud');
    wordCloud.innerHTML = ''; // Clear previous word cloud

    const maxCount = Math.max(...Object.values(wordCount));

    for (const [word, count] of Object.entries(wordCount)) {
        const span = document.createElement('span');
        span.textContent = word;
        span.style.fontSize = `${Math.min(30, 10 + (count / maxCount) * 30)}px`;
        wordCloud.appendChild(span);
    }
});

