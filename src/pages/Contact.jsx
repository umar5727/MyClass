import React from 'react'
import ImageGallery from '../components/ImageGallery';
import HeroSection from '../components/HeroSection';

const Contact = () => {
  const images = [
    { url: 'https://placekitten.com/800/600' },
    { url: 'https://placekitten.com/600/800' },
    { url: 'https://placekitten.com/700/500' },
    { url: 'https://placekitten.com/800/600' },
    { url: 'https://placekitten.com/600/800' },
    { url: 'https://placekitten.com/700/500' },
    { url: 'https://placekitten.com/800/600' },
    { url: 'https://placekitten.com/600/800' },
    { url: 'https://placekitten.com/700/500' },
    // Add more images as needed
  ];
  return (
    <div>Contact
{/* 
<figure class="position-absolute bottom-0 start-50 translate-middle-x mt-4 mb-0">
					<svg width="550px" height="538px" viewBox="0 0 554 544"  xml:space="preserve">
						<path class="fill-primary" d="M423.3,77.2c49.5,32.5,100.4,67.2,118.4,114.5s3.5,107.1-15.4,165.7c-18.7,58.6-41.8,116.1-84,148.6 c-42.5,32.8-104.2,40.2-163.8,37.3c-59.5-3.2-116.8-17.1-164.7-47.9c-48.3-30.6-87.2-78.2-102-131.6C-3,310.5,6.6,251,25.3,194.7 C43.6,138,70.7,84.3,114.1,49.5C157.2,14.8,216.7-1,270.8,6.4C324.8,14.2,373.4,44.7,423.3,77.2z"></path>
					</svg>
				</figure> */}
        <HeroSection />
        <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Image Gallery</h1>
      <ImageGallery images={images} />
    </div>

    </div>
  )
}

export default Contact