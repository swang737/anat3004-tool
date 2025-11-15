import './week8.css'
import { Note } from '../../components/blocks.tsx'

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
                        <img src="week8/muscles-prosection.png" alt="Labelled Prosection of the Muscles of the Eye" id='muscles-prosection-img' />
                    </div>
                    <div className='text-section'>
                        <p>All innervated by occulomotor nerve (except lateral rectus and superior oblique)</p>
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
                                <li>forms tendon that goes through <Note text='Attached to trochlear spine, it is a little tendonous hook that is like a pully for the superior oblique muscle to change direction'>trochlear</Note></li>
                                <li><i>Origin: </i>Body of sphenoid, superiomedial to optic canal</li>
                                <li><i>Insert: </i> Sclera between superior and lateral recti</li>
                            </ul>
                            <li>Inferior</li>
                            <ul>
                                <li>Passes between inferior rectus and orbital floor</li>
                                <li><i>Origin: </i>Orbital surface of maxilla lateral to nasolacrimal groove</li>
                                <li><i>Insert: </i>Posterior to equator, between lateral rectus and inferior rectus</li>
                            </ul>
                        </ul>

                        <h3>Levata palpebrae superior</h3>
                        <ul>
                            <li><i>Origin: </i>Lesser wing of sphenoid</li>
                            <li>Frontal nerve is superior to LPS in orbit</li>
                        </ul>
                    </div>
                </div>

                <h1>Accessory Structures</h1>
                <h2>Lacrimal Glands</h2>
                <div className='image-text'>
                    <div className='image-group'>
                        <img src="week8/lacrimal.png" alt="Diagram of Lacrimal Glands and associated Drainage Structures" id='lacrimal-img' />
                    </div>
                    <div className='text-section'> 
                        <h3>Position</h3>
                        <ul>
                            <li>Mostly in superiolateral orbit, but some in eyelid lateral to <Note text='dense connective tissue plate under each eyelid'>Tarsal Plate</Note> between <Note text='thin transparent mucous membrane that lines inside of eyelids and sclera (continuous)'>Conjunctiva</Note> & <Note text='thin fascia seperating eye and external eyelid'>Palpebral fascia</Note></li>
                        </ul>

                        <h3>Tears and Drainage</h3>
                        <ul>
                            <li>Tears contain: Serous secretion, mucous secretion, sebaceous secretion.</li>
                            <li>Drain via lacrimal punta into lacrimal caniculi into lacrimal sac into nasolacrimal duct in inferior nasal meatus</li>
                        </ul>
                    </div>
                </div>

                <h2>Eyelids</h2>
                <div className='image-text'>
                    <img src="week8/eyelid.png" alt="Cross sectional image of Eyelids" id='eyelid-img' />
                    <div className='text-section'>
                        <h3>Structures</h3>
                        <ul>
                            <li>Skin, subcutaneous tissue, orbicularis oculi muscle, <Note text='a fibrous membrane that serves as the anterior boundary of the orbit, extending from the orbital rim to the tarsal plates in the eyelids'>orbital septum</Note>, tarsal plate, conjunctiva</li>
                            <li>Sebaceous tarsal glands empty into <Note text='Hairless strip of skin along edge of eyelid between eyelashes and inner border that touches the eyeball'>free margin</Note> of eyelid, so it doesn't evaporate too fast</li>
                            <li>Lateral and medial <Note text='ligament on corners of eyes'>palpebral ligaments</Note> attach eyelids to bone</li>
                        </ul>
                    </div>
                </div>

                <h1>Eyeball</h1>
                <h2>Layers</h2>
                <div className='image-text'>
                    <img src="week8/eyeball-layers.png" alt="Layers of the Eyeball" id='eyeball-layers-img' />
                    <div className='text-section'>
                        <h3>Fibrous layer (outer coat)</h3>
                        <ul>
                            <li>Sclera and cornea</li>
                            <li>Cornea focuses light onto the retina and continues as the sclera posteriorly</li>
                        </ul>

                        <h3>Vascular layer (Uvea, middle coat)</h3>
                        <ul>
                            <li><i>Choroid: </i>underlies retina and supplies outer retina</li>
                            <li><i>Cillary body: </i>humor production and accomodation</li>
                            <li><i>Iris: </i>Regulates pupil diameter</li>
                        </ul>

                        <h3>Retina (inner layer)</h3>
                        <ul>
                            <li>Sensory layer and non-sensory layer</li>
                        </ul>
                    </div>
                </div>

                <h2>Retina</h2>
                <div className='image-text'>
                    <img src="week8/retina.png" alt="Diagram of Retina" id='retina-img' />
                    <div className='text-section'>
                        <h3>Sensory retina</h3>
                        <ul>
                            <li>10 layers</li>
                            <li>Recognised as thickened region of posterior and lateral surface of inner eyeball</li>
                        </ul>

                        <h3>Non-sensory retina</h3>
                        <ul>
                            <li>Junction with sensory is called Oro Serrata</li>
                            <li>Contains pigmented epithelium outside the rods and cones.</li>
                        </ul>

                        <h3>Features</h3>
                        <ul>
                            <li><i>Optical disc: </i>Special region of sensory retina at optic nerve entry without photoreceptors</li>
                            <li><i>Macula/Fovea: </i>Region adjacent to optic nerve entry where all elements except photoreceptors of retina is reduced (greatest visual acuity)</li>
                        </ul>
                    </div>
                </div>

                <h2>Components</h2>
                <div className='image-text'>
                    <div className='image-group'>
                        <img src="week8/iris.png" alt="Cross sectional diagram of the Iris" id='iris-img' />
                    </div>
                    <div className='text-section'>
                        <h3>Iris</h3>
                        <ul>
                            <li>Contraction via circular muscle (pupillary sphincter)</li>
                            <ul>
                                <li>Innervated by parasympathetic fibres from occulomotor nerve</li>
                            </ul>
                            <li>Dilation via radial muscle (pupillary dilator)</li>
                            <ul>
                                <li>Extends from pupil</li>
                                <li>Controlled by sympathetic fibres from sympathetic trunk</li>
                            </ul>
                        </ul>

                        <h3>Lens</h3>
                        <ul>
                            <li></li>
                        </ul>
                    </div>
                </div>
            </div>
            <button className='bottom-back-button' onClick={goBack}>← Back</button>
        </div>
    );
};

export default Week8Content