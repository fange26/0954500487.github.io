// FoodSocial App JS

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize the app
    initApp();
});

// App Initialization
function initApp() {
    // Show splash screen for 2 seconds then transition to auth screen
    setTimeout(() => {
        navigateToScreen('auth-screen');
    }, 2000);

    // Set up event listeners
    setupEventListeners();
    
    // Load mock data
    loadMockData();
    
    // Initialize search functionality
    initSearchFunctionality();
}

// Initialize search functionality
function initSearchFunctionality() {
    const searchInput = document.getElementById('global-search-input');
    const searchClearBtn = document.getElementById('search-clear-btn');
    const searchResultsContainer = document.getElementById('search-results-container');
    
    // Show/hide clear button based on input
    searchInput.addEventListener('input', () => {
        if (searchInput.value.trim() !== '') {
            searchClearBtn.classList.add('visible');
            performSearch(searchInput.value.trim());
        } else {
            searchClearBtn.classList.remove('visible');
            searchResultsContainer.classList.add('hidden');
        }
    });
    
    // Clear search input
    searchClearBtn.addEventListener('click', () => {
        searchInput.value = '';
        searchClearBtn.classList.remove('visible');
        searchResultsContainer.classList.add('hidden');
    });
    
    // Close search results when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.global-search-container')) {
            searchResultsContainer.classList.add('hidden');
        }
    });
    
    // Focus search input when clicking on search bar
    document.querySelector('.global-search-bar').addEventListener('click', () => {
        searchInput.focus();
    });
}

// Perform search across all data types
function performSearch(query) {
    query = query.toLowerCase();
    const searchResultsContainer = document.getElementById('search-results-container');
    
    // Don't search if query is too short
    if (query.length < 2) {
        searchResultsContainer.classList.add('hidden');
        return;
    }
    
    // Search in users, posts, groups, and business pages
    const userResults = mockData.users.filter(user => 
        user.name.toLowerCase().includes(query) || 
        user.bio.toLowerCase().includes(query)
    );
    
    const postResults = mockData.posts.filter(post => {
        const user = mockData.users.find(u => u.id === post.userId);
        return post.content.toLowerCase().includes(query) || 
               (user && user.name.toLowerCase().includes(query));
    }).slice(0, 3); // Limit to 3 posts
    
    const groupResults = mockData.groups.filter(group => 
        group.name.toLowerCase().includes(query) || 
        group.description.toLowerCase().includes(query)
    );
    
    const businessResults = mockData.businessPages.filter(business => 
        business.name.toLowerCase().includes(query) || 
        business.description.toLowerCase().includes(query)
    );
    
    // Combine results
    const allResults = [
        ...userResults, 
        ...postResults, 
        ...groupResults, 
        ...businessResults
    ];
    
    // Display results
    if (allResults.length > 0) {
        displaySearchResults(allResults);
    } else {
        displayNoResults();
    }
}

// Display search results
function displaySearchResults(results) {
    const searchResultsContainer = document.getElementById('search-results-container');
    searchResultsContainer.innerHTML = '';
    searchResultsContainer.classList.remove('hidden');
    
    results.forEach(result => {
        const resultItem = document.createElement('div');
        resultItem.className = 'search-result-item';
        
        // Different display based on result type
        switch (result.type) {
            case 'user':
                resultItem.innerHTML = `
                    <img src="${result.avatar}" alt="${result.name}" class="search-result-avatar">
                    <div class="search-result-content">
                        <div class="search-result-title">${result.name}</div>
                        <div class="search-result-subtitle">${result.bio.substring(0, 50)}${result.bio.length > 50 ? '...' : ''}</div>
                    </div>
                    <span class="search-result-type">User</span>
                `;
                resultItem.addEventListener('click', () => {
                    // In a real app, navigate to user profile
                    showToast(`Viewing ${result.name}'s profile`);
                    // For demo, just navigate to profile screen
                    navigateToScreen('profile-screen');
                });
                break;
                
            case 'post':
                const user = mockData.users.find(u => u.id === result.userId);
                resultItem.innerHTML = `
                    <img src="${user ? user.avatar : 'img/default-avatar.svg'}" alt="${user ? user.name : 'User'}" class="search-result-avatar">
                    <div class="search-result-content">
                        <div class="search-result-title">${user ? user.name : 'User'}</div>
                        <div class="search-result-subtitle">${result.content.substring(0, 50)}${result.content.length > 50 ? '...' : ''}</div>
                    </div>
                    <span class="search-result-type">Post</span>
                `;
                resultItem.addEventListener('click', () => {
                    // In a real app, navigate to the post
                    showToast('Viewing post');
                    // For demo, just navigate to home screen
                    navigateToScreen('home-screen');
                });
                break;
                
            case 'group':
                resultItem.innerHTML = `
                    <img src="${result.avatar}" alt="${result.name}" class="search-result-avatar">
                    <div class="search-result-content">
                        <div class="search-result-title">${result.name}</div>
                        <div class="search-result-subtitle">${result.members} members</div>
                    </div>
                    <span class="search-result-type">Group</span>
                `;
                resultItem.addEventListener('click', () => {
                    // In a real app, navigate to group page
                    showToast(`Viewing ${result.name} group`);
                    // For demo, just show toast
                    showToast(`Joined ${result.name}`);
                });
                break;
                
            case 'business':
                resultItem.innerHTML = `
                    <img src="${result.avatar}" alt="${result.name}" class="search-result-avatar">
                    <div class="search-result-content">
                        <div class="search-result-title">${result.name}</div>
                        <div class="search-result-subtitle">
                            <i class="fas fa-star" style="color: var(--primary);"></i> ${result.rating}
                        </div>
                    </div>
                    <span class="search-result-type">Business</span>
                `;
                resultItem.addEventListener('click', () => {
                    // In a real app, navigate to business page
                    showToast(`Viewing ${result.name} page`);
                    // For demo, just show toast
                    showToast(`Following ${result.name}`);
                });
                break;
        }
        
        searchResultsContainer.appendChild(resultItem);
    });
}

// Display no results message
function displayNoResults() {
    const searchResultsContainer = document.getElementById('search-results-container');
    searchResultsContainer.innerHTML = `
        <div class="search-no-results">
            <i class="fas fa-search" style="font-size: 24px; color: #aaa; margin-bottom: 10px;"></i>
            <p>No results found</p>
        </div>
    `;
    searchResultsContainer.classList.remove('hidden');
}

// Set up event listeners for user interactions
function setupEventListeners() {
    // Auth screen events
    document.getElementById('join-now-btn').addEventListener('click', () => {
        document.getElementById('login-modal').classList.add('active');
    });

    // Close modal events
    document.querySelectorAll('.close-modal').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.modal').forEach(modal => {
                modal.classList.remove('active');
            });
        });
    });

    // SSO buttons
    document.querySelectorAll('.sso-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const provider = btn.getAttribute('data-provider');
            simulateLogin(provider);
        });
    });

    // Email signup toggle
    document.getElementById('email-signup-btn').addEventListener('click', () => {
        document.getElementById('email-signup-form').style.display = 'block';
        document.getElementById('email-signup-btn').style.display = 'none';
    });

    // Email signup form submission
    document.getElementById('email-signup-form').addEventListener('submit', (e) => {
        e.preventDefault();
        simulateLogin('email');
    });

    // Navigation buttons
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const targetScreen = btn.getAttribute('data-screen');
            navigateToScreen(targetScreen);
            updateActiveNavButton(btn);
        });
    });

    // Back buttons
    document.querySelectorAll('.back-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            navigateBack();
        });
    });

    // Dating preferences button
    document.getElementById('dating-preferences-btn').addEventListener('click', () => {
        document.getElementById('dating-preferences-modal').classList.add('active');
    });

    // Save preferences button
    document.getElementById('save-preferences-btn').addEventListener('click', () => {
        saveDatingPreferences();
        document.getElementById('dating-preferences-modal').classList.remove('active');
        showToast('Preferences saved!');
        // Reload dating cards with new preferences
        loadDatingCards();
    });

    // Dating action buttons
    document.querySelector('.skip-btn').addEventListener('click', () => {
        skipCurrentDatingProfile();
    });

    document.querySelector('.like-btn').addEventListener('click', () => {
        likeCurrentDatingProfile();
    });

    // Range slider events
    setupRangeSliders();

    // Profile tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const tab = btn.getAttribute('data-tab');
            switchProfileTab(tab);
        });
    });

    // Recipe card clicks
    document.addEventListener('click', (e) => {
        const recipeCard = e.target.closest('.recipe-card');
        if (recipeCard) {
            const recipeId = recipeCard.getAttribute('data-id');
            showRecipeDetail(recipeId);
        }
    });

    // Leftover card clicks
    document.addEventListener('click', (e) => {
        const leftoverCard = e.target.closest('.leftover-card');
        if (leftoverCard) {
            const leftoverId = leftoverCard.getAttribute('data-id');
            showLeftoverDetail(leftoverId);
        }
    });
}

// Screen navigation history
const screenHistory = [];

// Navigate to a specific screen
function navigateToScreen(screenId) {
    // Get all screens
    const screens = document.querySelectorAll('.screen');
    const targetScreen = document.getElementById(screenId);
    
    // If the target screen is already active, do nothing
    if (targetScreen.classList.contains('active')) {
        return;
    }
    
    // Find the current active screen
    const activeScreen = document.querySelector('.screen.active');
    
    // If there's an active screen, prepare it for exit
    if (activeScreen) {
        // Determine direction (forward or backward)
        const isForward = !screenHistory.includes(screenId) || 
                          (screenHistory.indexOf(screenId) > screenHistory.indexOf(activeScreen.id));
        
        // Set transform direction for exit animation
        activeScreen.style.transition = 'transform 0.3s ease-in-out';
        activeScreen.style.transform = isForward ? 'translateX(-100%)' : 'translateX(100%)';
        
        // After animation completes, hide the screen
        setTimeout(() => {
            activeScreen.classList.remove('active');
            activeScreen.style.transform = '';
            activeScreen.style.transition = '';
        }, 300);
    }
    
    // Prepare the target screen for entry
    targetScreen.style.transform = 'translateX(100%)';
    targetScreen.classList.add('active');
    
    // Trigger reflow to ensure the transform is applied before changing it
    targetScreen.offsetHeight;
    
    // Animate the entry
    targetScreen.style.transition = 'transform 0.3s ease-in-out';
    targetScreen.style.transform = 'translateX(0)';
    
    // Clean up after animation
    setTimeout(() => {
        targetScreen.style.transition = '';
    }, 300);
    
    // Add to history if it's a new screen (not going back)
    if (screenHistory.length === 0 || screenHistory[screenHistory.length - 1] !== screenId) {
        screenHistory.push(screenId);
    }
    
    // Special case for main app screens
    if (screenId !== 'splash-screen' && screenId !== 'auth-screen') {
        document.getElementById('main-app').classList.remove('hidden');
    } else {
        document.getElementById('main-app').classList.add('hidden');
    }
}

// Navigate back to previous screen
function navigateBack() {
    // Remove current screen from history
    if (screenHistory.length > 1) {
        screenHistory.pop();
        // Navigate to the previous screen
        navigateToScreen(screenHistory[screenHistory.length - 1]);
    }
}

// Update active navigation button
function updateActiveNavButton(activeBtn) {
    document.querySelectorAll('.nav-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    activeBtn.classList.add('active');
}

// Simulate login process
function simulateLogin(provider) {
    showToast(`Logging in with ${provider}...`);
    
    // Simulate API call delay
    setTimeout(() => {
        // Close modal
        document.getElementById('login-modal').classList.remove('active');
        
        // Hide auth screen and show main app
        navigateToScreen('home-screen');
        
        // Set first nav button as active
        document.querySelector('.nav-btn').classList.add('active');
        
        // Show search bar
        document.querySelector('.global-search-container').classList.add('visible');
        
        // Show welcome toast
        showToast('Welcome to FoodSocial!');
    }, 1000);
}

// Show toast notification
function showToast(message, duration = 3000) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('active');
    
    setTimeout(() => {
        toast.classList.remove('active');
    }, duration);
}

// Load mock data into the app
function loadMockData() {
    // Load feed posts
    loadFeedPosts();
    
    // Load recipes
    loadRecipes();
    
    // Load leftovers
    loadLeftovers();
    
    // Load dating profiles
    loadDatingCards();
    
    // Load profile data
    loadProfileData();
}

// Load feed posts
function loadFeedPosts() {
    const feedContainer = document.querySelector('.feed-container');
    feedContainer.innerHTML = '';
    
    mockData.posts.forEach(post => {
        const postElement = createPostElement(post);
        feedContainer.appendChild(postElement);
    });
}

// Create a post element
function createPostElement(post) {
    const postElement = document.createElement('div');
    postElement.className = 'post-card';
    
    const user = mockData.users.find(u => u.id === post.userId);
    
    postElement.innerHTML = `
        <div class="post-header">
            <img src="${user.avatar}" alt="${user.name}" class="post-avatar">
            <div class="post-user">${user.name}</div>
            <div class="post-time">${post.time}</div>
        </div>
        <div class="post-content">${post.content}</div>
        ${post.image ? `<img src="${post.image}" alt="Post image" class="post-image">` : ''}
        <div class="post-actions">
            <button class="post-action">
                <i class="far fa-heart"></i> ${post.likes}
            </button>
            <button class="post-action">
                <i class="far fa-comment"></i> ${post.comments}
            </button>
            <button class="post-action">
                <i class="far fa-bookmark"></i> Save
            </button>
        </div>
    `;
    
    return postElement;
}

// Load recipes
function loadRecipes() {
    const recipeGrid = document.querySelector('.recipe-grid');
    recipeGrid.innerHTML = '';
    
    mockData.recipes.forEach(recipe => {
        const recipeElement = createRecipeElement(recipe);
        recipeGrid.appendChild(recipeElement);
    });
}

// Create a recipe element
function createRecipeElement(recipe) {
    const recipeElement = document.createElement('div');
    recipeElement.className = 'recipe-card';
    recipeElement.setAttribute('data-id', recipe.id);
    
    recipeElement.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image">
        <div class="recipe-info">
            <div class="recipe-title">${recipe.title}</div>
            <div class="recipe-rating">
                <i class="fas fa-star"></i> ${recipe.rating}
            </div>
        </div>
    `;
    
    return recipeElement;
}

// Show recipe detail
function showRecipeDetail(recipeId) {
    const recipe = mockData.recipes.find(r => r.id === parseInt(recipeId));
    if (!recipe) return;
    
    const detailContainer = document.querySelector('.recipe-detail-container');
    detailContainer.innerHTML = '';
    
    const user = mockData.users.find(u => u.id === recipe.userId);
    
    detailContainer.innerHTML = `
        <img src="${recipe.image}" alt="${recipe.title}" class="recipe-detail-image">
        <h2 class="recipe-detail-title">${recipe.title}</h2>
        <div class="recipe-detail-meta">
            <div>By ${user.name}</div>
            <div><i class="fas fa-star"></i> ${recipe.rating} (${recipe.reviews} reviews)</div>
        </div>
        <div class="recipe-detail-section">
            <h3>Ingredients</h3>
            <ul class="ingredients-list">
                ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
        </div>
        <div class="recipe-detail-section">
            <h3>Instructions</h3>
            <ol class="instructions-list">
                ${recipe.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
            </ol>
        </div>
        <div class="recipe-detail-section">
            <h3>Dietary Information</h3>
            <div class="dating-preferences">
                ${recipe.dietaryInfo.map(info => `<span class="dating-preference">${info}</span>`).join('')}
            </div>
        </div>
    `;
    
    navigateToScreen('recipe-detail-screen');
}

// Load leftovers
function loadLeftovers() {
    const leftoversGrid = document.querySelector('.leftovers-grid');
    leftoversGrid.innerHTML = '';
    
    mockData.leftovers.forEach(leftover => {
        const leftoverElement = createLeftoverElement(leftover);
        leftoversGrid.appendChild(leftoverElement);
    });
}

// Create a leftover element
function createLeftoverElement(leftover) {
    const leftoverElement = document.createElement('div');
    leftoverElement.className = 'leftover-card';
    leftoverElement.setAttribute('data-id', leftover.id);
    
    const user = mockData.users.find(u => u.id === leftover.userId);
    
    leftoverElement.innerHTML = `
        <img src="${leftover.image}" alt="${leftover.title}" class="leftover-image">
        <div class="leftover-info">
            <div class="leftover-title">${leftover.title}</div>
            <div class="leftover-user">
                <img src="${user.avatar}" alt="${user.name}" class="leftover-user-avatar">
                <div class="leftover-user-name">${user.name}</div>
            </div>
            <div class="leftover-details">
                <div class="leftover-freshness">${leftover.freshness}</div>
                <div class="leftover-distance">${leftover.distance} km</div>
            </div>
            ${leftover.allergens.length > 0 ? 
                `<div class="leftover-allergens">
                    ${leftover.allergens.map(allergen => 
                        `<span class="allergen-tag">${allergen}</span>`
                    ).join('')}
                </div>` : ''
            }
        </div>
    `;
    
    return leftoverElement;
}

// Show leftover detail
function showLeftoverDetail(leftoverId) {
    const leftover = mockData.leftovers.find(l => l.id === parseInt(leftoverId));
    if (!leftover) return;
    
    const detailContainer = document.querySelector('.leftover-detail-container');
    detailContainer.innerHTML = '';
    
    const user = mockData.users.find(u => u.id === leftover.userId);
    
    detailContainer.innerHTML = `
        <img src="${leftover.image}" alt="${leftover.title}" class="leftover-detail-image">
        <h2 class="leftover-detail-title">${leftover.title}</h2>
        <div class="leftover-detail-meta">
            <div>Posted ${leftover.time}</div>
            <div>${leftover.distance} km away</div>
        </div>
        <div class="leftover-detail-description">
            ${leftover.description}
        </div>
        ${leftover.allergens.length > 0 ? 
            `<div class="leftover-detail-allergens">
                <h3>Allergy Information</h3>
                ${leftover.allergens.map(allergen => 
                    `<span class="allergen-tag">${allergen}</span>`
                ).join('')}
            </div>` : ''
        }
        <div class="leftover-detail-provider">
            <img src="${user.avatar}" alt="${user.name}" class="provider-avatar">
            <div class="provider-info">
                <div class="provider-name">${user.name}</div>
                <div class="provider-rating">
                    <i class="fas fa-star"></i> ${user.rating}
                </div>
            </div>
        </div>
        <button class="trade-button">Trade for ${leftover.credits} Credits</button>
    `;
    
    // Add event listener to trade button
    detailContainer.querySelector('.trade-button').addEventListener('click', () => {
        showToast(`Trading for ${leftover.title}...`);
        setTimeout(() => {
            showToast('Trade successful! Check your messages for pickup details.');
            navigateToScreen('leftovers-screen');
        }, 1000);
    });
    
    navigateToScreen('leftover-detail-screen');
}

// Load dating cards
function loadDatingCards() {
    const datingSwiper = document.querySelector('.dating-swiper');
    datingSwiper.innerHTML = '';
    
    // Filter dating profiles based on preferences
    const filteredProfiles = filterDatingProfiles();
    
    // Create and append dating cards
    filteredProfiles.forEach((profile, index) => {
        const datingCard = createDatingCard(profile);
        datingCard.style.zIndex = 1000 - index;
        datingSwiper.appendChild(datingCard);
    });
    
    // Initialize swipe functionality
    initSwipe();
}

// Filter dating profiles based on preferences
function filterDatingProfiles() {
    // Get preferences (in a real app, these would be stored in user profile)
    const dietaryPreferences = Array.from(document.querySelectorAll('#dating-preferences-modal input[type="checkbox"]:checked'))
        .filter(checkbox => checkbox.closest('.form-group').querySelector('label').textContent.includes('Dietary'))
        .map(checkbox => checkbox.value);
    
    const cuisinePreferences = Array.from(document.querySelectorAll('#dating-preferences-modal input[type="checkbox"]:checked'))
        .filter(checkbox => checkbox.closest('.form-group').querySelector('label').textContent.includes('Cuisine'))
        .map(checkbox => checkbox.value);
    
    const minAge = parseInt(document.getElementById('min-age').value);
    const maxAge = parseInt(document.getElementById('max-age').value);
    const maxDistance = parseInt(document.getElementById('distance').value);
    
    // Filter profiles based on preferences
    return mockData.datingProfiles.filter(profile => {
        // Age filter
        if (profile.age < minAge || profile.age > maxAge) {
            return false;
        }
        
        // Distance filter
        if (profile.distance > maxDistance) {
            return false;
        }
        
        // If no dietary preferences are set, don't filter by it
        if (dietaryPreferences.length > 0) {
            // Check if any of the profile's dietary preferences match the selected ones
            const hasDietaryMatch = profile.dietaryPreferences.some(pref => 
                dietaryPreferences.includes(pref.toLowerCase())
            );
            
            if (!hasDietaryMatch) {
                return false;
            }
        }
        
        // If no cuisine preferences are set, don't filter by it
        if (cuisinePreferences.length > 0) {
            // Check if any of the profile's cuisine preferences match the selected ones
            const hasCuisineMatch = profile.cuisinePreferences.some(pref => 
                cuisinePreferences.includes(pref.toLowerCase())
            );
            
            if (!hasCuisineMatch) {
                return false;
            }
        }
        
        return true;
    });
}

// Create a dating card
function createDatingCard(profile) {
    const datingCard = document.createElement('div');
    datingCard.className = 'dating-card';
    datingCard.setAttribute('data-id', profile.id);
    
    // Function to capitalize first letter of each word
    const capitalize = (str) => {
        return str.replace(/\b\w/g, char => char.toUpperCase());
    };
    
    datingCard.innerHTML = `
        <img src="${profile.image}" alt="${profile.name}" class="dating-image">
        <div class="dating-info">
            <div class="dating-name">
                ${profile.name}, ${profile.age}
                <span class="dating-distance">${profile.distance} km</span>
            </div>
            <div class="dating-bio">${profile.bio}</div>
            <div class="dating-preferences">
                ${profile.dietaryPreferences.map(pref => `<span class="dating-preference">${capitalize(pref)}</span>`).join('')}
                ${profile.cuisinePreferences.map(pref => `<span class="dating-preference">${capitalize(pref)}</span>`).join('')}
            </div>
        </div>
    `;
    
    return datingCard;
}

// Initialize swipe functionality for dating cards
function initSwipe() {
    const cards = document.querySelectorAll('.dating-card');
    if (cards.length === 0) return;
    
    cards.forEach(card => {
        let startX = 0;
        let currentX = 0;
        let isDragging = false;
        
        // Touch events
        card.addEventListener('touchstart', (e) => {
            startX = e.touches[0].clientX;
            isDragging = true;
            card.classList.add('swiping');
        });
        
        card.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            currentX = e.touches[0].clientX;
            const diffX = currentX - startX;
            card.style.transform = `translateX(${diffX}px) rotate(${diffX * 0.05}deg)`;
        });
        
        card.addEventListener('touchend', () => {
            if (!isDragging) return;
            isDragging = false;
            card.classList.remove('swiping');
            const diffX = currentX - startX;
            
            if (diffX > 100) {
                // Swipe right (like)
                card.classList.add('swipe-right');
                showToast('It\'s a match! 🎉');
                setTimeout(() => {
                    card.remove();
                    checkForMoreCards();
                }, 300);
            } else if (diffX < -100) {
                // Swipe left (skip)
                card.classList.add('swipe-left');
                setTimeout(() => {
                    card.remove();
                    checkForMoreCards();
                }, 300);
            } else {
                // Return to center
                card.style.transform = '';
            }
        });
        
        // Mouse events for desktop testing
        card.addEventListener('mousedown', (e) => {
            startX = e.clientX;
            isDragging = true;
            card.classList.add('swiping');
            e.preventDefault(); // Prevent text selection during drag
        });
        
        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            currentX = e.clientX;
            const diffX = currentX - startX;
            card.style.transform = `translateX(${diffX}px) rotate(${diffX * 0.05}deg)`;
        });
        
        document.addEventListener('mouseup', () => {
            if (!isDragging) return;
            isDragging = false;
            card.classList.remove('swiping');
            const diffX = currentX - startX;
            
            if (diffX > 100) {
                // Swipe right (like)
                card.classList.add('swipe-right');
                showToast('It\'s a match! 🎉');
                setTimeout(() => {
                    card.remove();
                    checkForMoreCards();
                }, 300);
            } else if (diffX < -100) {
                // Swipe left (skip)
                card.classList.add('swipe-left');
                setTimeout(() => {
                    card.remove();
                    checkForMoreCards();
                }, 300);
            } else {
                // Return to center
                card.style.transform = '';
            }
        });
    });
}

// Check if there are more cards, if not, show a message
function checkForMoreCards() {
    const remainingCards = document.querySelectorAll('.dating-card').length;
    if (remainingCards === 0) {
        const datingSwiper = document.querySelector('.dating-swiper');
        datingSwiper.innerHTML = `
            <div class="no-more-profiles">
                <i class="fas fa-cookie-bite" style="font-size: 48px; color: var(--accent); margin-bottom: 15px;"></i>
                <h3>No more profiles</h3>
                <p>We're cooking up some new matches for you!</p>
                <button class="btn-highlight" id="refresh-dating-btn">Refresh</button>
            </div>
        `;
        
        // Add event listener to the refresh button
        document.getElementById('refresh-dating-btn').addEventListener('click', () => {
            loadDatingCards();
        });
        
        // Style the no more profiles message
        const noMoreProfiles = datingSwiper.querySelector('.no-more-profiles');
        noMoreProfiles.style.display = 'flex';
        noMoreProfiles.style.flexDirection = 'column';
        noMoreProfiles.style.alignItems = 'center';
        noMoreProfiles.style.justifyContent = 'center';
        noMoreProfiles.style.height = '100%';
        noMoreProfiles.style.textAlign = 'center';
        noMoreProfiles.style.padding = '20px';
    }
}

// Skip current dating profile
function skipCurrentDatingProfile() {
    const currentCard = document.querySelector('.dating-card');
    if (!currentCard) return;
    
    currentCard.classList.add('swipe-left');
    setTimeout(() => {
        currentCard.remove();
        checkForMoreCards();
    }, 300);
}

// Like current dating profile
function likeCurrentDatingProfile() {
    const currentCard = document.querySelector('.dating-card');
    if (!currentCard) return;
    
    currentCard.classList.add('swipe-right');
    showToast('It\'s a match! 🎉');
    setTimeout(() => {
        currentCard.remove();
        checkForMoreCards();
    }, 300);
}

// Set up range sliders
function setupRangeSliders() {
    const minAgeSlider = document.getElementById('min-age');
    const maxAgeSlider = document.getElementById('max-age');
    const distanceSlider = document.getElementById('distance');
    
    const minAgeValue = document.getElementById('min-age-value');
    const maxAgeValue = document.getElementById('max-age-value');
    const distanceValue = document.getElementById('distance-value');
    
    minAgeSlider.addEventListener('input', () => {
        minAgeValue.textContent = minAgeSlider.value;
        if (parseInt(minAgeSlider.value) > parseInt(maxAgeSlider.value)) {
            maxAgeSlider.value = minAgeSlider.value;
            maxAgeValue.textContent = maxAgeSlider.value;
        }
    });
    
    maxAgeSlider.addEventListener('input', () => {
        maxAgeValue.textContent = maxAgeSlider.value;
        if (parseInt(maxAgeSlider.value) < parseInt(minAgeSlider.value)) {
            minAgeSlider.value = maxAgeSlider.value;
            minAgeValue.textContent = minAgeSlider.value;
        }
    });
    
    distanceSlider.addEventListener('input', () => {
        distanceValue.textContent = distanceSlider.value;
    });
}

// Save dating preferences
function saveDatingPreferences() {
    // In a real app, this would save to user profile or localStorage
    // For this prototype, we'll just log the preferences
    const minAge = document.getElementById('min-age').value;
    const maxAge = document.getElementById('max-age').value;
    const distance = document.getElementById('distance').value;
    
    const dietaryPrefs = Array.from(document.querySelectorAll('#dating-preferences-modal input[type="checkbox"]:checked'))
        .filter(checkbox => checkbox.closest('.form-group').querySelector('label').textContent.includes('Dietary'))
        .map(checkbox => checkbox.value);
    
    const cuisinePrefs = Array.from(document.querySelectorAll('#dating-preferences-modal input[type="checkbox"]:checked'))
        .filter(checkbox => checkbox.closest('.form-group').querySelector('label').textContent.includes('Cuisine'))
        .map(checkbox => checkbox.value);
    
    const dateTypes = Array.from(document.querySelectorAll('#dating-preferences-modal input[type="checkbox"]:checked'))
        .filter(checkbox => checkbox.closest('.form-group').querySelector('label').textContent.includes('Date Types'))
        .map(checkbox => checkbox.value);
    
    console.log('Dating preferences saved:', {
        ageRange: { min: minAge, max: maxAge },
        distance,
        dietaryPrefs,
        cuisinePrefs,
        dateTypes
    });
}

// Load profile data
function loadProfileData() {
    // Set profile data
    document.querySelector('.username').textContent = 'Jane Doe';
    document.querySelector('.bio').textContent = 'Food enthusiast and amateur chef. I love trying new recipes and sharing my cooking adventures!';
    
    // Load profile content based on active tab
    switchProfileTab('posts');
}

// Switch profile tab
function switchProfileTab(tab) {
    // Update active tab button
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`.tab-btn[data-tab="${tab}"]`).classList.add('active');
    
    // Load content based on tab
    const profileContent = document.querySelector('.profile-content');
    profileContent.innerHTML = '';
    
    switch (tab) {
        case 'posts':
            mockData.posts
                .filter(post => post.userId === 1) // Assuming user ID 1 is the current user
                .forEach(post => {
                    const postElement = createPostElement(post);
                    profileContent.appendChild(postElement);
                });
            break;
        case 'recipes':
            mockData.recipes
                .filter(recipe => recipe.userId === 1)
                .forEach(recipe => {
                    const recipeElement = createRecipeElement(recipe);
                    profileContent.appendChild(recipeElement);
                });
            break;
        case 'leftovers':
            mockData.leftovers
                .filter(leftover => leftover.userId === 1)
                .forEach(leftover => {
                    const leftoverElement = createLeftoverElement(leftover);
                    profileContent.appendChild(leftoverElement);
                });
            break;
        case 'dating':
            profileContent.innerHTML = `
                <div class="profile-section">
                    <h3>Dating Profile</h3>
                    <button class="btn-secondary">Edit Dating Profile</button>
                    <div class="dating-preferences">
                        <span class="dating-preference">Vegetarian</span>
                        <span class="dating-preference">Italian</span>
                        <span class="dating-preference">Japanese</span>
                        <span class="dating-preference">Thai</span>
                    </div>
                </div>
                <div class="profile-section">
                    <h3>Matches</h3>
                    <div class="matches-grid">
                        <div class="match-card">
                            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Match" class="match-avatar">
                            <div class="match-name">Michael</div>
                        </div>
                        <div class="match-card">
                            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Match" class="match-avatar">
                            <div class="match-name">Sarah</div>
                        </div>
                    </div>
                </div>
            `;
            break;
    }
} 