        const searchInput = document.getElementById("search-input");
        const searchButton = document.getElementById("search-button");
        const suggestions = document.getElementById("suggestions");

        // Sample suggestion data (replace with your own)
        const suggestionData = [
            "Suggestion 1",
            "Suggestion 2",
            "Suggestion 3",
            "Suggestion 4",
            "Suggestion 5",
        ];

        // Function to display suggestions
        function showSuggestions() {
            const searchTerm = searchInput.value.toLowerCase();
            suggestions.innerHTML = "";

            suggestionData.forEach((item) => {
                if (item.toLowerCase().includes(searchTerm)) {
                    const suggestionItem = document.createElement("div");
                    suggestionItem.classList.add("suggestion-item");
                    suggestionItem.innerText = item;
                    suggestionItem.addEventListener("click", () => {
                        searchInput.value = item;
                        suggestions.style.display = "none";
                    });
                    suggestions.appendChild(suggestionItem);
                }
            });

            if (suggestions.children.length > 0) {
                suggestions.style.display = "block";
            } else {
                suggestions.style.display = "none";
            }
        }

        // Event listeners
        searchInput.addEventListener("input", showSuggestions);
        searchButton.addEventListener("click", () => {
            // Implement your search functionality here
            const searchTerm = searchInput.value;
            alert(`Searching for: ${searchTerm}`);
        });