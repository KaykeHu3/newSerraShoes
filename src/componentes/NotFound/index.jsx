import React from 'react';
import "./styles.css";


function NotFound () {
      return(
        <div className="container">
          <div className="error-code">404</div>
          <div className="error-message">
            <p>Página não encontrada!</p>
            <a href="/" className="link-back">
              Gostaria de voltar à página inicial ?
            </a>
          </div>
        </div>
    )
}

export default NotFound