import axios from 'axios';

export async function getPhotos(params = {}) {
  
    const API_BASE_URL = 'https://api.pexels.com/v1/curated';
    const API_KEY = '563492ad6f9170000100000154ad4ac4ee4346c385b7fff974a8a2b6';
    const PER_PAGE_DEFAULT = 40;
  
  return axios.get(API_BASE_URL, {
    params: {
      per_page: PER_PAGE_DEFAULT,
      ...params,
    },
    headers: {
      Authorization: `${API_KEY}`
    },
  });
}