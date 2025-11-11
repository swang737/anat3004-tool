import './week6.css'
import { Variation } from '../../components/blocks.tsx'

function Week6Content({ goBack }: { goBack: () => void }) {
  return (
    <div>
        <div className='content-text'>
            <h1>Temporomandibular Joint</h1>
            <h2>Ligaments of TMJ</h2>
            <div className='image-text'>
                <img id='ligaments-img' src='week6/ligaments.png' alt='Supporting Ligaments of the TMJ'/>
                <div className='text-section'>
                    <h3>Sphenomandibular ligament</h3>
                    <ul>
                        <li><i>Origin: </i>Spine of sphenoid</li>
                        <li><i>Insert: </i>Lingula of mandible</li>
                    </ul>

                    <h3>Stylomandibular ligament</h3>
                    <ul>
                        <li><i>Origin: </i>Styloid process</li>
                        <li><i>Insert: </i>Inferior border of angle of mandible</li>
                    </ul>
                </div>
            </div>

            <h2>Movements</h2>

            <div className='image-text'>
                <img id='tmj-movements-img' src="week6/tmj-movements.png" alt='TMJ Movements'/>
                <div className='text-section'>
                    <h3>Depression</h3>
                    <p>Anterior rotation (0~20), Anterior translation (20~45)</p>

                    <h3>Elevation</h3>
                    <p>Reverse of depression</p>

                    <h3>Protrusion</h3>
                    <p>Anterior translation</p>

                    <h3>Retrusion</h3>
                    <p>Reverse of protrusion</p>
                </div>
            </div>

            <h1>Muscles of TMJ</h1>

            <h2>Masseter</h2>
            <div className='image-text'>
                <div className='image-group'>
                    <img id='masseter-img' src='week6/masseter.png' alt='Masseter'/>
                    <img id='coronoid-masseter-img' src='week6/coronoid-masseter.png' alt='Coronoid part of Masseter'/>
                </div>
                <div className='text-section'>
                    <h3>Components</h3>
                    <ul>
                        <li>Superficial part (Anterior)</li>
                        <li>Deep part (Posterior)</li>
                        <li>Coronoid part (Smallest and deepest part)</li>
                    </ul>

                    <h3>Actions</h3>
                    <h4>Superficial and Deep parts</h4>
                    <ul>
                        <li>Elevation</li>
                        <li>Lateral extrusion</li>
                        <li><i>Superficial part:</i> Protrusion</li>
                        <li><i>Deep part:</i> Retrusion</li>
                    </ul>
                    <h4>Coronoid part</h4>
                    <ul>
                        <li>Assists with retraction</li>
                        <li>Stabilisation of mandible</li>
                    </ul>

                    <h3>Attachments</h3>
                    <h4>Origin (Stabilized attachment)</h4>
                    <ul>
                        <li><i>Superficial part: </i>Inferior border of zygomatic process of temporal bone</li>
                        <li><i>Deep/Coronoid part: </i>Inferior border of temporal process of zygomatic bone</li>
                    </ul>

                    <h4>Insert (Moving attachment)</h4>
                    <ul>
                        <li><i>Superficial/Deep part: </i>Angle and lateral ramus of mandible</li>
                        <li><i>Coronoid part: </i>Lateral surface of coronoid process of mandible</li>
                    </ul>
                </div>
            </div>
            
            <h2>Temporalis</h2>
            <div className='image-text'>
                <div className='image-group'>
                    <img id='temporalis-prosection-img' src='week6/temporalis-prosection.png' alt='Temporalis Prosection'/>
                    <img id='temporal-line-img' src='week6/temporal-line.png' alt='Temporal Line'/>
                </div>
                <div className='text-section'>
                    <h3>Components</h3>
                    <ul>
                        <li>Verticle fibres</li>
                        <li>Horizontal fibres</li>
                    </ul>
                    
                    <h3>Actions</h3>
                    <h4>Verticle fibres</h4>
                    <ul>
                        <li>Elevation</li>
                        <li>Lateral extrusion</li>
                    </ul>

                    <h4>Horizontal fibres</h4>
                    <ul>
                        <li>Retrusion</li>
                        <li>Lateral extrusion</li>
                    </ul>

                    <h3>Attatchments</h3>
                    <h4>Origin</h4>
                    <ul>
                        <li>Inferior temporal line</li>
                        <li>Temporal fossa</li>
                        <li>Temporalis fascia</li>
                    </ul>

                    <h4>Insert</h4>
                    <ul>
                        <li>Coronoid process of mandible</li>
                        <li><i>Verticle fibres: </i>Anterior border of ramus of mandible</li>
                    </ul>
                </div>
            </div>

            <h2>Lateral Pterygoid</h2>
            <div className='image-text'>
                <div className='image-group'>
                    <img id='lp-heads-img' src='week6/lateral-pterygoid-heads.jpeg' alt='Lateral Pterygoid Heads'/>
                    <img id='lp-attachments-img' src='week6/lp-attachments.png' alt='Lateral Pterygoid Attachment Sites'/>
                </div>
                <div className='text-section'>
                    <h3>Components</h3>
                    <ul>
                        <li>Upper head</li>
                        <li>Lower head</li>
                    </ul>

                    <h3>Actions</h3>
                    <ul>
                        <li>Depression</li>
                        <li>Lateral extrusion (Contralateral)</li>
                        <li><i>Upper head: </i>Protraction of articular disc</li>
                        <li><i>Lower head: </i>Protraction of neck of condyle</li>
                    </ul>

                    <h3>Attachments</h3>
                    <h4>Origin</h4>
                    <ul>
                        <li><i>Upper head: </i>Infratemporal fossa of sphenoid bone</li>
                        <li><i>Lower head: </i>Lateral surface of lateral pterygoid plate</li>
                    </ul>

                    <h4>Insert</h4>
                    <ul>
                        <li><i>Upper head: </i>Articular disc of TMJ</li>
                        <li><i>Lower head: </i>Neck of condyle of mandible</li>
                    </ul>
                </div>
            </div>

            <h2>Medial Pterygoid</h2>
            <div className='image-text'>
                <div className='image-group'>
                    <img id='mp-heads-img' src='week6/mp-heads.png' alt='Medial Pterygoid Heads'/>
                    <img id='mp-attachments-img' src='week6/mp-attachments.png' alt='Medial Pterygoid Attachments'/>
                </div>
                <div className='text-section'>
                    <h3>Components</h3>
                    <ul>
                        <li>Superficial head</li>
                        <li>Deep head</li>
                    </ul>
                    
                    <h3>Actions</h3>
                    <ul>
                        <li>Elevation</li>
                        <li>Lateral extrusion (Contralateral)</li>
                    </ul>

                    <h3>Attachments</h3>
                    <h4>Origin</h4>
                    <ul>
                        <li><i>Superficial head: </i>Pyramidal process of palatine bone</li>
                        <li><i>Deep head: </i>Medial surface of lateral pterygoid plate</li>
                    </ul>

                    <h4>Insert</h4>
                    <ul>
                        <li>Medial side of angle of mandible</li>
                    </ul>
                </div>
            </div>
            <h2>Anterior belly of Digastric</h2>
            <div className='image-text'> 
                <div className='image-group'>
                    <img id='ant-digastric-img' src='week6/ant-digastric.png' alt='Anterior Belly of Digastric Prosection'/>
                </div>
                <div className='text-section'>
                    <h3>Actions</h3>
                    <ul>
                        <li>Depression</li>
                        <li><i>Swallowing: </i>Elevation and anterior movement of Hyoid/Larynx</li>
                    </ul>
                    
                    <h3>Attachments</h3>
                    <h4>Origin</h4>
                    <ul>
                        <li>Digastric fossa of mandible</li>
                    </ul>

                    <h4>Insert</h4>
                    <ul>
                        <li>Intermediate tendon of digastric</li>
                    </ul>
                </div>
            </div>

            <h2>Buccinator</h2>
            <div className='image-text'>
                <div className='image-group'>
                    <img id='buccinator-img' src='week6/buccinator.png' alt='Buccinator Image'/>
                </div>
                <div className='text-section'>
                    <h3>Actions</h3>
                    <ul>
                        <li>Maintaining bolus between teeth</li>
                        <li>Blowing and sucking</li>
                    </ul>
                    
                    <h3>Origin</h3>
                    <ul>
                        <li>Pterygomandibular raphe - Fibrous connective tissue band between Buccinator and Superior Pharyngeal Constrictor</li>
                        <li>Alveolar process of maxilla/mandible - tooth-bearing ridge</li>
                    </ul>

                    <h3>Insert</h3>
                    <ul>
                        <li>Modiolus - Confluence of risorius, buccinator and zygomaticus major</li>
                    </ul>
                </div>
            </div>

            <h1>Blood Supply to the TMJ</h1>
            <h2>Arterial blood supply</h2>
            <div className='image-text'>
                <div className='image-group'>
                    <img id='mm-arterial-img' src='week6/mm-arterial.png' alt='Arterial Supply of Muscles of Mastication'/>
                </div>
                <div className='text-section'>
                    <h3>To the TMJ</h3>
                    <p><b>SAD:</b> Superficial temporal, Ascending pharyngeal, Deep auricular</p>
            
                    <h3>To muscles</h3>
                    <ul>
                        <li><i>Temporalis: </i>Anterior/posterior deep temporal arteries</li>
                        <ul>
                            <li>Superficial temporal artery (<i>Not branch of maxillary</i>)</li>
                            <li>Middle temporal artery (<i>Not branch of maxillary</i>)</li>
                        </ul>
                        <li><i>Medial/Lateral pterygoid: </i>Pterygoid arteries</li>
                        <li><i>Buccinator: </i>Buccal artery</li>
                        <li><i>Masseter: </i>Masseteric atery</li>
                    </ul>
                    <Variation>
                        Maxillary artery can either cross lateral pterygoid muscle superficially or deep
                    </Variation>
                </div> 
            </div>

            <h2>Venous drainage</h2>
            <div className='image-text'>
                <div className='image-group'>
                    <img id='venous-img' src='week6/venous.png' alt='Venous Drainage'/>
                </div>
                <div className='text-section'>
                    <h3>Pterygoid venous plexus</h3>
                    <ul>
                        <li>Drains TMJ and muscles of mastication</li>
                        <li><i>Medial to: </i>Temporalis, Coronoid process, Masseter, Lower head of lateral pterygoid</li>
                        <li><i>Lateral to: </i>Buccinator, Medial pterygoid muscle, Lateral pterygoid</li>
                    </ul>
                    <Variation>
                        Pterygoid venous plexus can be either medial or lateral to the maxillary artery.
                    </Variation>
                </div>
            </div>
            <h1>Innervation of TMJ</h1>
            <h2>Coming Soon!</h2>
        </div>
        <button className='bottom-back-button' onClick={goBack}>← Back</button>
    </div>
  );
}

export default Week6Content;