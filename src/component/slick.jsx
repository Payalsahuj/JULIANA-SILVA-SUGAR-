import React, { Component } from "react";
import Slider from "react-slick";




export class SimpleSlider extends Component {
  render() {
    const { argument } = this.props;
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

    console.log(argument)
    return (
      <div  >
    
        <Slider {...settings}>
          {argument.map((el)=> <div>
            <img src={el} alt="" />
          </div>)} 
        </Slider>
      </div>
    );
  }
}




export default class MultipleItems extends Component{
  
  render() {
    const { argument } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 3,
      autoplay:true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    };
    return (
      <div style={{padding: '0px 30px'}}  >
        
        <Slider  {...settings} >
          {argument.map((el)=><div style={{display:'flex',padding:'10px 10px',gap:'20px'}}>
            <div style={{padding:'10px 20px',backgroundColor:'white',marginLeft:'15px',marginRight:'15px', borderRadius:'10px 10px 0px 0px'}} ><img style={{borderRadius:'7px'}} src={el.image} alt="" /></div>
            <div style={{backgroundColor:'white',padding:'15px 0px',marginLeft:'15px',marginRight:'15px',borderRadius:'0px 0px 10px 10px'}} >
              <p style={{display:'inline-block',whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis',maxWidth:'23ch'}}>{el.title}</p>
              <p>{el.shades}</p>
              <h3>Rs. {el.price}</h3>
              <div style={{marginTop:'10px'}}>
                <button style={{backgroundColor:'black', color:'white', padding:'5px 15px',borderRadius:'7px'}}>SELECT SHADE</button>
              </div>
            </div>
          </div>)}
        
         
        </Slider>
      </div>
    );
  }
}




export class Multiple extends Component {
  render() {
    const { argument } = this.props;
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
          {argument.map((el)=><div>
            <div>
                <img style={{boxShadow:' rgba(255, 255, 255, 7.55) 0px 5px 15px',width:'90%',margin:'auto'}} src={el} alt="" />
            </div>
          </div>)}
        
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


