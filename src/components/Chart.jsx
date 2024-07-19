import { Legend, Pie, PieChart, Tooltip } from "recharts";

const colors = ["#0099ff", "#80c4f2", "#266a98", "#000000"];
const names = [
  `LÁMPÁS ’92ALAPÍTVÁNY`,
  `SZENT ISTVÁN KIRÁLY ZENEI ALAPÍTVÁNY`,
  `AUTIZMUS ALAPÍTVÁNY`,
  `ÉLELMISZERBANK EGYESÜLET`,
];

function Chart({ countDonations }) {
  const resultArray = Object.entries(countDonations).map(([key, value], _i) => {
    return { name: names[_i], value: value, fill: colors[_i] };
  });
  console.log(resultArray);

  return (
    <PieChart width={1300} height={700}>
      <Pie
        data={resultArray}
        dataKey={"value"}
        nameKey={"name"}
        cx="50%"
        cy="50%"
      />
      <Legend />
      <Tooltip />
    </PieChart>
  );
}

export default Chart;
