// 获取 DOM 元素
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const operatorSelect = document.getElementById('operator');
const calculateButton = document.getElementById('calculate');
const resultDiv = document.getElementById('result');

// 为计算按钮添加点击事件监听器
calculateButton.addEventListener('click', function () {
    // 获取输入的值和选择的运算符
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const operator = operatorSelect.value;

    // 检查输入是否有效
    if (isNaN(num1) || isNaN(num2)) {
        resultDiv.textContent = 'Please enter valid numbers.';
        return;
    }

    let result;
    // 根据运算符进行相应的计算
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                resultDiv.textContent = 'Cannot divide by zero.';
                return;
            }
            result = num1 / num2;
            break;
    }

    // 显示计算结果
    resultDiv.textContent = `Result: ${result}`;
});