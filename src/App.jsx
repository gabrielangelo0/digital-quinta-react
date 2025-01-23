import { PencilSimple, TrashSimple } from "phosphor-react"
import Modal from "./components/Modal"
import { useEffect, useState } from "react"
import axios from "axios";
import ModalDelete from "./components/ModalDelete";

function App() {
  const [open, setOpen] = useState(false)
  const [openModalDelete, setOpenModalDelete] = useState(false);

  const [usuarios, setUsuarios] = useState([])

  console.log(usuarios);
  async function buscarUsuarios() {
    const usuariosDados = await axios.get("http://localhost:3001/users");

    setUsuarios(usuariosDados.data);
  }

  useEffect(() => {
    buscarUsuarios();
  }, [])


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
          {usuarios.map((usuario) => (
            <tr>
            <td className="px-6">{usuario.name}</td>
            <td>{usuario.email}</td>
            <td>{usuario.phone}</td>
            <td className="px-6">
              <div>
                <button>
                  <PencilSimple size={32} color="#cc9b14" weight="fill" />
                </button>
                <button onClick={() => setOpenModalDelete(true)}>
                  <TrashSimple size={32} color="#cc2714" weight="fill" />
                </button>
              </div>
            </td>
          </tr>
          ))}
        </tbody>
      </table>
      <Modal
        open={open}
        setOpen={setOpen}
        buscarUsuarios={buscarUsuarios}
      />
      <ModalDelete open={openModalDelete} setOpen={setOpenModalDelete} />
    </main>
  )
}

export default App
