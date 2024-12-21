import { useState } from "react";
import "./Subscription.css";

const Subscription = () => {
  // حالة التحكم بظهور النافذة
  const [isModalOpen, setIsModalOpen] = useState(false);

  // دالة لفتح النافذة
  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  // دالة لإغلاق النافذة
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="subscription-container">
      {/* زر الاشتراك */}
      <button className="sub-btn" onClick={handleOpenModal}>
        Subscribe
      </button>

      {/* النافذة المنبثقة */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h2>Subscription Details</h2>
            <p>Get access to premium features for just $9.99/month!</p>
            <button className="close-btn" onClick={handleCloseModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Subscription;
