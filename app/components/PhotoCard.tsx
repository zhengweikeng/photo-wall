import Image from 'next/image'
import Link from 'next/link';

interface PhotoCardProps {
    url: string;
}

const PhotoCard: React.FC<PhotoCardProps> = ({ url }) => {
    const photoURL = new URL(url)
    const photoName = photoURL.pathname

    return (
        <div className='photo-card rounded-lg sm:max-w-max m-1'>
            <Link href={`${photoName}`} title={photoName}>
                <Image
                    src={url}
                    alt={photoName}
                    width={400}
                    height={300}
                    className='rounded-lg shadow-md'
                />
            </Link>
        </div>

    )
};

export default PhotoCard;