import Image from 'next/image'
import Link from 'next/link';

interface PhotoCardProps {
    url: string;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ url }) => {
    const photoURL = new URL(url)
    const photoName = photoURL.pathname

    return (
        <div className='photo-card rounded-lg sm:max-w-max md:max-w-xs lg:max-w-xs m-1 hover:scale-110 transition-all duration-500 ease-in-out'>
            <Link href={`${photoName}`} title={photoName}>
                <Image
                    src={url}
                    alt={photoName}
                    fill
                />
            </Link>
        </div>

    )
};

export default PhotoCard;