import { useState } from "react";

function Main() {
  // State for the challenge #3
  const [open, setOpen] = useState(false);

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */<h1>hello</h1>}
      </section>
      <section className="main__form">{
      /* a form should be here */ 
    
      // let user = {
      //   name: 'Nicolas',
      //   address: '123 road',
      //   feelingPunky: true,
      //   age: 34,
      //   avatar: 'nico.jpg',
      //   favouriteNinjaTurtle: 'Leonardo'
      // }
      
      function App () {
        const [users, setUsers] = useState<User[]>([])
      
        // 2 way binding
        // 1 - changing the name input changes this state
        // 2 - changing this state, changes the name input
        const [name, setName] = useState('Donald')
        const [address, setAddress] = useState('456 Potato Road')
        const [feelingPunky, setLucky] = useState(true)
        const [age, setAge] = useState(18)
        const [avatar, setAvatar] = useState('')
        const [favouriteNinjaTurtle, setFavouriteTurtle] = useState('Michelangelo')
      
        return (
          <div className='App'>
            <h2>Uncontrolled form</h2>
            <form
              className='random-form'
              onSubmit={event => {
                event.preventDefault()
      
                let user = {
                  name: event.target.name.value,
                  address: event.target.address.value,
                  feelingPunky: event.target.lucky.checked,
                  age: Number(event.target.age.value),
                  avatar: event.target.image.value,
                  favouriteNinjaTurtle: event.target.turtle.value
                }
      
                setUsers([...users, user])
              }}
            >
              <input type='text' name='name' placeholder='name' />
      
              <input type='text' name='address' placeholder='address' />
      
              <label>
                Feeling lucky, punk?
                <input type='checkbox' name='lucky' />
              </label>
      
              <input type='number' name='age' min={18} placeholder='age' />
      
              <input type='url' placeholder='avatar url' name='image' />
      
              <label>What's your favourite teenage mutant ninja turtle?</label>
              <label>
                Michelangelo
                <input type='radio' value='Michelangelo' name='turtle' />
              </label>
              <label>
                Leonardo
                <input type='radio' value='Leonardo' name='turtle' />
              </label>
              <label>
                Raffael
                <input type='radio' value='Raffael' name='turtle' />
              </label>
              <label>
                Donatello
                <input type='radio' value='Donatello' name='turtle' />
              </label>
      
              <button>NICE, SUBMIT TO ME!</button>
            </form>
      
            <h2>Controlled form</h2>
            <form
              className='random-form'
              onSubmit={event => {
                event.preventDefault()
      
                let user = {
                  name,
                  address,
                  feelingPunky,
                  age,
                  avatar,
                  favouriteNinjaTurtle
                }
      
                setName('')
                setAddress('')
                setLucky(false)
                setAge(18)
                setAvatar('')
                setFavouriteTurtle('')
      
                setUsers([...users, user])
              }}
            >
              <input
                type='text'
                name='name'
                placeholder='name'
                onChange={event => {
                  setName(event.target.value)
                }}
                value={name}
                autoComplete='off'
              />
      
              {name.length < 3 ? <p className='error'>Name is too short!</p> : null}
      
              {name.toLowerCase().includes('nico') ? (
                <p className='error'>Your name is awesome!</p>
              ) : null}
      
              {name.toLowerCase().includes('donald') ? (
                <p className='error'>BOOOOOOO!</p>
              ) : null}
      
              <input
                type='text'
                name='address'
                placeholder='address'
                onChange={event => {
                  setAddress(event.target.value)
                }}
                value={address}
              />
      
              <label>
                Feeling lucky, punk?
                <input
                  type='checkbox'
                  name='lucky'
                  checked={feelingPunky}
                  onChange={event => {
                    setLucky(event.target.checked)
                  }}
                />
              </label>
      
              {feelingPunky ? (
                <form
                  onSubmit={event => {
                    event.preventDefault()
                    if (event.target.lotto.valueAsNumber === 42) alert('You win!')
                    else alert('Better luck next time!')
                  }}
                >
                  <input type='number' name='lotto' placeholder='lucky number here' />
                  <button>PLAY LOTTO</button>
                </form>
              ) : null}
      
              <input
                type='number'
                name='age'
                min={18}
                placeholder='age'
                onChange={event => {
                  setAge(event.target.valueAsNumber)
                }}
                value={age}
              />
      
              {age < 18 ? (
                <p className='error'>Come back when you are older!</p>
              ) : null}
      
              <input
                type='url'
                placeholder='avatar url'
                name='image'
                onChange={event => {
                  setAvatar(event.target.value)
                }}
                value={avatar}
              />
      
              <label>What's your favourite teenage mutant ninja turtle?</label>
              <label>
                Michelangelo
                <input
                  type='radio'
                  value='Michelangelo'
                  name='turtle'
                  onChange={event => {
                    setFavouriteTurtle(event.target.value)
                  }}
                  checked={favouriteNinjaTurtle === 'Michelangelo'}
                />
              </label>
              <label>
                Leonardo
                <input
                  type='radio'
                  value='Leonardo'
                  name='turtle'
                  onChange={event => {
                    setFavouriteTurtle(event.target.value)
                  }}
                  checked={favouriteNinjaTurtle === 'Leonardo'}
                />
              </label>
              <label>
                Raffael
                <input
                  type='radio'
                  value='Raffael'
                  name='turtle'
                  onChange={event => {
                    setFavouriteTurtle(event.target.value)
                  }}
                  checked={favouriteNinjaTurtle === 'Raffael'}
                />
              </label>
              <label>
                Donatello
                <input
                  type='radio'
                  value='Donatello'
                  name='turtle'
                  onChange={event => {
                    setFavouriteTurtle(event.target.value)
                  }}
                  checked={favouriteNinjaTurtle === 'Donatello'}
                />
              </label>
      
              {favouriteNinjaTurtle === 'Leonardo' ? (
                <p>You have chosen wisely...</p>
              ) : null}
      
              <button>NICE, SUBMIT TO ME!</button>
            </form>
      
            <ul className='user-list'>
              {users.map(user => (
                <li className='user'>
                  <h2>
                    {user.name} ({user.age})
                  </h2>
                  <img src={user.avatar} alt='' />
                  <p>{user.feelingPunky ? 'Feels punky' : 'Does not feel punky'}</p>
                  <p>Favourite turtle: {user.favouriteNinjaTurtle}</p>
                </li>
              ))}
            </ul>
          </div>
        )
      }}</section>
    </main>
  );
}

export default Main;
