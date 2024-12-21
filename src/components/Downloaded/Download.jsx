import "./Download.css";

const Download = ({ isDownloadModalOpen, handleCloseDownloadModal }) => {
  return (
    <>
      {isDownloadModalOpen && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h2>Download our App</h2>
            <p>Stay tuned! Our app will be available soon on both:</p>
            <div className="app-icons">
              {/* صورة متجر أبل */}
              <img
                src="/src/Tp/AppleStore.png"
                alt="App Store"
                onClick={() => {
                  // فتح نافذة جديدة بدون تغيير الرابط الحالي
                  window.open("https://apps.apple.com/", "_blank");
                }}
              />
              {/* صورة متجر جوجل */}
              <img
                src="/src/Tp/GooglePlay.png"
                alt="Google Play"
                onClick={() => {
                  // فتح نافذة جديدة بدون تغيير الرابط الحالي
                  window.open("https://play.google.com/", "_blank");
                }}
              />
            </div>
            <button className="close-btn" onClick={handleCloseDownloadModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Download;
