import { PencilSimple, TrashSimple } from "phosphor-react"
import Modal from "./components/Modal"
import { useState } from "react"

function App() {
  const [open, setOpen] = useState(false)

  return (
    <main>
      <header className="bg-[#435E7D] flex justify-between text-white p-6">
        <h1 className="text-4xl">Usuários</h1>
        <button onClick={() => setOpen(true)} className="bg-green-600 px-6 rounded">Novo usuário</button>
      </header>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="px-6">Nome</th>
            <th>E-mail</th>
            <th>Telefone</th>
            <th className="px-6">Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-6">Gabriel</td>
            <td>gabriel@digital.com</td>
            <td>8599999999</td>
            <td className="px-6">
              <div>
                <button>
                  <PencilSimple size={32} color="#cc9b14" weight="fill" />
                </button>
                <button>
                  <TrashSimple size={32} color="#cc2714" weight="fill" />
                </button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <Modal open={open} setOpen={setOpen} />
    </main>
  )
}

export default App
