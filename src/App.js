import React from 'react'

function Hero () {

    return (
        <div className='Hero 
            bg-slate-300 text-center'>
                the great guessing game
        </div>
    )

}

function Board() {

    const Square = () => <div className='bg-red-600' />


    return (
       <div className={`grid gap-4 grid-cols-2 grid-rows-2 bg-blue-400`} 
            style={{height: window.innerWidth}}
        >
         <Square />
         <Square />
         <Square />
         <Square />
            
       </div>
    )

}

export default App = () => {

    return(
        <div className="App">
            <Hero />
            <Board />
        </div>
    ) 
}