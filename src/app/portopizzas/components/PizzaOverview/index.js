const PizzaOverView = ({ orderData }) => {
    const calculateTotal = () => {
        let total = 0;

        orderData.forEach((item) => {
            if (item.bebida) {
                total += parseFloat(item.bebida.value);
            } else if (item.sabores) {
                total += parseFloat(item.tamanho.value);
                item.sabores.forEach((sabor) => {
                    total += parseFloat(sabor.value);
                });
                total += parseFloat(item.borda.value);
            }
        });

        return total.toFixed(2);
    };
    return (
        <div>
            {orderData.map((item, index) => (
                <div key={index}>
                    {item.bebida && (
                        <div>
                            <p>
                                {item.quantidade}X {item.bebida.name}
                            </p>
                        </div>
                    )}
                    {item.sabores && (
                        <div>
                            <p>
                                {item.quantidade}X {item.tamanho.name}
                            </p>
                            <p>Borda: {item.borda.name}</p>
                            <p>Sabores:</p>
                            <ul>
                                {item.sabores.map((sabor, saborIndex) => (
                                    <li key={saborIndex}>
                                        {sabor.name} - R$
                                        {parseFloat(sabor.value).toFixed(2)}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            ))}
            <p>Valor Total: R${calculateTotal()}</p>
        </div>
    );
};

export default PizzaOverView;
