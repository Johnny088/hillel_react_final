// import type { AuthData } from '../../types/index';

// interface AuthProps {
//   onSubmit: (authdata: AuthData) => void;
// }

// export const AuthForm = ({ onSubmit }: AuthProps) => {
//   const handleSubmit = (formData: FormData) => {
//     const email = formData.get('email') as string;
//     const password = formData.get('password') as string;

//     onSubmit({ email, password });
//   };

//   return (
//     <>
//       <form action={handleSubmit}>
//         <input type="text" name="email" placeholder="email" />
//         <input type="password" name="password" placeholder="password" />
//         <button>Submit</button>
//       </form>
//     </>
//   );
// };

import type { AuthData } from '../../types/index';

interface AuthProps {
  onSubmit: (authdata: AuthData) => void;
}

export const AuthForm = ({ onSubmit }: AuthProps) => {
  const handleSubmit = (formData: FormData) => {
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;

    onSubmit({ email, password });
  };

  const inputClass =
    'mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-amber-500 focus:border-amber-500';
  const labelClass = 'block text-sm text-slate-700';

  return (
    <form
      action={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white border border-slate-200 rounded-xl shadow-sm space-y-5 text-slate-800 mb-16"
    >
      <label className={labelClass}>
        Email
        <input
          type="email"
          name="email"
          placeholder="email"
          className={inputClass}
          required
        />
      </label>

      <label className={labelClass}>
        Password
        <input
          type="password"
          name="password"
          placeholder="password"
          className={inputClass}
          required
        />
      </label>

      <button
        type="submit"
        className="w-full py-2 px-4 bg-red-500 hover:bg-red-700 active:bg-red-800 text-white rounded-md shadow transition-colors focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2 duration-300"
      >
        Submit
      </button>
    </form>
  );
};
