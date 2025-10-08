# VibeStream - Modern Music Streaming App

A beautiful, responsive music streaming application that plays English superhit songs from YouTube with a modern gradient design.

## 🚀 Features

- **Modern UI/UX**: Beautiful gradient design with glass-morphism effects
- **YouTube Integration**: Streams actual music from YouTube
- **Responsive Design**: Works perfectly on both desktop and mobile devices
- **Music Player**: Full-featured player with play, pause, next, previous controls
- **Playlist Management**: Create and manage your playlists
- **Theme Support**: Light and dark mode toggle
- **Search Functionality**: Search for songs and artists
- **Progress Tracking**: Real-time progress bar with seek functionality
- **Volume Control**: Adjustable volume with visual indicator
- **Like System**: Like/unlike your favorite songs

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Icons**: Font Awesome 6.4.0
- **YouTube API**: YouTube IFrame Player API
- **Styling**: CSS Grid, Flexbox, CSS Variables
- **Responsive**: Mobile-first responsive design

## 📁 Project Structure

```
vibestream/
│
├── index.html          # Main HTML file
├── styles.css          # All styling and responsive design
├── app.js             # Main JavaScript application logic
└── README.md          # Project documentation
```

## 🎵 How It Works

### Core Components

1. **YouTube Integration**
   - Uses YouTube IFrame API for audio streaming
   - Hidden player that streams music in the background
   - Real-time progress tracking and controls

2. **Music Management**
   - Sample dataset of popular English songs
   - Playlist creation and management
   - Recently played tracking
   - Favorite songs system

3. **User Interface**
   - Modern gradient design with smooth animations
   - Responsive grid layout for song display
   - Interactive player controls
   - Theme switching capability

### Key Features Explained

- **Real Audio Streaming**: Uses YouTube's audio streaming capabilities
- **Progress Tracking**: Real-time progress updates from YouTube player
- **Responsive Design**: Adapts to all screen sizes using CSS Grid and Flexbox
- **Smooth Animations**: CSS transitions and keyframe animations
- **Local Storage**: Saves user preferences and playlists

## 🎨 Design Features

### Color Scheme
- **Primary**: #6a11cb (Purple)
- **Secondary**: #2575fc (Blue)
- **Accent**: #ff2d75 (Pink)
- **Dark Theme**: Deep blues and purples
- **Light Theme**: Clean white with accent colors

### Typography
- **Font Family**: Segoe UI, system fonts
- **Weights**: 400 (Regular), 500 (Medium), 600 (Semi-bold), 700 (Bold), 800 (Extra-bold)

### Animations
- Hover effects with transform transitions
- Loading spinners
- Floating animations
- Smooth page transitions

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🔧 Setup Instructions

### Prerequisites
- Modern web browser with JavaScript enabled
- Internet connection (for YouTube streaming)
- GitHub account (for deployment)

### Local Development

1. **Clone or Download the Files**
   ```bash
   # If using git
   git clone <repository-url>
   cd vibestream
   ```

2. **Open the Application**
   - Simply open `index.html` in your web browser
   - Or use a local server for better performance:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js
     npx http-server
     ```

3. **Start Streaming**
   - Click on any song to start playback
   - Use player controls to manage playback
   - Create playlists and like songs

### GitHub Pages Deployment

1. **Create a Repository**
   - Create a new GitHub repository named `vibestream`
   - Upload all project files to the repository

2. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Select "Deploy from a branch"
   - Choose "main" branch and root folder
   - Click "Save"

3. **Access Your App**
   - Your app will be available at: `https://<username>.github.io/vibestream`

## 🎮 Usage Guide

### Basic Controls
- **Play/Pause**: Click the play button or spacebar
- **Next/Previous**: Use the arrow buttons in player
- **Volume**: Click volume bar or use the volume button
- **Seek**: Click anywhere on the progress bar
- **Like**: Click heart icon to favorite a song

### Navigation
- **Home**: Browse trending and recent songs
- **Discover**: Find new music
- **Favorites**: Access your liked songs
- **Library**: Manage your playlists

### Playlist Management
- Click "+" button to create new playlists
- Drag songs to add them to playlists
- Manage playlist order and contents

## 🔌 API Integration

### YouTube IFrame API
The app uses YouTube's IFrame API to:
- Load and play YouTube videos as audio
- Control playback programmatically
- Track playback progress
- Handle player events

### Note on YouTube API Key
The current implementation uses a placeholder API key. For production use:
1. Get a YouTube Data API v3 key from Google Cloud Console
2. Replace the placeholder key in `app.js`
3. Enable YouTube Data API for your project

## 🎵 Sample Music Data

The app comes with a curated list of popular English songs:
- "Blinding Lights" - The Weeknd
- "Shape of You" - Ed Sheeran
- "Dance Monkey" - Tones and I
- "Bad Guy" - Billie Eilish
- And more...

## 🔒 Browser Compatibility

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+

## 🚀 Performance Features

- **Lazy Loading**: Images load as needed
- **Efficient Rendering**: Virtual scrolling for large lists
- **Optimized Animations**: CSS-based animations for smooth performance
- **Memory Management**: Proper cleanup of event listeners

## 🛠️ Customization

### Adding New Songs
Edit the `SONGS` array in `app.js`:
```javascript
{
    id: 9,
    title: "Song Title",
    artist: "Artist Name",
    youtubeId: "YOUTUBE_VIDEO_ID",
    thumbnail: "IMAGE_URL",
    duration: "3:45",
    genre: "Pop",
    plays: 1000000
}
```

### Modifying Colors
Update CSS variables in `styles.css`:
```css
:root {
    --primary: #your-color;
    --secondary: #your-color;
    --accent: #your-color;
}
```

### Adding Features
The modular JavaScript architecture makes it easy to extend functionality by adding new methods to the appropriate classes.

## 📞 Support

For issues and questions:
1. Check browser console for errors
2. Ensure JavaScript is enabled
3. Verify internet connection for YouTube streaming
4. Check browser compatibility

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🎉 Credits

- **Icons**: Font Awesome
- **Music**: YouTube
- **Design**: Modern gradient UI patterns
- **Development**: Pure HTML, CSS, JavaScript

---

**Enjoy streaming your favorite music with VibeStream! 🎵**
