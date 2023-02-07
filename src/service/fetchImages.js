import axios from 'axios';
const params = {
  key: '31853267-b8e0df70d7b725fb45a2438ad',
  options: '&image_type=photo&orientation=horizontal&safesearch=true',
};
axios.defaults.baseURL = 'https://pixabay.com/api/';
export async function fetchImages(query, page) {
  const resp = await axios.get(
    `?key=${params.key}&q=${query}${params.options}&per_page=12&page=${page}`
  );
  return resp.data;
}
