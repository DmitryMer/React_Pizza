import "./Preloader.css"; // Создайте этот файл (см. ниже)

function Preloader({ children, loading }) {
  return (
    <div>
      {loading ? (
        <div className="preloader">
          <div className="spinner"></div>
        </div>
      ) : (
        children
      )}
    </div>
  );
}

export default Preloader;
