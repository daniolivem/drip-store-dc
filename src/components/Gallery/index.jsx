const Gallery = () => {
  return (
    <Container>
      <div className='gallery'>
        <div className='gallery-item'>
          <img src={image1} alt='Imagem 1' />
        </div>
        <div className='gallery-item'>
          <img src={image2} alt='Imagem 2' />
        </div>
        <div className='gallery-item'>
          <img src={image3} alt='Imagem 3' />
        </div>
        <div className='gallery-item'>
          <img src={image4} alt='Imagem 4' />
        </div>
        <div className='gallery-item'>
          <img src={image5} alt='Imagem 5' />
        </div>
        <div className='gallery-item'>
          <img src={image6} alt='Imagem 6' />
        </div>
        <div className='gallery-item'>
          <img src={image7} alt='Imagem 7' />
        </div>
        <div className='gallery-item'>
          <img src={image8} alt='Imagem 8' />
        </div>
      </div>
    </Container>
  );
};

export default Gallery;
