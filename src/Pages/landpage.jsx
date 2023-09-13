import styled from "styled-components";
import MultipleItems, { SimpleSlider, Multiple, Multipletwo, Multiplelast } from "../component/slick";
import { Authcontext } from "../authcontext/authcontext"
import { useContext, useState } from 'react';

import {
   Box,
   Center,
   useColorModeValue,
   Heading,
   Text,
   Stack,
   Image,
} from '@chakra-ui/react'


import { useBreakpointValue } from '@chakra-ui/react'

// And react-slick as our Carousel Lib
import Slider from 'react-slick'


function Landpage() {
   const value = useContext(Authcontext)
   let { theme, settingtheme } = value
   
   const settings = {
      dots: true,
      arrows: false,
      fade: true,
      infinite: true,
      autoplay: true,
      speed: 300,
      autoplaySpeed: 3800,
      slidesToShow: 1,
      slidesToScroll: 1,
   }

   const [slider, setSlider] = useState(null)

   // These are the breakpoints which changes the position of the
   // buttons as the screen size changes
   const top = useBreakpointValue({ base: '90%', md: '50%' })
   const side = useBreakpointValue({ base: '30%', md: '10px' })

   // These are the images used in the slide
   const cards = [
      'https://th.bing.com/th/id/OIP.UgLhZCd33hvLPegxYGe9sgHaE8?w=239&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',
      'https://4.bp.blogspot.com/-xSZWi7i6pdE/TgTIzuILX1I/AAAAAAAAAEA/FfUkGFr7Hwk/s1600/cos.jpg',
      'https://www.fdli.org/wp-content/uploads/2020/05/The-Regulation-of-Cosmetics-scaled.jpeg',
      "https://th.bing.com/th/id/OIP.oWDfM4kNHRh-gpI20SjGgAHaD4?pid=ImgDet&rs=1",
      "https://th.bing.com/th/id/OIP.Y1o89CLHdtOM6QfyzSakJwHaFW?pid=ImgDet&rs=1"
   ]

   const firstsimleslide = [
      "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F14bd68a6-77a3-4cac-8d80-bce249d31a01.jpg&w=1920&q=75",
      "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F5357862f-5dd4-4bdd-929f-1702e7d8d4e9.jpg&w=1920&q=75",
      "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F54569296-0b1c-4c69-b73c-2f822ee3a78c.gif&w=1920&q=75",
      "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Ff3167316-1728-4c8d-8389-3e467cf033a0.jpg&w=1920&q=75"
   ]
   const secondsimpleslide = [
      "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F927e5f3e-64c4-4105-b315-0882d6c07f64.jpg&w=1920&q=75",
      "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F92bece5a-10f7-492b-8968-ca0e104cfd63.gif&w=1920&q=75",
      "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F562fe539-20b1-4239-903e-9a27747b8bf0.gif&w=1920&q=75",
      "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F9e2d8597-51d5-41be-95b0-aac4cc0e9794.gif&w=1920&q=75",
      "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F37471559-27d1-4509-9e31-29d889be7036.jpg&w=1920&q=75",
      "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fcad57234-a923-4191-8f1e-62ced44a02af.gif&w=1920&q=75"
   ]
   const fisrtmultiple = [
      {
         "image": "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FMah-with-sharpener-02_6e960611-d7cb-4642-b15f-5cb2c742c5be.jpg%3Fv%3D1680510193&w=256&q=75",
         "title": 'Mette as hell makeup set',
         "shades": '33 shades',
         "price": 849,

      },
      {
         "image": "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F476667375-1.jpg%3Fv%3D1678725375&w=256&q=75",
         "title": "Ace of Face Foundation stick",
         "shades": "18 shades",
         "price": 999,

      },
      {
         "image": "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2Fsugar-cosmetics-smudge-me-not-liquid-lipstick-minis-set-15520724582483.jpg%3Fv%3D1620651966&w=256&q=75",
         "title": "Smudge Me, Not liquid lipsticks",
         "shades": "26 shades",
         "price": 799,

      },
      {
         "image": "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F1_ef579f2e-602e-4d2f-bed2-bf0efdf4f184.jpg%3Fv%3D1644325813&w=256&q=75",
         "title": "Date Extreme Volume MascaraJack",
         "shades": "Unique shade",
         "price": 679,

      },
      {
         "image": "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FAirKissPowderPoweredByImagesArtboard1.jpg%3Fv%3D1644813116&w=256&q=75",
         "title": "Arch Arrival Brown Pen set",
         "shades": "2 shade",
         "price": 425,

      },
      {
         "image": "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F1_bec48e26-bd4f-4b25-9a65-742f14ce4955.jpg%3Fv%3D1671604434&w=256&q=75",
         "title": "Mette Attack Transferproof Lipstick",
         "shades": "17 shade",
         "price": 745,

      },
      {
         "image": "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2Fsugar-cosmetics-lipping-on-the-edge-lip-liner-01-taffeta-terracotta-13278188568659.jpg%3Fv%3D1619109027&w=256&q=75",
         "title": "Wingman Waterproof Microliner",
         "shades": "14 shade",
         "price": 599,

      },
      {
         "image": "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2Fsugar-cosmetics-mettle-satin-lipstick-01-sophie-bright-fuchsia-pink-fuchsia-13706258088019.jpg%3Fv%3D1619116113&w=256&q=75",
         "title": "Wingman Waterproof Microliner",
         "shades": "7 shade",
         "price": 399,

      }
   ]
   const secondmultiple = [
      {
         "image": "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F476667375-1.jpg%3Fv%3D1678725375&w=256&q=75",
         "title": 'Goddess of Flawless BB',
         "shades": '7 shades',
         "price": 699,
      },
      {
         "image": "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2Fsugar-cosmetics-lip-service-tint-remover-28122580910163.jpg%3Fv%3D1619155575&w=256&q=75",
         "title": 'Auto Correct Creaseless',
         "shades": '9 shades',
         "price": 599,
      },
      {
         "image": "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FArtboard1_afb1d932-4aaf-4f25-a299-03d6d8f75dd1.jpg%3Fv%3D1675959716&w=256&q=75",
         "title": 'Aquaholic Hydratic Foundation',
         "shades": '10 shades',
         "price": 899,
      },
      {
         "image": "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FArtboard1.jpg%3Fv%3D1676035817&w=256&q=75",
         "title": 'Sugar Tipsy Lips Scrum',
         "shades": '6 shades',
         "price": 499,
      },
      {
         "image": "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F439876297-01.jpg%3Fv%3D1669621110&w=256&q=75",
         "title": 'Mousse Muse Maskproof Lip',
         "shades": '8 shades',
         "price": 599,
      },
      {
         "image": "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F1_bec48e26-bd4f-4b25-9a65-742f14ce4955.jpg%3Fv%3D1671604434&w=256&q=75",
         "title": 'Bold unfold Waterproof Mascara',
         "shades": '8 shades',
         "price": 549,
      },
      {
         "image": "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FSUGAR-Prime-Sublime-Primer---Powered-By-Images1_ebe7ea59-dff5-4a2a-9a70-c94435d3f46e.jpg%3Fv%3D1666928973&w=256&q=75",
         "title": 'Sugar Prime Subline Primer',
         "shades": '4 shades',
         "price": 440,
      },
      {
         "image": "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F1_2d186f9b-9024-4e23-a0d2-a55b7671e89c.jpg%3Fv%3D1657123108&w=256&q=75",
         "title": 'Counter De force Eyes makeup',
         "shades": '6 shades',
         "price": 1033,
      }
   ]
   const thirdmultiple = [
      {
         "image": "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FVineeta_s-Favourite-Makeup-kit---WBG-images_Cover.jpg%3Fv%3D1676477676&w=256&q=75",
         "title": 'Vineeta Favourite Makeup Kits',
         "shades": '',
         "price": 2999,
      },
      {
         "image": "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FLaunch---Sweat-No-More-Makeup-Kit---WBG-Images_11.jpg%3Fv%3D1653494527&w=256&q=75",
         "title": 'Sweat No more makeup kit',
         "shades": '',
         "price": 2699,
      },
      {
         "image": "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FArtboard1_afb1d932-4aaf-4f25-a299-03d6d8f75dd1.jpg%3Fv%3D1675959716&w=256&q=75",
         "title": 'Aquaholic Hydratic Foundation',
         "shades": '',
         "price": 899,
      },
      {
         "image": "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F1_0cbf7ca7-3b1c-4838-8fda-176ebd7d38fa.jpg%3Fv%3D1649423983&w=256&q=75",
         "title": 'Fastive Ready makeup Kit',
         "shades": '',
         "price": 1999,
      },
      {
         "image": "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F1_0ca61ef7-05ce-49be-9fa1-de7c41b99a1f.jpg%3Fv%3D1668050175&w=256&q=75",
         "title": 'Anniversary makeup kit',
         "shades": '',
         "price": 2499,
      },
      {
         "image": "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F1_969f5548-2c56-4506-ada8-159b53a8f630.jpg%3Fv%3D1649423977&w=256&q=75",
         "title": 'Glamup kit for womens',
         "shades": '',
         "price": 1340,
      },
      {
         "image": "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F430185524-value-set-29-wbg_main_image.jpg%3Fv%3D1664294939&w=256&q=75",
         "title": 'Makeup in focus value set',
         "shades": '',
         "price": 3424,
      },
      {
         "image": "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F419424297-value-set-16-wbg-01.jpg%3Fv%3D1661530291&w=256&q=75",
         "title": 'Set in Right Makeup set',
         "shades": '',
         "price": 1033,
      },
   ]


   const fourthmultiple = [
      {
         "image": "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F04_b475d6dd-c07b-43b0-9f78-c989b2fe4f6d.jpg%3Fv%3D1659446263&w=256&q=75",
         "title": 'Wedding makeu kit',
         "shades": '',
         "price": 1699,
      },
      {
         "image": "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F399160329-9-to-5-makeup-kit-wbg-01.jpg%3Fv%3D1654013564&w=256&q=75",
         "title": 'The Office Makeuo Kit',
         "shades": '',
         "price": 199,
      },
      {
         "image": "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Ffiles%2F505110577-monsoon-makeup-kit-wbg-images_12.jpg%3Fv%3D1688227357&w=256&q=75",
         "title": 'Matte as Hell Crayon Lipstick',
         "shades": '',
         "price": 899,
      },
      {
         "image": "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F1_37e8dc88-a720-44ed-a5f3-1e0f0e95bc17.jpg%3Fv%3D1659517990&w=256&q=75",
         "title": 'Date Night Makeup',
         "shades": '',
         "price": 1599,
      },
      {
         "image": "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F1_0cbf7ca7-3b1c-4838-8fda-176ebd7d38fa.jpg%3Fv%3D1649423983&w=256&q=75",
         "title": 'Festive Ready kit',
         "shades": '',
         "price": 999,
      },
      {
         "image": "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FRakshaBandhanKit-WBGImages.jpg%3Fv%3D1654694624&w=256&q=75",
         "title": 'Everyday Makeup Kit',
         "shades": '',
         "price": 1240,
      },
      {
         "image": "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F430185524-value-set-29-wbg_main_image.jpg%3Fv%3D1664294939&w=256&q=75",
         "title": 'Makeup in focus value set',
         "shades": '',
         "price": 3423,
      },
      {
         "image": "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F419424297-value-set-16-wbg-01.jpg%3Fv%3D1661530291&w=256&q=75",
         "title": 'Set in Right Makeup set',
         "shades": '',
         "price": 1033,
      },
   ]
   const fithmultiple = [
      {
         "image": "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F1_e4b6c948-178e-4bfe-a3b3-926119dea615.jpg%3Fv%3D1649865681&w=256&q=75",
         "title": 'Set of 4 Kajal in one set',
         "shades": '',
         "price": 799,
      },
      {
         "image": "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FValue-Set-11---WBG-Images_1.jpg%3Fv%3D1659456262&w=256&q=75",
         "title": 'Bold Honesty Face Makeup',
         "shades": '',
         "price": 699,
      },
      {
         "image": "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FRakshaBandhanKit-WBGImages.jpg%3Fv%3D1654694624&w=256&q=75",
         "title": 'Bold Honesty Makeup Set',
         "shades": '',
         "price": 679,
      },
      {
         "image": "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F2_bb525208-246a-4f40-b57f-d88372708398.jpg%3Fv%3D1655308814&w=256&q=75",
         "title": 'Glam Eye Makeup Value set',
         "shades": '',
         "price": 1299,
      },
      {
         "image": "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2F08.jpg%3Fv%3D1630511040&w=256&q=75",
         "title": 'Face Pallete shadow set',
         "shades": '',
         "price": 795,
      },
      {
         "image": "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FWBG1_73e85cb4-80d8-4eeb-ba32-deaf11c4483f.jpg%3Fv%3D1658851292&w=256&q=75",
         "title": 'Blushen and Poppine set',
         "shades": '',
         "price": 749,
      },
      {
         "image": "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2Fsugar-cosmetics-lip-balm-sheet-mask-15782913671251.jpg%3Fv%3D1619152222&w=256&q=75",
         "title": 'Lip Balm + Sheet Masks',
         "shades": '',
         "price": 599,
      },
      {
         "image": "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F0906%2F2558%2Fproducts%2FWBG_648fe1ef-ce38-46b9-983f-2ca69fba5806.jpg%3Fv%3D1659369810&w=256&q=75",
         "title": 'Matte the Base Value Set',
         "shades": '',
         "price": 499,
      }
   ]

   const multipleon = [
      "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Ffd535bbb-a35e-433c-89a7-a6b93c9a8c6c.gif&w=1920&q=75",
      "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Ff2ea5182-e03c-44e4-97b8-a417bc34cf13.gif&w=1920&q=75",
      "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fb1530b24-5333-4464-9ae0-8d25c74c2637.jpg&w=1920&q=75",
      "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Ff7ab913e-22bf-4301-be48-a94da8d8c0c0.jpg&w=1920&q=75",
      "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F3946e48e-b0c7-4e7d-a19d-0479dd685bf3.jpg&w=1920&q=75"
   ]

   const multipletw = [
      "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fe67abb27-d278-488f-b77c-befdf0bc5ac2.jpg&w=1920&q=75",
      "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2Fae700fcf-b911-452c-a916-f9994a15d20c.gif&w=1920&q=75",
      "https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F54c5f5ea-d3ab-47c6-8d85-f9e47a6102bb.jpg&w=1920&q=75"
   ]

   return (
      <>
         <DIV style={{ padding: '15% 2.5% 2.5% 2.5%', backgroundColor: theme ? 'black' : '#ECEFF1', color: theme ? 'black' : '' }}>

            <Box display={{ lg: 'flex', md: 'flex', sm: 'none', base: 'none' }} flexDirection={'column'}>
               <div>
                  <SimpleSlider argument={firstsimleslide} />
               </div>


               <div style={{ backgroundColor: theme ? '#1A237E' : "#ECEFF1", padding: '40px 0px', marginTop: '60px', borderRadius: '15px' }}>
                  < MultipleItems argument={fisrtmultiple} />
               </div>


               <div style={{ marginTop: '20px', borderRadius: '9px' }}>

                  <br />
                  <div >
                     <Multiple argument={multipleon} />
                  </div>
               </div>

               <br />
               <div style={{ backgroundColor: theme ? '#1A237E' : "#ECEFF1", padding: '20px 0px', marginTop: '20px', borderRadius: '15px' }}>
                  <h1 style={{ textAlign: 'center', fontSize: '30px', color: theme ? 'white' : 'black' }}><b> Just In </b></h1>
                  <br />
                  < MultipleItems argument={secondmultiple} />
               </div>


               <div style={{ marginTop: '20px', padding: '0px 30px' }}>
                  <br />

                  <h1 style={{ textAlign: 'center', fontSize: '30px', color: theme ? 'white' : 'black' }}><b>TIPSY LIPS SCRUB + BALM DUO</b></h1>
                  <br />
                  <div >
                     <img style={{ borderRadius: '7px', display: 'block', height: '490px', width: '100%' }} src="https://in.sugarcosmetics.com/_next/image?url=https://d32baadbbpueqt.cloudfront.net/Homepage/0533d215-072d-46a6-a126-656aa10580fb.jpg&w=1920&q=75" alt="" />
                  </div>
               </div>

               <br />
               <div style={{ marginTop: '20px' }}>
                  <h1 style={{ textAlign: 'center', fontSize: '30px', color: theme ? 'white' : 'black' }}><b>TOP PICKS OF THE WEEK</b></h1>
                  <br />
                  <Multiple argument={multipletw} />
               </div>


               <div style={{ backgroundColor: theme ? '#1A237E' : "#ECEFF1", padding: '20px 0px', marginTop: '60px', borderRadius: '15px' }}>
                  <h1 style={{ textAlign: 'center', fontSize: '30px', color: theme ? 'white' : 'black' }}><b>BUY NOW PAY LATER</b></h1>
                  <br />
                  < MultipleItems argument={thirdmultiple} />
               </div>
               <br />
               <div style={{ backgroundColor: theme ? '#1A237E' : "#ECEFF1", padding: '20px 0px', marginTop: '20px', borderRadius: '15px' }}>
                  <h1 style={{ textAlign: 'center', fontSize: '30px', color: theme ? 'white' : 'black' }}><b>GIFTING</b></h1>
                  <br />
                  < MultipleItems argument={fourthmultiple} />
               </div>


               <div>
                  <br />
                  <h1 style={{ textAlign: 'center', fontSize: '30px', marginTop: '30px', color: theme ? 'white' : 'black' }}><b>REFER YOUR FRIENDS</b></h1>
                  <br />
                  <img src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F8638d096-d168-404e-9b83-56967625b5e6.jpg&w=1920&q=75" alt="" />
               </div>

               <br />
               <div >

                  <h1 style={{ textAlign: 'center', paddingTop: '10px', fontSize: '30px', color: theme ? 'white' : 'black' }}><b>SUPER SAVERS</b></h1>
                  <br />
                  < MultipleItems argument={fithmultiple} />
               </div>


               <div style={{ marginTop: '20px' }}>
                  <h1 style={{ textAlign: 'center', marginTop: '60px', fontSize: '30px', color: theme ? 'white' : 'black' }}><b>NEWLY LAUNCHED</b></h1>
                  <br />
                  <SimpleSlider argument={secondsimpleslide} />
               </div>

               <br />
               <div style={{ marginTop: '45px' }}>

                  <br />
                  <div style={{ display: 'flex', gap: '30px', marginTop: '10px' }}>
                     <div style={{ border: theme ? '1px solid blue' : "", borderRadius: '9px' }}><img style={{ borderRadius: '9px' }} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F50d277c9-c605-4c1a-b9da-ae952189292d.jpg&w=1920&q=75" alt="" /></div>
                     <div style={{ border: theme ? '1px solid blue' : '', borderRadius: '9px' }}><img style={{ borderRadius: '9px' }} src="https://in.sugarcosmetics.com/_next/image?url=https%3A%2F%2Fd32baadbbpueqt.cloudfront.net%2FHomepage%2F597e2c6d-4144-497c-90c2-5d09de375506.jpg&w=1920&q=75" alt="" /></div>
                  </div>
                  <br />
                  <br />
                  <br />
                  <div><Multiplelast /></div>
                  <br />
                  <br />

               </div>

            </Box>


            <Box display={{ lg: 'none', md: 'none', sm: 'flex', base: 'flex' }} flexDirection={'column'} marginTop={'10%'} marginBottom={'25%'}>
               <Box position={'relative'} width={'100%'} overflow={'auto'} >
                  {/* CSS files for react-slick */}
                  <link
                     rel="stylesheet"
                     type="text/css"
                     href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
                  />
                  <link
                     rel="stylesheet"
                     type="text/css"
                     href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
                  />

                  {/* Slider */}
                  <Slider {...settings} ref={(slider) => setSlider(slider)}>
                     {cards.map((url, index) => (
                        <Box
                           key={index}
                           height={'300px'}
                           position="relative"
                           backgroundPosition="center"
                           backgroundRepeat="no-repeat"
                           backgroundSize='contain'
                           backgroundImage={`url(${url})`}
                        />
                     ))}
                  </Slider>
               </Box>
               <br />
               <Box display={'grid'} gridTemplateColumns={'repeat(2,1fr)'} gap={'3%'}>
                  {fisrtmultiple.map((item)=>
                  <Center py={12}>
                     <Box
                        role={'group'}
                        p={'1%'}
                        maxW={'330px'}
                        w={'full'}
                       
                        boxShadow={'2xl'}
                        rounded={'lg'}
                        pos={'relative'}
                        zIndex={1}>
                        <Box
                           rounded={'lg'}
                           mt={-12}
                           pos={'relative'}
                           height={'230px'}
                           _after={{
                              transition: 'all .3s ease',
                              content: '""',
                              w: 'full',
                              h: 'full',
                              pos: 'absolute',
                              top: 5,
                              left: 0,
                             
                              filter: 'blur(15px)',
                              zIndex: -1,
                           }}
                           _groupHover={{
                              _after: {
                                 filter: 'blur(20px)',
                              },
                           }}>
                           <Image
                              rounded={'lg'}
                              height={230}
                              width={282}
                              objectFit={'cover'}
                              src={item.image}
                              alt="#"
                           />
                        </Box>
                        <Stack pt={10} align={'center'}>
                           <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
                              Brand - {item.title}
                           </Text>
                           
                              <Text fontWeight={600} color={'gray.500'} fontSize={'xl'}>
                                 Rs. {item.price}
                              </Text>
                              
                           
                        </Stack>
                     </Box>
                  </Center>)}
                  </Box>
            </Box>
         </DIV>

      </>
   )
}
export default Landpage
const DIV = styled.div` 


`

