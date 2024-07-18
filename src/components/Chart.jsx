import { Legend, Pie, PieChart, Tooltip } from "recharts";

function Chart({ countDonations }) {
  const resultArray = Object.entries(countDonations).map(([key, value]) => {
    return { name: key, value: value };
  });
  console.log(resultArray);

  return (
    <PieChart width={730} height={250}>
      <Pie
        data={resultArray}
        dataKey={"value"}
        nameKey={"name"}
        cx="50%"
        cy="50%"
        fill="#1f425a"
      />
      <Legend />
      <Tooltip />
    </PieChart>
  );
}

export default Chart;
