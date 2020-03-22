import ImageToggleOnScroll from './ImageToggleOnScroll.jsx';

const ProjectDetail = ({
    id,
    title,
    overview,
    onFavoriteCardioHandler
}) => {
    return (
        <div className="card col-4 cardmin">
            <ImageToggleOnScroll  
                className="card-img-top"
                primaryImg={`/static/img/images/bw/${id}.jpg`}
                secondaryImg={`/static/img/images/${id}.jpg`}
                alt={`${title}`}
            />
            <div className="card-body">
                <h4 className="card-title">
                    <button 
                        data-sessionid={id}
                        className={`${favorite ? "hearbutton" : "heartdarkbutton"}`}
                        onClick={e => {
                            onFavoriteCardioHandler(e, !favorite)
                        }}
                    />
                    <span>
                        {title}
                    </span>
                </h4>
                <span>
                    {overview}
                </span>
            </div>
        </div>
    )
};

export default ProjectDetail;