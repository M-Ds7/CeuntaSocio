import React from 'react'
import { useEffect } from 'react'
import ImgForm from "../Img/ImgForm.jpg";

const FormEvent = () => {

    useEffect(() => {
        (() => {

            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            const forms = document.querySelectorAll('.needs-validation')

            // Loop over them and prevent submission
            Array.from(forms).forEach(form => {
                form.addEventListener('submit', event => {
                    if (!form.checkValidity()) {
                        event.preventDefault()
                        event.stopPropagation()
                    }

                    form.classList.add('was-validated')
                }, false)
            })
        })()
    })

    return (
        <>
            <div className="container animate__animated animate__fadeInUp">
                <div className="row g-3 ">
                    <div className="col-md-6 justify-content-center">
                        <img src={ImgForm} alt="imagen" className="img-fluid" />
                    </div>
                    <div className="col-md-6">
                        <form className="needs-validation p-4" noValidate>
                            <div className="mb-3">
                                <label htmlFor="titulo" className="form-label">Titulo del evento</label>
                                <input type="text" className="form-control" id="titulo" required />
                                <div className="valid-feedback">
                                    Bien hecho!
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="namecompany" className="form-label">Nombre de la empresa</label>
                                <input type="text" className="form-control" id="namecompany" required />
                                <div className="valid-feedback">
                                    Bien hecho!
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Descripción</label>
                                <input type="text" className="form-control" id="description" required />
                                <div className="valid-feedback">
                                    Bien hecho!
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="addressevent" className="form-label">Dirección del evento</label>
                                <input type="text" className="form-control" id="eventaddress" required />
                                <div className="valid-feedback">
                                    Bien hecho!
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="tenumber" className="form-label">Numero de Telefono</label>
                                <input type="number" className="form-control" id="tenumber" required />
                                <div className="valid-feedback">
                                    Bien hecho!
                                </div>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="image" className='form-label'>Imagen</label>
                                <input type="file" className='form-control' id='image' required />
                                <div className="valid-feedback">
                                    Bien hecho!
                                </div>
                            </div>
                            <div className="text-center">
                                <button className="btn btn-primary" type="submit">Hacer evento</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FormEvent;
