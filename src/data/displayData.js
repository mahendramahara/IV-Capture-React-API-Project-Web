import axios from 'axios';
import './displayData.css';
import { useEffect, useState } from 'react';
import { ImageProps } from '../props/imageProps';
import { VideoProps } from '../props/videoProps';
import SearchBar from '../components/searchBar';
import { Pagination } from '../components/pagination';

export const DisplayImages = () => {
    const [inputValue, setInputValue] = useState("");
    const [images, setImages] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [noHits, setNoHits] = useState(false);

    /* enviroment veriable [.env] file */
    const myAPIKey = process.env.REACT_APP_API_KEY;
    const api = process.env.REACT_APP_API_URL;

    const apiURL = `${api}/?key=${myAPIKey}&q=${encodeURIComponent(inputValue)}&page=${currentPage}`;

    useEffect(() => {
        axios.get(apiURL)
            .then(response => {
                if (parseInt(response.data.totalHits) > 0) {
                    setImages(response.data.hits);
                    setNoHits(false); 
                } else {
                    setImages([]); 
                    setNoHits(true);
                }
            })
            .catch(error => {
                // alert('Error fetching images:', error);
                console.error('Error fetching images:', error);
            });
    }, [apiURL, currentPage, inputValue]);

    const titleCase = (title) => {
        let words = title.split(", ").slice(0, 2).map(word => word.charAt(0).toUpperCase() + word.slice(1));
        return words.join(" ");
    };

    const handleSearch = (value) => {
        setInputValue(value);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <SearchBar
                placeholder="Search Image"
                value={inputValue}
                onChange={handleSearch}
            />
            {noHits && <div className="no-hits-warning">OPS! No search results found &#128549; Try Another Please.</div>}
            <div className="gallery">
                {images.map(data => (
                    <ImageProps
                        key={data.id}
                        mainImage={data.previewURL}
                        mainImageDownload = {data.pageURL}
                        likes={data.likes}
                        imageTitle={titleCase(data.tags)}
                        profileImage={data.userImageURL}
                        uploaderName={data.user}
                        uploaderUsername={data.user_id}
                        totalComments={data.comments}
                        totalDownloads={data.downloads}
                        totalViews={data.views}
                        pageURL={data.pageURL}
                    />
                ))}
            </div>
            <Pagination currentPage={currentPage} onPageChange={handlePageChange} />
        </>
    );
};


export const DisplayVideos = () => {
    const [inputValue, setInputValue] = useState("");
    const [videos, setVideos] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [noHits, setNoHits] = useState(false);

    /* enviroment veriable [.env] file */
    const api = process.env.REACT_APP_API_URL;
    const myAPIKey = process.env.REACT_APP_API_KEY;

    const apiURL = `${api}/videos/?key=${myAPIKey}&q=${encodeURIComponent(inputValue)}&page=${currentPage}`;

    useEffect(() => {
        axios.get(apiURL)
            .then(response => {
                if (parseInt(response.data.totalHits) > 0) {
                    setVideos(response.data.hits);
                    setNoHits(false); 
                } else {
                    setVideos([]); 
                    setNoHits(true);
                }
            })
            .catch(error => {
                console.error('Error fetching videos:', error);
            });
    }, [apiURL, currentPage, inputValue]);

    const titleCase = (title) => {
        let words = title.split(", ").slice(0, 2).map(word => word.charAt(0).toUpperCase() + word.slice(1));
        return words.join(" ");
    };

    const handleSearch = (value) => {
        setInputValue(value);
    };

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <>
            <SearchBar
                placeholder="Search Video"
                value={inputValue}
                onChange={handleSearch}
            />
            {noHits && <div className="no-hits-warning">OPS! No search results found &#128549; Try Another Please.</div>}
            <div className="video-gallery">
                {videos.map(data => (
                    <VideoProps
                        key={data.id}
                        videoSource={data.videos.medium.url}
                        mainVideoDownload = {data.pageURL}
                        videoType={data.videos.medium.type}
                        videoTitle={titleCase(data.tags)}
                        videoDuration={data.duration}
                        uploaderProfile={data.userImageURL}
                        uploaderName={data.user}
                        uploaderUsernameorID={data.user_id}
                        totalViews={data.views}
                        totalLikes={data.likes}
                        totalDownloads={data.downloads}
                    />
                ))}
            </div>
            <Pagination currentPage={currentPage} onPageChange={handlePageChange} />
        </>
    );
};
