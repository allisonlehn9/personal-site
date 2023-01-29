import React from "react"
import PageHead from "../components/PageHead"
import Link from "../components/Link"

export default function Spotify() {
    return (
        <div className="spotify">
            <PageHead name="Spotify Mapped" />
            <div className="page--body">
                <p>
                    This project combines two of my favorite things: ArcGIS StoryMaps and overly specific, categorical Spotify playlists.
                    This StoryMap chronicles my efforts to geocode some song names from a Spotify song database according to country.
                    If you'd like to view this story in its intended format, follow <Link href="https://storymaps.arcgis.com/stories/abd17be1fa1a40049dc9991553ba24fe" text="this link"/>.
                    Otherwise, you can follow along just as well below.
                </p>
                <br></br>
                <div className="storymap">
                    <iframe title="Spotify Mapped ArcGIS StoryMap" src="https://storymaps.arcgis.com/stories/abd17be1fa1a40049dc9991553ba24fe" allowfullscreen allow="geolocation"></iframe>
                </div>
            </div>
        </div>
    )
}