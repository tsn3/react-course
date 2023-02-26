import {useState} from "react";
import {createMatrix, setMatrixValue} from "./matrix.helpers.js";

const useMatrix = () => {
  const [matrix, setState] = useState(defaultMatrix)

  const setMatrix = (value, line, row) =>
    setState(setMatrixValue(matrix, value, line, row))

  const resetMatrix = (size, val) => setState(createMatrix(size, val))
  return [matrix, setMatrix, resetMatrix]
}

const defaultMatrix = createMatrix(4, 0)

export const App = () => {
  const [matrix, setMatrix] = useMatrix(defaultMatrix)

  return (
    <>
      {matrix.map((row, i) => (
        <div key={i}>
          {row.map((v, k) => (
            <button key={v} onClick={() => setMatrix(i, k, ++v)}>
              {v}
            </button>
          ))}
        </div>
      ))
      }
    </>
  )
}