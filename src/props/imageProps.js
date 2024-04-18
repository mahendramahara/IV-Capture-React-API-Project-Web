import { Link } from "react-router-dom";
import './imageProps.css'

export const ImageProps = (props) => {

    const redirectToDownloadTab = () => {
        var url = props.mainImageDownload;
        window.open(url, '_blank');
    }

    return (
        <div className="image">
            <img src={props.mainImage} alt="Image 1" />

            <div className="description">
                <div className="title">{props.imageTitle}</div>
                <div className="likes-profile-container">
                    <div className="likes">
                        <span className="icon">&hearts;</span>
                        <span className="count">{props.likes}</span>
                    </div>
                    <div className="uploader">
                        <img src={props.profileImage} alt="Uploader Profile" />
                        <div className="info">
                            <span className="name">{props.uploaderName}</span>
                            <span className="id">{props.uploaderUsername}</span>
                        </div>
                    </div>
                </div>
                <button className="download-btn" onClick={redirectToDownloadTab}>Download</button>
                <div className="stats">
                    <span className="comments">{props.totalComments} <span className="icon">&#128172;</span></span>
                    <span className="downloads">{props.totalDownloads}<span className="icon">&#128190;</span></span>
                    <span className="views">{props.totalViews} <span className="icon">&#128065;</span></span>
                </div>
            </div>
        </div>
    );
}