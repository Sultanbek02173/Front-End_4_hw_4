import '../Styles/style.scss';

const History = (props) => {
    return (
        <div className='history'>
            <h1>История</h1>
            {props.arr.length > 0 ?
                props.arr.map((el) => {
                    return <>
                        <h2>{el.min}:{el.sec}:{el.milsec}</h2>
                    </>
                })
                : ''}
        </div>
    );
}

export default History;
