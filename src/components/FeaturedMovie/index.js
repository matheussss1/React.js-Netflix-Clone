import './style.css'

const BaseImagePath = 'https://image.tmdb.org/t/p/original';

export const FeaturedMovie = ({movie}) => {
    console.log(movie)
    return (
        <>
            <div className="featured-movie" style={{
                backgroundImage: `url('${BaseImagePath}${movie.backdrop_path}')`,
                backgroundSize: 'cover', backgroundPosition: 'center'
            }}>
                <div className="featured-movie__box">
                    <h1 className="featured-movie__title">
                        {movie.name}
                    </h1>
                    <span>
                        {movie.vote_average}
                    </span>
                    <p>
                        {movie.overview}
                    </p>
                </div>
            </div>
        </>
    )
}