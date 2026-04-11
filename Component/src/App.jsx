import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "./Redux/counter";

function App() {
  // const [Quantity, setQuantity] = useState(1)
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4 lg:p-10 font-sans">
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Side: Shopping Cart */}
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">
            Shopping Cart
          </h1>

          <div className="space-y-6">
            {/* Item 1 */}
            <div className="flex items-center p-4 rounded-2xl border border-gray-100 bg-white shadow-sm">
              <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <img
                    src="https://images.unsplash.com/photo-1551028719-00167b16eac5?w=200"
                    className="w-24 h-24 rounded-xl object-cover"
                    alt=""
                  />
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg">
                      Dark Denim Shirt
                    </h3>
                    <p className="text-gray-400 text-sm">#order1234</p>
                  </div>
                </div>
                <div className="flex items-center gap-8 mt-4 sm:mt-0">
                  <span className="text-gray-600">Dark Blue</span>
                  <div className="flex items-center gap-4 bg-gray-50 rounded-full px-4 py-1">
                    <button
                      className="text-gray-400 font-bold"
                      onClick={() => dispatch(decrease())}
                    >
                      -
                    </button>
                    <span className="font-bold text-gray-800">{counter}</span>
                    <button
                      className="text-gray-400 font-bold"
                      onClick={() => dispatch(increase())}
                    >
                      +
                    </button>
                  </div>
                  <button className="rounded-xl p-1 bg-purple-400">
                    Add to cart
                  </button>
                  <span className="text-indigo-600 font-bold text-lg">
                    $120.00
                  </span>
                </div>
              </div>
            </div>

            {/* Item 2 (Active/Selected) */}
            <div className="relative flex items-center">
              <div className="flex-1 flex flex-col sm:flex-row items-center justify-between p-4 rounded-2xl border border-indigo-200 bg-indigo-50/50 shadow-sm">
                <div className="flex items-center gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1551028719-00167b16eac5?w=200"
                    className="w-24 h-24 rounded-xl object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg">
                      Denim Trendy Jacket
                    </h3>
                    <p className="text-gray-400 text-sm">#order1234</p>
                  </div>
                </div>
                <div className="flex items-center gap-8">
                  <span className="text-gray-600">Sky Blue</span>
                  <div className="flex items-center gap-4 bg-white rounded-full px-4 py-1 border border-indigo-100">
                    <button
                      className="text-gray-400 font-bold"
                      onClick={() => dispatch(decrease())}
                    >
                      -
                    </button>
                    <span className="font-bold text-gray-800">{counter}</span>
                    <button
                      className="text-gray-400 font-bold"
                      onClick={() => dispatch(increase())}
                    >
                      +
                    </button>
                  </div>
                  <button className="rounded-xl p-1 bg-purple-400">
                    Add to cart
                  </button>

                  <span className="text-indigo-600 font-bold text-lg">
                    $120.00
                  </span>
                </div>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex items-center p-4 rounded-2xl border border-gray-100 bg-white shadow-sm">
              <div className="flex flex-col sm:flex-row items-center justify-between w-full">
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <img
                    src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=200"
                    className="w-24 h-24 rounded-xl object-cover"
                    alt=""
                  />
                  <div>
                    <h3 className="font-bold text-gray-800 text-lg">
                      Retro Shirt For Women
                    </h3>
                    <p className="text-gray-400 text-sm">#order1234</p>
                  </div>
                </div>
                <div className="flex items-center gap-8 mt-4 sm:mt-0">
                  <span className="text-gray-600">Magenta</span>
                  <div className="flex items-center gap-4 bg-gray-50 rounded-full px-4 py-1">
                    <button
                      className="text-gray-400 font-bold"
                      onClick={() => dispatch(decrease())}
                    >
                      -
                    </button>
                    <span className="font-bold text-gray-800">{counter}</span>
                    <button
                      className="text-gray-400 font-bold"
                      onClick={() => dispatch(increase())}
                    >
                      +
                    </button>
                  </div>
                  <button className="rounded-xl p-1 bg-purple-400">
                    Add to cart
                  </button>

                  <span className="text-indigo-600 font-bold text-lg">
                    $220.00
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
