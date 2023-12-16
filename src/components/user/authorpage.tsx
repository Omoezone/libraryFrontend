import React, { useState } from 'react';


// 
/*********** Carousel css ************/
// * {
//   box-sizing: border-box;
// }

// /* Slideshow container */
// .slider-container {
//   position: relative;
//   margin: 50px auto 20px auto;
//   width: 600px;
//   height: 300px;
// }

// /* Style each slide */
// .slide {
//   display: none;
//   width: 100%;
//   height: 100%;
// }

// .photo {
//   width: 100%;
//   max-height: 300px;
//   object-fit: cover;
// }

// /* Next & previous buttons */
// .prev,
// .next {
//   cursor: pointer;
//   /*position: absolute;*/
//   top: 50%;
//   width: auto;
//   padding: 16px;
//   margin-top: -22px;
//   background: rgba(0, 0, 0, 0.3);
//   color: white;
//   font-weight: bold;
//   font-size: 18px;
//   transition: 0.6s ease;
//   border: none;
//   margin-left: 5rem;
//   margin-right: 5rem;
//   height: 3rem;
// }

// /* Position the "next" button to the right */
// .next {
//   right: 0;
// }

// /* On hover, add a semi-transparent black background */
// .prev:hover,
// .next:hover {
//   background-color: rgba(0, 0, 0, 0.8);
// }

// /* Caption text */
// .caption {
//   position: absolute;
//   bottom: 8px;
//   width: 100%;
//   padding: 8px 12px;
//   text-align: center;
//   font-size: 15px;
//   font-weight: bold;
//   color: #fff;
// }

// /* The dots indicator */
// .dots {
//   display: flex;
//   justify-content: center;
// }

// .dot {
//   cursor: pointer;
//   height: 15px;
//   width: 15px;
//   margin: 0 5px;
//   background-color: #ccc;
//   border-radius: 50%;
//   display: inline-block;
//   transition: 0.5s;
// }

// .active,
// .dot:hover {
//   background-color: gray;
// }

// /* Fading animation */
// .fade {
//   animation-name: fade;
//   animation-duration: 1.5s;
// }

// @keyframes fade {
//   from {
//     opacity: 0.3;
//   }
//   to {
//     opacity: 1;
//   }
// }


// this array holds the data for the carousel
const photos = [
    {
      id: 'p1',
      title: 'Photo One',
      url: 'https://www.kindacode.com/wp-content/uploads/2022/08/1.png',
    },
    {
      id: 'p2',
      title: 'Photo Two',
      url: 'https://www.kindacode.com/wp-content/uploads/2022/08/2.png',
    },
    {
      id: 'p3',
      title: 'Photo Three',
      url: 'https://www.kindacode.com/wp-content/uploads/2022/08/3.jpg',
    },
    {
      id: 'p4',
      title: 'Photo Four',
      url: 'https://www.kindacode.com/wp-content/uploads/2022/08/4.jpg',
    },
];

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  useDisclosure
} from '@chakra-ui/react'
import { CSSProperties } from 'react';


export default function Login() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  // show the photo with this index
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // move to the next photo
  // if we are at the end, go to the first photo
  const next = () => {
    setCurrentIndex((currentIndex + 1) % photos.length);
  };

  // move to the previous photo
  // if we are at the beginning, go to the last photo
  const prev = () => {
    setCurrentIndex((currentIndex - 1 + photos.length) % photos.length);
  };

  const bookPicSize = {
    width: "18rem",
    height: "20rem",
    float: "center"
  }

  return (
    <>
      <Button onClick={onOpen}>Author</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Books by author _author_</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* Render the carousel */}
            <div className='slider-container'>
              {photos.map((photo) => (
                <div
                  key={photo.id}
      
                  // if the photo is the current photo, show it
                  className={
                    photos[currentIndex].id === photo.id ? 'fade' : 'slide fade'
                  }
                >
                  <img src={photo.url} alt={photo.title} style={bookPicSize as CSSProperties} className='photo' />
                  <div className='caption'>{photo.title}</div>
                </div>
              ))}
      
              {/* Previous button */}
              <button onClick={prev} className='prev'>
                &lt;
              </button>
      
              {/* Next button */}
              <button onClick={next} className='next'>
                &gt;
              </button>
            </div>
      
            {/* Render dots indicator */}
            <div className='dots'>
              {photos.map((photo) => (
                <span
                  key={photo.id}
                  // highlight the dot that corresponds to the current photo
                  className={
                    photos[currentIndex].id === photo.id ? 'dot active' : 'dot'
                  }
                  // when the user clicks on a dot, go to the corresponding photo
                  onClick={() => setCurrentIndex(photos.indexOf(photo))}
                ></span>
              ))}
            </div>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
