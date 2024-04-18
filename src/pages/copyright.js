import './copyright.css'

export const Copyright = () => {
    return (
        <>
            <div className="copyright-container">
                <h1>COPYRIGHT INFORMATION</h1>
                <p>All images and videos provided by the IV-Capture platform are sourced from Pixabay via their API. Pixabay grants free usage of their images and videos for both personal and commercial purposes, and therefore, all content downloaded through IV-Capture is free to use without attribution.</p>
                <p>However, it is important to note that while Pixabay offers free usage rights for most images and videos, some content may be subject to specific licenses or restrictions. Users are encouraged to review Pixabay's terms of service and license agreements for more information.</p>
                <p>IV-Capture and its creators do not claim ownership over the images and videos provided by Pixabay. This platform serves as a tool for users to conveniently access and download media content for various purposes.</p>
                <h2>Contact Us</h2>
                <p>If you have any questions or concerns regarding the copyright information on this website, please feel free to <a href="https://www.linkedin.com/in/mahendramahara/" target='_blank' rel='Contact-Social'>contact us</a>.</p>
                <button onClick={() => window.open('https://pixabay.com/', '_blank')}>Visit Main Website</button>
            </div>
        </>
    )
}