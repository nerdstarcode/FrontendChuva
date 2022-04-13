import './Content.sass';
import '../../DefaultSass/grid.sass';

export function Content(){
    return(
        <div className="content grid-12">
            <iframe 
                className="grid-8" 
                height="400" 
                src="https://www.youtube.com/embed/BBGEG21CGo0" 
                title="YouTube video player" 
                frameborder="0" 
                allow=" accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen
                >
            </iframe>
        </div>
    );
}