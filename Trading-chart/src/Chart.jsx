import React from "react";
import { useEffect } from "react";

function Chart() {
  useEffect(() => {
    if (window.TradingView) {
      new window.TradingView.widget({
        container_id: "tradingview_chart",
        width: "100%",
        height: 400,
        symbol: "BINANCE:BTCUSDT",
        interval: "15",
        timezone: "Asia/Kolkata",
        theme: "dark",
        style: "1",
        locale: "en",
      });
    }
  }, []);
  return (
    <div className="bg-gray-800 p-6 rounded-xl flex items-center justify-center">
      <div id="tradingview_chart" className="w-full h-96"></div>
    </div>
  );
}

export default Chart;
