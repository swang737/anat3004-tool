import './week8.css'

function Week8Content({ goBack }: { goBack: () => void }) {
    return (
        <div>
            <button className='bottom-back-button' onClick={goBack}>← Back</button>
        </div>
    );
};

export default Week8Content