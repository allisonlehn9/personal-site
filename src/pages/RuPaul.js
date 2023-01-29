import React from "react"
import PageHead from "../components/PageHead"
import Link from "../components/Link"
import pca_generation from "../images/rupaul/pca_generation.png"
import pca_reconstruction from "../images/rupaul/pca_reconstruction.png"
import toot_boot from "../images/rupaul/toot_boot.png"
import accuracy from "../images/rupaul/accuracy.png"
import precision from "../images/rupaul/precision.png"
import recall from "../images/rupaul/recall.png"

export default function RuPaul() {
    return (
        <div className="rupaul">
            <PageHead name="RuPaul's Machine Learning Race" />
            <div className="page--body">
                <p>
                    This project is still a work in progress.
                    The current draft link for the article is available <Link href="https://docs.google.com/document/d/1qEjUSgDt2fIfqenjTxuw9wtk7JmFyirizCsKb3kZoXs/edit?usp=sharing" text="here" />.
                    I'm also linking my <Link href="https://gist.github.com/allisonlehn9/a8ecb988f26dc84da71dcc1c282a8866" text="web scraping code" /> and <Link href="https://gist.github.com/allisonlehn9/80f059a7e7ccf85ade53de9f47a5d175" text="tutorial" />, as well as the <Link href="https://gist.github.com/allisonlehn9/9d09cbe69d21a54ec9d7c8c959347530" text="machine learning code" /> here.
                </p>
                <p>
                    The idea for this project emerged out of spite. 
                    I felt so strongly wronged by my machine learning class, as it seemed to take every opportunity to make things more difficult than they needed to be. 
                    I had just come out of a similar situation in my software engineering course the semester before, which is what brought me into the most intense stage of burnout I had ever experienced in my life.
                    There were days where I would wake up, look at my open code notebook, and instantly burst into tears.
                </p>
                <p>
                    There were exactly three things that helped me get through this class.
                </p>
                <p>
                    Two of them were YouTube channels: <Link href="https://www.youtube.com/channel/UCtYLUTtgS3k1Fg4y5tAhLbw" text="StatQuest with Josh Starmer" /> and <Link href="https://www.youtube.com/@ritvikmath" text="ritvikmath" />.
                    They were <i>expertly</i> able to explain every concept we were trying to learn with ease and clarity, making made me realize that learning didn't have to be emotionally challenging! 
                    I owe my sanity to their dedication to genuinely beginner-friendly instruction. 
                </p>
                <p>
                    The third thing that saved me was taking up crochet, and I don't care if that makes me sound like a grandma. 
                    My inability to grasp machine learning was making me feel like I was a bad learner, or that I had lost all of my persistence. 
                    However, the fact that I learned crochet from the ground up—trying and failing to make a simple heart shape at least 15 times before I got it right—without shedding a single tear made me realize that I was still fully capable of taking on a challenge. 
                    Whenever things would get too confusing, frustrating, or overwhelming, I would retreat into my crochet.
                    Needless to say, I have gotten very, very good at it in the past year.
                </p>
                <p>
                    I slowly eased out of my horrible burnout state over the course of the semester, and by the end, I impressed myself with how much I had actually retained once I developed one (1) singular coping mechansim. 
                    After a summer of not thinking about regression and classification, I was ready to enact my revenge: I was going to make machine learning easier to understand for the next generation of learners.
                </p>
                <p>
                    Along with crochet, I also started watching RuPaul's Drag Race with my roommates the same semester as I was taking machine learning. 
                    Months later, I put together how the overabundance of Drag Race content could work as a fun data source to explore some image data machine learning techniques, which were the ones I was most familiar with. 
                    It was an excellent audience to address, too—if I could explain machine learning to the average Drag Race viewer, I could explain it to anyone. 
                    My goal was to create multiple levels of explanation:
                </p>
                <ul>
                    <li><b>The completely non-technical audience</b>: I explain all of the concepts at a high level, barely touching the mathematics or computer science behind it</li>
                    <li><b>The beginning coder</b>: I make my process clear and understandable for someone who would like to learn along with it</li>
                    <li><b>The advanced coder</b>: I link my unannotated code, in case a seasoned coder is just interested in the process I used</li>
                </ul>
                <p>
                    My article is addressed to the first audience, but I link a Colab tutorial to my web scraping process specifically for the second audience, as well as the plain code for the third. 
                    I cast a wide net, and give options for a choose-your-own-adventure situation, since not everyone is at the same level. 
                    One of the few good things that came out of being so emotionally upended by my computer science experience is that I can remember exactly what it felt like to be a beginner, as well as what confusions I had that I didn't know the correct questions for. 
                    I take pride in my empathy, and I used it to make a product that is exactly what I would have wanted before I started anything.
                </p>
                <p>
                    Looking at what I've created, I feel a sense of pride that is almost equal and opposite to the absolute pit of self-loathing I found myself in just less than a year ago. 
                    This is where the joy is for me.
                </p>
                <p>Here are some images I've created as part of this project:</p>
                <div className="rupaul--images">
                    <figure>
                        <img src={pca_reconstruction} alt="PCA Reconstruction" />
                        <figcaption>Runway images reconstructed by PCA algorithm</figcaption>
                    </figure>
                    <br></br>
                    <figure>
                        <img src={pca_generation} alt="PCA Generation"/>
                        <figcaption>Runway image generated by PCA algorithm</figcaption>
                    </figure>
                    <figure style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
                        <img src={toot_boot} alt="Toot/Boot Classification"/>
                        <img src={accuracy} alt="Accuracy Calculation"/>
                        <img src={precision} alt="Precision Calculation"/>
                        <img src={recall} alt="Recall Calculation"/>
                        <figcaption>Illustration to demonstrate misclassification errors</figcaption>
                    </figure>
                </div>
            </div>
        </div>
    )
}