import './Content.sass';
import { Video } from '../Content_Video/Video'

export function Content(){
    return(
        <div className="content grid-12">
            <div className="division">
               <Video/>
            </div>
        </div>
    );
}