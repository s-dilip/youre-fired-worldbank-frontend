import Plot from "react-plotly.js";

export default function IndicatorChart() {
  return (
    <div>
      <Plot
        data={[
          {
            type: "scatter",
            x: ["One", "Two", "Three"],
            y: [1, 2, 3],
          },
        ]}
        layout={{ width: 700, height: 500, title: "A Fancy Plot" }}
      />
    </div>
  );
}
