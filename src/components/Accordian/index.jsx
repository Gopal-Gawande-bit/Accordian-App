import React from "react"
import technologyQuestions from "./data"
import { useState } from "react"
// import "./styles.css"

const Accordian = () => {
  const [selected, setSelected] = useState(null)
  const [isEnableMultiSelection, setIsEnableMultiSelection] = useState(false)
  const [multipleId, setMultipleId] = useState([])

  const handleSelection = (dataId) => {
    console.log(dataId)
    setSelected(dataId == selected ? null : dataId)
    if (isEnableMultiSelection) {
      setMultipleId((prevId) => [...prevId, dataId])
    }
  }
  const handleMultiSelection = (dataId) => {
    console.log("Enabled")
    let cpyArray = [...multipleId]
    let indexofId = cpyArray.indexOf(dataId)
    console.log("indexofid-", indexofId)
    if (indexofId === -1) {
      cpyArray.push(dataId)
      console.log("cparr-", cpyArray)
    } else {
      cpyArray.splice(indexofId, 1)
    }
    setMultipleId(cpyArray)
  }

  const reset = () => {
    setMultipleId([])
    setSelected(null)
  }

  console.log(selected, multipleId)
  return (
    <>
      <div className="wrapper">
        <button
          onClick={() => {
            setIsEnableMultiSelection(!isEnableMultiSelection)
            reset()
          }}
        >
          {isEnableMultiSelection
            ? "Enable Single Selection"
            : "Enable Multi Selection"}
        </button>
        <div className="accordian">
          {technologyQuestions.map((dataItem) => (
            <div key={dataItem.id} className="item">
              <div
                onClick={
                  isEnableMultiSelection
                    ? () => handleMultiSelection(dataItem.id)
                    : () => handleSelection(dataItem.id)
                }
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>

                {selected === dataItem.id ||
                multipleId.indexOf(dataItem.id) !== -1 ? (
                  <div className="content">{dataItem.answer}</div>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Accordian
