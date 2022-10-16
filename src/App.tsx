import { useCounter } from "./hooks/counter"

export function App() {
  const [counter, counterDispatch] = useCounter();

  return (
    <div className="p-5">
      Contagem: {counter.count}
      <hr />
      <button className="p-2" onClick={() => counterDispatch({ type: 'ADD' })}>Adicionar</button>
      <button className="p-2" onClick={() => counterDispatch({ type: 'DEL' })}>Remover</button>
      <button className="p-2" onClick={() => counterDispatch({ type: 'RESET' })}>Resetar</button>
    </div>
  )
}

