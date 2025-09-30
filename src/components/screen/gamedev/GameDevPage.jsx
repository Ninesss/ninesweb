import './GameDevPage.css'

export function GameDevPage({ content }) {
  return (
    <div className='gamedev-page-container'>
      <div className='gamedev-page-content'>
        {content ? (
          <div className="game-content-text">
            {content.split('\n').map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        ) : (
          <div className="game-content-placeholder">
          </div>
        )}
      </div>
    </div>
  );
}