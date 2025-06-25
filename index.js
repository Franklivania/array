const storeDisplay = async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    console.log("Products:", data);
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

const app = document.getElementById("app");
async function DisplayData() {
  const data = await storeDisplay();
  app.innerHTML = data
    .map(
      (item) => `
    <div key=${item?.id} class="product-container">
    <div id="image-container">
    <img src=${item?.image}>
    </div>
    <h3>${item?.title}</h3>
      <section>
        <aside>
        <span>
        <iconify-icon icon="emojione:star" width="24" height="24"></iconify-icon>
        <span>${item?.rating?.rate}</span>
        </span>
        <small>${item?.rating?.count} ratings</small>
        </aside>
        <aside>
          <h2>₦ ${item?.price}</h2>
        </aside>
        </section>
        <button type="button"> Buy Now</button>
    </div>
  `
    )
    .join("");
}

DisplayData();
