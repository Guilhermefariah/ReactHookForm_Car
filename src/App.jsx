import { useForm } from "react-hook-form";

import "./App.css";

function App() {
  const { handleSubmit, register } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src="logo.png"
              alt="logo"
              width="30"
              height="24"
              className="d-inline-block align-text-top"
            />
            Seguradora de Veículos
          </a>
        </div>
      </nav>

      <div className="card text-center container my-auto p-0">
        <div className="card-header p-4">
          <img
            src="logo.png"
            alt="Seguradora de Veículos"
            className="logo"
          />
          <h1 className="h2 my-5">Seguradora de Veículos</h1>
        </div>

        <div className="card-body">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
              <div className="mb-3 col">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Modelo de veículo"
                  maxLength="50"
                  {...register("vehicleModel", { required: true })}
                />
              </div>

              <div className="col mb-3">
                <input
                  type="number"
                  placeholder="R$ Avaliação (FIPE)"
                  className="form-control"
                  {...register("vehiclePrice", { required: true })}
                />
              </div>
            </div>

            <div className="row">
              <div className="col">
                <input
                  type="number"
                  placeholder="Ano de fabricação"
                  className="form-control"
                  {...register("vehicleYear", { required: true })}
                />
              </div>

              <div className="col form-check justify-content-center d-flex gap-3">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="renovation-checkbox"
                  {...register('isSecurityRenovation')}
                />
                <label
                  className="form-check-label"
                  htmlFor="renovation-checkbox"
                >
                  Renovação
                </label>
              </div>
            </div>

            <div className="mt-3">
              <button type="submit" className="btn btn-primary col">
                Calcular
              </button>

              <button
                type="button"
                className="btn btn-danger col ms-3">
                  Limpar
                </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
