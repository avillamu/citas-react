function Header({ toma1Valor }) {
    // function Header(props) {
    // function Header({ numeros, isAdmin, fn }) {

    // console.log(props);

    // console.log(numeros);
    // console.log(isAdmin);
    // console.log(fn);
    // fn();

    const variableHeader = true;
    toma1Valor(variableHeader);

    return (
        <header>
            <h1 className="font-black text-5xl text-center md:w-2/3 mx-auto">
                Seguimiento Pacientes {''}
                <span className="text-indigo-600">Veterinaria</span>
            </h1 >
            {/* <h1 className="text-indigo-600 mt-2 uppercase">Desde Header</h1 > */}
            {/* <h1 className="text-4xl font-bold uppercase">Desde Header</h1 > */}
        </header>
    )

}

export default Header;