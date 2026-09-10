// This URL should be replaced with the actual Web App URL from Google Apps Script deployment
const GAS_WEB_APP_URL = process.env.NEXT_PUBLIC_GAS_WEB_APP_URL || 'https://script.google.com/macros/s/AKfycb.../exec';

/**
 * Fetches all data (Single Fetch architecture) from the Google Apps Script API.
 * The API uses CacheService to respond quickly.
 */
export async function fetchOnelishData() {
  try {
    // For development/mocking before the API is ready:
    if (process.env.NODE_ENV === 'development' && !process.env.NEXT_PUBLIC_GAS_WEB_APP_URL) {
      console.warn("Using mock data because NEXT_PUBLIC_GAS_WEB_APP_URL is not set.");
      return getMockData();
    }

    const response = await fetch(GAS_WEB_APP_URL, {
      next: { revalidate: 3600 }, // Next.js cache for 1 hour
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return getMockData(); // Fallback
  }
}

function getMockData() {
  return {
    "Games": [
      {
        "Game_ID": "G1",
        "Nama": "Spelling Bee Dash",
        "Tipe": "Interactive",
        "Deskripsi": "A fast-paced spelling game to improve your vocabulary.",
        "Thumbnail_URL": "",
        "Game_Link": "#"
      },
      {
        "Game_ID": "G2",
        "Nama": "Scrabble",
        "Tipe": "Boardgame",
        "Deskripsi": "Classic word building game. Available at our stand.",
        "Thumbnail_URL": "",
        "Game_Link": "#"
      }
    ],
    "Members": [
      {
        "Member_ID": "M1",
        "Nama": "Russell Reece",
        "Divisi": "President",
        "Shift_Preference": "Shift 1",
        "Foto_URL": "",
        "Quote": "Speak boldly, think sharply!"
      }
    ],
    "Events": [
      {
        "Event_ID": "E1",
        "Nama_Event": "Skill Up Seminar",
        "Tanggal": "2026-03-15",
        "Deskripsi": "English for Interview",
        "Galeri_Foto": ""
      }
    ]
  };
}
