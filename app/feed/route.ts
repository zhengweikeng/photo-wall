import { Feed, FeedOptions, Item } from 'feed'

export async function GET() {
    const baseURL = process.env.siteBaseURL || ""
    const feedOpts: FeedOptions = {
        id: baseURL,
        title: "Photos by Seed",
        updated: new Date(),
        generator: "Next.js using feed library",
        language: "en-us",
        link: baseURL,
        description: "Recent photos of Seed",
        image: `${baseURL}/favicon.png`,
        favicon: `${baseURL}/favicon.ico`,
        copyright: ''
    }
    const feed = new Feed(feedOpts)

    const res = await fetch(
        `${process.env.photoWallBaseURL}/list`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.photoWallAPIKey}`
            },
        })
    const photoNames: string[] = await res.json()
    photoNames.forEach((photoName) => {
        const infos = photoName.split("_")
        let photoDate = new Date()
        if (infos.length > 0) {
            const date = new Date(infos[0])
            if (!isNaN(date.getTime())) {
                photoDate = date
            }
        }

        const item: Item = {
            title: photoName,
            link: `${baseURL}/${photoName}`,
            date: photoDate,
        }
        feed.addItem(item)
    })

    const rssContent = feed.rss2()

    return new Response(rssContent, {
        headers: {
            'Content-Type': 'application/rss+xml',
        },
    });
}