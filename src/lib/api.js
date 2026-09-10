const GAS_WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbzziR8G9MJU4fZGRiNMCFNXM8IyyFQv1VyBu-DlTH6ZncnDKStJhlLq_wh6_rUHTojAzQ/exec';

export async function fetchOnelishData() {
  try {
    const response = await fetch(GAS_WEB_APP_URL, {
      cache: 'no-store'
    });

    if (!response.ok) {
      throw new Error(`Gagal menarik data. Status: ${response.status}`);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error("Error mengambil data dari Google Sheets:", error);
    // Mengembalikan array kosong jika gagal, agar website tidak crash/error
    return { Games: [], Members: [], Events: [] };
  }
}