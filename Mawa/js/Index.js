
        // Toggle dropdown menus
        function toggleDropdown(dropdownId) {
            document.getElementById(dropdownId).classList.toggle("show");
        }

        // Close dropdowns when clicking outside
        window.onclick = function(event) {
            if (!event.target.matches('.dropdown-button')) {
                const dropdowns = document.getElementsByClassName("dropdown-content");
                for (const dropdown of dropdowns) {
                    if (dropdown.classList.contains('show')) {
                        dropdown.classList.remove('show');
                    }
                }
            }
        }

        // Handle genre selection
        const genreLinks = document.querySelectorAll('.genre-link');
        genreLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                genreLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            });
        });
    

        lucide.createIcons();
    