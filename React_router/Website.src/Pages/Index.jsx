import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

function Index() {


    const redirect = useNavigate();

    useEffect(() => {
        fetch();
    }, []);

    const [data, Setdata] = useState([]);

    const fetch = async () => {
        const res = await axios.get('http://localhost:3000/blog');
        //console.log(res.data);
        Setdata(res.data);
    }
    return (
        <div>
            <div className="w3l-banner py-5">
                <div className="container py-lg-3 py-md-3">
                    <div className="ban-content-inf row py-lg-3">
                        <div className="maghny-gd-1 col-lg-8">
                            <div className="maghny-grid">
                                <figure className="effect-lily border-radius">
                                    <img className="img-fluid radius-image" src="assets/images/1.jpg" alt />
                                    <figcaption className="w3set-hny">
                                        <div className="info">
                                            <a href="#reciepe" className="receipe">Reciepe</a>
                                            <h4 className="top-text">Amazing Milk Chocolate Cupcakes with Buttercream</h4>
                                            <p className="mt-2 d-sm-block d-none">Lorem ipsum dolor sit amet elit. Vitae nostrum ipsum vero
                                                tempore esse, eaque omnis culpa quo placeat?</p>
                                            <div className="p-footer">
                                                <aside className="p-meta-info">
                                                    <a href="#img" className="post-img-anchor">
                                                        <img src="assets/images/a1.jpg" alt className="post-img" />
                                                    </a>
                                                    <a href="#url">Elizabeth</a>
                                                    <span className="meta-info-date">
                                                        <span className="fa fa-clock-o" /> Oct 3, 2020
                                                    </span>
                                                </aside>
                                            </div>
                                        </div>
                                    </figcaption>
                                </figure>
                            </div>
                        </div>
                        <div className="maghny-gd-1 col-lg-4 mt-lg-0 mt-4 mobile-grid">
                            <div className="maghny-gd-1">
                                <div className="maghny-grid">
                                    <figure className="effect-lily border-radius">
                                        <img className="img-fluid radius-image" src="assets/images/2.jpg" alt />
                                        <figcaption>
                                            <div>
                                                <h4 className="top-text1">Amazing Milk Chocolate Cupcake with cream</h4>
                                                <aside className="p-meta-info">
                                                    <span className="meta-info-el meta-info-custom">
                                                        <span className="fa fa-clock-o mr-2" />10 Min Cook
                                                    </span>
                                                </aside>
                                            </div>

                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                            <div className="maghny-gd-1 mt-lg-4">
                                <div className="maghny-grid">
                                    <figure className="effect-lily border-radius">
                                        <img className="img-fluid radius-image" src="assets/images/3.jpg" alt />
                                        <figcaption>
                                            <div>
                                                <h4 className="top-text1">The Best Chewy Chocolate Chip Cookies Recipe</h4>
                                                <aside className="p-meta-info">
                                                    <span className="meta-info-el meta-info-custom">
                                                        <span className="fa fa-bell-o mr-2" />Sponsered by
                                                        <strong>Johnson</strong>
                                                    </span>
                                                </aside>
                                            </div>
                                        </figcaption>
                                    </figure>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* adv */}
            <div className="ad-image text-center pb-lg-5">
                <div className="container">
                    <h6 className="advert-decs">- Advertisement -</h6>
                    <a className="widget-ad-link" target="_blank" href="#url"><img src="assets/images/ad.jpg" alt="- Advertisement -" className="radius-image img-fluid" /></a>
                </div>
            </div>
            {/* //adv */}
            <div className="w3l-searchblock w3l-homeblock1 py-5">
                <div className="container py-lg-4 py-md-3">
                    {/* block */}
                    <div className="row">
                        <div className="col-lg-8 most-recent pr-lg-4">
                            <h3 className="title-left mb-3">Latest Recipes</h3>
                            <div className="row">
                                <div className="col-lg-6 col-md-6 item">
                                    <div className="card">
                                        <div className="card-header p-0 position-relative">
                                            <a href="#blog-single">
                                                <img className="card-img-bottom d-block radius-image" src="assets/images/4.jpg" alt="Card image cap" />
                                            </a>
                                            <div className="post-pos">
                                                <a href="#reciepe" className="receipe green">Reciepe</a>
                                                <span className="meta-info meta-info-custom">
                                                    <span className="fa fa-clock-o mr-2" />10 Min Cook
                                                </span>
                                            </div>
                                        </div>
                                        <div className="card-body p-0 blog-details">
                                            <a href="#blog-single" className="blog-desc">The Best Cookie Recipes To Bake This Weekend
                                            </a>
                                            <p>Lorem ipsum dolor sit amet ipsum adipisicing elit. Qui eligendi
                                                vitae sit.</p>
                                            <div className="p-footer mt-3">
                                                <div className="p-meta-info">
                                                    <a href="#img" className="post-img-anchor">
                                                        <img src="assets/images/a1.jpg" alt className="post-img radius-img img-fluid" />
                                                    </a>
                                                    <a href="#url">Elizabeth</a>
                                                </div>
                                                <a href="#read" className="read">Read more <span className="fas fa-arrow-right" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 item mt-md-0 mt-5">
                                    <div className="card">
                                        <div className="card-header p-0 position-relative">
                                            <a href="#blog-single">
                                                <img className="card-img-bottom d-block radius-image" src="assets/images/5.jpg" alt="Card image cap" />
                                            </a>
                                            <div className="post-pos">
                                                <a href="#reciepe" className="receipe orange">How to</a>
                                                <span className="meta-info meta-info-custom">
                                                    <span className="fa fa-clock-o mr-2" />10 Min Cook
                                                </span>
                                            </div>
                                        </div>
                                        <div className="card-body p-0 blog-details">
                                            <a href="#blog-single" className="blog-desc">Mixed Greens with strawberry Juice Vinaigrette Recipe
                                            </a>
                                            <p>Lorem ipsum dolor sit amet ipsum adipisicing elit. Qui eligendi
                                                vitae sit.</p>
                                            <div className="p-footer mt-3">
                                                <div className="p-meta-info">
                                                    <a href="#img" className="post-img-anchor">
                                                        <img src="assets/images/a2.jpg" alt className="post-img radius-img img-fluid" />
                                                    </a>
                                                    <a href="#url">William</a>
                                                </div>
                                                <a href="#read" className="read">Read more <span className="fas fa-arrow-right" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 item mt-5 pt-lg-3">
                                    <div className="card">
                                        <div className="card-header p-0 position-relative">
                                            <a href="#blog-single">
                                                <img className="card-img-bottom d-block radius-image" src="assets/images/6.jpg" alt="Card image cap" />
                                            </a>
                                            <div className="post-pos">
                                                <a href="#reciepe" className="receipe orange">How to</a>
                                                <span className="meta-info meta-info-custom">
                                                    <span className="fa fa-clock-o mr-2" />10 Min Cook
                                                </span>
                                            </div>
                                        </div>
                                        <div className="card-body p-0 blog-details">
                                            <a href="#blog-single" className="blog-desc">Fruit Salad with Honey and Orange, strawberry, blackberry
                                            </a>
                                            <p>Lorem ipsum dolor sit amet consectetur ipsum adipisicing elit. Qui eligendi
                                                vitae sit.</p>
                                            <div className="p-footer mt-3">
                                                <div className="p-meta-info">
                                                    <a href="#img" className="post-img-anchor">
                                                        <img src="assets/images/a3.jpg" alt className="post-img radius-img img-fluid" />
                                                    </a>
                                                    <a href="#url">Alexander</a>
                                                </div>
                                                <a href="#read" className="read">Read more <span className="fas fa-arrow-right" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6 item mt-5 pt-lg-3">
                                    <div className="card">
                                        <div className="card-header p-0 position-relative">
                                            <a href="#blog-single">
                                                <img className="card-img-bottom d-block radius-image" src="assets/images/7.jpg" alt="Card image cap" />
                                            </a>
                                            <div className="post-pos">
                                                <a href="#reciepe" className="receipe blue">Drinks</a>
                                                <span className="meta-info meta-info-custom">
                                                    <span className="fa fa-clock-o mr-2" />10 Min Cook
                                                </span>
                                            </div>
                                        </div>
                                        <div className="card-body p-0 blog-details">
                                            <a href="#blog-single" className="blog-desc">Starbucks Blonde Caffè: A Good Espresso With Milk
                                            </a>
                                            <p>Lorem ipsum dolor sit amet consectetur ipsum adipisicing elit. Qui eligendi
                                                vitae sit.</p>
                                            <div className="p-footer mt-3">
                                                <div className="p-meta-info">
                                                    <a href="#img" className="post-img-anchor">
                                                        <img src="assets/images/a4.jpg" alt className="post-img radius-img img-fluid" />
                                                    </a>
                                                    <a href="#url">Johnson</a>
                                                </div>
                                                <a href="#read" className="read">Read more <span className="fas fa-arrow-right" /></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 trending mt-lg-0 mt-5 mb-lg-5 pl-lg-4">
                            <div className="pos-sticky">
                                <div className="side-post-banner text-center">
                                    <h3 className="title-left">Create a Stunning Website!</h3>
                                    <p className="mt-3">Lorem, ipsum dolor sit amet elit. Libero, facere dolor sit, amet elit. ipsam
                                        beatae eius.</p>
                                    <a href="#read" className="btn-style btn btn-primary mt-4"> Get started </a>
                                </div>
                                <div className="tweets mt-5">
                                    <h3 className="title-left mb-sm-3">Latest Tweets</h3>
                                    <ul className="blog-cat twitter-feed">
                                        <li>
                                            <a href="#url"> @W3layouts help Developers, Designers, Website owners create
                                                Stunning Websites #design…
                                                <br /><em className="twitter-date">Oct 4, 2020</em></a>
                                        </li>
                                        <li>
                                            <a href="#url">@W3layouts Delog starter just evolved. has acquired the
                                                ability to generate sitemaps in production… @gatsbyjs @NetlifyCMS
                                                <br /><em className="twitter-date">Oct 4, 2020</em></a>
                                        </li>
                                        <li>
                                            <a href="#url"> @W3layouts help Developers, Designers, Website owners create
                                                Stunning Websites #design…
                                                <br /><em className="twitter-date">Oct 4, 2020</em></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* //block*/}
                </div>
            </div>
            {/* grids */}
            <section className="grids-1" id="trip">
                <div className="container ">
                <h1 className="breadcrumb-item active text-center" aria-current="page"> Blog</h1><br />
                    <div className="row">
                       
                        {
                            data.map((value, index, entarr) => {
                                return (
                                    <div classname="col-md-4 col-news-top ">
                                        <a href="javascript:void(0)" onClick={() => { return redirect('/Single_blog/' + value.id) }}>
                                            <img src={value.img} width="50%" alt="img" classname="img-fluid w-20"  />
                                        </a>
                                        <div className="info">
                                            <h3 className="text-capitalize text-black ">{value.title}</h3>
                                            <p>Description goes here</p>
                                        </div>
                                        <h6 className="small-heading text-capitalize  mt-4">
                                            <a href="javascript:void(0)" onClick={() => { return redirect('/Single_blog/' + value.id) }} className="text-dark">{value.title}
                                                <i className="fas fa-long-arrow-alt-right ml-1" />
                                            </a>
                                        </h6>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
            {/* //grids */}
            <div className="w3l-searchblock w3l-homeblock1 py-5">
                <div className="container py-lg-4 py-md-3">
                    {/* block */}
                    <div className="most-recent">
                        <div className="title-align mb-4">
                            <h3 className="title-left">20-Minutes Meals</h3>
                            <a href="#blog" className="more-posts"> View more posts <span className="fas fa-arrow-right" /></a>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-6 item">
                                <div className="card">
                                    <div className="card-header p-0 position-relative">
                                        <a href="#blog-single">
                                            <img className="card-img-bottom d-block radius-image" src="assets/images/meal1.jpg" alt="Card image cap" />
                                        </a>
                                        <div className="post-pos">
                                            <a href="#reciepe" className="receipe blue">How to</a>
                                        </div>
                                    </div>
                                    <div className="card-body p-0 blog-details">
                                        <a href="#blog-single" className="blog-desc">The only 12 curry recipes you’ll Ever Need
                                        </a>
                                        <span className="post-date"><span className="fa fa-clock-o" /> Oct 4, 2020</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 item mt-md-0 mt-5">
                                <div className="card">
                                    <div className="card-header p-0 position-relative">
                                        <a href="#blog-single">
                                            <img className="card-img-bottom d-block radius-image" src="assets/images/meal2.jpg" alt="Card image cap" />
                                        </a>
                                        <div className="post-pos">
                                            <a href="#reciepe" className="receipe orange">Reciepe</a>
                                        </div>
                                    </div>
                                    <div className="card-body p-0 blog-details">
                                        <a href="#blog-single" className="blog-desc">How to cook French Fries like in a Restaurant
                                        </a>
                                        <span className="post-date"><span className="fa fa-clock-o" /> Oct 3, 2020</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 item mt-lg-0 mt-5">
                                <div className="card">
                                    <div className="card-header p-0 position-relative">
                                        <a href="#blog-single">
                                            <img className="card-img-bottom d-block radius-image" src="assets/images/meal3.jpg" alt="Card image cap" />
                                        </a>
                                        <div className="post-pos">
                                            <a href="#reciepe" className="receipe blue">How to</a>
                                        </div>
                                    </div>
                                    <div className="card-body p-0 blog-details">
                                        <a href="#blog-single" className="blog-desc">Spicy noodles with north indian style
                                        </a>
                                        <span className="post-date"><span className="fa fa-clock-o" /> Oct 3, 2020</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 item mt-lg-0 mt-5">
                                <div className="card">
                                    <div className="card-header p-0 position-relative">
                                        <a href="#blog-single">
                                            <img className="card-img-bottom d-block radius-image" src="assets/images/meal4.jpg" alt="Card image cap" />
                                        </a>
                                        <div className="post-pos">
                                            <a href="#reciepe" className="receipe recipe">Reciepe</a>
                                        </div>
                                    </div>
                                    <div className="card-body p-0 blog-details">
                                        <a href="#blog-single" className="blog-desc">Eat Healthy, Delicious and Perfect Burgers
                                        </a>
                                        <span className="post-date"><span className="fa fa-clock-o" /> Oct 7, 2020</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* //block*/}
                </div>
            </div>
            {/* home page newsletter */}
            <section className="w3l-bottom" id="newsletter">
                <div className="container">
                    <div className="subscribe p-sm-5 p-4">
                        <div className="row px-lg-0 py-lg-4 p-2">
                            <div className="col-lg-5 header-section mx-auto">
                                <h3 className="title-left">Subscribe Newsletter </h3>
                                <p className> Get our latest news straight into your inbox</p>
                            </div>
                            <div className="col-lg-7 mt-lg-0 mt-4">
                                <form action="#" method="post" className="subscribe-wthree">
                                    <div className="d-md-flex flex-wrap subscribe-wthree-field">
                                        <input className="form-control" type="email" placeholder="Enter your email..." name="email" required />
                                        <button className="btn btn-style btn-primary" type="submit">
                                            <span className="fa fa-paper-plane" />
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* //home page newsletter */}
            {/* home page section */}
            <section className="w3l-homeblock1">
                <div className="midd-w3 py-5">
                    <div className="container py-lg-5 py-md-3">
                        <div className="title-align mb-4">
                            <h3 className="title-left">How to make dessert</h3>
                            <a href="#blog" className="more-posts"> View more Videos <span className="fas fa-arrow-right" /></a>
                        </div>
                        <div id="owl-demo1" className="owl-carousel owl-theme mt-4 py-2 mb-md-4 mb-5">
                            <div className="item">
                                <div className="card">
                                    <div className="card-header p-0 position-relative">
                                        <a href="#blog-single">
                                            <img className="card-img-bottom d-block radius-image" src="assets/images/cake1.jpg" alt="Card image cap" />
                                        </a>
                                        <div className="post-pos">
                                            <a href="#reciepe" className="receipe recipe">Reciepe</a>
                                        </div>
                                    </div>
                                    <div className="card-body p-0 blog-details">
                                        <a href="#blog-single" className="blog-desc">How to make Chocolate troffee crunch cake
                                        </a>
                                        <span className="post-date"><span className="fa fa-clock-o" /> Oct 4, 2020</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="card">
                                    <div className="card-header p-0 position-relative">
                                        <a href="#blog-single">
                                            <img className="card-img-bottom d-block radius-image" src="assets/images/cake2.jpg" alt="Card image cap" />
                                        </a>
                                        <div className="post-pos">
                                            <a href="#reciepe" className="receipe recipe">Reciepe</a>
                                        </div>
                                    </div>
                                    <div className="card-body p-0 blog-details">
                                        <a href="#blog-single" className="blog-desc">How to make the Easiest pancakes ever
                                        </a>
                                        <span className="post-date"><span className="fa fa-clock-o" /> Oct 5, 2020</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="card">
                                    <div className="card-header p-0 position-relative">
                                        <a href="#blog-single">
                                            <img className="card-img-bottom d-block radius-image" src="assets/images/cake3.jpg" alt="Card image cap" />
                                        </a>
                                        <div className="post-pos">
                                            <a href="#reciepe" className="receipe blue">How to</a>
                                        </div>
                                    </div>
                                    <div className="card-body p-0 blog-details">
                                        <a href="#blog-single" className="blog-desc">How to make the choco buttermilk cake
                                        </a>
                                        <span className="post-date"><span className="fa fa-clock-o" /> Oct 6, 2020</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="card">
                                    <div className="card-header p-0 position-relative">
                                        <a href="#blog-single">
                                            <img className="card-img-bottom d-block radius-image" src="assets/images/cake4.jpg" alt="Card image cap" />
                                        </a>
                                        <div className="post-pos">
                                            <a href="#reciepe" className="receipe orange">Reciepe</a>
                                        </div>
                                    </div>
                                    <div className="card-body p-0 blog-details">
                                        <a href="#blog-single" className="blog-desc">Chocolate truffle cake is you'll ever need
                                        </a>
                                        <span className="post-date"><span className="fa fa-clock-o" /> Oct 6, 2020</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="card">
                                    <div className="card-header p-0 position-relative">
                                        <a href="#blog-single">
                                            <img className="card-img-bottom d-block radius-image" src="assets/images/cake5.jpg" alt="Card image cap" />
                                        </a>
                                        <div className="post-pos">
                                            <a href="#reciepe" className="receipe blue">How to</a>
                                        </div>
                                    </div>
                                    <div className="card-body p-0 blog-details">
                                        <a href="#blog-single" className="blog-desc">The only 12 curry recipes you’ll Ever Need
                                        </a>
                                        <span className="post-date"><span className="fa fa-clock-o" /> Oct 5, 2020</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="card">
                                    <div className="card-header p-0 position-relative">
                                        <a href="#blog-single">
                                            <img className="card-img-bottom d-block radius-image" src="assets/images/cake6.jpg" alt="Card image cap" />
                                        </a>
                                        <div className="post-pos">
                                            <a href="#reciepe" className="receipe blue">How to</a>
                                        </div>
                                    </div>
                                    <div className="card-body p-0 blog-details">
                                        <a href="#blog-single" className="blog-desc">How to cook French Fries like in a Restaurant
                                        </a>
                                        <span className="post-date"><span className="fa fa-clock-o" /> Oct 5, 2020</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="card">
                                    <div className="card-header p-0 position-relative">
                                        <a href="#blog-single">
                                            <img className="card-img-bottom d-block radius-image" src="assets/images/cake7.jpg" alt="Card image cap" />
                                        </a>
                                        <div className="post-pos">
                                            <a href="#reciepe" className="receipe recipe">Reciepe</a>
                                        </div>
                                    </div>
                                    <div className="card-body p-0 blog-details">
                                        <a href="#blog-single" className="blog-desc">Fruit Salad with Honey and Orange Juice
                                        </a>
                                        <span className="post-date"><span className="fa fa-clock-o" /> Oct 5, 2020</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="card">
                                    <div className="card-header p-0 position-relative">
                                        <a href="#blog-single">
                                            <img className="card-img-bottom d-block radius-image" src="assets/images/cake8.jpg" alt="Card image cap" />
                                        </a>
                                        <div className="post-pos">
                                            <a href="#reciepe" className="receipe orange">Reciepe</a>
                                        </div>
                                    </div>
                                    <div className="card-body p-0 blog-details">
                                        <a href="#blog-single" className="blog-desc">Now, Make money from blogging in easy steps
                                        </a>
                                        <span className="post-date"><span className="fa fa-clock-o" /> Oct 5, 2020</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="card">
                                    <div className="card-header p-0 position-relative">
                                        <a href="#blog-single">
                                            <img className="card-img-bottom d-block radius-image" src="assets/images/1.jpg" alt="Card image cap" />
                                        </a>
                                        <div className="post-pos">
                                            <a href="#reciepe" className="receipe blue">How to</a>
                                        </div>
                                    </div>
                                    <div className="card-body p-0 blog-details">
                                        <a href="#blog-single" className="blog-desc">Fruit Salad with Honey and Orange Juice
                                        </a>
                                        <span className="post-date"><span className="fa fa-clock-o" /> Oct 5, 2020</span>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="card">
                                    <div className="card-header p-0 position-relative">
                                        <a href="#blog-single">
                                            <img className="card-img-bottom d-block radius-image" src="assets/images/2.jpg" alt="Card image cap" />
                                        </a>
                                        <div className="post-pos">
                                            <a href="#reciepe" className="receipe orange">Reciepe</a>
                                        </div>
                                    </div>
                                    <div className="card-body p-0 blog-details">
                                        <a href="#blog-single" className="blog-desc">Now, Make money from blogging in easy steps
                                        </a>
                                        <span className="post-date"><span className="fa fa-clock-o" /> Oct 5, 2020</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Index