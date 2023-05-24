import { useState, useEffect } from 'react';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { getImages } from 'servises/fetch';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Button } from 'components/Button/Button';
import { Loader } from 'components/Loader/Loader';

export const App = () => {
  const [searchText, setSearchText] = useState('');
  const [image, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalHits, setTotalHits] = useState(0);

  useEffect(() => {
    if (!searchText) {
      return;
    }
    async function fetchData() {
      try {
        setIsLoading(true);
        const { images, totalImages } = await getImages(searchText, page);
        if (images.length === 0) {
          Notify.failure('Zero results. Try to search something else ');
          return;
        }
        setImages(prevState => [...prevState, ...images]);
        setTotalHits(totalImages);
      } catch (error) {
        Notify.failure(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [searchText, page]);

  const onLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const setSearch = searchText => {
    if (searchText === '') {
      Notify.failure(
        'You sure that you want to find nothing? just type in something if don*t'
      );
      return;
    }
    setSearchText(searchText);
    setImages([]);
    setPage(1);
  };

  return (
    <div
      id="root"
      style={{
        fontSize: 40,
        color: '#010101',
        display: 'grid',
        gridtemplatecolumns: '1fr',
        gridgap: '16px',
        paddingbottom: '24px',
      }}
    >
      <Searchbar onSubmit={setSearch} />
      {image.length > 0 && <ImageGallery images={image} />}
      {totalHits !== image.length && !isLoading && (
        <Button onLoad={onLoadMore}> Load more</Button>
      )}
      {isLoading && <Loader />}
    </div>
  );
};
