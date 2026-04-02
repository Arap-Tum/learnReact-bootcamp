
import "../css/products.css";

const Products = ({ products, loading }) => {
  return (
    <main>

      <h2 className="section-title">Our Products</h2>

      {/* LOADING STATE */}
      {loading ? (
        <p className="loading">Loading products...</p>
      ) : (
        <div className="products-container">

          {products.map((product) => (
            <div className="product-card" key={product.id}>
              
              <img src={product.image} alt={product.name} />

              <h3>{product.name}</h3>

              <p className="price">Ksh {product.price}</p>

              <button>Add to Cart</button>

            </div>
          ))}

        </div>
      )}

    </main>
  );
};

export default Products;