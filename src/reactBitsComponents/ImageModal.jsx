import { useEffect, useMemo } from 'react';
import './ImageModal.css';

export function ImageModal({ isOpen, onClose, image, currentItems }) {
  // 使用 useMemo 确保每次语言切换时都重新获取最新的图片数据
  const currentImage = useMemo(() => {
    if (!image || !currentItems) return image;

    // 从当前处理过的数据中查找对应的图片，确保使用最新的语言数据
    const updatedImage = currentItems.find(item => item.id === image.id);
    return updatedImage || image;
  }, [image, currentItems, isOpen]); // 当 modal 打开或 currentItems 变化时更新

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

  if (!isOpen || !currentImage) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-image-container">
          <img src={currentImage.img} alt={currentImage.title || 'Image'} className="modal-image" />
          <div className="image-caption">
            <h3 className="caption-title">{currentImage.title || 'Untitled'}</h3>
            <p className="caption-description">{currentImage.description || ''}</p>
          </div>
        </div>
      </div>
    </div>
  );
}