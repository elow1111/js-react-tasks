import React from 'react';
import cn from 'classnames';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeIndex: 0 }; // Начинаем с первого изображения (индекс 0)
  }

  handleClick = (direction) => {
    const { images } = this.props;
    const { activeIndex } = this.state;

    if (direction === "prev") {
      // Если предыдущий индекс меньше 0, устанавливаем на последнее изображение
      this.setState({
        activeIndex: (activeIndex - 1 + images.length) % images.length
      });
    } else if (direction === "next") {
      // Если следующий индекс больше последнего, возвращаемся к первому изображению
      this.setState({
        activeIndex: (activeIndex + 1) % images.length
      });
    }
  }

  render() {
    const { images } = this.props;
    const { activeIndex } = this.state;

    return (
      <div id="carousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {images.map((image, index) => (
            <div
              key={index}
              className={cn("carousel-item", { active: index === activeIndex })}
            >
              <img alt="" className="d-block w-100" src={image} />
            </div>
          ))}
        </div>
        <button
          className="carousel-control-prev"
          data-bs-target="#carousel"
          type="button"
          data-bs-slide="prev"
          onClick={() => this.handleClick("prev")}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          data-bs-target="#carousel"
          type="button"
          data-bs-slide="next"
          onClick={() => this.handleClick("next")}
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    );
  }
}
