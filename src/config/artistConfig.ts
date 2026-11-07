import { ArtistConfig } from '../types/artist';

export const defaultArtistConfig: ArtistConfig = {
  // ============================================================
  // ARTIST INFORMATION
  // ============================================================
  artistName: "A100",

  // ============================================================
  // HERO ASSETS
  // ============================================================
  heroVideoUrl: "/hero-poster.jpg",
  heroImage: "/hero-poster.jpg",
  profileImage: "/profile.jpg",

  // ============================================================
  // SOCIALS
  // ============================================================
  socials: [
    {
      id: "spotify",
      platform: "spotify",
      url: "https://open.spotify.com/artist/69NVWArugLKowYZUIdDURb?si=KzVsNdPOQ12vF1D9wtHRgQ&utm_source=copy-link",
      label: "Spotify",
      isStreaming: true
    },
    {
      id: "apple-music",
      platform: "apple-music",
      url: "https://music.apple.com/us/artist/a100/1720072092",
      label: "Apple Music",
      isStreaming: true
    },
    {
      id: "youtube",
      platform: "youtube",
      url: "https://youtube.com/@a100_music?si=sBmZ4d7WoLrYQT8n",
      label: "YouTube"
    },
    {
      id: "instagram",
      platform: "instagram",
      url: "https://www.instagram.com/a100.ct?vrfl=MTl6bmwzcTRpMzZsdg==",
      label: "Instagram"
    },
    {
      id: "tiktok",
      platform: "tiktok",
      url: "https://www.tiktok.com/@a100_ct?_r=1&_t=ZP-9BC4NJ7gBxe",
      label: "TikTok"
    }
  ],

  // ============================================================
  // SITE TABS
  // ============================================================
  tabs: {
    music: {
      enabled: true,
      title: "MUSIC",
      releases: [
        {
          id: "impatient-perfectionist",
          title: "Impatient Perfectionist",
          type: "album",
          releaseDate: "August 6, 2026",
          coverArt: "/covers/impatient-perfectionist.jpg",
          spotifyUrl: "https://open.spotify.com/album/4Xom4MfvxSjBEv4pX2aGLg",
          appleMusicUrl: "https://music.apple.com/us/album/impatient-perfectionist/6791349056",
          itunesUrl: "https://music.apple.com/us/album/impatient-perfectionist/6791349056",
          deezerUrl: "https://www.deezer.com/album/1030087032",
          youtubeUrl: "https://youtu.be/AnRkpg0cQ3U",
          youtubeMusicUrl: "https://music.youtube.com/search?q=A100+Impatient+Perfectionist",
          amazonMusicUrl: "https://music.amazon.com/search/A100+Impatient+Perfectionist",
          tidalUrl: "https://listen.tidal.com/search?q=A100+Impatient+Perfectionist"
        },
        {
          id: "fire-in-the-streets",
          title: "Fire In The Streets",
          type: "single",
          releaseDate: "June 4, 2026",
          coverArt: "/covers/fire-in-the-streets.jpg",
          spotifyUrl: "https://open.spotify.com/album/4WpSGD8MeDqsrUZgFqSTlV",
          appleMusicUrl: "https://music.apple.com/us/album/fire-in-the-streets-a100-single/6776353860",
          itunesUrl: "https://music.apple.com/us/album/fire-in-the-streets-a100-single/6776353860",
          deezerUrl: "https://www.deezer.com/album/1006959471",
          youtubeMusicUrl: "https://music.youtube.com/search?q=A100+Fire+In+The+Streets",
          amazonMusicUrl: "https://music.amazon.com/search/A100+Fire+In+The+Streets",
          tidalUrl: "https://listen.tidal.com/search?q=A100+Fire+In+The+Streets"
        },
        {
          id: "bond",
          title: "Bond",
          type: "single",
          releaseDate: "April 9, 2026",
          coverArt: "/covers/bond.jpg",
          spotifyUrl: "https://open.spotify.com/album/40i0PWYug705wLiMVNIx24",
          appleMusicUrl: "https://music.apple.com/us/album/bond-single/1892395031",
          itunesUrl: "https://music.apple.com/us/album/bond-single/1892395031",
          deezerUrl: "https://www.deezer.com/album/958094931",
          youtubeUrl: "https://youtu.be/Zqw89w-5itY",
          youtubeMusicUrl: "https://music.youtube.com/search?q=A100+Bond",
          amazonMusicUrl: "https://music.amazon.com/search/A100+Bond",
          tidalUrl: "https://listen.tidal.com/search?q=A100+Bond"
        },
        {
          id: "in-da-club",
          title: "In Da Club",
          type: "single",
          releaseDate: "July 2, 2024",
          coverArt: "/covers/in-da-club.jpg",
          spotifyUrl: "https://open.spotify.com/track/5YzmrQ4oCQWooFsT7GeoXe",
          appleMusicUrl: "https://music.apple.com/us/album/in-da-club-single/1755123518",
          itunesUrl: "https://music.apple.com/us/album/in-da-club-single/1755123518",
          deezerUrl: "https://www.deezer.com/album/609554112",
          youtubeMusicUrl: "https://music.youtube.com/search?q=A100+In+Da+Club",
          amazonMusicUrl: "https://music.amazon.com/search/A100+In+Da+Club",
          tidalUrl: "https://listen.tidal.com/search?q=A100+In+Da+Club"
        },
        {
          id: "shottas",
          title: "Shottas (feat. Recky Rondo)",
          type: "single",
          releaseDate: "February 20, 2026",
          coverArt: "/covers/shottas.jpg",
          spotifyUrl: "https://open.spotify.com/track/6Lyh2lf7L8qMXyQ192Nvi3",
          appleMusicUrl: "https://music.apple.com/us/album/shottas-feat-recky-rondo-single/1879266129",
          itunesUrl: "https://music.apple.com/us/album/shottas-feat-recky-rondo-single/1879266129",
          deezerUrl: "https://www.deezer.com/album/922907621",
          youtubeUrl: "https://youtu.be/eBPNWvRX3E0",
          youtubeMusicUrl: "https://music.youtube.com/search?q=A100+Shottas",
          amazonMusicUrl: "https://music.amazon.com/search/A100+Shottas",
          tidalUrl: "https://listen.tidal.com/search?q=A100+Shottas"
        }
      ]
    },

    videos: {
      enabled: true,
      title: "VIDEOS",
      items: [
        {
          id: "impatient-perfectionist-trailer",
          title: "A100 - Impatient Perfectionist The Ep [TRAILER]",
          youtubeId: "AnRkpg0cQ3U",
          thumbnail: "https://i.ytimg.com/vi/AnRkpg0cQ3U/hqdefault.jpg"
        },
        {
          id: "bond-video",
          title: "A100 - BOND [music video]",
          youtubeId: "Zqw89w-5itY",
          thumbnail: "https://i.ytimg.com/vi/Zqw89w-5itY/hqdefault.jpg"
        },
        {
          id: "shottas-video",
          title: "A100 x Recky Rondo - Shottas",
          youtubeId: "eBPNWvRX3E0",
          thumbnail: "https://i.ytimg.com/vi/eBPNWvRX3E0/hqdefault.jpg"
        }
      ]
    },

    live: {
      enabled: true,
      title: "LIVE",
      status: "coming_soon"
    },

    shop: {
      enabled: true,
      title: "STORE",
      status: "coming_soon"
    },

    contact: {
      enabled: true,
      title: "CONTACT",
      managementEmail: ""
    }
  }
};
