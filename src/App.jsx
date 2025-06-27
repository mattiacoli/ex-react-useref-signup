import { useMemo, useState } from "react";

const letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = `!@#$%^&*()-_=+[]{}|;:'\\",.<>?/~`;


function App() {

  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [experience, setExperience] = useState(0)
  const [spec, setSpec] = useState('')
  const [description, setDescription] = useState('')

  const isUsernameValid = useMemo(() => {
    const charsValid = username.split('').every(char =>
      letters.includes(char.toLowerCase()) || numbers.includes(char)
    )
    return charsValid && username.trim().length >= 6

  }, [username])

  const isPwdValid = useMemo(() => {
    return (
      password.trim().length >= 8 &&
      password.split('').some(char => letters.includes(char)) &&
      password.split('').some(char => numbers.includes(char)) &&
      password.split('').some(char => symbols.includes(char))
    )
  }, [password])

  const isDescriptionValid = useMemo(() => {
    return description.trim().length >= 100 && description.trim().length <= 1000
  }, [description])


  const validateForm = (e) => {

    e.preventDefault()

    if (!name.length > 0 || !isUsernameValid || !isPwdValid || !isDescriptionValid || !experience > 0 || !spec) {
      alert('Errore! Compilare tutti i campi correttamente')
    }

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

            {username.trim() &&
              <strong style={{ color: isUsernameValid ? 'green' : 'red' }}>
                {isUsernameValid ? 'Username valido' : 'Deve avere almeno 6 caratteri alfanumerici'}
              </strong>
            }

          </div>

          {/* password */}
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              placeholder="Crea password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)} />

            {password.trim() &&
              <strong style={{ color: isPwdValid ? 'green' : 'red' }}>
                {isPwdValid ? 'Password valida' : 'La password deve contenere almeno 8 caratteri, 1 lettera, 1 numero e 1 simbolo'}
              </strong>
            }
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
            {!spec &&
              <p className="text-danger mt-1">Selezionare un'opzione</p>
            }
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

            {description.trim() &&
              <strong style={{ color: isDescriptionValid ? 'green' : 'red' }}>
                {isDescriptionValid ? 'Descrizione valida' :
                  `Deve contenere tra 100 e 1000 caratteri (${description.trim().length})`}
              </strong>
            }
          </div>

          <button type="submit" className="btn btn-primary">Sign Up</button>
        </form>
      </div>
    </>
  )
}

export default App


