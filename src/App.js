import { useState, useEffect } from 'react'
let temp = 0
function App() {
  const [opt, setOpt] = useState(1)
  const [list, setList] = useState([])
  const [input, setInput] = useState({
    val: 0,
    type: 'km',
  })
  const [output, setOutput] = useState({
    val: 0,
    type: 'km',
  })
  // console.log("input"+input.type)
  // console.log("output"+output.type)

  function Convert() {
    switch (input.type) {
      case 'km':
        temp = input.val * 1000
        break
      case 'hm':
        temp = input.val * 100
        break
      case 'dam':
        temp = input.val * 10
        break
      case 'm':
        temp = input.val * 1
        break
      case 'dm':
        temp = input.val * 0.1
        break
      case 'cm':
        temp = input.val * 0.01
        break
      case 'mm':
        temp = input.val * 0.001
        break
    }
    // console.log(temp);
    switch (output.type) {
      case 'km':
        temp = temp * 0.001
        temp = temp.toFixed(3)
        break
      case 'hm':
        temp = temp * 0.01
        temp = temp.toFixed(2)
        break
      case 'dam':
        temp = temp * 0.1
        temp = temp.toFixed(1)
        break
      case 'm':
        temp = temp * 1
        temp = temp.toFixed(0)
        break
      case 'dm':
        temp = temp * 10
        temp = temp.toFixed(0)
        break
      case 'cm':
        temp = temp * 100
        temp = temp.toFixed(0)
        break
      case 'mm':
        temp = temp * 1000
        temp = temp.toFixed(0)
        break
    }
  }
  // console.log(temp);
  // console.log(list)
  const handleKeyDown = (a) => {
    if (a.key === 'Enter') {
      handleConvert()
    }
  }
  const handleConvert = () => {
    Convert()
    if (isNaN(temp) === false) {
      setOutput({
        ...output,
        val: temp,
      })
      setList([
        ...list,
        {
          value1: input.val,
          type1: input.type,
          value2: temp,
          type2: output.type,
        },
      ])
    } else {
      alert('Xin hãy nhập lại')
    }
  }
  useEffect(() => {
    handleOnChange()
  }, [opt])
  const handleOnChange = () => {
    if (opt === 1) {
      setOutput({
        ...output,
        type: document.getElementById('obj2').value,
      })
      setInput({
        ...input,
        type: document.getElementById('obj1').value,
      })
    } else {
      setOutput({
        ...output,
        type: document.getElementById('obj1').value,
      })
      setInput({
        ...input,
        type: document.getElementById('obj2').value,
      })
    }
  }
  const handleDelete = (e) => {
    setList(list.filter((value, index) => index !== e))
  }

  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center bg-grey-100">
        <div class="text-5xl font-extrabold ... pb-10">
          <span class="bg-clip-text text-transparent 
          bg-gradient-to-r from-blue-400 to-pink-500
          ">
            Unit Convert
          </span>
        </div>
        <div className="w-2/3 border-2 border-blue-200 py-6 rounded-md flex justify-center items-center bg-[url('img/img1.png')]">
          <div className="w-2/3 h-2/3 flex flex-row justify-center items-center gap-10">
            <div className="w-full flex flex-col justify-center items-center">
              <input
                type="text"
                className="border-2 border-blue-200 px-6 py-2 rounded-md outline-none"
                placeholder="Enter value..."
                onKeyDown={(e) => handleKeyDown(e)}
                onChange={(a) =>
                  setInput({
                    ...input,
                    val: a.target.value,
                  })
                }
                value={
                  opt !== 1
                    ? isNaN(output.val) === false
                      ? output.val
                      : 0
                    : input.value
                }
                onClick={() => setOpt(1)}
              ></input>
              <select
                className="my-3 w-1/4 border-2 border-blue-200 rounded-md"
                id="obj1"
                onChange={() => handleOnChange()}
                onKeyDown={(e) => handleKeyDown(e)}
              >
                <option value="km">km</option>
                <option value="hm">hm</option>
                <option value="dam">dam</option>
                <option value="m">m</option>
                <option value="dm">dm</option>
                <option value="cm">cm</option>
                <option value="mm">mm</option>
              </select>
            </div>
            <div className="flex flex-col w-full">
              <button
                type=""
                className="px-6 py-2 bg-blue-400 rounded-md text-white"
                onClick={() => handleConvert()}
              >
                Convert
              </button>
            </div>
            <div className="flex flex-col justify-center items-center">
              <input
                type="text"
                className="border-2 border-blue-200 px-6 py-2 rounded-md outline-none"
                placeholder="Enter value..."
                onChange={(b) =>
                  setInput({
                    ...input,
                    val: b.target.value,
                  })
                }
                value={
                  opt === 1
                    ? isNaN(output.val) === false
                      ? output.val
                      : ''
                    : input.value
                }
                onClick={() => setOpt(2)}
                onKeyDown={(e) => handleKeyDown(e)}
              ></input>
              <select
                className="my-3 w-1/4 border-2 border-blue-200 rounded-md"
                id="obj2"
                onChange={() => handleOnChange()}
                onKeyDown={(e) => handleKeyDown(e)}
              >
                <option value="km">km</option>
                <option value="hm">hm</option>
                <option value="dam">dam</option>
                <option value="m">m</option>
                <option value="dm">dm</option>
                <option value="cm">cm</option>
                <option value="mm">mm</option>
              </select>
            </div>
          </div>
        </div>
        <div className="w-2/3 flex flex-col justify-center items-center">
          <h3 className="text-2xl font-bold border-b-2 pb-2 mb-4 mt-6">
            History
          </h3>
          <div className="w-full max-h-[325px] border-2 border-blue-200 py-6 rounded-md flex flex-col overflow-scroll bg-[url('img/img1.png')]">
            {list.map((unit, index) => (
              <div className="flex flex-row justify-between w-full drop-shadow-lg bg-white px-2 my-1 rounded-lg">
                <div className="text-lg px-2 my-2 bg-blue-400 text-white rounded-lg">
                  {index + 1}
                </div>
                <div className="flex flex-row justify-between w-full px-10">
                  <p className="text-lg pt-2">{unit.type1}</p>
                  <p className="text-lg pt-2">{unit.value1}</p>
                </div>
                <p className="text-lg px-10 pt-2">=</p>
                <div className="flex flex-row justify-between w-full px-10">
                  <p className="text-lg pt-2">{unit.value2}</p>
                  <p className="text-lg pt-2">{unit.type2}</p>
                </div>
                <button
                  className="text-lg px-2 my-2 bg-blue-400 text-white rounded-lg"
                  onClick={() => handleDelete(index)}
                >
                  X
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
