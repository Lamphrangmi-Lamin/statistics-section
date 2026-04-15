const downloadsCount = document.getElementById("downloadsCount");
const paidUsersCount = document.getElementById("paidUsersCount");
const imagesCount = document.getElementById("imagesCount");

// Fetch data from API
async function fetchStatistics() {
  try {
    const response = await fetch(
      "https://www.greatfrontend.com/api/projects/challenges/statistics-metrics?latest=true",
    );

    if (!response.ok) {
        throw new Error("HTTP error: " + response.status);
    }

    const result = await response.json();
    return result.data;
  } catch (error) {
    console.log("ERROR: " + error);
  }
}

async function main() {
    const data = await fetchStatistics();

    data.map(item => {
        item.value = item.value.toLocaleString("en-US");
    })

    downloadsCount.innerText = data[0].value;
    paidUsersCount.innerText = data[1].value;
    imagesCount.innerText = data[2].value;
}

// Rendering statistics
main();