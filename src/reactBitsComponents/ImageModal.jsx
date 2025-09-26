import { useEffect } from 'react';
import './ImageModal.css';

export function ImageModal({ isOpen, onClose, image }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !image) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-image-container">
          <img src={image.img} alt={image.title || 'Image'} className="modal-image" />
          <div className="image-caption">
            <h3 className="caption-title">{image.title || 'Untitled'}</h3>
            <p className="caption-description">{image.description || 'No description available.'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}