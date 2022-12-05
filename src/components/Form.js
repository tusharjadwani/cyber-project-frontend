import React, { useRef } from 'react'
import { Link } from 'react-router-dom';

const Form = () => {
    const form = useRef(null)
    const url = process.env.URL || "https://gold-poised-fox.cyclic.app";

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData(form.current);
        e.target.reset();

        await fetch(`${url}/api/upload`, {
            method: 'post',
            body: data
        })
    }

    return (
        <div>
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