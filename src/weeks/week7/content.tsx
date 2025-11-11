import './week7.css'

function Week7Content({ goBack }: { goBack: () => void }) {
    return (
        <div>
            <div className='content-text'>
                <h1>External Ear</h1>
                <div className='image-text'>
                    <img id='external-ear-img' src='week7/external-ear.png' alt='External Ear Diagram'/>
                    <div className='text-section'>
                        <h2>Lateral 1/3 (Cartilagenous)</h2>
                        <ul>
                            <li>Specialised sweat glands (ceruminous glands) mix with sebum to create cerumen (ear wax)</li>
                        </ul>
                        
                        <h2>Medial 2/3 (Bony)</h2>
                    </div>
                </div>

                <h1>Middle Ear</h1>
                <h2>Walls and Relationships</h2>
                <div className='image-text'>
                    <div className='image-group'>
                        <img id='tensor-tympani-img' src='week7/tensor-tympani.png' alt='Tensor Tympani in Middle Ear'/>
                    </div>
                    <div className='text-section'>
                        <h3>Lateral wall</h3>
                        <ul>
                            <li>Tympanic membrane</li>
                        </ul>

                        <h3>Anterior (Carotid) wall</h3>
                        <ul>
                            <li>Pharyngotympanic/Auditory/Eustachian tube</li>
                            <li>Tensor tympani
                                <ul>
                                    <li>Runs in canal above auditory tube and bends to run along part of medial wall</li>
                                    <li>Anterolateral to <a href='https://www.imaios.com/en/e-anatomy/anatomical-structures/arcuate-eminence-1536895704#' target="_blank">arcuate eminence</a></li>
                                </ul>
                            </li>
                        </ul>

                        <h3>Roof</h3>
                        <ul>
                            <li>Tegmen tympani - thin bone seperating middle ear from middle cranial fossa</li>
                        </ul>
                    </div>
                </div>

            </div>
            <button className='bottom-back-button' onClick={goBack}>← Back</button>
        </div>
    );
};

export default Week7Content;