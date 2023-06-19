import React, { useState } from 'react';

const ShowProduct = () => {
  return (
      <div>
        <section classname="best-receipe-area">
          <div classname="container">
            <div classname="row">
              <div classname="col-12">
                <div classname="section-heading">
                  <h3>The best Receipies</h3>
                </div>
              </div>
            </div>
            <div classname="row">
              
              <div classname="col-12 col-sm-6 col-lg-4">
                <div classname="single-best-receipe-area mb-30">
                  <img src="img/bg-img/r1.png" alt="edrtyuiol" />
                  <div classname="receipe-content">
                    <a href="receipe-post.html">
                      <h5>Sushi Easy Receipy</h5>
                    </a>
                    <div classname="ratings">
                      <i classname="fa fa-star" aria-hidden="true">
                        <i classname="fa fa-star" aria-hidden="true">
                          <i classname="fa fa-star" aria-hidden="true">
                            <i classname="fa fa-star" aria-hidden="true">
                              <i
                                classname="fa fa-star-o"
                                aria-hidden="true"></i>
                            </i>
                          </i>
                        </i>
                      </i>
                    </div>
                    <i classname="fa fa-star" aria-hidden="true">
                      <i classname="fa fa-star" aria-hidden="true">
                        <i classname="fa fa-star" aria-hidden="true">
                          <i classname="fa fa-star-o" aria-hidden="true"></i>
                        </i>
                      </i>
                    </i>
                  </div>
                  <i classname="fa fa-star" aria-hidden="true">
                    <i classname="fa fa-star" aria-hidden="true">
                      <i classname="fa fa-star" aria-hidden="true">
                        <i classname="fa fa-star-o" aria-hidden="true"></i>
                      </i>
                    </i>
                  </i>
                </div>
                <i classname="fa fa-star" aria-hidden="true">
                  <i classname="fa fa-star" aria-hidden="true">
                    <i classname="fa fa-star" aria-hidden="true">
                      <i classname="fa fa-star-o" aria-hidden="true"></i>
                    </i>
                  </i>
                </i>
              </div>
              <i classname="fa fa-star" aria-hidden="true">
                <i classname="fa fa-star" aria-hidden="true">
                  <i classname="fa fa-star" aria-hidden="true">
                    <i classname="fa fa-star-o" aria-hidden="true">
                      
                      <div classname="col-12 col-sm-6 col-lg-4">
                        <div classname="single-best-receipe-area mb-30">
                          <img src="img/bg-img/r2.jpg" alt="" />
                          <div classname="receipe-content">
                            <a href="receipe-post.html">
                              <h5>Homemade Burger</h5>
                            </a>
                            <div classname="ratings">
                              <i classname="fa fa-star" aria-hidden="true">
                                <i classname="fa fa-star" aria-hidden="true">
                                  <i classname="fa fa-star" aria-hidden="true">
                                    <i
                                      classname="fa fa-star"
                                      aria-hidden="true">
                                      <i
                                        classname="fa fa-star-o"
                                        aria-hidden="true"
                                      ></i>
                                    </i>
                                  </i>
                                </i>
                              </i>
                            </div>
                            <i classname="fa fa-star" aria-hidden="true">
                              <i classname="fa fa-star" aria-hidden="true">
                                <i classname="fa fa-star" aria-hidden="true">
                                  <i
                                    classname="fa fa-star-o"
                                    aria-hidden="true"
                                  ></i>
                                </i>
                              </i>
                            </i>
                          </div>
                          <i classname="fa fa-star" aria-hidden="true">
                            <i classname="fa fa-star" aria-hidden="true">
                              <i classname="fa fa-star" aria-hidden="true">
                                <i
                                  classname="fa fa-star-o"
                                  aria-hidden="true"
                                ></i>
                              </i>
                            </i>
                          </i>
                        </div>
                        <i classname="fa fa-star" aria-hidden="true">
                          <i classname="fa fa-star" aria-hidden="true">
                            <i classname="fa fa-star" aria-hidden="true">
                              <i
                                classname="fa fa-star-o"
                                aria-hidden="true"
                              ></i>
                            </i>
                          </i>
                        </i>
                      </div>
                      <i classname="fa fa-star" aria-hidden="true">
                        <i classname="fa fa-star" aria-hidden="true">
                          <i classname="fa fa-star" aria-hidden="true">
                            <i classname="fa fa-star-o" aria-hidden="true">
                              
                              <div classname="col-12 col-sm-6 col-lg-4">
                                <div classname="single-best-receipe-area mb-30">
                                  <img src="img/bg-img/r3.jpg" alt="" />
                                  <div classname="receipe-content">
                                    <a href="receipe-post.html">
                                      <h5>Vegan Smoothie</h5>
                                    </a>
                                    <div classname="ratings">
                                      <i
                                        classname="fa fa-star"
                                        aria-hidden="true">
                                        <i
                                          classname="fa fa-star"
                                          aria-hidden="true">
                                          <i
                                            classname="fa fa-star"
                                            aria-hidden="true">
                                            <i
                                              classname="fa fa-star"
                                              aria-hidden="true">
                                                <i
                                                classname="fa fa-star-o"
                                                aria-hidden="true">
                                                </i>
                                            </i>
                                          </i>
                                        </i>
                                      </i>
                                    </div>
                                    <i
                                      classname="fa fa-star"
                                      aria-hidden="true">
                                      <i
                                        classname="fa fa-star"
                                        aria-hidden="true">
                                        <i
                                          classname="fa fa-star"
                                          aria-hidden="true">
                                          <i
                                            classname="fa fa-star-o"
                                            aria-hidden="true"
                                          ></i>
                                        </i>
                                      </i>
                                    </i>
                                  </div>
                                  <i classname="fa fa-star" aria-hidden="true">
                                    <i
                                      classname="fa fa-star"
                                      aria-hidden="true">
                                      <i
                                        classname="fa fa-star"
                                        aria-hidden="true">
                                        <i
                                          classname="fa fa-star-o"
                                          aria-hidden="true"
                                        ></i>
                                      </i>
                                    </i>
                                  </i>
                                </div>
                                <i classname="fa fa-star" aria-hidden="true">
                                  <i classname="fa fa-star" aria-hidden="true">
                                    <i
                                      classname="fa fa-star"
                                      aria-hidden="true">
                                      <i
                                        classname="fa fa-star-o"
                                        aria-hidden="true"
                                      ></i>
                                    </i>
                                  </i>
                                </i>
                              </div>
                              <i classname="fa fa-star" aria-hidden="true">
                                <i classname="fa fa-star" aria-hidden="true">
                                  <i classname="fa fa-star" aria-hidden="true">
                                    <i
                                      classname="fa fa-star-o"
                                      aria-hidden="true">
                                      
                                      <div classname="col-12 col-sm-6 col-lg-4">
                                        <div classname="single-best-receipe-area mb-30">
                                          <img src="img/bg-img/r4.jpg" alt="" />
                                          <div classname="receipe-content">
                                            <a href="receipe-post.html">
                                              <h5>Calabasa soup</h5>
                                            </a>
                                            <div classname="ratings">
                                              <i
                                                classname="fa fa-star"
                                                aria-hidden="true">
                                                <i
                                                  classname="fa fa-star"
                                                  aria-hidden="true">
                                                  <i
                                                    classname="fa fa-star"
                                                    aria-hidden="true">
                                                    <i
                                                      classname="fa fa-star"
                                                      aria-hidden="true">
                                                      <i
                                                        classname="fa fa-star-o"
                                                        aria-hidden="true"
                                                      ></i>
                                                    </i>
                                                  </i>
                                                </i>
                                              </i>
                                            </div>
                                            <i
                                              classname="fa fa-star"
                                              aria-hidden="true">
                                              <i
                                                classname="fa fa-star"
                                                aria-hidden="true">
                                                <i
                                                  classname="fa fa-star"
                                                  aria-hidden="true">
                                                  <i
                                                    classname="fa fa-star-o"
                                                    aria-hidden="true"
                                                  ></i>
                                                </i>
                                              </i>
                                            </i>
                                          </div>
                                          <i
                                            classname="fa fa-star"
                                            aria-hidden="true">
                                            <i
                                              classname="fa fa-star"
                                              aria-hidden="true">
                                              <i
                                                classname="fa fa-star"
                                                aria-hidden="true">
                                                <i
                                                  classname="fa fa-star-o"
                                                  aria-hidden="true"
                                                ></i>
                                              </i>
                                            </i>
                                          </i>
                                        </div>
                                        <i
                                          classname="fa fa-star"
                                          aria-hidden="true">
                                          <i
                                            classname="fa fa-star"
                                            aria-hidden="true">
                                            <i
                                              classname="fa fa-star"
                                              aria-hidden="true">
                                              <i
                                                classname="fa fa-star-o"
                                                aria-hidden="true"
                                              ></i>
                                            </i>
                                          </i>
                                        </i>
                                      </div>
                                      <i
                                        classname="fa fa-star"
                                        aria-hidden="true">
                                        <i
                                          classname="fa fa-star"
                                          aria-hidden="true">
                                          <i
                                            classname="fa fa-star"
                                            aria-hidden="true">
                                            <i
                                              classname="fa fa-star-o"
                                              aria-hidden="true">
                                              
                                              <div classname="col-12 col-sm-6 col-lg-4">
                                                <div classname="single-best-receipe-area mb-30">
                                                  <img
                                                    src="img/bg-img/r5.jpg"
                                                    alt="zxcvbnm"/>
                                                  <div classname="receipe-content">
                                                    <a href="receipe-post.html">
                                                      <h5>
                                                        Homemade Breakfast
                                                      </h5>
                                                    </a>
                                                    <div classname="ratings">
                                                      <i
                                                        classname="fa fa-star"
                                                        aria-hidden="true">
                                                        <i
                                                          classname="fa fa-star"
                                                          aria-hidden="true">
                                                          <i
                                                            classname="fa fa-star"
                                                            aria-hidden="true">
                                                            <i
                                                              classname="fa fa-star"
                                                              aria-hidden="true">
                                                              <i
                                                                classname="fa fa-star-o"
                                                                aria-hidden="true"
                                                              ></i>
                                                            </i>
                                                          </i>
                                                        </i>
                                                      </i>
                                                    </div>
                                                    <i
                                                      classname="fa fa-star"
                                                      aria-hidden="true">
                                                      <i
                                                        classname="fa fa-star"
                                                        aria-hidden="true">
                                                        <i
                                                          classname="fa fa-star"
                                                          aria-hidden="true">
                                                          <i
                                                            classname="fa fa-star-o"
                                                            aria-hidden="true"
                                                          ></i>
                                                        </i>
                                                      </i>
                                                    </i>
                                                  </div>
                                                  <i
                                                    classname="fa fa-star"
                                                    aria-hidden="true">
                                                    <i
                                                      classname="fa fa-star"
                                                      aria-hidden="true">
                                                      <i
                                                        classname="fa fa-star"
                                                        aria-hidden="true">
                                                        <i
                                                          classname="fa fa-star-o"
                                                          aria-hidden="true"
                                                        ></i>
                                                      </i>
                                                    </i>
                                                  </i>
                                                </div>
                                                <i
                                                  classname="fa fa-star"
                                                  aria-hidden="true">
                                                  <i
                                                    classname="fa fa-star"
                                                    aria-hidden="true">
                                                    <i
                                                      classname="fa fa-star"
                                                      aria-hidden="true">
                                                      <i
                                                        classname="fa fa-star-o"
                                                        aria-hidden="true"
                                                      ></i>
                                                    </i>
                                                  </i>
                                                </i>
                                              </div>
                                              <i
                                                classname="fa fa-star"
                                                aria-hidden="true">
                                                <i
                                                  classname="fa fa-star"
                                                  aria-hidden="true">
                                                  <i
                                                    classname="fa fa-star"
                                                    aria-hidden="true">
                                                    <i
                                                      classname="fa fa-star-o"
                                                      aria-hidden="true">
                                                      <div classname="col-12 col-sm-6 col-lg-4">
                                                        <div classname="single-best-receipe-area mb-30">
                                                          <img
                                                            src="img/bg-img/r6.jpg"
                                                            alt=""/>
                                                          <div classname="receipe-content">
                                                            <a href="receipe-post.html">
                                                              <h5>
                                                                Healthy Fruit
                                                                Desert
                                                              </h5>
                                                            </a>
                                                            <div classname="ratings">
                                                              <i
                                                                classname="fa fa-star"
                                                                aria-hidden="true">
                                                                <i
                                                                  classname="fa fa-star"
                                                                  aria-hidden="true">
                                                                  <i
                                                                    classname="fa fa-star"
                                                                    aria-hidden="true">
                                                                    <i
                                                                      classname="fa fa-star"
                                                                      aria-hidden="true">
                                                                      <i
                                                                        classname="fa fa-star-o"
                                                                        aria-hidden="true"
                                                                      ></i>
                                                                    </i>
                                                                  </i>
                                                                </i>
                                                              </i>
                                                            </div>
                                                            <i
                                                              classname="fa fa-star"
                                                              aria-hidden="true">
                                                              <i
                                                                classname="fa fa-star"
                                                                aria-hidden="true">
                                                                <i
                                                                  classname="fa fa-star"
                                                                  aria-hidden="true">
                                                                  <i
                                                                    classname="fa fa-star-o"
                                                                    aria-hidden="true"
                                                                  ></i>
                                                                </i>
                                                              </i>
                                                            </i>
                                                          </div>
                                                          <i
                                                            classname="fa fa-star"
                                                            aria-hidden="true">
                                                            <i
                                                              classname="fa fa-star"
                                                              aria-hidden="true">
                                                              <i
                                                                classname="fa fa-star"
                                                                aria-hidden="true">
                                                                <i
                                                                  classname="fa fa-star-o"
                                                                  aria-hidden="true"
                                                                ></i>
                                                              </i>
                                                            </i>
                                                          </i>
                                                        </div>
                                                        <i
                                                          classname="fa fa-star"
                                                          aria-hidden="true">
                                                          <i
                                                            classname="fa fa-star"
                                                            aria-hidden="true">
                                                            <i
                                                              classname="fa fa-star"
                                                              aria-hidden="true">
                                                              <i
                                                                classname="fa fa-star-o"
                                                                aria-hidden="true"
                                                              ></i>
                                                            </i>
                                                          </i>
                                                        </i>
                                                      </div>
                                                      <i
                                                        classname="fa fa-star"
                                                        aria-hidden="true">
                                                        <i
                                                          classname="fa fa-star"
                                                          aria-hidden="true">
                                                          <i
                                                            classname="fa fa-star"
                                                            aria-hidden="true">
                                                            <i
                                                              classname="fa fa-star-o"
                                                              aria-hidden="true"
                                                            ></i>
                                                          </i>
                                                        </i>
                                                      </i>
                                                    </i>
                                                  </i>
                                                </i>
                                              </i>
                                            </i>
                                          </i>
                                        </i>
                                      </i>
                                    </i>
                                  </i>
                                </i>
                              </i>
                            </i>
                          </i>
                        </i>
                      </i>
                    </i>
                  </i>
                </i>
              </i>
            </div>
            <i classname="fa fa-star-o" aria-hidden="true">
              <i classname="fa fa-star-o" aria-hidden="true">
                <i classname="fa fa-star" aria-hidden="true">
                  <i classname="fa fa-star" aria-hidden="true">
                    <i classname="fa fa-star" aria-hidden="true">
                      <i classname="fa fa-star-o" aria-hidden="true"></i>
                    </i>
                  </i>
                </i>
              </i>
            </i>
          </div>
          <i classname="fa fa-star-o" aria-hidden="true">
            <i classname="fa fa-star-o" aria-hidden="true">
              <i classname="fa fa-star" aria-hidden="true">
                <i classname="fa fa-star" aria-hidden="true">
                  <i classname="fa fa-star" aria-hidden="true">
                    <i classname="fa fa-star-o" aria-hidden="true"></i>
                  </i>
                </i>
              </i>
            </i>
          </i>
        </section>
        <i classname="fa fa-star-o" aria-hidden="true">
          <i classname="fa fa-star-o" aria-hidden="true">
            <i classname="fa fa-star" aria-hidden="true">
              <i classname="fa fa-star" aria-hidden="true">
                <i classname="fa fa-star" aria-hidden="true">
                  <i classname="fa fa-star-o" aria-hidden="true"></i>
                </i>
              </i>
            </i>
          </i>
        </i>
      </div>
  );
};

export default ShowProduct;
