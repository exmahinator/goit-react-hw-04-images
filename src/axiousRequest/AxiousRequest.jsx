import axios from 'axios';

// У відповіді від апі приходить масив об'єктів, в яких тобі цікаві лише наступні властивості.
// id - унікальний ідентифікатор
// webformatURL - посилання на маленьке зображення для списку карток
// largeImageURL - посилання на велике зображення для модального вікна

// https://pixabay.com/api/?q=cat&page=1&key=your_key&image_type=photo&orientation=horizontal&per_page=12

axios.defaults.baseURL = 'https://pixabay.com/api/';
const KEY =
  '&key=29649041-262fdf0daa2a4569f2631b8dd&image_type=photo&orientation=horizontal&per_page=12';

const axiosSearch = async (name, pageNumber) => {
  try {
    const {
      data: { hits, total },
    } = await axios.get(`?q=${name}&page=${pageNumber}${KEY}`);
    return { hits, total };
  } catch (error) {
    return alert('Error', error);
  }
};

export default axiosSearch;
