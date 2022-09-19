import './Showcase.css'

function Showcase() {
  return (
    <div>
        <section class="showcase">
            <video src='./Showcase.mp4' autoPlay playsInline muted loop></video>
            <div class="overlay"></div>
            <div class="text">
            <h2>Welcome to AXL HUB</h2> 
            <h3></h3>
            <p>At AXL Hub we use cutting edge technology built using Artificial Intelligence and Machine Learning. AXL is all in one console and your own personalized virtual assistant. The console is made in two configurations, Mirrors and Tables.  Different accessories 
            will be offered to help transform your house or your office into a smart space</p>
            <a href="/Store" >Go To Store</a>
            </div>
            {/* <ul class="social">
            <li><a href="https://www.instagram.com/visianistudios/" target="_blank"><img src="./ig.png" width="40px"></img></a></li>
            <li><a href="https://www.linkedin.com/in/visiani-studios-00828b235/"><img src="./linkedin.png" width="55px"></img></a></li>
            <li><a href="https://www.youtube.com/channel/UCGiqufRusa67eJ54Yeo09xg"><img src="./youtube.png" width="55px"></img></a></li>
            </ul> */}
        </section>
    </div>

  )
}

export default Showcase