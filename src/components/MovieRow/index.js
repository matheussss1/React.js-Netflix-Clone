import './style.css'

const BaseImagePath = 'https://image.tmdb.org/t/p/w400';

export const MovieRow = ({name, items}) => {
    return <section className="movie-row">
                <h2>{name}</h2>
                <ul>
                    {items.map((item, key) => (
                        <li key={key}>
                            <img src={`${BaseImagePath}${item.poster_path}`}/>
                        </li>
                    ))}
                </ul>
            </section>
} 