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
  };

  componentDidUpdate(_, prevState) {
    const { query, page } = this.state;
    if (prevState.query !== query || prevState.page !== page) {
      fetchImages(query, page).then(resp => {
        this.setState(({ images }) => ({
          images: page === 1 ? [...resp.hits] : [...images, ...resp.hits],
          totalImgs: resp.totalHits,
        }));
      })
        .catch(error => {
          console.log(error);
          return Notiflix.Notify.failure(
            'Sorry, there are no images matching your search query. Please try again.'
          );
      }).finally(() => {
          this.setState({ isLoading: false });
        });
    }
  }

  handleLoadMore = () => {
    this.setState(({ page }) => ({ page: page + 1, isLoading: true }));
  };

  handleSubmit = query => {
    this.setState({ query, isLoading: true });
  }

  renderButtonOrLoader = () => {
    return this.state.isLoading ? (
        <Loader />
      ) : (
        this.state.images.length !== 0 &&
        this.state.images.length < this.state.totalImgs && (
          <Button onClick={this.handleLoadMore} />
        )
    );
}

  render() {
    return (
      <Container>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery images={this.state.images} />
        {this.renderButtonOrLoader()}
      </Container>

  );
  }
}
