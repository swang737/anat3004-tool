import './blocks.css'

function Variation({ children }: { children: React.ReactNode }) {
  return (
    <div className="variation">
      <div className="variation-header">Anatomical Variations</div>
      <div className='variation-content'>{children}</div>
    </div>
  );
}

export { Variation };