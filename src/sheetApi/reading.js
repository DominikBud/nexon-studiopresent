export async function readDonationsApi() {
  try {
    const response = await fetch(
      "https://sheet.best/api/sheets/ef88f364-071e-4660-ab3a-23198788b8e8"
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}
