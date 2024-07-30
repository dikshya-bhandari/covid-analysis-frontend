// const API_URL = "https://material-explorer-backend.onrender.com/api";
const API_URL = `http://localhost:4000/api`;

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
        resolve(res.data);
      })
      .catch((err) => reject(err));
  });

export { getDatefromDateRange };
