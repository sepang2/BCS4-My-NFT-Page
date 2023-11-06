const clock = document.querySelector(".clock");
const quotes = document.querySelector(".quotes");
const newQuotes = document.querySelector(".new-quotes");
const newQuotesInput = document.querySelector(".new-quotes-input");
const nftImg = document.querySelector(".nft-img");
const nftName = document.querySelector(".nft-name");
const nftDesc = document.querySelector(".nft-desc");

function getTime() {
  const date = new Date();

  let hrs = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let amPm = "AM";

  if (hrs > 11) amPm = "PM";
  if (hrs > 12) hrs %= 12;

  clock.innerText = `${amPm} ${String(hrs).padStart(2, "0")}:${String(
    min
  ).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
}

getTime();
setInterval(getTime, 1000);

const QUOTES_LIST = "quotesList";

function getQuotes() {
  let savedQuotes = localStorage.getItem(QUOTES_LIST);

  if (!savedQuotes) {
    localStorage.setItem(QUOTES_LIST, JSON.stringify(["~워라밸~"]));

    savedQuotes = localStorage.getItem(QUOTES_LIST);
  }

  let parsedQuotes = JSON.parse(savedQuotes);
  quotes.innerText =
    parsedQuotes[Math.floor(Math.random() * parsedQuotes.length)];
}

getQuotes();

function onClickNewQuotes() {
  if (!newQuotesInput.value) return;

  // 로컬 스토리지에 저장
  let savedQuotes = localStorage.getItem(QUOTES_LIST);
  let parsedQuotes = JSON.parse(savedQuotes);

  parsedQuotes.push(newQuotesInput.value);

  localStorage.setItem(QUOTES_LIST, JSON.stringify(parsedQuotes));

  // 현재 페이지 반영
  quotes.innerText = newQuotesInput.value;
  newQuotesInput.value = "";
  quotes.style.display = "block";
  newQuotes.style.display = "none";
}

function onClickQuotes() {
  quotes.style.display = "none";
  newQuotes.style.display = "block";
}

async function getNft() {
  const response = await axios.get(
    "https://olbm.mypinata.cloud/ipfs/QmY6S4XofhpHVujy24pdpYvXppCN1CRWfWeLQZFsTG7CQt"
  );

  nftImg.src = response.data.image;
  nftName.innerText = response.data.name;
  nftDesc.innerText = response.data.description;
}

getNft();
