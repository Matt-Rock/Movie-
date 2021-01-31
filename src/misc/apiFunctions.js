const API_KEY = '&api_key=8392aa7b1367d4513164d59a8119315b';
const API_BASE_URL = 'https://api.themoviedb.org/3';
const API_RATED_URL = '/discover/movie?sort_by=popularity.desc&page=1';
// const API_SEARCH_URL

export async function apiGet(url = API_RATED_URL) {
  const response = await fetch(`${API_BASE_URL}${url}${API_KEY}`).then(r =>
    r.json()
  );
  return response;
}
