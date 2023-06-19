import React, { useState, useEffect } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../Assets/style.css';

function ShowProduct() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/getAllPostImage')
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <section className="best-receipe-area">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-heading">
                <h3>The best Receipies</h3>
              </div>
            </div>
          </div>
          <div className="row">

            {/* Map over the posts array */}
            {posts.map((post) => (
              <div className="col-12 col-sm-6 col-lg-4" key={post.id}>
                <div className="single-best-receipe-area mb-30">
                  <img src={post.image_url} alt={post.image_url} />
                  <div className="receipe-content">
                    <a href="receipe-post.html">
                      <h5>{post.title}</h5>
                    </a>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
    </div>
  );
}

export default ShowProduct;
