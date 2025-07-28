# FoodSocial Prototype

This is a functioning prototype for FoodSocial, a food-focused social platform that combines social networking, recipe sharing, leftovers marketplace, and food-centered dating.

## Features Implemented in Prototype

1. **Authentication Flow**
   - SSO options (simulated)
   - Email signup form
   - Welcome screen

2. **Social Feed**
   - View posts from other users
   - Post composer (simulated)
   - Like and comment buttons

3. **Recipe Sharing**
   - Browse recipes
   - View recipe details
   - Create recipe button (simulated)

4. **Leftovers Marketplace**
   - Browse available leftovers
   - Search functionality
   - Trade button (simulated)

5. **Food-Centered Dating**
   - Browse dating profiles
   - Like/Skip buttons
   - Food preference matching

6. **User Profile**
   - View profile information
   - Tabs for posts, recipes, leftovers, and dating

## How to Use

### Method 1: Direct File Access
1. Open `index.html` in a web browser (preferably on a mobile device or using mobile emulation in browser developer tools)
2. Click "Join Now" to start the authentication flow
3. Use either SSO options or email signup (all are simulated and will proceed to the main app)
4. Navigate between screens using the bottom navigation bar
5. Interact with the various features as described above

### Method 2: Using the Local Server
1. Make sure you have Node.js installed
2. Open a terminal in the project directory
3. Run `npm start` to start the local server
4. Open `http://localhost:3000/` in your browser
5. You'll see a preview page with both Android and iOS frames
6. Alternatively, go to `http://localhost:3000/index.html` to view the app directly

## Technical Details

- Built with HTML5, CSS3, and vanilla JavaScript
- Responsive design works on both Android and iOS devices
- Uses mock data (in `js/data.js`) to simulate API responses
- Follows the color scheme and UI guidelines from the design document

## Notes

This is a prototype and not all functionality is fully implemented. Many actions will show toast notifications instead of performing actual operations.

## Credits

- Profile images: [RandomUser.me](https://randomuser.me/)
- Food images: [Unsplash](https://unsplash.com/) 