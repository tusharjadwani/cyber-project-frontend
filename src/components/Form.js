import React, { useRef } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Alert from './Alert';

const Form = () => {
    const form = useRef(null)
    const url = process.env.URL || "https://gold-poised-fox.cyclic.app";
    const [success, setSuccess] = useState(false)

    setTimeout(() => {
        setSuccess(false)
    }, 2000);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(form.current);
        e.target.reset();

        fetch(`${url}/api/upload`, {
            method: 'post',
            body: data
        }).then(res => res.json()).then(out => {setSuccess(out.name);})

    }

    return (
        <div>
            {success && <Alert />}
            <header><Link to="/admin">Admin Panel</Link></header>
            <h1 >File Uploader</h1>
            <form className='container' ref={form} onSubmit={handleSubmit}>
                <div className="input-group">
                    <span className="input-group-text">Name</span>
                    <input name='name' required type="text" className="form-control" />
                </div>
                <div className="input-group">
                    <input required type="file" className="form-control form-file" name='file' id="fl" />
                    <button type='submit' className="input-group-text" htmlFor="fl">Upload</button>
                </div>
            </form>
        </div>
    )
}

export default Form