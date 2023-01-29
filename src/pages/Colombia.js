import React from "react"
import PageHead from "../components/PageHead"
import fig1 from "../images/colombia/fig1.JPG"
import fig2a from "../images/colombia/fig2a.png"
import fig2b from "../images/colombia/fig2b.png"
import fig3a from "../images/colombia/fig3a.png"
import fig3b from "../images/colombia/fig3b.png"
import fig3c from "../images/colombia/fig3c.png"
import fig4 from "../images/colombia/fig4.png"
import fig5 from "../images/colombia/fig5.png"
import fig6 from "../images/colombia/fig6.png"
import fig7 from "../images/colombia/fig7.png"
import fig8 from "../images/colombia/fig8.png"
import fig9 from "../images/colombia/fig9.png"

export default function Colombia() {
    return (
    <div>
        <PageHead name="Colombia Digital History Lab" />
        <div className="page--body">
            <div className="page--colombia">
                <div className="column">
                    <h2>Intro</h2>
                    <p>
                        The broader goal of the Colombia Digital History Lab (CDHL) is to create and compile public history products for scholars of Latin America, with an aim to make historical data more accessible. 
                        In the works is the Oligarchy Project, which maps the social networks of Colombian elites according to their self-identification in the <i>Quién es quién (Who's who)</i> publication.
                    </p>
                    <p>
                        The project that I'm currently working on is the Colombia Periodical Licenses Map. 
                        Professor Robert Karl had accumulated years and years of images from annual editions of Memorias del Ministerio del Gobierno, which list all of the years' registered newspaper licenses, typically formatted like that in Figure 1.
                    </p>
                    <h2>Data processing</h2> 
                    <p>
                        The first step in this project is extracting the text from these images. 
                        The most straightforward way to do this is by manually transcribing all of the information, of course, but that gets boring quickly. 
                        Optical Character Recognition (OCR) algorithms are able to "read" the text from images and process them as digital text. 
                        I had some familiarity with Google's Tesseract OCR engine and tried to use it on the data, but immediately ran into some issues. 
                        Figure 2 shows the image that I gave to the algorithm and what I got out of it.
                    </p>
                    
                    <p>
                        Now, OCR is usually pretty messy, because computers aren't very good at doing human tasks, but this is very, very bad. 
                        After much trial and error, I realized that the problem is the long trail of periods after every word in the table: they're being read as letters for some reason, and it's ruining everything. 
                        When I removed them and made the images black and white, things worked much better (Figure 3).
                    </p>
                    <p>
                        Even after this, there are still some spelling errors.
                        Here comes the central tradeoff when it comes to data cleaning: accuracy vs. speed.
                        There are some algorithms and techniques to catch these errors, and I implemented them to the best of my ability, but language is complex and has many exceptions, so systematically it is difficult to catch everything this way.
                        If I spent ages, I could catch every error manually, but even then I would still miss some mistakes, and this would also potentially drive me insane.
                        In some projects, my time might better be used elsewhere if I can accept a certain degree of data messiness.
                        In this case, however, I'm creating a translation of an archival resource, where users will be approaching the product as something close or equivalent to the primary source.
                        To avoid misleading information, it was important that I strive for accuracy, so I did spend extra time making sure the data was as clean as possible.
                    </p>
                    <p>
                        Apart from spelling errors, there are also certainly semantic errors.
                        For example, a key attribute in the table is the name of the director of the publication (Nombre del director).
                        Typically, this would be the name of an individual, but sometimes there were multiple directors of the periodical.
                        Furthermore, at times the "name" is more of a title, like "Secretario del Gobierno," or the name would have an additional title alongside of it, like "presbítero."
                        If I were the final consumer of my product, I would be able to make some purpose-driven decisions about how much of this data to represent.
                        However, I'm creating this product for <i>other</i> scholars of Latin America, so I intended to be as comprehensive and unambiguous as possible.
                        I ended up creating four columns just to encapsulate this one attribute: title (before the name, or entire title if there was no name), first name, last names, and title (after the name).
                        Even still, I potentially misconstrue middle names for last names, but at a certain point there is only so much I can do.
                        Figure 4 shows a subset of this data.
                    </p>
                    <p>
                        Being so involved with the digital data creation process made me especially aware of the sheer effort required to do this kind of work. 
                        It gave me a newfound appreciation for the unthanked people behind lots of the data that's made publically available, who even do this work for free. 
                        And while I could see the therapeutic mindlessness behind it all at first, it really did amount to tons and tons of labor.
                    </p>
                    <h2>Geocoding</h2>
                    <p>
                        The eventual goal of this project was to put the data on a map, potentially identifying some spatial trends in newspaper licenses. 
                        Really, the number of papers almost definitely correlates with city size, but once we view this over time, we might be able to identify trends in urban development or psychological geography of the country. 
                        Regardless, we're putting the data on a map because it presents a good platform to make the data explorable.
                    </p>
                    <p>
                        This is the part I was especially excited for, because I had come fresh out of the ArcGIS User Conference feeling motivated and ready to use all of the fancy mapping techniques I had just learned. 
                        Really, it just made me realize that I had to do some more data engineering, but I still had a good time.
                    </p>
                    <p>
                        The first thing I had to do was build a locator, which would be able to map the city and place names in the data with their actual location on the map. 
                        Professor Karl had access to a list of place names and their latitude/longitude coordinates, so this was actually pretty easy.
                    </p>
                    <h2>Mapping and visualization</h2>
                    <p>
                        Once I had a sample of some of the data on a map, the question became how to visualize it in an interesting, non-misleading way.
                    </p>
                    <p>
                        The first design concern I faced was how to visualize papers from the same city effectively, since these are plotted in the same location. 
                        The default for ArcGIS's visualization for this is for each point's pop-up window to show a table with all of its data (Figure 5). 
                        While this is functional, it doesn't make it easy to explore the information—it's impossible to tell whether a point has dozens of entries or just one.
                    </p>
                    <p>
                        The first solution is to group these into clusters, as in Figure 6. 
                        This lets us visualize the numbers, but it won't show all of the tables for each point in the cluster as in Figure 5. 
                        Being able to visualize some of the variables within the data by cluster colors would be the more effective way to show trends.
                    </p>
                    <p>
                        Here's the problem: the dataset consists of almost entirely non-quantitative data. 
                        Most of the variables are either categorical (types of paper, publication frequency) or simply qualitative (name of the paper, name of the director, city of publication), which aren't inherently visualizable. 
                        The purpose of the project is to make the data more explorable, though, so I had to figure out a way to make it work.
                    </p>
                    <p>
                        The specific variable I chose to focus on first was the type of paper. 
                        The main summary statistic possible for categorical data like this is the mode, so I decided to visualize the most common type of paper for each cluster of points in a city. 
                        However, the categories used to describe the papers are largely inconsistent. 
                        For example, one paper would describe itself as “Político” and another “Política” or “Político y variedades.” 
                        All of these papers have an element of politics in them, but if we wanted to query the number of political papers by searching for the count of “Político” labels, we wouldn't get an accurate representation of the data. 
                        I had to operationalize the variable, splitting the categories into several main ones, allowing for multiple categories when applicable (Figure 7).
                    </p>
                    <p>
                        I did this by manually identifying key words that relate the category to one of these ten main ones. 
                        This allows me to create counts of the categories that are represented in the clusters in Figure 8. 
                        While this does require me to make some interpretation of the data beyond what is originally represented in the clusters, it helps communicate the general trends in the variable more accurately. 
                        By making the interpretation of this data more accessible via a relevant descriptive statistic, I am able to communicate the relationships between the variables more clearly for historical exploration.
                    </p>
                    
                    <p>
                        It is also important to mention that without the labels of the categories, it is near impossible to understand what the colors mean. 
                        People operate based on the cognitive principle of limited information: if they had to memorize what color corresponds to what in a ten-category system, they would not be able to engage with the project very easily, and it would lose its discoverability factor.
                    </p>
                    <p>
                        Another option for visualizing many points in the same location is to add a bit of spread to the points so that they cluster around the original location, but are accessible individually. 
                        This way, each point could be selected and explored for its information. 
                        In digitally visualizing an archive, this would be effective for a main view of all of the available points.
                        When selected, the pop-up window can display the name of the paper and the director's name, as well as any other relevant information. 
                        I attempted this in Figure 9, where each square represents a paper, and its color is determined by its type. 
                        Points with multiple colors are multi-category papers. 
                        However, as I just mentioned, it's a bit too complicated to be intelligible.
                        I'm experimenting with finding a better way to visualize this concept.
                    </p>
                    
                    <p>
                        Another feature I intend to add to the project is a time slider that would allow the user to scroll between years and observe the change in the visualization over time. 
                        I would maintain consistency in the visualization's color scheme and layout, leaving the change in numbers to be isolated and inform the user independently.
                    </p>
                    <h2>Conclusion</h2>
                    <p>
                        There is still tons of data to be added and visualized as part of this project, but so far I have gone through much of the actual process involved on a smaller scale. 
                        Building a project where I am not even plausibly the prospective user has opened me up to the effort it takes to create a project that does justice to an archive in order to minimize biases transmitting from me to the next scholar. 
                        It has reminded me that my technical toolkit is useful to the historical community, as well, which makes me feel valuable—but also appreciate with more specificity the people doing similar work in the community.
                    </p>
                </div>
                <div className="column">
                    <figure>
                        <img src={fig1} alt="Sample of periodical license data" />
                        <figcaption>Figure 1: Sample of periodical license data</figcaption>
                    </figure>
                    <figure style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                        <img src={fig2a} alt="Input data" />
                        <img src={fig2b} alt="Output data" />
                        <figcaption>Figure 2: Input image data and output text data</figcaption>
                    </figure>
                    <figure style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                        <img src={fig3a} alt="Input data with periods removed" />
                        <img src={fig3b} alt="Binarized (black and white) data" />
                        <img src={fig3c} alt="Improved OCR Output" />
                        <figcaption>Figure 3: Improved OCR output after image processing</figcaption>
                    </figure>

                    <figure>
                        <img src={fig4} alt="Data subset: directors" />
                        <figcaption>Figure 4: Finished subset of the dataset, showing the director formatting schema</figcaption>
                    </figure>
                    <figure>
                        <img src={fig5} alt="Default map view" />
                        <figcaption>Figure 5: Default view of multiple values being plotted at the same location (Ibagué).</figcaption>
                    </figure>
                    <figure >
                        <img src={fig6} alt="Cluster view" />
                        <figcaption>Figure 6: Cluster view</figcaption>
                    </figure>
                    <figure >
                        <img src={fig7} alt="Periodical categories" />
                        <figcaption>Figure 7: Numerical representation of the periodical categories</figcaption>
                    </figure>
                    <figure >
                        <img src={fig8} alt="Labeled clusters" />
                        <figcaption>Figure 8: Labeled clusters by category</figcaption>
                    </figure>
                    <figure >
                        <img src={fig9} alt="Spread points" />
                        <figcaption>Figure 9: Spread points, colored by category</figcaption>
                    </figure>
                    
                </div>
            </div>
        </div>
    </div>
    )
}