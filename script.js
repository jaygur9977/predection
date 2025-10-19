
        // Initialize map
        const map = L.map('map').setView([40.7128, -74.0060], 13); // Default to New York
        
        // Add OpenStreetMap tiles
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        
        // Add a marker
        L.marker([40.7128, -74.0060]).addTo(map)
            .bindPopup('Hello! This is where the weather happens!')
            .openPopup();
        
        // Weather animation functions
        const container = document.getElementById('animation-container');
        let currentAnimation = null;
        
        function clearAnimations() {
            container.innerHTML = '';
            if (currentAnimation) {
                clearInterval(currentAnimation);
                currentAnimation = null;
            }
            
            // Remove active class from all buttons
            document.querySelectorAll('.weather-btn').forEach(btn => {
                btn.classList.remove('active');
            });
        }
        
        function startSunny() {
            clearAnimations();
            document.getElementById('sunny').classList.add('active');
            
            // Create only one sun
            const sun = document.createElement('div');
            sun.classList.add('sun');
            
            // Start from top-left
            sun.style.left = `-100px`;
            sun.style.top = `-100px`;
            
            container.appendChild(sun);
            
            // Remove element after animation completes
            setTimeout(() => {
                sun.remove();
            }, 8000);
        }
        
        function startCloudy() {
            clearAnimations();
            document.getElementById('cloudy').classList.add('active');
            
            // Create clouds
            currentAnimation = setInterval(() => {
                const cloud = document.createElement('div');
                cloud.classList.add('cloud');
                
                const size = 50 + Math.random() * 100;
                const delay = Math.random() * 2;
                const startTop = Math.random() * (window.innerHeight / 2);
                
                cloud.style.width = `${size}px`;
                cloud.style.height = `${size / 2}px`;
                cloud.style.top = `${startTop}px`;
                cloud.style.animationDelay = `${delay}s`;
                
                container.appendChild(cloud);
                
                // Remove element after animation completes
                setTimeout(() => {
                    cloud.remove();
                }, 12000 + (delay * 1000));
            }, 1000);
        }
        
        function startRainy() {
            clearAnimations();
            document.getElementById('rainy').classList.add('active');
            
            // Create raindrops
            currentAnimation = setInterval(() => {
                for (let i = 0; i < 10; i++) {
                    const raindrop = document.createElement('div');
                    raindrop.classList.add('raindrop');
                    
                    const left = Math.random() * window.innerWidth;
                    const delay = Math.random() * 1;
                    const duration = 0.5 + Math.random() * 0.5;
                    
                    raindrop.style.left = `${left}px`;
                    raindrop.style.animationDelay = `${delay}s`;
                    raindrop.style.animationDuration = `${duration}s`;
                    
                    container.appendChild(raindrop);
                    
                    // Remove element after animation completes
                    setTimeout(() => {
                        raindrop.remove();
                    }, (duration * 1000) + (delay * 1000));
                }
            }, 100);
        }
        
        function startSnowy() {
            clearAnimations();
            document.getElementById('snowy').classList.add('active');
            
            // Create snowflakes
            currentAnimation = setInterval(() => {
                const snowflake = document.createElement('div');
                snowflake.classList.add('snowflake');
                
                const left = Math.random() * window.innerWidth;
                const delay = Math.random() * 2;
                const duration = 3 + Math.random() * 3;
                const size = 5 + Math.random() * 5;
                
                snowflake.style.left = `${left}px`;
                snowflake.style.animationDelay = `${delay}s`;
                snowflake.style.animationDuration = `${duration}s`;
                snowflake.style.width = `${size}px`;
                snowflake.style.height = `${size}px`;
                
                container.appendChild(snowflake);
                
                // Remove element after animation completes
                setTimeout(() => {
                    snowflake.remove();
                }, (duration * 1000) + (delay * 1000));
            }, 150);
        }
        
        function startWindy() {
            clearAnimations();
            document.getElementById('windy').classList.add('active');
            
            // Create leaves
            currentAnimation = setInterval(() => {
                const leaf = document.createElement('div');
                leaf.classList.add('leaf');
                
                const startPos = Math.random() > 0.5 ? -100 : window.innerWidth + 100;
                const top = Math.random() * window.innerHeight;
                const delay = Math.random() * 2;
                const duration = 3 + Math.random() * 2;
                const size = 10 + Math.random() * 10;
                
                leaf.style.left = `${startPos}px`;
                leaf.style.top = `${top}px`;
                leaf.style.animationDelay = `${delay}s`;
                leaf.style.animationDuration = `${duration}s`;
                leaf.style.width = `${size}px`;
                leaf.style.height = `${size}px`;
                
                container.appendChild(leaf);
                
                // Remove element after animation completes
                setTimeout(() => {
                    leaf.remove();
                }, (duration * 1000) + (delay * 1000));
            }, 250);
        }
        
        // Add event listeners to buttons
        document.getElementById('sunny').addEventListener('click', startSunny);
        document.getElementById('cloudy').addEventListener('click', startCloudy);
        document.getElementById('rainy').addEventListener('click', startRainy);
        document.getElementById('snowy').addEventListener('click', startSnowy);
        document.getElementById('windy').addEventListener('click', startWindy);
        
        // Start with cloudy animation by default
        setTimeout(startCloudy, 1000);