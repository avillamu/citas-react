// .jsx JavaScript Syntax Extension
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListadoPacientes from "./components/ListadoPacientes";

function App() {

  // Listado de pacientes
  const [pacientes, setPacientes] = useState([]);
  // Información de un paciente
  const [paciente, setPaciente] = useState({});

  useEffect(() => {
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? [];
      setPacientes(pacientesLS);
    }
    obtenerLS();
  }, [])

  useEffect(() => {
    localStorage.setItem('pacientes', JSON.stringify(pacientes));
  }, [pacientes])

  const eliminarPaciente = id => {
    // console.log('Eliminando Paciente ', id);
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id);
    setPacientes(pacientesActualizados);
  }

  const edad = 18;
  const imprime2mas2 = () => {
    console.log(2 + 2);
  }

  const toma1Valor = (valor) => {
    console.log(valor);
  }

  return (
    <div className="container mx-auto mt-20">
      <Header
        // numeros={1}
        // isAdmin={false}
        // fn={imprime2mas2}
        toma1Valor={toma1Valor}
      />

      <div className="mt-12 md:flex">
        <Formulario
          pacientes={pacientes}
          setPacientes={setPacientes}
          paciente={paciente}
          setPaciente={setPaciente}
        />
        <ListadoPacientes
          pacientes={pacientes}
          setPaciente={setPaciente}
          eliminarPaciente={eliminarPaciente}
        />
      </div>

      {/* {edad >= 18 ? 'Eres mayor de edad' : 'No eres mayor de edad'}
      <div>
        <h1>Hola Mundo</h1>
        <p>Edad: {edad}</p>
        <img src="" alt="" />
        <input type="text" />
      </div>
      <div>
        <h1>{'Hola Mundo'.toUpperCase()}</h1>
        <p>Un Parrafo</p>
      </div> */}
    </div>
  )
}

export default App;
