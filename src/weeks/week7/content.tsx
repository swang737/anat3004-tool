import './week7.css'
import { Poster, Note } from '../../components/blocks.tsx'

function Week7Content({ goBack }: { goBack: () => void }) {
    return (
        <div>
            <div className='content-text'>
                <h1>External Ear</h1>
                <div className='image-text'>
                    <img id='external-ear-img' src='week7/external-ear.png' alt='External Ear Diagram'/>
                    <div className='text-section'>
                        <h3>Lateral 1/3 (Cartilagenous)</h3>
                        <ul>
                            <li>Specialised sweat glands (ceruminous glands) mix with sebum to create cerumen (ear wax)</li>
                        </ul>
                        
                        <h3>Medial 2/3 (Bony)</h3>
                    </div>
                </div>

                <h1>Middle Ear</h1>
                <h2>Walls and Relationships</h2>
                <div className='image-text'>
                    <div className='image-group'>
                        <img id='tensor-tympani-img' src='week7/tensor-tympani.png' alt='Tensor Tympani in Middle Ear'/>
                        <img id='mid-ear-walls-img' src='week7/mid-ear-walls.png' alt='Walls of the Middle Ear'/>
                        <img id='medial-wall-img' src='week7/medial-wall.png' alt='Lateral view of Medial wall of Middle Ear'/>
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

                        <h3>Posterior wall</h3>
                        <ul>
                            <li>Back of <Note text='Upper part of middle ear cavity housing upper ossicles'>epitympanic recess</Note> leading into <Note text='Passage between middle ear and mastoid antrum + air cells'>aditus</Note></li>
                            <li>Chorda tympani is initially behind posterior wall</li>
                            <li>Facial nerve turns inferiorly around level of aditus</li>
                            <li><Note text='Ligament from stapedius muscle in pyramidal emminence to stapedius'>Tendon of stapedius</Note> emerges at the pyramid in posterior wall</li>
                        </ul>

                        <h3>Floor (Jugular wall)</h3>
                        <ul>
                            <li>Thin bone seperating from internal jugular vein</li>
                        </ul>

                        <h3>Medial wall</h3>
                        <ul>
                            <li>Adjacent to inner ear</li>
                            <li>Bony except <i>oval window</i> which is enclosed by base of stapes and <i>round window</i> which is covered by membrane</li>
                            <li>Promontory overlying cochlea</li>
                            <li>Prominence of facial canal</li>
                            <li>Tympanic plexus formed on the tympanic promontory by branches from:</li>
                                <ul>
                                    <li>Tympanic branch of the glossopharyngeal nerve</li>
                                    <li>Caroticotympanic nerves originating from the internal carotid artery plexus</li>
                                </ul>
                        </ul>
                    </div>
                </div>
                <h2>Features</h2>
                <div className='image-text'>
                    <div className='image-group'>
                        <img id='tm-diagram-img' src='week7/tm-diagram.png' alt='Diagram of Tympanic Membrane'/>
                        <img id='tm-prosection-img' src='week7/tm-prosection.png' alt='Labelled prosection of Tympanic Membrane'/>
                        <img id='chorda-tympani-img' src='week7/chorda-tympani.png' alt='Diagram of path of Chorda Tympani in the Middle Ear'/>
                    </div>
                    <div className='text-section'>
                        <h3>Tympanic Membrane</h3>
                        <ul>
                            <li>Eliptical shape, Lateral surface is concave</li>
                            <li>Skin externally, Mucosa internally</li>
                            <li>Fibrocartilagenous, with <Note text='Bony rim in temporal bone that supports tympanic membrane'>Tympanic ring</Note> fits into <Note text='Narrow inner groove along tympanic ring → provides secure anchor for tympanic membrane'>tympanic groove</Note></li>
                            <li>Manubrium (handle) of Malles attaches to inner surface</li>
                            <li>Region above manubrium is Pars Flaccida, region below is Pars Tensa</li>
                            <li>Inferior part of manubrium is the Umbo (point of maximum convexity)</li>
                        </ul>

                        <h3>Tympanic Cavity</h3>
                        <ul>
                            <li>Air cavity filled with connections:</li>
                            <ul>
                                <li>to pharynx via <Note text='To equalize pressure between middle and external ear'>auditory tube</Note></li>
                                <li>to mastoid air cells via aditus</li>
                                <li>Variable epithelium - mostly Respiratory, some squamous/cuboid</li>
                            </ul>
                        </ul>

                        <h3>Epitympanic cavity</h3>
                        <ul>
                            <li>Hollow in tegmen tympani where head of malleus and part of body of incus are contained</li>
                        </ul>

                        <h3>Chorda tympani</h3>
                        <ul>
                            <li>Leaves facial nerve 5mm above stylomastoid foramen</li>
                            <li>Arch across posterior wall, upper part of tympanic membrane and out through petrotympanic fissure</li>
                            <li>Pass medial surface of spine of sphenoid, then beteen deep surface of lateral pterygoid and alveolar nerve to join lingual nerve</li>
                        </ul>
                        
                        <Poster title='Clinical Note'>
                            <ul>
                                <li>Trauma and infection are most common causes of ruptures</li>
                                <li>Entering middle ear through tympanic membrane is done on the lower third, due to chorda tympani running along the upper third</li>
                                <li>Ottis media is infection in middle ear that may damage/rupture tympanic membrane</li>
                            </ul>
                        </Poster>
                    </div>
                </div>
                <h2>Ossicles</h2>
                <div className='image-text'>
                    <div className='image-group'>
                        <img id='ossicles-img' src='week7/ossicles.png' alt='Labelled diagram of the 3 ossicles of the ear'/>
                    </div>
                    <div className='text-section'>
                        <h3>Properties</h3>
                        <ul>
                            <li>Dense compact bone covered in mucosa</li>
                            <ul>
                                <li>Contains lacunae with osteocytes and vascular channels</li>
                                <li><Note text='Haversion canals surround blood vessels and nerve fibres'>Haversion bone</Note> sometimes present</li>
                                <li>May contain small islands of cartilage remenants from endochondral ossification, but no spongy bone</li>
                            </ul>
                            <li>Articulation between incus and malleus is <i>synovial</i></li>
                            <li>Ossicles develop via endochondral ossification of the ends of the cartilage supporting embryonic structures called pharyngeal arches.</li>
                            <ul>
                                <li>Prior to this, they have transitory marrow cavity (spongy bone)</li>
                            </ul>
                        </ul>

                        <h3>Blood supply and Remodelling</h3>
                        <ul>
                            <li>Blood and nerve supply (tympanic plexus) is via mucosa</li>
                            <li>Ossicles are full sized and birth with low bone turnover</li>
                            <ul>
                                <li>Ossicles are low stress but do not show the <Note text='Bone being broken down and reabsorbed into bloodstream'>resorbtion</Note> of other low stress bones</li>
                            </ul>
                        </ul>
                    </div>
                </div>

                <h2>Muscles</h2>
                <div className='image-text'>
                    <div className='image-group'>
                        <img id='me-muscles-img' src='week7/me-muscles.png' alt='Muscles of the Middle Ear'/>
                    </div>
                    <div className='text-section'>
                        Muscles work together in reflex response to high intensity noise. By contracting, they reduce the vibrations sent to the innear ear. Reaction time is not fast enough for sudden noise, so only provides partial protection.
                        <h3>Tensor Tympani</h3>
                        <ul>
                            <li>In bony channel above auditory tube</li>
                            <li>90 degree bend towards manubrium of malleus</li>
                            <li>Also reduces noise from chewing</li>
                            <li>Innervated by media pterygoid branch of <Note text='Mandibular division of Trigeminal nerve'>CNV<sub>3</sub></Note></li>
                        </ul>

                        <h3>Stapedius</h3>
                        <ul>
                            <li>Belly in canal in posterior wall</li>
                            <li>Tendon emerges from pyramid, attaches to neck of stapes</li>
                            <li>Innervated by Stapedius Nerve from <Note text='Facial nerve'>CNVII</Note></li>
                        </ul>
                    </div>
                </div>
                <h2>Blood/Nerve supply</h2>
                <div className='image-text'>
                    <img id='me-blood-nerve-img' src='week7/me-blood-nerve.png' alt='Blood and Nerve supply of the Tympanic Cavity'/>
                    <div className='text-section'>
                        <h3>Arterial supply</h3>
                        <ul>
                            <li>Tympanic branch of maxillary artery and <Note text='Both occipital and posterior auricular arteries give off mastoid branches (but they are different, just same name)'>Mastoid branch</Note> of occipital and posterior auricular artery</li>
                            <li>Smaller branches from <Note text='branch from Maxillary'>middle meningeal artery</Note>, ascending pharyngeal artery, <Note text='Branch from maxillary'>artery of pterygoid canal</Note> and tympanic branches from internal carotid</li>
                        </ul>
                        
                        <h3>Venous drainage</h3>
                        <ul>
                            <li>Returns to pterygoid plexus and <a href='https://www.neurologyneeds.com/neuroanatomy/brain/dural-venous-sinuses/' target='_blank'>superior petrosal sinus</a></li>
                        </ul>

                        <h3>Nerve supply</h3>
                        <ul>
                            <li><i>Tensor typmani nerve:</i> From medial pterygoid branch of mandibular division of trigeminal nerve</li>
                            <li><i>Chorda typmani: </i>Just passing through</li>
                            <li><i>Stapenius nerve: </i>From facial nerve</li>
                            <li><i>Glossopharyngeal nerve: </i>tympanic nerve to form the tympanic plexus</li>
                        </ul>
                    </div>
                </div>
                
                <h2>Auditory Tube</h2>
                <div className='image-text'>
                    <img id='at-prosection-img' src='week7/at-prosection.png' alt='Labelled Prosection of Auditory Tube'/>
                    <div className='text-section'>
                        <ul>
                            <li>Lined with respiratory mucosa</li>
                            <li>Bony posterolaterally, cartilaginous anteromedially</li>
                            <li>Bony opening just medial to spine of sphenoid</li>
                            <li>Cartilaginous part runs in a groove between petrous temporal bone and greater wing of sphenoid</li>
                            <li>Opens into lateral wall of nasopharynx</li>
                            <li>Normally closed, but muscles open it during swallowing, coughing, positive pressure
                                <ul>
                                    <li>Tensor tympani</li>
                                    <li>Levator palati</li>
                                    <li>Tensor palati</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>

                <h1>Inner Ear</h1>
                <h2>Bony Labyrinth</h2>
                <div className='image-text'>
                    <div className='image-group'>

                    </div>
                    <div className='text-section'>
                        <h3>Perilymph</h3>
                        <ul>
                            <li>Similar in composition to cerebrospinal fluid</li>
                            <li>Unknown site of product and reabsorbtion</li>
                        </ul>
                    </div>
                </div>
            </div>
            <button className='bottom-back-button' onClick={goBack}>← Back</button>
        </div>
    );
};

export default Week7Content;