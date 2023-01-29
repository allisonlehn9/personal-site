import React from "react";
import PageHead from "../components/PageHead";
// import App from "../sketch"
import Link from "../components/Link";

export default function Magazine() {
    return (
        <div className="magazine">
            <PageHead name="Digital Transgender Archive: Magazine Cover Viewer" />
            {/* <App /> */}
            <div className="page--body">
                <iframe className="magazine--viewer" title="p5 Magazine Cover Viewer" src="https://editor.p5js.org/allisonlehn9/full/I9o38XZtt"></iframe>
                <p>
                    The <Link href="https://www.digitaltransgenderarchive.net/" text="Digital Transgender Archive"/> is a <i>fantastic</i> resource for queer history, and I got particularly invested in the collection of drag and transgender magazines that they had available.
                    As part of a digital humanities course, I wanted to make a small-scale project aimed towards making some of this content more viewable.
                    My goal was to create a dataset out of some of the information and then create some kind of <Link href="http://www.digitalhumanities.org/dhq/vol/9/1/000205/000205.html" text="generous interface" /> that encourages browsing and exploration.
                </p>
                <p>
                    Looking for an attribute to visualize, I was drawn to the glamorous covers, of course.
                    Just scrolling through the archive as it exists, I thought it was fascinating to see how styles changed over time, as well as how the names of these magazines shifted according to the terminology for transgender people that was in vogue at the time of publication.
                    I thought it would be fun to make this timeline more instantaneous, making it possible for a quick scrollthrough of all of the images in just a second.
                </p>
                <p>
                    While the digitization of these magazines may be academically and personally interesting, there is a certain ethical quandary that arises when we publish potentially sensitive information like this on a digital platform.
                    I've found <Link href="https://tararobertson.ca/2016/oob/" text="Tara Robertson's discussion on this subject" /> particularly informative.
                    The models on the magazine covers consented to have their images shown in these physical magazines, but many of these were published before the internet was even a thought.
                    It's highly possible that they would <i>not</i> like these images shown in this manner, and for that reason, I've been very clear in providing a mechanism for a takedown request.
                </p>
                <p>
                    On the practical side of this project, I began by using the Python library beautifulsoup to scrape the images of the magazine covers off of the collection made available via the <Link href="https://archive.org/details/digitaltransgenderarchive" text="Internet Archive" />.
                    You can access my code for this, as well as the link to the complete Google Sheet of data <Link href="https://gist.github.com/allisonlehn9/8012008eb4eef6c077018e158b2ecf3e" text="here" />.
                    Then, using p5.js, I created the magazine cover viewer.
                </p>
                <p>
                    Click on the frame to the right to activate the program, then follow its instructions.
                </p>
            </div>
            
        </div>
    )
}