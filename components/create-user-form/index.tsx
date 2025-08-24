import { createUser } from "./actions";

const CreateUserForm = () => {
  return (
    <form
      aria-label="create-user-form"
      action={createUser}
      className="flex flex-col gap-4 shadow-2xl shadow-white p-6 rounded-md group"
    >
      <div className="w-full text-center py-4 group-hover:text-shadow-md text-shadow-gray-200 transition-all ease-in-out ">
        <h1 className="font-bold">Criar Usuário</h1>
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-sm">Nome</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Seu nome"
          className="p-2 h-10 w-full border-1 border-gray-200 rounded-md shadow-md shadow-white"
          required
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-sm">E-mail</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Seu email"
          className="p-2 h-10 w-full border-1 border-gray-200 rounded-md shadow-md shadow-white"
          required
        />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="password" className="text-sm">Senha</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Sua senha"
          className="p-2 h-10 w-full border-1 border-gray-200 rounded-md shadow-md shadow-white"
          required
        />
      </div>

      <button
        type="submit"
        className="p-2 h-10 w-full border-1 border-gray-200 rounded-md shadow-md shadow-white cursor-pointer hover:bg-gray-200 hover:text-gray-800 transition-colors font-bold"
      >
        Criar
      </button>
    </form>
  );
};

export default CreateUserForm;
