import React, { Component } from "react";
import Slider from "react-slick";




export class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true,
      autoplaySpeed: 3400,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div  >
    
        <Slider {...settings}>
          <div>
            <img src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F14bd68a6-77a3-4cac-8d80-bce249d31a01.jpg&w=1920&q=75" alt="" />
          </div>
          <div>
            <img src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F0886c9f4-a521-4ff2-9ec7-6a5947860753.jpg&w=1920&q=75" alt="" />
          </div>
          <div>
            <img src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Ffeb81cd7-cb89-4d40-8b45-b2f5bfe406d9.jpg&w=1920&q=75" alt="" />
          </div>
          <div>
            <img src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Ff3167316-1728-4c8d-8389-3e467cf033a0.jpg&w=1920&q=75" alt="" />
          </div>
          
        </Slider>
      </div>
    );
  }
}




export default class MultipleItems extends Component{
  
  render() {
    
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 3,
      autoplay:true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div style={{padding: '0px 80px'}}  >
        
        <Slider  {...settings} >
          <div style={{display:'flex',padding:'10px 10px',gap:'20px'}}>
            <div style={{padding:'10px 20px',backgroundColor:'white',marginLeft:'15px',marginRight:'15px', borderRadius:'10px 10px 0px 0px'}} ><img style={{borderRadius:'7px'}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F01_044847a5-bda3-4987-ac04-5bca0ff63193.jpg%3Fv%3D1680073209&w=256&q=75" alt="" /></div>
            <div style={{backgroundColor:'white',padding:'15px 0px',marginLeft:'15px',marginRight:'15px',borderRadius:'0px 0px 10px 10px'}} >
              <p>Mette as hell makeup set</p>
              <p>33 shades</p>
              <h3>Rs. 849</h3>
              <div style={{marginTop:'10px'}}>
                <button style={{backgroundColor:'black', color:'white', padding:'5px 15px',borderRadius:'7px'}}>SELECT SHADE</button>
              </div>
            </div>
          </div>
          <div style={{display:'flex',padding:'10px 0px'}}>
          <div style={{padding:'10px 20px',backgroundColor:'white',marginLeft:'15px',marginRight:'15px', borderRadius:'10px 10px 0px 0px'}} ><img style={{borderRadius:'7px'}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F1_529c20ee-c872-4029-9702-8580d7b9a66f.jpg%3Fv%3D1640178644&w=256&q=75" alt="" /></div>
            <div style={{backgroundColor:'white',padding:'15px 0px',marginLeft:'15px',marginRight:'15px',borderRadius:'0px 0px 10px 10px'}} >
              <p>Ace of Face Foundation stick</p>
              <p>18 shades</p>
              <h3>Rs. 999</h3>
              <div style={{marginTop:'10px'}}>
                <button style={{backgroundColor:'black', color:'white', padding:'5px 15px',borderRadius:'7px'}}>SELECT SHADE</button>
              </div>
            </div>
          </div>
          <div style={{display:'flex',padding:'10px 0px'}}>
          <div style={{padding:'10px 20px',backgroundColor:'white',marginLeft:'15px',marginRight:'15px', borderRadius:'10px 10px 0px 0px'}} ><img style={{borderRadius:'7px'}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2Fsugar-cosmetics-smudge-me-not-liquid-lipstick-minis-set-15520724582483.jpg%3Fv%3D1620651966&w=256&q=75" alt="" /></div>
            <div style={{backgroundColor:'white',padding:'15px 0px',marginLeft:'15px',marginRight:'15px',borderRadius:'0px 0px 10px 10px'}} >
              <p>Smudge Me, Not liquid lipsticks</p>
              <p>26 shades</p>
              <h3>Rs. 799</h3>
              <div style={{marginTop:'10px'}}>
                <button style={{backgroundColor:'black', color:'white', padding:'5px 15px',borderRadius:'7px'}}>SELECT SHADE</button>
              </div>
            </div>
          </div><div style={{display:'flex',padding:'10px 0px'}}>
          <div style={{padding:'10px 20px',backgroundColor:'white',marginLeft:'15px',marginRight:'15px', borderRadius:'10px 10px 0px 0px'}} ><img style={{borderRadius:'7px'}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FDouble-Date-Extreme-Volume-Mascara-Powered-by-Images-1025x1400-1.jpg%3Fv%3D1636386431&w=256&q=75" alt="" /></div>
            <div style={{backgroundColor:'white',padding:'15px 0px',marginLeft:'15px',marginRight:'15px',borderRadius:'0px 0px 10px 10px'}} >
              <p>Double Date Extreme Volume Mascara Duo-01 Black Jack</p>
             
              <h3>Rs. 799</h3>
              <div style={{marginTop:'10px'}}>
                <button style={{backgroundColor:'black', color:'white', padding:'5px 15px',borderRadius:'7px'}}>SELECT SHADE</button>
              </div>
            </div>
          </div><div style={{display:'flex',padding:'10px 0px'}}>
          <div style={{padding:'10px 20px',backgroundColor:'white',marginLeft:'15px',marginRight:'15px', borderRadius:'10px 10px 0px 0px'}} ><img style={{borderRadius:'7px'}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F1_9909d205-c5f9-476d-9903-c4beffbfebb7.jpg%3Fv%3D1637068160&w=256&q=75" alt="" /></div>
            <div style={{backgroundColor:'white',padding:'15px 0px',marginLeft:'15px',marginRight:'15px',borderRadius:'0px 0px 10px 10px'}} >
              <p>Arch Arrival Brown Pen set</p>
              <p>2 shades</p>
              <h3>Rs. 425</h3>
              <div style={{marginTop:'10px'}}>
                <button style={{backgroundColor:'black', color:'white', padding:'5px 15px',borderRadius:'7px'}}>SELECT SHADE</button>
              </div>
            </div>
          </div>
          <div style={{display:'flex',padding:'10px 0px'}}>
          <div style={{padding:'10px 20px',backgroundColor:'white',marginLeft:'15px',marginRight:'15px', borderRadius:'10px 10px 0px 0px'}} ><img style={{borderRadius:'7px'}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F1_6f55bcac-3e42-4253-88ee-cec0fa43c62a.jpg%3Fv%3D1645608270&w=256&q=75" alt="" /></div>
            <div style={{backgroundColor:'white',padding:'15px 0px',marginLeft:'15px',marginRight:'15px',borderRadius:'0px 0px 10px 10px'}} >
              <p>Mette Attack Transferproof Lipstick</p>
              <p>17 shades</p>
              <h3>Rs. 749</h3>
              <div style={{marginTop:'10px'}}>
                <button style={{backgroundColor:'black', color:'white', padding:'5px 15px',borderRadius:'7px'}}>SELECT SHADE</button>
              </div>
            </div>
          </div>

          <div style={{display:'flex',padding:'10px 0px'}}>
          <div style={{padding:'10px 20px',backgroundColor:'white',marginLeft:'15px',marginRight:'15px', borderRadius:'10px 10px 0px 0px'}} ><img style={{borderRadius:'7px'}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F424092031-1.jpg%3Fv%3D1661529396&w=256&q=75" alt="" /></div>
            <div style={{backgroundColor:'white',padding:'15px 0px',marginLeft:'15px',marginRight:'15px',borderRadius:'0px 0px 10px 10px'}} >
              <p>Wingman Waterproof Microliner</p>
              <p>14 shades</p>
              <h3>Rs. 599</h3>
              <div style={{marginTop:'10px'}}>
                <button style={{backgroundColor:'black', color:'white', padding:'5px 15px',borderRadius:'7px'}}>SELECT SHADE</button>
              </div>
            </div>
          </div>

          <div style={{display:'flex',padding:'10px 0px'}}>
          <div style={{padding:'10px 20px',backgroundColor:'white',marginLeft:'15px',marginRight:'15px', borderRadius:'10px 10px 0px 0px'}} ><img style={{borderRadius:'7px'}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F382512089-mettle-priming-balm-01.jpg%3Fv%3D1648654861&w=256&q=75" alt="" /></div>
            <div style={{backgroundColor:'white',padding:'15px 0px',marginLeft:'15px',marginRight:'15px',borderRadius:'0px 0px 10px 10px'}} >
              <p>Counter De force face Palette</p>
              <p>3 shades</p>
              <h3>Rs. 799</h3>
              <div style={{marginTop:'10px'}}>
                <button style={{backgroundColor:'black', color:'white', padding:'5px 15px',borderRadius:'7px'}}>SELECT SHADE</button>
              </div>
            </div>
          </div>

          
         
        </Slider>
      </div>
    );
  }
}

export class Multiple extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay:true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        
        <Slider {...settings}>
          <div>
            <div>
                <img style={{boxShadow:' rgba(255, 255, 255, 7.55) 0px 5px 15px',width:'90%',margin:'auto'}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Ffd535bbb-a35e-433c-89a7-a6b93c9a8c6c.gif&w=1920&q=75" alt="" />
            </div>
          </div>
          
          
          <div>
          <div>
                <img style={{boxShadow:' rgba(255, 255, 255, 7.55) 0px 5px 15px',width:'90%',margin:'auto'}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Ff2ea5182-e03c-44e4-97b8-a417bc34cf13.gif&w=1920&q=75" alt="" />
          </div>
          </div>
          <div>
          <div >
                <img style={{boxShadow:' rgba(255, 255, 255, 7.55) 0px 5px 15px',width:'90%',margin:'auto'}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fb1530b24-5333-4464-9ae0-8d25c74c2637.jpg&w=1920&q=75" alt="" />
          </div>
          </div>
          <div>
          <div >
                <img style={{boxShadow:' rgba(255, 255, 255, 7.55) 0px 5px 15px',width:'90%',margin:'auto'}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Ff7ab913e-22bf-4301-be48-a94da8d8c0c0.jpg&w=1920&q=75" alt="" />
          </div>
          </div>
          <div>
          <div>
                <img style={{boxShadow:' rgba(255, 255, 255, 7.55) 0px 5px 15px',width:'90%',margin:'auto'}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F3946e48e-b0c7-4e7d-a19d-0479dd685bf3.jpg&w=1920&q=75" alt="" />
          </div>
          </div>
          
        </Slider>
      </div>
    );
  }
}




export  class MultipleItemstwo extends Component{
  
  render() {
    
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 3,
      autoplay:true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div style={{padding: '0px 80px'}}>
       
        <Slider  {...settings}>
          <div style={{display:'flex',padding:'10px 0px'}}>
            <div style={{padding:'10px 20px',backgroundColor:'white'}} ><img style={{borderRadius:'7px'}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F476667375-1.jpg%3Fv%3D1678725375&w=256&q=75" alt="" /></div>
            <div style={{backgroundColor:'white',padding:'15px 0px'}} >
              <p>Goddess of Flawless BB</p>
              <p>7 shades</p>
              <h3>Rs. 699</h3>
              <div style={{marginTop:'10px'}}>
                <button style={{backgroundColor:'black', color:'white', padding:'5px 15px',borderRadius:'7px'}}>SELECT SHADE</button>
              </div>
            </div>
          </div>
          <div style={{display:'flex',padding:'10px 0px'}}>
          <div style={{padding:'10px 20px',backgroundColor:'white'}} ><img style={{borderRadius:'7px'}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FImage1.jpg%3Fv%3D1676391111&w=256&q=75" alt="" /></div>
            <div style={{backgroundColor:'white',padding:'15px 0px'}} >
              <p>Auto Correct Creaseless</p>
              <p>7 shades</p>
              <h3>Rs. 599</h3>
              <div style={{marginTop:'10px'}}>
                <button style={{backgroundColor:'black', color:'white', padding:'5px 15px',borderRadius:'7px'}}>SELECT SHADE</button>
              </div>
            </div>
          </div>
          <div style={{display:'flex',padding:'10px 0px'}}>
          <div style={{padding:'10px 20px',backgroundColor:'white'}} ><img style={{borderRadius:'7px'}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F2-3-product-image.jpg%3Fv%3D1677068145&w=256&q=75" alt="" /></div>
            <div style={{backgroundColor:'white',padding:'15px 0px'}} >
              <p>Aquaholic Hydratic Foundation</p>
              <p>10 shades</p>
              <h3>Rs. 899</h3>
              <div style={{marginTop:'10px'}}>
                <button style={{backgroundColor:'black', color:'white', padding:'5px 15px',borderRadius:'7px'}}>SELECT SHADE</button>
              </div>
            </div>
          </div><div style={{display:'flex',padding:'10px 0px'}}>
          <div style={{padding:'10px 20px',backgroundColor:'white'}} ><img style={{borderRadius:'7px'}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FArtboard1.jpg%3Fv%3D1676035817&w=256&q=75" alt="" /></div>
            <div style={{backgroundColor:'white',padding:'15px 0px'}} >
              <p>Sugar Tipsy Lips Scrum</p>
              <p>6 shades</p>
              <h3>Rs. 499</h3>
              <div style={{marginTop:'10px'}}>
                <button style={{backgroundColor:'black', color:'white', padding:'5px 15px',borderRadius:'7px'}}>SELECT SHADE</button>
              </div>
            </div>
          </div><div style={{display:'flex',padding:'10px 0px'}}>
          <div style={{padding:'10px 20px',backgroundColor:'white'}} ><img style={{borderRadius:'7px'}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F439876297-01.jpg%3Fv%3D1669621110&w=256&q=75" alt="" /></div>
            <div style={{backgroundColor:'white',padding:'15px 0px'}} >
              <p>Mousse Muse Maskproof Lip</p>
              <p>8 shades</p>
              <h3>Rs. 599</h3>
              <div style={{marginTop:'10px'}}>
                <button style={{backgroundColor:'black', color:'white', padding:'5px 15px',borderRadius:'7px'}}>SELECT SHADE</button>
              </div>
            </div>
          </div>
          <div style={{display:'flex',padding:'10px 0px'}}>
          <div style={{padding:'10px 20px',backgroundColor:'white'}} ><img style={{borderRadius:'7px'}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F1_bec48e26-bd4f-4b25-9a65-742f14ce4955.jpg%3Fv%3D1671604434&w=256&q=75" alt="" /></div>
            <div style={{backgroundColor:'white',padding:'15px 0px'}} >
              <p>Bold unfold Waterproof Mascara</p>
              <p>8 shades</p>
              <h3>Rs. 540</h3>
              <div style={{marginTop:'10px'}}>
                <button style={{backgroundColor:'black', color:'white', padding:'5px 15px',borderRadius:'7px'}}>SELECT SHADE</button>
              </div>
            </div>
          </div>

          <div style={{display:'flex',padding:'10px 0px'}}>
          <div style={{padding:'10px 20px',backgroundColor:'white'}} ><img style={{borderRadius:'7px'}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FSUGAR-Prime-Sublime-Primer---Powered-By-Images1_ebe7ea59-dff5-4a2a-9a70-c94435d3f46e.jpg%3Fv%3D1666928973&w=256&q=75" alt="" /></div>
            <div style={{backgroundColor:'white',padding:'15px 0px'}} >
              <p>Sugar Prime Subline Primer</p>
              <p>4 shades</p>
              <h3>Rs. 440</h3>
              <div style={{marginTop:'10px'}}>
                <button style={{backgroundColor:'black', color:'white', padding:'5px 15px',borderRadius:'7px'}}>SELECT SHADE</button>
              </div>
            </div>
          </div>

          <div style={{display:'flex',padding:'10px 0px'}}>
          <div style={{padding:'10px 20px',backgroundColor:'white'}} ><img style={{borderRadius:'7px'}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F1_2d186f9b-9024-4e23-a0d2-a55b7671e89c.jpg%3Fv%3D1657123108&w=256&q=75" alt="" /></div>
            <div style={{backgroundColor:'white',padding:'15px 0px'}} >
              <p>Counter De force Eyes makeup</p>
              <p>3 shades</p>
              <h3>Rs. 1033</h3>
              <div style={{marginTop:'10px'}}>
                <button style={{backgroundColor:'black', color:'white', padding:'5px 15px',borderRadius:'7px'}}>SELECT SHADE</button>
              </div>
            </div>
          </div>
         
        </Slider>
      </div>
    );
  }
}




export class Multipletwo extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay:true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
        <h1 style={{textAlign:'center',fontSize:'30px'}}><b>--TOP PICKS OF THE WEEK--</b></h1>
        <Slider {...settings}>
          <div>
            <div>
                <img style={{boxShadow:' rgba(255, 255, 255, 7.55) 0px 5px 15px',width:'90%',margin:'auto'}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fe67abb27-d278-488f-b77c-befdf0bc5ac2.jpg&w=1920&q=75" alt="" />
            </div>
          </div>
          <div>
          <div>
                <img style={{boxShadow:' rgba(255, 255, 255, 7.55) 0px 5px 15px',width:'90%',margin:'auto'}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fae700fcf-b911-452c-a916-f9994a15d20c.gif&w=1920&q=75" alt="" />
          </div>
          </div>
          <div>
          <div>
                <img style={{boxShadow:' rgba(255, 255, 255, 7.55) 0px 5px 15px',width:'90%',margin:'auto'}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F54c5f5ea-d3ab-47c6-8d85-f9e47a6102bb.jpg&w=1920&q=75" alt="" />
          </div>
          </div>
          
        </Slider>
      </div>
    );
  }
}






export  class MultipleItemsthree extends Component{
  
  render() {
    
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 3,
      autoplay:true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div style={{padding: '0px 80px'}}>
        <h1 style={{textAlign:'center',fontSize:'30px',color:'white'}}><b>BUY NOW PAY LATER</b></h1>
        <Slider  {...settings}>
          <div style={{display:'flex',padding:'10px 0px'}}>
            <div style={{padding:'10px 20px',backgroundColor:'white'}} ><img style={{borderRadius:'7px'}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FVineeta_s-Favourite-Makeup-kit---WBG-images_Cover.jpg%3Fv%3D1676477676&w=256&q=75" alt="" /></div>
            <div style={{backgroundColor:'white',padding:'15px 0px'}} >
              <p>Vineeta's Favourite Makeup Kits</p>
              
              <h3>Rs. 2999</h3>
              <div style={{marginTop:'10px'}}>
                <button style={{backgroundColor:'black', color:'white', padding:'5px 15px',borderRadius:'7px'}}>CHOOSE ITEMS</button>
              </div>
            </div>
          </div>
          <div style={{display:'flex',padding:'10px 0px'}}>
          <div style={{padding:'10px 20px',backgroundColor:'white'}} ><img style={{borderRadius:'7px'}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FLaunch---Sweat-No-More-Makeup-Kit---WBG-Images_11.jpg%3Fv%3D1653494527&w=256&q=75" alt="" /></div>
            <div style={{backgroundColor:'white',padding:'15px 0px'}} >
              <p>Sweat No more makeup kit</p>
              
              <h3>Rs. 2699</h3>
              <div style={{marginTop:'10px'}}>
                <button style={{backgroundColor:'black', color:'white', padding:'5px 15px',borderRadius:'7px'}}>CHOOSE ITEMS</button>
              </div>
            </div>
          </div>
          <div style={{display:'flex',padding:'10px 0px'}}>
          <div style={{padding:'10px 20px',backgroundColor:'white'}} ><img style={{borderRadius:'7px'}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F2-3-product-image.jpg%3Fv%3D1677068145&w=256&q=75" alt="" /></div>
            <div style={{backgroundColor:'white',padding:'15px 0px'}} >
              <p>Aquaholic Hydratic Foundation</p>
            
              <h3 >Rs. 899</h3>
              <div style={{marginTop:'10px'}}>
                <button style={{backgroundColor:'black', color:'white', padding:'5px 15px',borderRadius:'7px'}}>CHOOSE ITEMS</button>
              </div>
            </div>
          </div><div style={{display:'flex',padding:'10px 0px'}}>
          <div style={{padding:'10px 20px',backgroundColor:'white'}} ><img style={{borderRadius:'7px'}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F1_0cbf7ca7-3b1c-4838-8fda-176ebd7d38fa.jpg%3Fv%3D1649423983&w=256&q=75" alt="" /></div>
            <div style={{backgroundColor:'white',padding:'15px 0px'}} >
              <p>Fastive Ready makeup Kit</p>
              
              <h3>Rs. 1999</h3>
              <div style={{marginTop:'10px'}}>
                <button style={{backgroundColor:'black', color:'white', padding:'5px 15px',borderRadius:'7px'}}>SCHOOSE ITEMS</button>
              </div>
            </div>
          </div><div style={{display:'flex',padding:'10px 0px'}}>
          <div style={{padding:'10px 20px',backgroundColor:'white'}} ><img style={{borderRadius:'7px'}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F1_0ca61ef7-05ce-49be-9fa1-de7c41b99a1f.jpg%3Fv%3D1668050175&w=256&q=75" alt="" /></div>
            <div style={{backgroundColor:'white',padding:'15px 0px'}} >
              <p>Anniversary makeup kit</p>
        
              <h3>Rs. 2499</h3>
              <div style={{marginTop:'10px'}}>
                <button style={{backgroundColor:'black', color:'white', padding:'5px 15px',borderRadius:'7px'}}>CHOOSE ITEMS</button>
              </div>
            </div>
          </div>
          <div style={{display:'flex',padding:'10px 0px'}}>
          <div style={{padding:'10px 20px',backgroundColor:'white'}} ><img style={{borderRadius:'7px'}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F1_969f5548-2c56-4506-ada8-159b53a8f630.jpg%3Fv%3D1649423977&w=256&q=75" alt="" /></div>
            <div style={{backgroundColor:'white',padding:'15px 0px'}} >
              <p>Glamup kit for womens</p>
              
              <h3>Rs. 1340</h3>
              <div style={{marginTop:'10px'}}>
                <button style={{backgroundColor:'black', color:'white', padding:'5px 15px',borderRadius:'7px'}}>CHOOSE ITEMS</button>
              </div>
            </div>
          </div>

          <div style={{display:'flex',padding:'10px 0px'}}>
          <div style={{padding:'10px 20px',backgroundColor:'white'}} ><img style={{borderRadius:'7px'}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F430185524-value-set-29-wbg_main_image.jpg%3Fv%3D1664294939&w=256&q=75" alt="" /></div>
            <div style={{backgroundColor:'white',padding:'15px 0px'}} >
              <p>Makeup in focus value set</p>
            
              <h3>Rs. 3423</h3>
              <div style={{marginTop:'10px'}}>
                <button style={{backgroundColor:'black', color:'white', padding:'5px 15px',borderRadius:'7px'}}>CHOOSE ITEMS</button>
              </div>
            </div>
          </div>

          <div style={{display:'flex',padding:'10px 0px'}}>
          <div style={{padding:'10px 20px',backgroundColor:'white'}} ><img style={{borderRadius:'7px'}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F419424297-value-set-16-wbg-01.jpg%3Fv%3D1661530291&w=256&q=75" alt="" /></div>
            <div style={{backgroundColor:'white',padding:'15px 0px'}} >
              <p>Set in Right Makeup set</p>
              
              <h3>Rs. 1033</h3>
              <div style={{marginTop:'10px'}}>
                <button style={{backgroundColor:'black', color:'white', padding:'5px 15px',borderRadius:'7px'}}>CHOOSE ITEMS</button>
              </div>
            </div>
          </div>
         
        </Slider>
      </div>
    );
  }
}



export  class MultipleItemsfour extends Component{
  
  render() {
    
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 3,
      autoplay:true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    
    };
    return (
      <div style={{padding: '0px 80px'}}>
        <h1 style={{textAlign:'center',fontSize:'30px',color:'white'}}><b>GIFTING</b></h1>
        <Slider  {...settings}>
          <div style={{display:'flex',padding:'10px 0px'}}>
            <div style={{padding:'10px 20px',backgroundColor:'white'}} ><img style={{borderRadius:'7px'}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F04_b475d6dd-c07b-43b0-9f78-c989b2fe4f6d.jpg%3Fv%3D1659446263&w=256&q=75" alt="" /></div>
            <div style={{backgroundColor:'white',padding:'15px 0px'}} >
              <p>Wedding makeu kit</p>
              
              <h3>Rs. 1699</h3>
              <div style={{marginTop:'10px'}}>
                <button style={{backgroundColor:'black', color:'white', padding:'5px 15px',borderRadius:'7px'}}>CHOOSE ITEMS</button>
              </div>
            </div>
          </div>
          <div style={{display:'flex',padding:'10px 0px'}}>
          <div style={{padding:'10px 20px',backgroundColor:'white'}} ><img style={{borderRadius:'7px'}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F399160329-9-to-5-makeup-kit-wbg-01.jpg%3Fv%3D1654013564&w=256&q=75" alt="" /></div>
            <div style={{backgroundColor:'white',padding:'15px 0px'}} >
              <p>The Office Makeuo Kit</p>
              
              <h3>Rs. 199</h3>
              <div style={{marginTop:'10px'}}>
                <button style={{backgroundColor:'black', color:'white', padding:'5px 15px',borderRadius:'7px'}}>CHOOSE ITEMS</button>
              </div>
            </div>
          </div>
          <div style={{display:'flex',padding:'10px 0px'}}>
          <div style={{padding:'10px 20px',backgroundColor:'white'}} ><img style={{borderRadius:'7px'}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2Fsugar-cosmetics-matte-as-hell-crayon-lipstick-minis-set-28270316945491.jpg%3Fv%3D1675401557&w=256&q=75" alt="" /></div>
            <div style={{backgroundColor:'white',padding:'15px 0px'}} >
              <p>Matte as Hell Crayon Lipstick</p>
            
              <h3>Rs. 899</h3>
              <div style={{marginTop:'10px'}}>
                <button style={{backgroundColor:'black', color:'white', padding:'5px 15px',borderRadius:'7px'}}>CHOOSE ITEMS</button>
              </div>
            </div>
          </div><div style={{display:'flex',padding:'10px 0px'}}>
          <div style={{padding:'10px 20px',backgroundColor:'white'}} ><img style={{borderRadius:'7px'}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F1_37e8dc88-a720-44ed-a5f3-1e0f0e95bc17.jpg%3Fv%3D1659517990&w=256&q=75" alt="" /></div>
            <div style={{backgroundColor:'white',padding:'15px 0px'}} >
              <p>Date Night Makeup</p>
              
              <h3>Rs. 1599</h3>
              <div style={{marginTop:'10px'}}>
                <button style={{backgroundColor:'black', color:'white', padding:'5px 15px',borderRadius:'7px'}}>SCHOOSE ITEMS</button>
              </div>
            </div>
          </div><div style={{display:'flex',padding:'10px 0px'}}>
          <div style={{padding:'10px 20px',backgroundColor:'white'}} ><img style={{borderRadius:'7px'}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F1_0cbf7ca7-3b1c-4838-8fda-176ebd7d38fa.jpg%3Fv%3D1649423983&w=256&q=75" alt="" /></div>
            <div style={{backgroundColor:'white',padding:'15px 0px'}} >
              <p>Festive Ready kit</p>
        
              <h3>Rs. 999</h3>
              <div style={{marginTop:'10px'}}>
                <button style={{backgroundColor:'black', color:'white', padding:'5px 15px',borderRadius:'7px'}}>CHOOSE ITEMS</button>
              </div>
            </div>
          </div>
          <div style={{display:'flex',padding:'10px 0px'}}>
          <div style={{padding:'10px 20px',backgroundColor:'white'}} ><img style={{borderRadius:'7px'}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FRakshaBandhanKit-WBGImages.jpg%3Fv%3D1654694624&w=256&q=75" alt="" /></div>
            <div style={{backgroundColor:'white',padding:'15px 0px'}} >
              <p>Everyday Makeup Kit</p>
              
              <h3>Rs. 1240</h3>
              <div style={{marginTop:'10px'}}>
                <button style={{backgroundColor:'black', color:'white', padding:'5px 15px',borderRadius:'7px'}}>CHOOSE ITEMS</button>
              </div>
            </div>
          </div>

          <div style={{display:'flex',padding:'10px 0px'}}>
          <div style={{padding:'10px 20px',backgroundColor:'white'}} ><img style={{borderRadius:'7px'}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F430185524-value-set-29-wbg_main_image.jpg%3Fv%3D1664294939&w=256&q=75" alt="" /></div>
            <div style={{backgroundColor:'white',padding:'15px 0px'}} >
              <p>Makeup in focus value set</p>
            
              <h3>Rs. 3423</h3>
              <div style={{marginTop:'10px'}}>
                <button style={{backgroundColor:'black', color:'white', padding:'5px 15px',borderRadius:'7px'}}>CHOOSE ITEMS</button>
              </div>
            </div>
          </div>

          <div style={{display:'flex',padding:'10px 0px'}}>
          <div style={{padding:'10px 20px',backgroundColor:'white'}} ><img style={{borderRadius:'7px'}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F419424297-value-set-16-wbg-01.jpg%3Fv%3D1661530291&w=256&q=75" alt="" /></div>
            <div style={{backgroundColor:'white',padding:'15px 0px'}} >
              <p>Set in Right Makeup set</p>
              
              <h3>Rs. 1033</h3>
              <div style={{marginTop:'10px'}}>
                <button style={{backgroundColor:'black', color:'white', padding:'5px 15px',borderRadius:'7px'}}>CHOOSE ITEMS</button>
              </div>
            </div>
          </div>
         
        </Slider>
      </div>
    );
  }
}



export  class MultipleItemsfive extends Component{
  
  render() {
    
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 3,
      autoplay:true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div style={{padding: '0px 80px'}}>
        
        <Slider  {...settings}>
          <div style={{display:'flex',padding:'10px 0px'}}>
            <div style={{padding:'10px 20px',backgroundColor:'white'}} ><img style={{borderRadius:'7px'}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F1_e4b6c948-178e-4bfe-a3b3-926119dea615.jpg%3Fv%3D1649865681&w=256&q=75" alt="" /></div>
            <div style={{backgroundColor:'white',padding:'15px 0px'}} >
              <p>Set of 4 Kajal in one set</p>
              
              <h3>Rs. 799</h3>
              <div style={{marginTop:'10px'}}>
                <button style={{backgroundColor:'black', color:'white', padding:'5px 15px',borderRadius:'7px'}}>CHOOSE ITEM</button>
              </div>
            </div>
          </div>
          <div style={{display:'flex',padding:'10px 0px'}}>
          <div style={{padding:'10px 20px',backgroundColor:'white'}} ><img style={{borderRadius:'7px'}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FValue-Set-11---WBG-Images_1.jpg%3Fv%3D1659456262&w=256&q=75" alt="" /></div>
            <div style={{backgroundColor:'white',padding:'15px 0px'}} >
              <p>Bold Honesty Face Makeup</p>
              
              <h3>Rs. 699</h3>
              <div style={{marginTop:'10px'}}>
                <button style={{backgroundColor:'black', color:'white', padding:'5px 15px',borderRadius:'7px'}}>CHOOSE ITEM</button>
              </div>
            </div>
          </div>
          <div style={{display:'flex',padding:'10px 0px'}}>
          <div style={{padding:'10px 20px',backgroundColor:'white'}} ><img style={{borderRadius:'7px'}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FRakshaBandhanKit-WBGImages.jpg%3Fv%3D1654694624&w=256&q=75" alt="" /></div>
            <div style={{backgroundColor:'white',padding:'15px 0px'}} >
              <p>Bold Honesty Makeup Set</p>
            
              <h3>Rs. 679</h3>
              <div style={{marginTop:'10px'}}>
                <button style={{backgroundColor:'black', color:'white', padding:'5px 15px',borderRadius:'7px'}}>CHOOSE ITEM</button>
              </div>
            </div>
          </div><div style={{display:'flex',padding:'10px 0px'}}>
          <div style={{padding:'10px 20px',backgroundColor:'white'}} ><img style={{borderRadius:'7px'}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F2_bb525208-246a-4f40-b57f-d88372708398.jpg%3Fv%3D1655308814&w=256&q=75" alt="" /></div>
            <div style={{backgroundColor:'white',padding:'15px 0px'}} >
              <p>Glam Eye Makeup Value set</p>
             
              <h3>Rs. 1299</h3>
              <div style={{marginTop:'10px'}}>
                <button style={{backgroundColor:'black', color:'white', padding:'5px 15px',borderRadius:'7px'}}>CHOOSE ITEM</button>
              </div>
            </div>
          </div><div style={{display:'flex',padding:'10px 0px'}}>
          <div style={{padding:'10px 20px',backgroundColor:'white'}} ><img style={{borderRadius:'7px'}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F08.jpg%3Fv%3D1630511040&w=256&q=75" alt="" /></div>
            <div style={{backgroundColor:'white',padding:'15px 0px'}} >
              <p>Face Pallete shadow set</p>
             
              <h3>Rs. 795</h3>
              <div style={{marginTop:'10px'}}>
                <button style={{backgroundColor:'black', color:'white', padding:'5px 15px',borderRadius:'7px'}}>CHOOSE ITEM</button>
              </div>
            </div>
          </div>
          <div style={{display:'flex',padding:'10px 0px'}}>
          <div style={{padding:'10px 20px',backgroundColor:'white'}} ><img style={{borderRadius:'7px'}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FWBG1_73e85cb4-80d8-4eeb-ba32-deaf11c4483f.jpg%3Fv%3D1658851292&w=256&q=75" alt="" /></div>
            <div style={{backgroundColor:'white',padding:'15px 0px'}} >
              <p>Blushen and Poppine set</p>
              
              <h3>Rs. 749</h3>
              <div style={{marginTop:'10px'}}>
                <button style={{backgroundColor:'black', color:'white', padding:'5px 15px',borderRadius:'7px'}}>CHOOSE ITEM</button>
              </div>
            </div>
          </div>

          <div style={{display:'flex',padding:'10px 0px'}}>
          <div style={{padding:'10px 20px',backgroundColor:'white'}} ><img style={{borderRadius:'7px'}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2Fsugar-cosmetics-lip-balm-sheet-mask-15782913671251.jpg%3Fv%3D1619152222&w=256&q=75" alt="" /></div>
            <div style={{backgroundColor:'white',padding:'15px 0px'}} >
              <p>Lip Balm + Sheet Masks</p>
            
              <h3 >Rs. 599</h3>
              <div style={{marginTop:'10px'}}>
                <button style={{backgroundColor:'black', color:'white', padding:'5px 15px',borderRadius:'7px'}}>CHOOSE ITEM</button>
              </div>
            </div>
          </div>

          <div style={{display:'flex',padding:'10px 0px'}}>
          <div style={{padding:'10px 20px',backgroundColor:'white'}} ><img style={{borderRadius:'7px'}} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FWBG_648fe1ef-ce38-46b9-983f-2ca69fba5806.jpg%3Fv%3D1659369810&w=256&q=75" alt="" /></div>
            <div style={{backgroundColor:'white',padding:'15px 0px'}} >
              <p>Matte the Base Value Set</p>
            
              <h3>Rs. 499</h3>
              <div style={{marginTop:'10px'}}>
                <button style={{backgroundColor:'black', color:'white', padding:'5px 15px',borderRadius:'7px'}}>CHOOSE ITEM</button>
              </div>
            </div>
          </div>

          
         
        </Slider>
      </div>
    );
  }
}



export class SimpleSlidertwo extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay:true,
      autoplaySpeed: 3400,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div>
    
        <Slider {...settings}>
          <div>
            <img src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F927e5f3e-64c4-4105-b315-0882d6c07f64.jpg&w=1920&q=75" alt="" />
          </div>
          <div>
            <img src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F92bece5a-10f7-492b-8968-ca0e104cfd63.gif&w=1920&q=75" alt="" />
          </div>
          <div>
            <img src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F562fe539-20b1-4239-903e-9a27747b8bf0.gif&w=1920&q=75" alt="" />
          </div>
          <div>
            <img src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F9e2d8597-51d5-41be-95b0-aac4cc0e9794.gif&w=1920&q=75" alt="" />
          </div>
          <div>
            <img src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F37471559-27d1-4509-9e31-29d889be7036.jpg&w=1920&q=75" alt="" />
          </div>
          <div>
            <img src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fcad57234-a923-4191-8f1e-62ced44a02af.gif&w=1920&q=75" alt="" />
          </div>
        </Slider>
      </div>
    );
  }
}






export class Multiplelast extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay:true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div style={{zIndex:'0', margin:'auto'}}>
        
        <Slider {...settings}>
          <div >
            <div >
                <img style={{borderRadius:'12px',display:'block',marginRight:'20px' }} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F97722164-55b4-4030-a9f6-0219a9575a24.jpg&w=1920&q=75" alt="" />
            </div>
          </div>
          <div >
          <div>
                <img style={{borderRadius:'12px',display:'block' }} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F52b4f85e-f9e8-465a-a9a4-6f11e6b407aa.jpg&w=1920&q=75" alt="" />
          </div>
          </div>
          <div>
          <div>
                <img style={{borderRadius:'12px',display:'block' }} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fa7b72adf-7e02-45c4-a208-552d46eefc4c.jpg&w=1920&q=75" alt="" />
          </div>
          </div>
          <div>
          <div>
                <img style={{borderRadius:'12px',display:'block' }} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F88ee8d58-7cc5-450a-953b-aa16ef190d52.jpg&w=1920&q=75" alt="" />
          </div>
          </div>
          <div>
          <div>
                <img style={{borderRadius:'12px',display:'block' }} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F60bdba27-5962-401b-b03e-2c55baa74bd1.jpg&w=1920&q=75" alt="" />
          </div>
          </div>
          <div>
          <div>
                <img style={{borderRadius:'12px',display:'block' }} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F259217a4-239d-4103-8bf7-cd2a7e1529c1.jpg&w=1920&q=75" alt="" />
          </div>
          </div>
          <div>
          <div>
                <img style={{borderRadius:'12px',display:'block' }} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F8e3d35ed-5e1f-4056-b36a-575761e2c995.jpg&w=1920&q=75" alt="" />
          </div>
          </div>
          <div>
          <div>
                <img style={{borderRadius:'12px',display:'block' }} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F97722164-55b4-4030-a9f6-0219a9575a24.jpg&w=1920&q=75" alt="" />
          </div>
          </div>
        </Slider>
      </div>
    );
  }
}


