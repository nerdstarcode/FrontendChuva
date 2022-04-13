import './Video.sass';
import layout from './img/layout.png';

export function Video(){
    return(
        <div className="video">
            <iframe 
                className="grid-8 grid-8-md" 
                src="https://www.youtube.com/embed/BBGEG21CGo0" 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
                >
            </iframe>
            <img className="grid-8 grid-8-md" src="layout" alt="" srcSet={`${layout}`} />
        </div>
    );
}