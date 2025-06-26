import { useState } from "react";

function App() {

  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [experience, setExperience] = useState(0)
  const [spec, setSpec] = useState('')
  const [description, setDescription] = useState('')



  const validateForm = (e) => {
    e.preventDefault()

    console.log(`
        Nome : ${name}
        Username : ${username}
        Anni di Esperienza: ${experience}
        Specializzazione ${spec}
        Descrizione: ${description}
        `);
  }


  return (
    <>
      <div className="container mt-5">
        <h1 className="text-center mb-4">Sign Up</h1>

        <form className="col-md-6 mx-auto" onSubmit={validateForm}>
          {/* name */}
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="inserisci il tuo nome completo"
              value={name}
              onChange={(e) => setName(e.target.value)} />
          </div>

          {/* username */}
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="inserisci il tuo username"
              value={username}
              onChange={(e) => setUsername(e.target.value)} />
          </div>

          {/* password */}
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Crea password"
              value={password}
              onChange={(e) => setPassword(e.target.value)} />
          </div>

          {/* Specializzazione */}
          <div className="mb-3">
            <select
              className="form-select"
              name="specializzazione"
              id="specializzazilne"
              value={spec}
              onChange={(e) => setSpec(e.target.value)}>
              <option value="" disabled>Seleziona Specialistica</option>
              <option value="fullstack">Full Stack</option>
              <option value="frontend">Frontend</option>
              <option value="backend">Backend</option>
            </select>
          </div>

          {/* Esperienza */}
          <div className="mb-3 d-flex gap-2">
            <label htmlFor="esperienza" className="form-label col-7">Anni di Esperienza</label>
            <input type="number" min={0} className="form-control col"
              value={experience}
              onChange={(e) => setExperience(e.target.value)} />
          </div>

          {/* Descrizione */}
          <div className="mb-3">
            <textarea
              className="form-control"
              placeholder="racconta qualcosa su di te"
              rows="3"
              value={description}
              onChange={(e) => setDescription(e.target.value)}>
            </textarea>
          </div>

          <button type="submit" className="btn btn-primary">Invia</button>
        </form>
      </div>
    </>
  )
}

export default App
