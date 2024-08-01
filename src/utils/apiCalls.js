const API_URL = "https://covid-analysis-api.onrender.com/api";
// const API_URL = `http://localhost:4000/api`;

const getDatefromDateRange = (startDate, endDate) =>
  new Promise((resolve, reject) => {
    fetch(`${API_URL}/getDatafromDateRange`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ startDate, endDate }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === "success") resolve(res.data);
        else reject(res.message);
      })
      .catch((err) => reject(err));
  });

const getDatafromDate = (date) =>
  new Promise((resolve, reject) => {
    fetch(`${API_URL}/getDatafromDate`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ date }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.status === "success") resolve(res.data);
        else reject(res.message);
      })
      .catch((err) => reject(err));
  });

export { getDatefromDateRange, getDatafromDate };
