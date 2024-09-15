function Cart(props) {
    const { iname, modal, clear } = props
    return (
        <>
            <div className="modalcont">
                <div className="cmodal">
                    <h2>Cart</h2>
                    {Array.isArray(iname) && iname.length > 0 ? (
                        iname
                            .filter(item => item && item[0] && item[1])  // Ensure both item and its properties exist
                            .map((item, index) => {
                                return (
                                    <p key={index}>{item[0] + ": " + item[1]}</p>
                                );
                            })
                    ) : (
                        <p>You Have Checked Out</p>
                    )}
                    <button onClick={() => modal()}>Continue Shopping</button>
                    <button onClick={() => clear()}>Checkout</button>
                </div>
            </div>
        </>
    )
}
export default Cart