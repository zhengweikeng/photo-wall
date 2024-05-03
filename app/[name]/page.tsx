import Image from 'next/image';

const Photo = async ({ params }: { params: { name: string } }) => {
    const photoURL = process.env.photoWallBaseURL + '/' + params.name

    return (
        <div className="flex flex-col max-w-screen-xl px-4 md:px-60 lg:px-60">
            <div className="p-4">
                <Image
                    src={photoURL}
                    alt={photoURL}
                    width={400}
                    height={300}
                    layout="responsive"
                    className="rounded-lg" />
            </div>
        </div>
    );
};

export async function generateStaticParams() {
    const res = await fetch(
        `${process.env.photoWallBaseURL}/list`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.photoWallAPIKey}`
            },
            next: {
                revalidate: 3600
            }
        })
    const photoNames = await res.json()

    return photoNames.map((name: string) => ({ name }))
}

export default Photo;
