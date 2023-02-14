import { Component } from 'react';
import { Button } from './components/Button/Button';
import { Searchbar } from './components/Searchbar/Searchbar';
import { ImageGallery } from './components/ImageGallery/ImageGallery';
import { fetchImages } from 'service/fetchImages';
import { Loader } from './components/Loader/Loader';
import { Container } from './App.styled';
import Notiflix from 'notiflix';

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    isLoading: false,
    totalImgs: 0,
    error: '',
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      this.setState({ isLoading: true });
      fetchImages(query, page)
        .then(resp => {
          this.setState(({ images }) => ({
            images: [...images, ...resp.hits],
            totalImgs: resp.totalHits,
          }));
        })
        .catch(error => {
          this.setState({ error });
        })
        .finally(() => {
          this.setState({ isLoading: false });
        });
    }
  }

  handleLoadMore = () => {
    this.setState(({ page }) => ({ page: page + 1 }));
  };

  handleSubmit = query => {
    this.setState({ query, page: 1, images: [] });
  };

  render() {
    const { error, images, isLoading, totalImgs } = this.state;
    const totalPage = images.length / totalImgs;
    return (
      <Container>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery images={images} />
        {isLoading && <Loader />}

        {totalPage < 1 && <Button onClick={this.handleLoadMore} />}

        {error &&
          Notiflix.Notify.failure(
            'Sorry, there are no images matching your search query. Please try again.'
          )}
      </Container>
    );
  }
}
