import './videoProps.css'

export const VideoProps = (props) => {

    const redirectToDownloadTab = () => {
        var url = props.mainVideoDownload;
        window.open(url, '_blank');
    }

    return (
        <>
            <div className="video-container">
                <video className="video" controls autoplay loop muted>
                    <source src={props.videoSource} type="video/mp4" />
                    Browser does not support the video tag.
                </video>
                <div className="video-title">{props.videoTitle}</div>
                <div className="video-details">
                    <div className="row-1">
                        <span>Duration: {props.videoDuration}-second</span>
                        <span>Total Views: {props.totalViews}</span>
                    </div>
                    <div className="row-2">
                        <span>Total Likes: {props.totalLikes}</span>
                        <span>Total Downloads: {props.totalDownloads}</span>
                    </div>
                </div>
                <div className="uploader-download-container">
                    <div className="uploader-info">
                        <img className="uploader-image" src={props.uploaderProfile} alt={props.uploaderName} />
                        <div>
                            <div className="uploader-name">{props.uploaderName}</div>
                            <div>{props.uploaderUsernameorID}</div>
                        </div>
                    </div>
                    <button className="download-button" onClick={redirectToDownloadTab}>Download</button>
                </div>
            </div>
        </>
    )
}