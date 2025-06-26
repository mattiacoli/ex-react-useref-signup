

function App() {


  return (
    <>
      <div className="container mt-5">
        <h1 className="text-center mb-4">Sign Up</h1>

        <form className="col-md-6 mx-auto">
          {/* nome */}
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="inserisci il tuo nome completo" />
          </div>

          {/* username */}
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="inserisci il tuo username" />
          </div>

          {/* password */}
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Crea password" />
          </div>

          {/* Specializzazione */}
          <div className="mb-3">
            <select className="form-select" name="specializzazione" id="specializzazilne">
              <option value="">Full Stack</option>
              <option value="">Frontend</option>
              <option value="">Backend</option>
            </select>
          </div>

          {/* Esperienza */}
          <div className="mb-3 d-flex gap-2">
            <label htmlFor="esperienza" className="form-label col-7">Anni di Esperienza</label>
            <input type="number" min={0} className="form-control col" />
          </div>

          {/* Descrizione */}
          <div className="mb-3">
            <textarea
              className="form-control"
              placeholder="racconta qualcosa su di te"
              rows="3">
            </textarea>
          </div>

          <button type="submit" className="btn btn-primary">Invia</button>
        </form>
      </div>
    </>
  )
}

export default App
