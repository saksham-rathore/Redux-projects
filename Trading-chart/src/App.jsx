import React, { useEffect, useState } from "react";
import Chart from "./Chart";

function App() {
    const [price, setPrice] = useState(0);
    const [Changes, setChanges] = useState(0)
    // const [Chart, setChart] = useState([])

    useEffect(() => {
      fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd")
      .then(res => res.json())
      .then(Data => {
        setPrice(Data.bitcoin.usd);
      });
    }, []);

      useEffect(() => {
    fetch("https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true")
      .then(res => res.json())
      .then(data => {
        setPrice(data.bitcoin.usd);
        setChanges(data.bitcoin.usd_24h_change);
      });
  }, []);


  return (
    <div>
      <div className="bg-gray-900 text-white font-sans">
        {/* <!-- Navbar --> */}
        <nav className="flex justify-between items-center p-4 bg-gray-800 shadow-md">
          <h1 className="text-xl font-bold">TradeX</h1>
          <div className="space-x-4">
            <button className="px-4 py-2 bg-green-500 rounded-lg">Buy</button>
            <button className="px-4 py-2 bg-red-500 rounded-lg">Sell</button>
          </div>
        </nav>

        {/* <!-- Main Layout --> */}
        <div className="flex">
          {/* <!-- Sidebar --> */}
          <aside className="w-64 h-screen bg-gray-800 p-5 space-y-4">
            <h2 className="text-lg font-semibold mb-4">Menu</h2>
            <ul className="space-y-3">
              <li className="hover:text-green-400 cursor-pointer">Dashboard</li>
              <li className="hover:text-green-400 cursor-pointer">Portfolio</li>
              <li className="hover:text-green-400 cursor-pointer">Market</li>
              <li className="hover:text-green-400 cursor-pointer">Watchlist</li>
            </ul>
          </aside>

          {/* <!-- Content --> */}
          <main className="flex-1 p-6 space-y-6">
            {/* <!-- Stats --> */}
            <div className="grid grid-cols-3 gap-6">
              <div className="bg-gray-800 p-5 rounded-xl shadow">
                <h3>Total Balance</h3>
                <p className="text-2xl font-bold mt-2">₹1,25,000</p>
              </div>

              <div className="bg-gray-800 p-5 rounded-xl shadow">
                <h3>Current Price</h3>
                <p className="text-2xl font-bold text-green-400 mt-2">${price}</p>
              </div>

              <div className="bg-gray-800 p-5 rounded-xl shadow">
                <h3>Changes</h3>
                <p className="text-2xl font-bold text-red-400 mt-2">{Changes.toFixed(2)}%</p>
              </div>
            </div>

            {/* <!-- Chart Placeholder --> */}
            <div className="bg-gray-800 p-6 rounded-xl flex items-center justify-center">
              <div className="w-full">
                <Chart />
              </div>
            </div>


            {/* <!-- Portfolio Table --> */}
            <div className="bg-gray-800 p-5 rounded-xl">
              <h2 className="text-lg font-semibold mb-4"></h2>
              <table className="w-full text-left">
                <thead>
                  <tr className="text-gray-400">
                    <th>Asset</th>
                    <th>Price</th>
                    <th>Change</th>
                  </tr>
                </thead>
                <tbody className="space-y-2">
                  <tr className="border-t border-gray-700">
                    <td>BTC</td>
                    <td>${price}</td>
                    <td className="text-green-400">{Changes.toFixed(2)}%</td>
                  </tr>

                  <tr className="border-t border-gray-700">
                    <td>ETH</td>
                    <td></td>
                    <td className="text-red-400">-1.2%</td>
                  </tr>

                  <tr className="border-t border-gray-700">
                    <td>SOL</td>
                    <td>$150</td>
                    <td className="text-green-400">+4.1%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
