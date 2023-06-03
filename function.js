// Viết hàm in ra câu chào
(function (strHelo) {
	console.log(strHelo);
})("Xin chào Rikkei Academy");

// Tính bình phương của một số
let squareNumber = function (number) {
	let square = Math.pow(number, 2);
	let result = console.log(`Kết quả bình phương: ${square}`);
	return result;
};
squareNumber(6);

// Tính thế kỷ của một năm nhập vào từ bàn phím
let getCentury = () => {
	let century, year, result;
	do {
		year = Number(prompt("Nhập vào một năm bất kỳ"));
		if (!isNaN(year) && year % 100 == 0) {
			century = (year / 100).toFixed();
			break;
		} else if (!isNaN(year) && year % 100 != 0) {
			century = parseInt(year / 100) + 1;
			break;
		} else prompt("Năm không hợp lệ. Vui lòng nhập lại");
	} while (true);

	result = console.log(`Năm ${year} thuộc thế kỷ ${century}`);
	return result;
};

// Cắt chuỗi và lấy 10 ký tự đầu rồi thêm ... cuối chuỗi mới
function cutString(str) {
	let result;
	if (str.length >= 15) {
		let newString = str.slice(0, 10);
		result = console.log(`Chuỗi mới: ${newString.concat("...")}`);
	} else result = console.log("Chỉ cắt chuỗi dài hơn 15 ký tự");
	return result;
}

// Viết function chuẩn hóa một từ, chỉ viết hoa chữ cái đầu tiên
let upperFirst = (word) => {
	let result = "";
	result += word[0].toUpperCase();
	let length = word.length;
	for (let i = 1; i < length; i++) {
		result += word[i].toLowerCase();
	}
	return console.log(`${word} ---> ${result}`);
};
upperFirst("riKKEii");

// Function tìm Max
function getMax(array) {
	let max;
	for (let i = 0; i < array.length; i++) {
		max = array[i];
		if (array[i] < array[i + 1]) max = array[i + 1];
	}
	return console.log(`Max ---> ${max}`);
}

//Function trả về số chẵn, lẻ, số nguyên tố, hoàn hảo
let result = (input, output) => console.log(`${input} ---> ${output}`);

function checkEvenOrOdd(number) {
	let message;
	if (number % 2 == 0) message = "số chẵn";
	else message = "số lẻ";
	return result(number, message);
}

function checkPrimeNumber(number, result) {
	let message;

	if (number <= 1) {
		message = "Không phải số nguyên tố";
		return result(number, message);
	}
	for (let i = 2; i <= Math.sqrt(number); i++) {
		if (number % i == 0) {
			message = "Không phải số nguyên tố";
			return result(number, message);
		} else {
			message = "số nguyên tố";
		}
	}
	message = "số nguyên tố";
	return result(number, message);
}

function checkPerfectNumber(number, result) {
	let message;
	let sum = 0;
	for (let i = 1; i <= number; i++) {
		sum += i;
		if (number % i == 0 && sum == number) {
			message = "số hoàn hảo";
			break;
		} else message = "Không phải số hoàn hảo";
	}
	return result(number, message);
}

// Tíng trung bình cộng của 1 mảng số
let getAvgArrNumber = (arrNumber) => {
	let sum = 0;
	for (let i = 0; i < arrNumber.length; i++) {
		sum += arrNumber[i];
	}
	return sum / arrNumber.length;
};

// nhập vào số n và in ra n số nguyên tăng dần
function getIncreaseArrNumber(number, result) {
      let increaseArr = "";
      for (let i = 0; i <= number; i++) {
            increaseArr += i + " ";
      }
      return result(number, increaseArr);
}
getIncreaseArrNumber(5, result);