// VibeStream Music App - Main JavaScript File

// App Configuration
const CONFIG = {
    youtubeApiKey: 'AIzaSyB6YEqeB+key+needs+to+be+replaced', // You'll need to get your own YouTube API key
    defaultVolume: 70,
    autoPlayNext: true,
    theme: 'dark'
};

// Sample song data with YouTube video IDs
const SONGS = [
    {
        id: 1,
        title: "Blinding Lights",
        artist: "The Weeknd",
        youtubeId: "JwYX52BP2Sk",
        thumbnail: "https://i.ytimg.com/vi/JwYX52BP2Sk/maxresdefault.jpg",
        duration: "3:45",
        genre: "Pop",
        plays: 4500000000
    },
    {
        id: 2,
        title: "Shape of You",
        artist: "Ed Sheeran",
        youtubeId: "JGwWNGJdvx8",
        thumbnail: "https://i.ytimg.com/vi/JGwWNGJdvx8/maxresdefault.jpg",
        duration: "4:23",
        genre: "Pop",
        plays: 3800000000
    },
    {
        id: 3,
        title: "Dance Monkey",
        artist: "Tones and I",
        youtubeId: "q0hyYWKXF0Q",
        thumbnail: "https://i.ytimg.com/vi/q0hyYWKXF0Q/maxresdefault.jpg",
        duration: "3:29",
        genre: "Pop",
        plays: 3200000000
    },
    {
        id: 4,
        title: "Bad Guy",
        artist: "Billie Eilish",
        youtubeId: "DyDfgMOUjCI",
        thumbnail: "https://i.ytimg.com/vi/DyDfgMOUjCI/maxresdefault.jpg",
        duration: "3:14",
        genre: "Electropop",
        plays: 2800000000
    },
    {
        id: 5,
        title: "Levitating",
        artist: "Dua Lipa",
        youtubeId: "TUVcZfQe-Kw",
        thumbnail: "https://i.ytimg.com/vi/TUVcZfQe-Kw/maxresdefault.jpg",
        duration: "3:23",
        genre: "Disco",
        plays: 2200000000
    },
    {
        id: 6,
        title: "Stay",
        artist: "The Kid LAROI, Justin Bieber",
        youtubeId: "kTJczUoc26U",
        thumbnail: "https://i.ytimg.com/vi/kTJczUoc26U/maxresdefault.jpg",
        duration: "2:21",
        genre: "Pop",
        plays: 2600000000
    },
    {
        id: 7,
        title: "Watermelon Sugar",
        artist: "Harry Styles",
        youtubeId: "E07s5ZYygMg",
        thumbnail: "https://i.ytimg.com/vi/E07s5ZYygMg/maxresdefault.jpg",
        duration: "2:54",
        genre: "Pop",
        plays: 1900000000
    },
    {
        id: 8,
        title: "Don't Start Now",
        artist: "Dua Lipa",
        youtubeId: "oygrmJFKYZY",
        thumbnail: "https://i.ytimg.com/vi/oygrmJFKYZY/maxresdefault.jpg",
        duration: "3:03",
        genre: "Disco",
        plays: 2100000000
    }
];

// Sample playlists
const PLAYLISTS = [
    {
        id: 1,
        name: "Chill Vibes",
        description: "Relaxing tunes for your downtime",
        songs: [1, 3, 7],
        cover: "https://images.unsplash.com/photo-1571974599782-87624638275f?w=400"
    },
    {
        id: 2,
        name: "Workout Mix",
        description: "High-energy tracks for your workout",
        songs: [2, 5, 8],
        cover: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400"
    },
    {
        id: 3,
        name: "Road Trip",
        description: "Perfect companions for long drives",
        songs: [1, 4, 6],
        cover: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400"
    }
];

// App State
class AppState {
    constructor() {
        this.currentSongIndex = 0;
        this.isPlaying = false;
        this.isShuffled = false;
        this.repeatMode = 'none'; // 'none', 'one', 'all'
        this.volume = CONFIG.defaultVolume;
        this.currentTime = 0;
        this.duration = 0;
        this.likedSongs = new Set();
        this.recentlyPlayed = [];
        this.playQueue = [];
        this.currentPlaylist = null;
        this.theme = CONFIG.theme;
        
        // YouTube Player
        this.player = null;
        this.progressInterval = null;
    }
}

// DOM Elements Manager
class DOMManager {
    constructor() {
        this.elements = {};
        this.initializeElements();
    }

    initializeElements() {
        // Player elements
        this.elements.currentSongImg = document.getElementById('current-song-img');
        this.elements.currentSongTitle = document.getElementById('current-song-title');
        this.elements.currentSongArtist = document.getElementById('current-song-artist');
        this.elements.playPauseBtn = document.getElementById('play-pause-btn');
        this.elements.playPauseIcon = document.getElementById('play-pause-icon');
        this.elements.prevBtn = document.getElementById('prev-btn');
        this.elements.nextBtn = document.getElementById('next-btn');
        this.elements.progressBar = document.getElementById('progress-bar');
        this.elements.progress = document.getElementById('progress');
        this.elements.currentTimeEl = document.querySelector('.current-time');
        this.elements.totalTimeEl = document.querySelector('.total-time');
        this.elements.volumeLevel = document.getElementById('volume-level');
        this.elements.volumeBar = document.getElementById('volume-bar');
        this.elements.likeBtn = document.getElementById('like-btn');
        this.elements.shuffleBtn = document.getElementById('shuffle-btn');
        this.elements.repeatBtn = document.getElementById('repeat-btn');

        // Grid containers
        this.elements.trendingSongs = document.getElementById('trending-songs');
        this.elements.recentSongs = document.getElementById('recent-songs');
        this.elements.topSongs = document.getElementById('top-songs');
        this.elements.playlistsContainer = document.getElementById('playlists-container');
        this.elements.nowPlayingPreview = document.getElementById('now-playing-preview');

        // Navigation
        this.elements.navItems = document.querySelectorAll('.nav-item');
        this.elements.contentSections = document.querySelectorAll('.content-section');

        // Buttons
        this.elements.themeToggle = document.getElementById('theme-toggle');
        this.elements.searchInput = document.getElementById('search-input');
        this.elements.exploreBtn = document.getElementById('explore-btn');
        this.elements.addPlaylist = document.getElementById('add-playlist');
    }

    getElement(id) {
        return this.elements[id] || document.getElementById(id);
    }
}

// YouTube Player Manager
class YouTubePlayer {
    constructor() {
        this.player = null;
        this.isReady = false;
        this.initializePlayer();
    }

    initializePlayer() {
        // Load YouTube IFrame API
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        const
