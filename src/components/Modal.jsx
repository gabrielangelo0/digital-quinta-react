import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'
import { PlusCircle } from 'phosphor-react'
import Input from './Input'
import axios from 'axios';

export default function Modal({ open, setOpen, buscarUsuarios }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  function handleChangeName(ev) {
    setName(ev.target.value);
  }

  function handleChangeEmail(ev) {
    setEmail(ev.target.value);
  }

  function handleChangePhone(ev) {
    setPhone(ev.target.value);
  }

  async function addUser() {
    try {
      await axios.post("http://localhost:3000/users", {
        name,
        email,
        phone
      })

      setName("");
      setEmail("");
      setPhone("");
      buscarUsuarios();
      setOpen(false);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Dialog open={open} onClose={setOpen} className="relative z-10">
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg sm:p-6 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="sm:flex sm:items-start">
              <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-emerald-100 sm:mx-0 sm:size-10">
                <PlusCircle size={32} className='text-emerald-800' />
              </div>
              <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left w-full">
                <DialogTitle as="h3" className="text-base font-semibold text-gray-900">
                  Novo usuário
                </DialogTitle>
                <div className="mt-2 flex flex-col gap-4">
                  <Input
                    onChange={handleChangeName}
                    width="w-full"
                    name="Nome"
                    type="text"
                    placeholder="Insira seu nome"
                    id="name"
                  />
                  <Input
                    onChange={handleChangeEmail}
                    width="w-full"
                    name="E-mail"
                    type="email"
                    placeholder="Insira seu e-mail"
                    id="email"
                  />
                  <Input
                    onChange={handleChangePhone}
                    width="w-full"
                    name="Telefone"
                    type="number"
                    placeholder="Insira seu telefone"
                    id="phone"
                  />
                </div>
              </div>
            </div>
            <div className="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
              <button
                type="button"
                onClick={addUser}
                className="inline-flex w-full justify-center rounded-md bg-green-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-500 sm:ml-3 sm:w-auto"
              >
                Salvar
              </button>
              <button
                type="button"
                data-autofocus
                onClick={() => setOpen(false)}
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
              >
                Cancelar
              </button>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
