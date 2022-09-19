import React from 'react';
import './ProductGrid.css';

function ProductGrid() {
    return (
        <div className='pg-container'>
            <div class="container">
            <h1 className='prohead'>HOT PRODUCTS</h1>
                <div class="row">
                    <div class="col-md-3 col-sm-6">
                        <div class="product-grid">
                            <div class="product-image">
                                <a href="#">
                                    <img class="pic-1" src="./products/im1.jpg" />
                                </a>
                                <span class="product-discount-label">-20%</span>
                            </div>
                            <div class="product-content">
                                <h3 class="title">
                                    <a href="#">Smart Mirror</a>
                                </h3>
                                <div class="price">$16.00
                                    <span>$20.00</span>
                                </div>
                            </div>
                            <ul class="social">
                                <li><a href="" data-tip="Quick View"><i class="fa fa-eye"></i></a></li>
                                <li><a href="" data-tip="Wishlist"><i class="fa fa-heart"></i></a></li>
                                <li><a href="" data-tip="add to cart"><i class="fa fa-shopping-cart"></i></a></li>
                                <li><a href="" data-tip="Compare"><i class="fa fa-random"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-3 col-sm-6">
                        <div class="product-grid">
                            <div class="product-image">
                                <a href="#">
                                    <img class="pic-1" src="./products/ims1.jpg" />
                                </a>
                            </div>
                            <div class="product-content">
                                <h3 class="title">
                                    <a href="#">Women's Top</a>
                                </h3>
                                <div class="price">$17.50</div>
                            </div>
                            <ul class="social">
                                <li><a href="" data-tip="Quick View"><i class="fa fa-eye"></i></a></li>
                                <li><a href="" data-tip="Wishlist"><i class="fa fa-heart"></i></a></li>
                                <li><a href="" data-tip="add to cart"><i class="fa fa-shopping-cart"></i></a></li>
                                <li><a href="" data-tip="Compare"><i class="fa fa-random"></i></a></li>
                            </ul>
                        </div>
                    </div><div class="col-md-3 col-sm-6">
                        <div class="product-grid">
                            <div class="product-image">
                                <a href="#">
                                    <img class="pic-1" src="./products/im2.jpg" />
                                </a>
                            </div>
                            <div class="product-content">
                                <h3 class="title">
                                    <a href="#">OFFICE TABLE</a>
                                </h3>
                                <div class="price">$17.50</div>
                            </div>
                            <ul class="social">
                                <li><a href="" data-tip="Quick View"><i class="fa fa-eye"></i></a></li>
                                <li><a href="" data-tip="Wishlist"><i class="fa fa-heart"></i></a></li>
                                <li><a href="" data-tip="add to cart"><i class="fa fa-shopping-cart"></i></a></li>
                                <li><a href="" data-tip="Compare"><i class="fa fa-random"></i></a></li>
                            </ul>
                        </div>
                    </div><div class="col-md-3 col-sm-6">
                        <div class="product-grid">
                            <div class="product-image">
                                <a href="#">
                                    <img class="pic-1" src="./products/ims2.jpg" />
                                </a>
                            </div>
                            <div class="product-content">
                                <h3 class="title">
                                    <a href="#">SMART TABLE</a>
                                </h3>
                                <div class="price">$17.50</div>
                            </div>
                            <ul class="social">
                                <li><a href="" data-tip="Quick View"><i class="fa fa-eye"></i></a></li>
                                <li><a href="" data-tip="Wishlist"><i class="fa fa-heart"></i></a></li>
                                <li><a href="" data-tip="add to cart"><i class="fa fa-shopping-cart"></i></a></li>
                                <li><a href="" data-tip="Compare"><i class="fa fa-random"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            </div>
                )
}

                export default ProductGrid