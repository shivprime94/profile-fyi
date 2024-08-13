const calculatePrice = (items) => {
    let subtotal = 0;
    items.forEach((item) => {
        subtotal += item.price * item.quantity;
    });

    // Example discount logic: 10% off if subtotal > $100
    const discount = subtotal > 100 ? subtotal * 0.1 : 0;
    const total = subtotal - discount;

    return { subtotal, discount, total };
};

export default calculatePrice;
