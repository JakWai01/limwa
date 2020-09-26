import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

function Graph({ days }) {
  const temp = [
    {
      name: days[0].sol,
      averageTemp: days[0].temperatureAverage,
      maxTemp: days[0].temperatureMax,
      minTemp: days[0].temperatureMin,
    },
    {
      name: days[1].sol,
      averageTemp: days[1].temperatureAverage,
      maxTemp: days[1].temperatureMax,
      minTemp: days[1].temperatureMin,
    },
    {
      name: days[2].sol,
      averageTemp: days[2].temperatureAverage,
      maxTemp: days[2].temperatureMax,
      minTemp: days[2].temperatureMin,
    },
    {
      name: days[3].sol,
      averageTemp: days[3].temperatureAverage,
      maxTemp: days[3].temperatureMax,
      minTemp: days[3].temperatureMin,
    },
    {
      name: days[4].sol,
      averageTemp: days[4].temperatureAverage,
      maxTemp: days[4].temperatureMax,
      minTemp: days[4].temperatureMin,
    },
    {
      name: days[5].sol,
      averageTemp: days[5].temperatureAverage,
      maxTemp: days[5].temperatureMax,
      minTemp: days[5].temperatureMin,
    },
    {
      name: days[6].sol,
      averageTemp: days[6].temperatureAverage,
      maxTemp: days[6].temperatureMax,
      minTemp: days[6].temperatureMin,
    },
  ];

  const pres = [
    {
      name: days[0].sol,
      averagePres: days[0].pressureAverage,
      maxPres: days[0].pressureMax,
      minPres: days[0].pressureMin,
    },
    {
      name: days[1].sol,
      averagePres: days[1].pressureAverage,
      maxPres: days[1].pressureMax,
      minPres: days[1].pressureMin,
    },
    {
      name: days[2].sol,
      averagePres: days[2].pressureAverage,
      maxPres: days[2].pressureMax,
      minPres: days[2].pressureMin,
    },
    {
      name: days[3].sol,
      averagePres: days[3].pressureAverage,
      maxPres: days[3].pressureMax,
      minPres: days[3].pressureMin,
    },
    {
      name: days[4].sol,
      averagePres: days[4].pressureAverage,
      maxPres: days[4].pressureMax,
      minPres: days[4].pressureMin,
    },
    {
      name: days[5].sol,
      averagePres: days[5].pressureAverage,
      maxPres: days[5].pressureMax,
      minPres: days[5].pressureMin,
    },
    {
      name: days[6].sol,
      averagePres: days[6].pressureAverage,
      maxPres: days[6].pressureMax,
      minPres: days[6].pressureMin,
    },
  ];

  const wind = [
    {
      name: days[0].sol,
      averageWind: days[0].windspeedAverage,
      maxWind: days[0].windspeedMax,
      minWind: days[0].windspeedMin,
    },
    {
      name: days[1].sol,
      averageWind: days[1].windspeedAverage,
      maxWind: days[1].windspeedMax,
      minWind: days[1].windspeedMin,
    },
    {
      name: days[2].sol,
      averageWind: days[2].windspeedAverage,
      maxWind: days[2].windspeedMax,
      minWind: days[2].windspeedMin,
    },
    {
      name: days[3].sol,
      averageWind: days[3].windspeedAverage,
      maxWind: days[3].windspeedMax,
      minWind: days[3].windspeedMin,
    },
    {
      name: days[4].sol,
      averageWind: days[4].windspeedAverage,
      maxWind: days[4].windspeedMax,
      minWind: days[4].windspeedMin,
    },
    {
      name: days[5].sol,
      averageWind: days[5].windspeedAverage,
      maxWind: days[5].windspeedMax,
      minWind: days[5].windspeedMin,
    },
    {
      name: days[6].sol,
      averageWind: days[6].windspeedAverage,
      maxWind: days[6].windspeedMax,
      minWind: days[6].windspeedMin,
    },
  ];

  return (
    <>
      <div className="graphContainer">
        <ResponsiveContainer width="33%" height={400}>
          <LineChart
            data={temp}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="maxTemp"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="averageTemp" stroke="#82ca9d" />
            <Line type="monotone" dataKey="minTemp" stroke="#eb4034" />
          </LineChart>
        </ResponsiveContainer>
        <ResponsiveContainer width="33%" height={400}>
          <LineChart
            width={500}
            height={300}
            data={pres}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="maxPres"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="averagePres" stroke="#82ca9d" />
            <Line type="monotone" dataKey="minPres" stroke="#eb4034" />
          </LineChart>
        </ResponsiveContainer>
        <ResponsiveContainer width="33%" height={400}>
          <LineChart
            width={500}
            height={300}
            data={wind}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="maxWind"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="averageWind" stroke="#82ca9d" />
            <Line type="monotone" dataKey="minWind" stroke="#eb4034" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}

export default Graph;
