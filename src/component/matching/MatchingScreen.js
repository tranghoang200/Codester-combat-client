import matchingBackground from '../../img/matching_background.png';
import './MatchingScreen.css';

function MatchingScreen() {
    return <div className="matchingScreen" style={{backgroundImage: `url(${matchingBackground})`}}>
                <div className="matchingText">
                    <div>M</div><div>a</div><div>t</div><div>c</div><div>h</div>
                    <div>i</div><div>n</div><div>g</div><div>.</div><div>.</div><div>.</div>
                </div>;
            </div>
}

export default MatchingScreen;