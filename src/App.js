import Stopwatch from './components/Stopwatch';
import History from './components/History';
import './Styles/style.scss';
import { useState } from 'react';

function App() {

  const [milsec, setMilsec] = useState(0);
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [history, setHistory] = useState([]);
  const [timer, setTimer] = useState(null);
  const [flag, setFlag] = useState(true);

  const timerSet = () => {
    setMilsec((milsec) => {
      if (milsec < 99) {
        return milsec + 1;
      } else {
        setSec((sec) => {
          if (sec < 59) {
            return sec + 1
          } else {
            setMin((min) => {
              if (min < 59) {
                return min + 1;
              } else {
                return 0;
              }
            })
            return 0
          }
        });
        return 0;
      }
    });
  }

  const start = () => {
    if (flag === true) {
      let timerss = setInterval(timerSet, 10);
      setTimer(timerss);
      setFlag(false);
    }

  }

  const stop = () => {
    clearInterval(timer);
    setFlag(true);
  }

  const restart = () => {
    setFlag(true);
    clearInterval(timer);
    const newarr = history
    newarr.push({
      milsec,
      min,
      sec
    })
    setHistory(newarr)

    setMilsec(0);
    setMin(0);
    setSec(0);
  }

  return (
    <div className='body'>

      <History arr={history} />

      <Stopwatch milsec={milsec} sec={sec} min={min} start={start} stop={stop} restart={restart} />

    </div>
  );
}

export default App;
