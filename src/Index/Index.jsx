import React from "react";
import './Index.css'




function Index() {
    return (
      <div class="landing-container">
      <div class="main-wrapper">

        <section class="hero-section">
          <div class="hero-content">
            <div class="hero-left">
              <div class="hero-image-wrapper">
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/9227986549fcc1c0b2a50598f788c1a38fc20575257b1f15b29dcbf306f1c1cd?apiKey=2c9d54f744c4489ca7176332d686675c&" alt="Hero background" class="hero-image" />
                
                <h1 class="hero-title">Apple</h1>
                <div class="product-thumbnails">
                  <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/35ee1fdd99d563d321875a71a22bb405b78c79fa355bbab55079ee6494eca772?apiKey=2c9d54f744c4489ca7176332d686675c&" alt="Product thumbnail 1" class="thumbnail thumbnail-1" />
                  <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/6a83cddc320123e0f518866dd4a05ed7da197ad97efd24391a77234ed523bffc?apiKey=2c9d54f744c4489ca7176332d686675c&" alt="Product thumbnail 2" class="thumbnail thumbnail-2" />
                  <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/8eac454b15aae63a362a8b23b4cd2cc8bd00569c7a13f74bb221f674e990c0fe?apiKey=2c9d54f744c4489ca7176332d686675c&" alt="Product thumbnail 3" class="thumbnail thumbnail-3" />
                </div>
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/1491d9e977a7beea3ba251f36e51b52b1c8ba263be2c6d857cf62d9a99aaf741?apiKey=2c9d54f744c4489ca7176332d686675c&" alt="" class="indicator" />
              </div>
            </div>
            <div class="hero-right">
              <div class="hero-content-right">
                <h2 class="product-title">Airpods Pro</h2>
                <p class="product-description">
                  Lorem ipsum dolor sit amet consectetur. Quam accumsan ornare diam et quis aliquam. Diam tincidunt accumsan enim tristique velit proin luctus massa auctor.
                </p>
              </div>
            </div>
          </div>
        </section>
    
      </div>
    </div>  
    );
}

export default Index;