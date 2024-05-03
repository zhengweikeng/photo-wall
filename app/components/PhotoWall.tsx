import React from 'react';
import { notFound } from 'next/navigation'
import PhotoCard from "@/app/components/PhotoCard";

const PhotoWall = async () => {
    const res = await fetch(
        `${process.env.photoWallBaseURL}/list`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.photoWallAPIKey}`
            },
        })

    if (res.status != 200) {
        notFound()
    }

    const photos = await res.json()
    if (!photos || photos.length === 0) {
        notFound()
    }

    return (
        <div className='mx-auto px-4 sm:px-6 lg:px-8 m-2'>
            <div className="flex flex-row flex-grow flex-wrap justify-center gap-1">
                {photos.map((photoName: string, index: number) => (
                    <PhotoCard key={index} url={process.env.photoWallBaseURL + "/" + photoName} />
                ))}
            </div>
        </div>
    )
}



export default PhotoWall;
