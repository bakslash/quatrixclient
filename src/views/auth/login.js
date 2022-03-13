import { useState } from 'react'
import '../../assets/styles/index.css'
import { useHistory } from "react-router-dom"
import { login } from 'api/services'
export default function Login() {

    const [values, setValues] = useState('')
    const handleChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value })
    }
    let history = useHistory()
    const handleSubmit = async (e) => {
        e.preventDefault()
        const data = {
            phone: values.phone,
            password: values.password,
        }
        const response = await login(data)
        //   dispatch(updateUsers(id, data))
        if (response.data.data.accessToken) {
            const token = response.data.data.accessToken
            localStorage.setItem('accessToken',token )
        }
        
        // console.log(localStorage.getItem('accessToken'));
        history.push('/admin/tables')
    }
    return (
        <>
            <div className="bg-green-400 min-h-screen flex flex-col">
                <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
                    <div className="bg-blue-500 px-6 py-8 rounded shadow-md text-black w-48">
                        <h1 className="mb-8 text-3xl text-center">Login</h1>
                        <input
                            type="text"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="phone"
                            placeholder="Phone"
                            onChange={handleChange}
                        />
                        <input
                            type="password"
                            className="block border border-grey-light w-full p-3 rounded mb-4"
                            name="password"
                            placeholder="Password"
                            onChange={handleChange}
                        />
                        <button
                            type="submit"
                            onClick={handleSubmit}
                            className=" w-full text-center py-3 rounded bg-green my-1"
                        >Login</button>
                    </div>
                </div>
            </div>
        </>
    )
}
