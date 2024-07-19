export async function deleteDonationIdnex(index) {
  fetch(
    `https://sheet.best/api/sheets/ef88f364-071e-4660-ab3a-23198788b8e8/${index}`,
    {
      method: "DELETE",
    }
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
}
