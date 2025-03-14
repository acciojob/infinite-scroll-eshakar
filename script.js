//your code here!
const infiniteList = document.getElementById("infi-list");

let itemCount = 0;

function addItem() {
	const li = document.createElement('li');
	itemCount++;
	li.textContent = `Item ${itemCount}`;
	infiniteList.appendChild(li);
}

function addItems(count) {
	for (let i = 0; i < count; i++) {
		addItem();
	}
}

function checkScroll() {
	const scrollTop = infiniteList.scrollTop;
	const scrollHeight = infiniteList.scrollHeight;
	const clientHeight = infiniteList.clientHeight;

	if (scrollTop + clientHeight >= scrollHeight - 5) {
		addItems(2);
	}
}

addItems(10);

infiniteList.addEventListener('scroll', checkScroll);


