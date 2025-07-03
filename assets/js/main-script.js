
        function toggleMenu() {
            const nav = document.getElementById('navbar');
            nav.classList.toggle('active');
        }

        function toggleDropdown(event) {
            event.stopPropagation();
            document.querySelectorAll('.dropdown').forEach(drop => {
                if (drop !== event.currentTarget.parentElement) {
                    drop.classList.remove('open');
                }
            });
            event.currentTarget.parentElement.classList.toggle('open');
        }

        // Close dropdown if clicking outside
        document.addEventListener('click', function () {
            document.querySelectorAll('.dropdown').forEach(drop => drop.classList.remove('open'));
        });
          function validateEmail(e) {
            e.preventDefault();
            const email = document.getElementById('email').value;
            if (email) {
                alert('Thank you for subscribing!');
            }
        }
    