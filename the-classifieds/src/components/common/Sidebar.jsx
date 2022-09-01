import Link from "next/link";
import useGlobalContext from "../../hooks/useGlobalContext";
import dynamic from "next/dynamic";
import { useState } from "react";
import Lightbox from "react-image-lightbox";
import Image from "next/image";

const Collapsible = dynamic(() => import("react-collapsible"), {
  ssr: false,
});

const Sidebar = ({ headerMenu,dynamic }) => {
  const { showSidebar, setShowSidebar } = useGlobalContext();
  const [photoIndex, setPhotoIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const galleryImages = [
    {
      id: 1,
      img:dynamic ? "assets/img/project/sm/project-7.jpg":"assets/img/project/sm/project-7.jpg",
    },
    {
      id: 2,
      img:dynamic ? "assets/img/project/sm/project-8.jpg":"assets/img/project/sm/project-8.jpg",
    },
    {
      id: 3,
      img:dynamic ? "assets/img/project/sm/project-9.jpg":"assets/img/project/sm/project-9.jpg",
    },
    {
      id: 4,
      img:dynamic ? "assets/img/project/sm/project-10.jpg":"assets/img/project/sm/project-10.jpg",
    },
    {
      id: 5,
      img:dynamic ? "assets/img/project/sm/project-13.jpg":"assets/img/project/sm/project-13.jpg",
    },
    {
      id: 6,
      img:dynamic ? "assets/img/project/sm/project-12.jpg":"assets/img/project/sm/project-12.jpg",
    },
  ];
  const lightBoxImages = galleryImages.map((img) => img.img);
  const images = lightBoxImages;

  return (
    <>
      {open && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
        />
      )}

      {/* <!-- sidebar area start --> */}
      <div className={`sidebar__area ${showSidebar ? "sidebar-opened" : ""}`}>
        <div className="sidebar__wrapper">
          <div className="sidebar__close" onClick={() => setShowSidebar(false)}>
            <button className="sidebar__close-btn" id="sidebar__close-btn">
              <i className="fal fa-times"></i>
            </button>
          </div>
          <div className="sidebar__content">
            <div className="sidebar__logo mb-40" style={{alignItems:'center'}}>
              <a href="index.html">
              {
                dynamic && 
                <Image 
                src={"/" + "images/logo/Classifieds-logos_transparent.png"} 
                alt="logo" 
                height={100}
                width={100}
                layout="intrinsic"/>
              }
                  
              </a>
            </div>
            <div className="sidebar__search mb-25">
              <form action="#">
                <input type="text" placeholder="What are you searching for?" />
                <button type="submit" ><i className="far fa-search"></i></button>
              </form>
            </div>

            <div className="mobile-menu fix">
              <nav id="mobile-menu"
                className={`${headerMenu ? "d-block" : "d-lg-none"}`} >
                <ul>
                  <Collapsible trigger={<a>Home</a>} triggerTagName="div"
                    triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
                    <ul onClick={() => setShowSidebar(false)}
                      className="sidebar_sub_menu submenu text-black" >
                      <li><Link href="/">Home Designer</Link></li>
                      <li><Link href="/home-two">Home Agency</Link></li>
                      <li><Link href="/home-three">Home Freelancer</Link></li>
                      <li><Link href="/home-four">Home Corporate</Link></li>
                      <li><Link href="/home-five">Home Studio</Link></li>
                      <li><Link href="/home-six">Home Creative</Link></li>
                      <li><Link href="/home-seven">Home Minimal</Link></li>
                      <li><Link href="/home-eight">Home Minimal Full</Link></li>
                      <li><Link href="/home-nine">Home Photographer</Link></li>
                      <li><Link href="/home-ten">Home Photographer 2</Link></li>
                      <li><Link href="/home-eleven">Home Photographer 3</Link></li>
                      <li><Link href="/home-twelve">Home Photographer 4</Link></li>
                      <li><Link href="/home-thirteen">Home Politician</Link></li>
                    </ul>
                  </Collapsible>

                  <div className="single_link iconAdd">
                    <li><Link href="/about"><a>About</a></Link></li>
                  </div>

                  <Collapsible trigger={<a>Pages</a>} triggerTagName="div" triggerOpenedClassName="icon_close"
                    triggerClassName="iconAdd" open={false}>

                    <div className="ms-3">
                      <Collapsible trigger={<a>Page Layout 1</a>} triggerTagName="div"
                        triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
                        <ul onClick={() => setShowSidebar(false)}
                          className="sidebar_sub_menu submenu text-black">
                          <li><Link href="/about">About</Link></li>
                          <li><Link href="/about-me">About Me</Link></li>
                          <li><Link href="/contact">Contact</Link></li>
                          <li><Link href="/faq">FAQ</Link></li>
                          <li><Link href="/help-center">Help Center</Link></li>
                          <li><Link href="/error-page">Error 404</Link></li>
                          <li><Link href="/pricing-plan">Pricing Plan</Link></li>
                          <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                          <li><Link href="/coming-soon">Coming Soon</Link></li>
                        </ul>
                      </Collapsible>

                      <Collapsible trigger={<a>Page Layout 2</a>} triggerTagName="div"
                        triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
                        <ul onClick={() => setShowSidebar(false)}
                          className="sidebar_sub_menu submenu text-black">
                          <li><Link href="/portfolio">Portfolio</Link></li>
                          <li><Link href="/portfolio-two">Portfolio 2</Link></li>
                          <li><Link href="/portfolio-three">Portfolio 3</Link></li>
                          <li><Link href="/portfolio-four">Portfolio 4</Link></li>
                          <li><Link href="/portfolio-five">Portfolio 5</Link></li>
                          <li><Link href="/portfolio-six">Portfolio 6</Link></li>
                          <li><Link href="/portfolio-details">Portfolio Details</Link></li>
                          <li><Link href="/job-list">Job List</Link></li>
                          <li><Link href="/job-details ">Job Details</Link></li>
                        </ul>
                      </Collapsible>

                      <Collapsible trigger={<a>Page Layout 3</a>} triggerTagName="div" triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
                        <ul onClick={() => setShowSidebar(false)}
                          className="sidebar_sub_menu submenu text-black">
                          <li><Link href="/services">Services</Link></li>
                          <li><Link href="/services-two">Services 2</Link></li>
                          <li><Link href="/services-three">Services 3</Link></li>
                          <li><Link href="/services-four">Services 4</Link></li>
                          <li><Link href="/service-details">Services Details</Link></li>
                          <li><Link href="/team">Team</Link></li>
                          <li><Link href="/team-two">Team 2</Link></li>
                          <li><Link href="/about-me">Team Details</Link></li>
                        </ul>
                      </Collapsible>

                      <Collapsible trigger={<a>Page Layout 4</a>} triggerTagName="div"
                        triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
                        <ul onClick={() => setShowSidebar(false)}
                          className="sidebar_sub_menu submenu text-black">
                          <li><Link href="/shop">Shop</Link></li>
                          <li><Link href="/product-details">Product Details</Link></li>
                          <li><Link href="/cart">Cart</Link></li>
                          <li><Link href="/wishlist">Wishlist</Link></li>
                          <li><Link href="/checkout">Checkout</Link></li>
                          <li><Link href="/sign-in">Login</Link></li>
                          <li><Link href="/sign-up">Register</Link></li>
                        </ul>
                      </Collapsible>
                    </div>

                  </Collapsible>

                  <Collapsible trigger={<a>Services</a>} triggerTagName="div"
                    triggerOpenedClassName="icon_close" triggerClassName="iconAdd" open={false}>
                    <ul onClick={() => setShowSidebar(false)}
                      className="sidebar_sub_menu submenu text-black">
                      <li><Link href="/services">Services Page</Link></li>
                      <li><Link href="/service-details">Services Deatils</Link></li>
                    </ul>
                  </Collapsible>

                  <Collapsible trigger={<a>Blog</a>} triggerTagName="div" triggerOpenedClassName="icon_close"
                    triggerClassName="iconAdd" open={false} >
                    <ul onClick={() => setShowSidebar(false)}
                      className="sidebar_sub_menu submenu text-black" >
                      <li><Link href="/blog">Blog Page</Link></li>
                      <li><Link href="/blog-grid">Blog Grid</Link></li>
                      <li><Link href="/blog-details">Blog Deatils</Link>
                      </li>
                    </ul>
                  </Collapsible>

                  <div className="single_link iconAdd border-0">
                    <li>
                      <Link href="/contact">
                        <a>Contact</a>
                      </Link>
                    </li>
                  </div>
                </ul>
              </nav>
            </div>

            <div className={`sidebar__text ${headerMenu ? 'd-none' : 'd-none d-lg-block'}`}>
              <p>Oh so you want to join Mensa? Tell Me how do you fit a square into a triangle.</p>
            </div>
            <div className={`sidebar__img ${headerMenu ? 'd-none' : 'd-none d-lg-block'} mb-20`}>
              <div className="row gx-2">
                {galleryImages.map((image, index) => (
                  <div key={image.id} className="col-4">
                    <div onClick={() => setShowSidebar(false)}
                      className="sidebar__single-img w-img mb-10">
                      <button onClick={() => setOpen(true)} className="popup-image">
                        <a onClick={() => setPhotoIndex(index)}>
                          
                          <Image 
                            src={`/${image.img}`} 
                            alt="logo" 
                            height={150}
                            width={150}
                            layout="intrinsic"/>
                        </a>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="sidebar__contact mt-30 mb-20">
              <h4>Contact Info</h4>
              <ul>
                <li className="d-flex align-items-center">
                  <div className="sidebar__contact-icon mr-15">
                    <i className="fal fa-map-marker-alt"></i>
                  </div>
                  <div className="sidebar__contact-text">
                    <a target="_blank" rel="noreferrer" href="https://www.google.com/maps/place/Dhaka/@23.7806207,90.3492859,12z/data=!3m1!4b1!4m5!3m4!1s0x3755b8b087026b81:0x8fa563bbdd5904c2!8m2!3d23.8104753!4d90.4119873">12/A, Mirnada City Tower, NYC</a>
                  </div>
                </li>
                <li className="d-flex align-items-center">
                  <div className="sidebar__contact-icon mr-15">
                    <i className="far fa-phone"></i>
                  </div>
                  <div className="sidebar__contact-text">
                    <a href="tel:+012-345-6789">+8801 094 0637</a>
                  </div>
                </li>
                <li className="d-flex align-items-center">
                  <div className="sidebar__contact-icon mr-15">
                    <i className="fal fa-envelope"></i>
                  </div>
                  <div className="sidebar__contact-text">
                    <a href="/cdn-cgi/l/email-protection#added8ddddc2dfd9edcac0ccc4c183cec2c0"><span className="mailto:nerox@gmail.com" data-cfemail="0b787e7b7b64797f4b666a626725686466">nerox@gmail.com</span></a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="sidebar__social">
              <ul>
                <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                <li><a href="#"><i className="fab fa-youtube"></i></a></li>
                <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div
        onClick={() => setShowSidebar(false)}
        className={`${showSidebar ? "body-overlay opened" : "body-overlay"}`}></div>
      {/* <!-- sidebar area end -->  */}
    </>
  );
};

export default Sidebar;
