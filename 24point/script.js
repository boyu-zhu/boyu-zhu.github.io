// 用于检查数字是否可以通过加、减、乘、除运算得到 24，并返回计算过程
function checkSolution(numbers, path = []) {
    if (numbers.length === 1) {
        // 检查是否得到 24，并返回路径
        if (Math.abs(numbers[0] - 24) < 0.0001) {
            return { success: true, path };
        }
        return { success: false };
    }

    // 尝试不同的数字组合
    for (let i = 0; i < numbers.length; i++) {
        for (let j = 0; j < numbers.length; j++) {
            if (i !== j) {
                const newNumbers = numbers.filter((_, index) => index !== i && index !== j);

                // 所有四种运算的尝试
                const results = [
                    { result: numbers[i] + numbers[j], operation: `${numbers[i]} + ${numbers[j]}` },
                    { result: numbers[i] - numbers[j], operation: `${numbers[i]} - ${numbers[j]}` },
                    { result: numbers[i] * numbers[j], operation: `${numbers[i]} * ${numbers[j]}` },
                    { result: numbers[j] !== 0 ? numbers[i] / numbers[j] : NaN, operation: `${numbers[i]} / ${numbers[j]}` }
                ];

                for (const { result, operation } of results) {
                    if (isNaN(result)) continue; // 忽略无效的运算（如除以零）
                    const newSet = newNumbers.concat(result);
                    const newPath = [...path, operation];
                    const solution = checkSolution(newSet, newPath);
                    if (solution.success) {
                        return solution;
                    }
                }
            }
        }
    }
    return { success: false };
}

// 生成4个随机数并确保它们能够通过运算得到24
function generateNumbers() {
    let numbers = [];
    let solutionFound = false;

    while (!solutionFound) {
        // 随机生成 4 个数字，范围 1 到 10
        numbers = Array.from({ length: 4 }, () => Math.floor(Math.random() * 10) + 1);

        // 检查这些数字是否能够组合成 24
        const result = checkSolution(numbers);
        solutionFound = result.success;

        if (solutionFound) {
            // 显示生成的数字
            document.getElementById('num1').textContent = numbers[0];
            document.getElementById('num2').textContent = numbers[1];
            document.getElementById('num3').textContent = numbers[2];
            document.getElementById('num4').textContent = numbers[3];

            // 显示成功消息
            document.getElementById('result').textContent = '这四个数字可以通过加、减、乘、除运算得到 24！';

            // 显示运算步骤
            document.getElementById('steps').innerHTML = `
                <strong>运算过程：</strong><br>
                ${result.path.join(' -> ')}
            `;
        }
    }
}
