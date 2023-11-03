"use client"

import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image';
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface ProductCarousalProps {
    productImages: string[];
}

export const ProductCarousal = ({
    productImages
}: ProductCarousalProps) => {
    console.log(productImages);
    return(
        <div className="flex flex-1 items-center justify-center">
            <Carousel showThumbs={false} showArrows={false} showStatus={false}>
                {productImages.map((image, index) => (
                    <div key={index} className='w-full flex items-center justify-center'>
                        <Image src={image} alt={image} width={50} height={50} quality={100} className='flex items-center justify-center'/>
                    </div>
                ))}
            </Carousel>
        </div>
    )
}