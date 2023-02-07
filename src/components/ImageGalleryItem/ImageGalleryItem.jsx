import PropTypes from 'prop-types';
import { Modal } from 'components/Modal/Modal';
import { Component } from "react";
import { GalleryStyles, GalleryImage } from './ImageGalleryItem.styled';

export class ImageGalleryItem extends Component {
  static propTypes = {
    image: PropTypes.shape({
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    }).isRequired,
  };
  state = {
    isModalOpen: false,
  };

  handleToggleModal = () => {
    this.setState(({ isModalOpen }) => ({ isModalOpen: !isModalOpen }));
  };

  render() {
    const { webformatURL, largeImageURL } = this.props.image;
    const { isModalOpen } = this.state;
    return (
      <>
        <GalleryStyles onClick={this.handleToggleModal} className="ImageGalleryItem">
          <GalleryImage
            className="ImageGalleryItem-image"
            src={webformatURL}
            alt="img"
          />
        </GalleryStyles>
        {isModalOpen && (
          <Modal onClose={this.handleToggleModal} largeImg={largeImageURL} />
        )}   
      </>
    );
  };
};

ImageGalleryItem.propTypes = {
  image: PropTypes.object,
};