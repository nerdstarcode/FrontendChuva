import './Content.sass';
import { Video } from '../Content_Video/index'

export function Content(){
    return(
        <div className="content grid-12">
            <div className="division">
               <Video/>
            </div>
        </div>
    );
}