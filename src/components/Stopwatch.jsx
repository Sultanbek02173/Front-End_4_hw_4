import '../Styles/style.scss';

const Stopwatch = ({milsec, sec, min, start, stop, restart}) => {
    
    return (
        <div className='sec'>

            <div className="canvas">
                <div className="center">
                    <button onClick={() => {
                        start();
                        
                    }} className="pause-play-icon"></button>

                    <button onClick={() => {
                        stop();
                    }} className="pause-stop-icon"></button>

                    <button onClick={() =>{
                        restart()
                    }} className="reset-icon"></button>
                    <div className="clock">
                        <div className="hours">{min}</div>
                        <span className="dots">:</span>
                        <div className="minutes">{sec}</div>
                        <span className="dots">:</span>
                        <div className="seconds">{milsec}</div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Stopwatch;
