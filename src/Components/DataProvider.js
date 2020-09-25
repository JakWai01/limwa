const DataProvider = ({ token, children }) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [days, setDays] = useState([]);
  const [format, setFormat] = useState("K");

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://api.nasa.gov/insight_weather/?api_key=etIV1rEZcwSjjQq1qreyKogMVfTFsIgkMN1QhG6u&feedtype=json&ver=1.0"
      );
      const data = res.json();

      setDays(days.map((day) => convertToInternalDay(data, day, format)));
      setLoading(false);
    };
    fetchData();
  }, []).catch((error) => setError(error));

  const index = [0, 1, 2, 3, 4, 5, 6];

  return children({
    loading,
    error,
    days: days.map((day, index) => convertToInternalDay(day, format, index)),
    format,
    setFormat,
  });
};

const convertToInternalDay = (data, format, index) => {
  return {
    sol: data.sol_keys[index],
    temperatureAverage:
      format === "K"
        ? ((data[data.sol_keys[index]].AT.av - 32) * 5) / 9 + 273.15
        : format === "C"
        ? ((data[data.sol_keys[index]].AT.av - 32) * 5) / 9
        : data[data.sol_keys[index]].AT.av,
    temperatureMax:
      format === "K"
        ? ((data[data.sol_keys[index]].AT.mx - 32) * 5) / 9 + 273.15
        : format === "C"
        ? ((data[data.sol_keys[index]].AT.mx - 32) * 5) / 9
        : data[data.sol_keys[index]].AT.mx,
    temperatureMin:
      format === "K"
        ? ((data.sol_keys[index].AT.mn - 32) * 5) / 9 + 273.15
        : format === "C"
        ? ((data[data.sol_keys[index]].AT.mn - 32) * 5) / 9
        : data[data.sol_keys[index]].AT.mn,
    temperatureSamples:
      format === "K"
        ? ((data[data.sol_keys[index]].AT.ct - 32) * 5) / 9 + 273.15
        : format === "C"
        ? ((data[data.sol_keys[index]].AT.ct - 32) * 5) / 9
        : data[data.sol_keys[index]].AT.ct,
    pressureAverage:
      format === "K"
        ? ((data[data.sol_keys[index]].PRE.av - 32) * 5) / 9 + 273.15
        : format === "C"
        ? ((data[data.sol_keys[index]].PRE.av - 32) * 5) / 9
        : data[data.sol_keys[index]].PRE.av,
    pressureMax:
      format === "K"
        ? ((data[data.sol_keys[index]].PRE.mx - 32) * 5) / 9 + 273.15
        : format === "C"
        ? ((data[data.sol_keys[index]].PRE.mx - 32) * 5) / 9
        : data[data.sol_keys[index]].PRE.mx,
    pressureMin:
      format === "K"
        ? ((data[data.sol_keys[index]].PRE.mn - 32) * 5) / 9 + 273.15
        : format === "C"
        ? ((data[data.sol_keys[index]].PRE.mn - 32) * 5) / 9
        : data[data.sol_keys[index]].PRE.mn,
    pressureSamples:
      format === "K"
        ? ((data[data.sol_keys[index]].PRE.ct - 32) * 5) / 9 + 273.15
        : format === "C"
        ? ((data[data.sol_keys[index]].PRE.ct - 32) * 5) / 9
        : data[data.sol_keys[index]].PRE.ct,
    windspeedAverage:
      format === "K"
        ? ((data[data.sol_keys[index]].HWS.av - 32) * 5) / 9 + 273.15
        : format === "C"
        ? ((data[data.sol_keys[index]].HWS.av - 32) * 5) / 9
        : data[data.sol_keys[index]].HWS.av,
    windspeedMax:
      format === "K"
        ? ((data[data.sol_keys[index]].HWS.mx - 32) * 5) / 9 + 273.15
        : format === "C"
        ? ((data[data.sol_keys[index]].HWS.mx - 32) * 5) / 9
        : data[data.sol_keys[index]].HWS.mx,
    windspeedMin:
      format === "K"
        ? ((data[data.sol_keys[index]].HWS.mn - 32) * 5) / 9 + 273.15
        : format === "C"
        ? ((data[data.sol_keys[index]].HWS.mn - 32) * 5) / 9
        : data[data.sol_keys[index]].HWS.mn,
    windspeedSamples:
      format === "K"
        ? ((data[data.sol_keys[index]].HWS.ct - 32) * 5) / 9 + 273.15
        : format === "C"
        ? ((data[data.sol_keys[index]].HWS.ct - 32) * 5) / 9
        : data[data.sol_keys[index]].HWS.ct,
  };
};
