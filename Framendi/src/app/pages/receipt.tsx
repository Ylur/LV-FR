// pages/receipt.tsx

import React, { useEffect, useContext } from "react";
import TopMenu from "../components/TopMenu";
import { OrderContext } from "../contexts/OrderContext";

const ReceiptScreen: React.FC = () => {
  const { orderData } = useContext(OrderContext)!;

  const { drinks, dateTime, numberOfPeople, email } = orderData;

  // Fixed prices
  const foodPricePerPerson = 15; // TODO lagaverð
  const drinkPrice = 5; // TODO lagaverð

  const foodTotal = foodPricePerPerson * numberOfPeople;
  const drinksTotal = drinks.reduce(
    (acc, drink) => acc + drink.quantity * drinkPrice,
    0
  );
  const totalPrice = foodTotal + drinksTotal;

  // Save order to backend
  useEffect(() => {
    const saveOrder = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/orders", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(orderData),
        });
        if (!response.ok) {
          throw new Error("Failed to save order.");
        }
      } catch (error) {
        console.error("Error saving order:", error);
      }
    };
    saveOrder();
  }, [orderData]);

  return (
    <div>
      <TopMenu />
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4 text-[#3E6053]">Receipt</h1>
        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Order Details</h2>
          <p>
            <strong>Date and Time:</strong>{" "}
            {new Date(dateTime).toLocaleString()}
          </p>
          <p>
            <strong>Number of People:</strong> {numberOfPeople}
          </p>
          <p>
            <strong>Email:</strong> {email}
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-semibold mb-2">Items</h2>
          <h3 className="text-lg font-semibold">Food</h3>
          <p>
            Dish x {numberOfPeople} @ ${foodPricePerPerson} each
          </p>
          <p>
            <strong>Food Total:</strong> ${foodTotal.toFixed(2)}
          </p>

          <h3 className="text-lg font-semibold mt-4">Drinks</h3>
          {drinks.map((drink) => (
            <p key={drink.idDrink}>
              {drink.strDrink} x {drink.quantity} @ ${drinkPrice} each
            </p>
          ))}
          <p>
            <strong>Drinks Total:</strong> ${drinksTotal.toFixed(2)}
          </p>
        </div>

        <h2 className="text-2xl font-bold text-[#BA2329]">
          Total Price: ${totalPrice.toFixed(2)}
        </h2>
      </div>
    </div>
  );
};

export default ReceiptScreen;
