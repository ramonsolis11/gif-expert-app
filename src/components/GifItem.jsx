export const GifItem = ({ title, url, id }) => {
    return (
        <div className="card">
            <img src={url} alt={title} className="gif-img" loading="lazy" />
            <p>{title}</p>
        </div>
    );
};
