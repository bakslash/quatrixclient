import { useState } from 'react'

export default function Login() {

    const [values, setValues] = useState('')
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value })
    }
    const handlesubmit = (e) => {
        e.preventDefault()
        const data = {
            phone: values.phone,
            password: values.password,
        }
        console.log(data);
    }
    return (
        <div>


            <main className="min-h-screen w-full bg-gray-900 mx-auto text-white pt-20">
                <section className="mx-auto max-w-md space-y-10 flex flex-col">
                    <p className="text-4xl text-center">Log In</p>

                    <input type="text"
                        placeholder="Phone"
                        className="placeholder:italic text-lg w-full bg-transparent border-b-2 focus:border-orange-500 outline-none transform duration-300"
                        name='phone'
                        value={values.name}
                        onChange={handleChange} />

                    <input type="password"
                        placeholder="Password"
                        className="placeholder:italic text-lg w-full bg-transparent border-b-2 focus:border-orange-500 outline-none transform duration-300"
                        name='password'
                        value={values.name}
                        onChange={handleChange} />

                    <button className="bg-orange-600 hover:bg-orange-400 transform duration-300 py-2 font-semibold rounded-sm"
                        onClick={handlesubmit}
                    >LOG IN</button>

                </section>
            </main>
        </div>
    )
}
