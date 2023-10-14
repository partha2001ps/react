import './App.css'
function App({ list1, list2, list3 }) {
 
  return (<div>
    <h1>React Price Card</h1>
    <div className='full'>
 <div id='inside'> <div className='card'>
    <p className='plus' id='free'>FREE</p>
    <h1 id='month'>$0/month</h1>
    <ul id='unorder'>
      {
        list1.map(list =>
          <li key={list.id}className='content'>
          {list.important ? <p style={{color:'black'}}>✓ {list.content}</p> : <p style={{ color: 'lightgrey' }}>× {list.content}</p>}
           </li>
          )
     }
    </ul>
    <button disabled>Button</button>
  </div>
  <div className='card'>
    <p className='plus'>PLUS</p>
    <h1>$9/month</h1>
    <ul id='unorder'>
      {
        list2.map(list =>
          <li key={list.id}className='content'>
          {list.important ? <p style={{color:'black'}}>✓ {list.content}</p> : <p style={{ color: 'lightgrey' }}>× {list.content}</p>}
           </li>
          )
     }
    </ul>
    <button disabled>Button</button>
  </div>
  <div className='card'>
    <p  className='plus'>PRO</p>
    <h1>$49/month</h1>
    <ul id='unorder'>
      {
        list3.map(list =>
          <li key={list.id} className='content'>
          {list.important ? <p style={{color:'black'}}>✓ {list.content}</p> : <p style={{ color: 'lightgrey' }}>× {list.content}</p>}
           </li>
          )
     }
    </ul>
    <button>Button</button>
  </div></div>
</div></div>
  )
}

export default App
