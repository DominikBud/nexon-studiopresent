export async function writeDonationsApi(data) {
  fetch(
    "https://sheet.best/api/sheets/ef88f364-071e-4660-ab3a-23198788b8e8",

    {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    }
  )
    .then((r) => r.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.log("error", error);
    });
}
