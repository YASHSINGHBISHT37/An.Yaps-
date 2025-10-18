// import React, { useEffect, useState } from "react";
// import { Line } from "react-chartjs-2";
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Tooltip,
//   Legend,
// } from "chart.js";

// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

// const Data = () => {
//   const [chartData, setChartData] = useState({});

//   useEffect(() => {
//     // Example data (replace with your API data)
//     const dates = ["Sep 20", "Sep 22", "Sep 24", "Sep 26", "Sep 28", "Oct 1", "Oct 3", "Oct 5", "Oct 7", "Oct 10", "Oct 12"];
//     const prices = [236, 238, 237, 251, 255, 253, 256, 258, 257, 245, 247];

//     setChartData({
//       labels: dates,
//       datasets: [
//         {
//           label: "AAPL",
//           data: prices,
//           fill: true,
//           backgroundColor: "rgba(34,197,94,0.2)", // green gradient
//           borderColor: "rgba(34,197,94,1)", // green line
//           tension: 0.4, // smooth curve
//           pointRadius: 0, // hide points
//         },
//       ],
//     });
//   }, []);

//   const options = {
//     responsive: true,
//     plugins: {
//       legend: {
//         display: false,
//       },
//     },
//     scales: {
//       x: {
//         grid: { display: false },
//       },
//       y: {
//         grid: { color: "#2c2c2c" }, // subtle horizontal grid
//       },
//     },
//   };

//   return (
//     <div className="w-full max-w-2xl mx-auto p-4 bg-gray-900 rounded-lg text-white">
//       <h2 className="text-xl font-bold mb-2">Apple Inc. (AAPL)</h2>
//       <p className="text-green-400 mb-4">$247.66 +4.63%</p>
//       <Line data={chartData} options={options} />
//     </div>
//   );
// };

// export default Data;
