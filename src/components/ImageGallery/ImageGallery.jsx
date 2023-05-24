import { GaleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import style from './ImageGallery.module.css';
export const ImageGallery = ({ images }) => {
  return (
    <ul className={style.ImageGallery}>
      {images.map(image => (
        <GaleryItem
          key={image.id}
          webImg={image.webformatURL}
          tags={image.tags}
          largeImageURL={image.largeImageURL}
        />
      ))}
    </ul>
  );
};
