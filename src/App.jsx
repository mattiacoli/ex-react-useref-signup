import { useMemo, useRef, useState, useEffect } from "react";

const letters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = `!@#$%^&*()-_=+[]{}|;:'\\",.<>?/~`;


function App() {
  // uncontrolled input
  const nameRef = useRef()
  const experienceRef = useRef()
  const specRef = useRef()

  // controlled input
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [description, setDescription] = useState('')

  // Focus on name input
  useEffect(() => {
    nameRef.current.focus();
  }, []);

  // Username Validation
  const isUsernameValid = useMemo(() => {
    const charsValid = username.split('').every(char =>
      letters.includes(char.toLowerCase()) || numbers.includes(char)
    )
    return charsValid && username.trim().length >= 6

  }, [username])


  // Password Validation
  const isPwdValid = useMemo(() => {
    return (
      password.trim().length >= 8 &&
      password.split('').some(char => letters.includes(char)) &&
      password.split('').some(char => numbers.includes(char)) &&
      password.split('').some(char => symbols.includes(char))
    )
  }, [password])

  // Description validation
  const isDescriptionValid = useMemo(() => {
    return description.trim().length >= 100 && description.trim().length <= 1000
  }, [description])


  // Form handler
  const handleSubmit = (e) => {

    e.preventDefault()

    if (!nameRef || !isUsernameValid || !isPwdValid || !isDescriptionValid || !experienceRef || !specRef) {
      alert('Errore! Compilare tutti i campi correttamente')
    }
    console.log(`
        Nome : ${nameRef.current.value}
        Username : ${username}
        Anni di Esperienza: ${experienceRef.current.value}
        Specializzazione ${specRef.current.value}
        Descrizione: ${description}
        `);
  }

  // Form reset
  const resetData = () => {
    nameRef.current.value = ""
    experienceRef.current.value = ""
    specRef.current.value = ""

    setUsername('')
    setPassword('')
    setDescription('')

  }

  // Form markup
  return (
    <>
      <div className="container mt-5">
        <h1 className="text-center mb-4">Sign Up</h1>

        <form className="col-md-6 mx-auto" onSubmit={handleSubmit}>
          {/* name */}
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="inserisci il tuo nome completo"
              ref={nameRef} />
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
              ref={specRef}>

              <option value="">Seleziona Specialistica</option>
              <option value="fullstack">Full Stack</option>
              <option value="frontend">Frontend</option>
              <option value="backend">Backend</option>
            </select>
          </div>

          {/* Esperienza */}
          <div className="mb-3 d-flex gap-2">
            <label htmlFor="esperienza" className="form-label col-7">Anni di Esperienza</label>
            <input type="number" ref={experienceRef} min={0} className="form-control col" />
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
          <div className="buttons d-flex justify-content-between">
            <button type="submit" className="btn btn-primary">Sign Up</button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={resetData}
            >Reset</button>
          </div>

        </form>
      </div>
    </>
  )
}

export default App
