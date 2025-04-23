import React from 'react'

function Cards({ username , btntext="Send...me" }) {
    console.log(username)
    return (
        <>
      <div className=" w-105 flex flex-col rounded-xl glass  min-h-72 mt-3 ">
        <div>
          <img
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWFwdHp5OXc4ajBuMm52cXA3b2ttMzB3aDdvMno2ajZwdnltNGlhbiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/77rvjVcaJr1BgKSXtR/giphy.gif"
            alt="test"
            width="300"
            height="300"
            className="rounded-t-xl w-full"
          />
        </div>
        <div className="flex flex-col py-3 px-3 pb-7 -mt-4 bg-black rounded-b-xl ">
          <div className="flex justify-between">
            <h1 className="font-RubikBold ">Tailwind css with devui or {username}</h1>
          </div>
          <div className="flex  justify-between font-mono">
          </div>
        </div>
      </div>

    <br />
        <div className=" w-105 flex flex-col rounded-xl glass  min-h-72 mt-3 ">
        <div>
          <img
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWFwdHp5OXc4ajBuMm52cXA3b2ttMzB3aDdvMno2ajZwdnltNGlhbiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/BDqtUZBSgoPF9oZxsu/giphy.gif"
            alt="test"
            width="300"
            height="300"
            className="rounded-t-xl w-full"
          />
        </div>
        <div className="flex flex-col py-3 px-3 pb-7 -mt-4 bg-black rounded-b-xl ">
          <div className="flex justify-between">
            <h1 className="font-RubikBold ">SEND IT</h1>
          </div>
          <div className="flex  justify-between font-mono">
          <button className="w-50 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            {btntext}
        </button>
          </div>
        </div>
      </div>
    </>
        )
}

export default Cards
