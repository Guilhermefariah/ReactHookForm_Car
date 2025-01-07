import { Fragment, useState } from "react";
import { useForm } from "react-hook-form";

import "./App.css";

export default function App() {
  const [currentVehicleSimulation, setCurrentVehicleSimulation] = useState({
    securityValue: 0,
    installmentsQuantity: 0,
    individualInstallmentValue: 0,
  });
  const { handleSubmit, register, reset } = useForm();

  const onSubmit = (data) => {
    const currentYear = new Date().getFullYear();
    const vehicleYear = Number(data.vehicleYear);
    const vehiclePrice = Number(data.vehiclePrice);

    const vehicleAge = currentYear - vehicleYear;

    let securityValue = 0;

    if (vehicleAge <= 5) {
      securityValue = vehiclePrice * (3 / 100);
    } else {
      securityValue = vehiclePrice * (4 / 100);
    }

    if (data.isSecurityRenovation) {
      securityValue = securityValue * (90 / 100);
    }

    const installmentsQuantity = 12;

    setCurrentVehicleSimulation({
      securityValue: securityValue.toFixed(2),
      installmentsQuantity,
      individualInstallmentValue: Intl.NumberFormat("pt-BR").format(
        (securityValue / installmentsQuantity).toFixed(2)
      ),
    });
  };

  const handleResetForm = () => {
    reset({ vehicleModel: "", vehiclePrice: "", vehicleYear: "" });
    setCurrentVehicleSimulation({
      securityValue: 0,
      installmentsQuantity: 0,
      individualInstallmentValue: 0,
    });
  };

  return (
    <Fragment>
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
          <img src="logo.png" alt="Seguradora de Veículos" className="logo" />
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
                  placeholder="R$ Avaliação (Fipe)"
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
                  {...register("isSecurityRenovation")}
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
                onClick={handleResetForm}
                type="button"
                className="btn btn-danger col ms-3"
              >
                Limpar
              </button>
            </div>
          </form>
        </div>

        <div className="card-footer text-body-secondary py-4 row">
          {currentVehicleSimulation.securityValue > 0 && (
            <Fragment>
              <p className="col text-primary">
                R$ Seguro: {currentVehicleSimulation.securityValue}
              </p>
              <p className="col text-primary">
                Em {currentVehicleSimulation.installmentsQuantity}x de R${" "}
                {currentVehicleSimulation.individualInstallmentValue}
              </p>
            </Fragment>
          )}
        </div>
      </div>
    </Fragment>
  );
}
