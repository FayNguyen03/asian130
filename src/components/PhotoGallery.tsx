import './css/PhotoGallery.css';

interface GalleryImage {
  src: string;
  alt: string;
  description: string;
}

interface PhotoGalleryProps {
  images: GalleryImage[];
}

const PhotoGallery = ({ images }: PhotoGalleryProps) => {
  return (
    <div className="photo-gallery">
      {images.map((image, index) => (
        <div key={index} className="gallery-item">
          <div className="gallery-image-wrapper">
            <img 
              src={image.src} 
              alt={image.alt} 
              className="gallery-image"
            />
          </div>
          <p className="gallery-description">{image.description}</p>
        </div>
      ))}
    </div>
  );
};

export default PhotoGallery;
