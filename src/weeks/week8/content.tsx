import './week8.css'

function Week8Content({ goBack }: { goBack: () => void }) {
    return (
        <div>
            <div className='content-text'>
                <h1>The Orbit</h1>
                <h2>Bony Orbit</h2>
                <div className='image-text'>
                    <div className='image-group'>
                        <img src="week8/bony-orbit.png" alt="Diagram of Bones of the Orbit" id='bony-orbit-img' />
                        <img src="week8/orbit-openings.png" alt="Diagram of the Openings of the Orbit" id='bony-openings-img' />
                   </div>
                    <div className='text-section'>
                        <h3>Bones</h3>
                        <ul>
                            <li><i>Roof: </i>Frontal, lesser wing of sphenoid</li>
                            <li><i>Floor: </i>Maxilla, Zygomatic, Palatine</li>
                            <li><i>Medial wall: </i>Maxilla, lacrimal, body of sphenoid</li>
                           <li><i>Lateral wall: </i>Zygomatic, greater wing of sphenoid</li>
                        </ul>

                        <h3>Openings</h3>
                        <ul>
                            <li><i>Superior orbital fissure: </i>III, IV, V<sub>3</sub> VI</li>
                            <li><i>Inferior orbital fissure: </i>V<sub>2</sub></li>
                            <li><i>Optic canal: </i>II, opthalmic artery</li>
                            <li><i>Anterior/posterior ethmoid foramina: </i>Respective vein, artery, nerve</li>
                            <li><i>Inferior orbital fissure: </i>V<sub>2</sub></li>
                            <li><i>Nasolacrimal canal: </i>nasolacrimal duct</li>
                            <li><i>Supraorbital foramen: </i>supraorbital nerve</li>
                            <li><i>Infraorbital groove/canal/foramen: </i>infraorbital nerve</li>
                       </ul>
                    </div>
                </div>

                <h2>Muscles of the Orbit</h2>
                <div className='image-text'>
                    <div className='image-group'>
                        <img src="week8/muscles-saggital.png" alt="Saggital view of the Muscles of the Eye" id='saggital-muscles-img'/>
                    </div>
                    <div className='text-section'>
                        <p>All innervated by occulomotor nerve</p>
                        <h3>4 Recti Muscles</h3>
                        <ul>
                            <li>Superior</li>
                            <li>Inferior</li>
                            <li>Medial</li>
                            <li>Lateral</li>
                            <ul>
                                <li>Innervated by abducens nerve</li>
                                <li>Has additional head from lateral margin of superior orbital fissure</li>
                            </ul>
                            <li>Anterior to equator of eyeball</li>
                        </ul>

                        <h3>2 Oblique Muscles</h3>
                        <ul>
                            <li>Superior</li>
                            <ul>
                                <li>Innervated by superior trochlear nerve</li>
                            </ul>
                            <li>Inferior</li>
                        </ul>

                        <h3>Levata palpebrae superior</h3>
                        <ul>
                            <li><i>Origin: </i>Lesser wing of sphenoid</li>
                            <li>Frontal nerve is superior to LPS in orbit</li>
                        </ul>
                    </div>
                </div>
            </div>
            <button className='bottom-back-button' onClick={goBack}>← Back</button>
        </div>
    );
};

export default Week8Content