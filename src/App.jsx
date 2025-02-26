
  import { useState } from "react";
  import languages from "../src/assets/data/languages"
  import 'bootstrap/dist/css/bootstrap.min.css';

  function App() {

    const [selectBottom, setSelectBottom] = useState (null)

    const renderSelectBottom = () => {
      if(! selectBottom) return <h3>nessun linguaggio selezionato</h3>

      const {title, description} = selectBottom
      return(
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
          <p className="card-text">{description}</p>
        </div>
      )
    } 

    const renderBottom = () => 
      languages.map((lenguage) => {

        const {id, title} = lenguage
        //const active = selectButtom === lenguage
        return(                          
          <button 
          key={id}
          className='btn btn-primary'
          onClick={() => setSelectBottom(lenguage)}
          >{title}
          </button>
        )
      }) 
    



    return (
      <>
        <header>
              <div className="container">
                  <div className="row">
                      <div className="col">
                          <h1>Learn Web Development</h1>
                      </div>
                  </div>
              </div>
          </header> 
          <main>
          <div className="container">
                  <div className="row">
                      <div className="col d-flex gap-2">
                        {renderBottom()}                          
                      </div>
                  </div>
              </div>
              <div className='container'>
                <div className="card">
                  {renderSelectBottom ()}
                </div>
              </div>
              
              
          </main>
      </>
    )
  }

  export default App
