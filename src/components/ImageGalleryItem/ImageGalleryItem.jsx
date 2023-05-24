import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import styled from './imagegallery.module.css';
export const GaleryItem = ({ webImg, largeImageURL, tags }) => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  // state = {
  //   isModalOpened: false,
  // };

  const toggleModal = () => {
    setIsModalOpened(ModalOpened => !ModalOpened);
  };

  // const { webImg, largeImageURL, tags } = this.props;
  return (
    <li className={styled.ImageGalleryItem}>
      <img
        className={styled.ImageGalleryItemImage}
        src={webImg}
        alt={tags}
        onClick={toggleModal}
      />
      {isModalOpened && (
        <Modal onClose={toggleModal}>
          <img src={largeImageURL} alt={tags} />
        </Modal>
      )}
    </li>
  );
};
