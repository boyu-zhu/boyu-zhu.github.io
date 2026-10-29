import itertools
import operator
import random

# 操作符和对应的函数映射
operations = {
    '+': operator.add,
    '-': operator.sub,
    '*': operator.mul,
    '/': operator.truediv
}

def calculate(a, b, op):
    """尝试执行二元运算，处理除零情况"""
    try:
        return operations[op](a, b)
    except ZeroDivisionError:
        return None

def solve_24(numbers):
    """尝试找到一组算式使结果为24"""
    for perm in itertools.permutations(numbers):
        for ops in itertools.product(operations.keys(), repeat=3):
            expressions = [
                f'(({perm[0]} {ops[0]} {perm[1]}) {ops[1]} {perm[2]}) {ops[2]} {perm[3]}',
                f'({perm[0]} {ops[0]} ({perm[1]} {ops[1]} {perm[2]})) {ops[2]} {perm[3]}',
                f'({perm[0]} {ops[0]} {perm[1]}) {ops[1]} ({perm[2]} {ops[2]} {perm[3]})',
                f'{perm[0]} {ops[0]} (({perm[1]} {ops[1]} {perm[2]}) {ops[2]} {perm[3]})',
                f'{perm[0]} {ops[0]} ({perm[1]} {ops[1]} ({perm[2]} {ops[2]} {perm[3]}))'
            ]
            for expr in expressions:
                try:
                    if abs(eval(expr) - 24) < 1e-6:  # 检查结果是否接近24
                        return expr
                except ZeroDivisionError:
                    continue
    return None

def generate_random_numbers():
    """生成4个随机数字"""
    return [random.randint(1, 13) for _ in range(4)]

def main():
    print("欢迎来到24点游戏！")
    while True:
        # print("按任意键生成4个随机数字，或输入 'exit' 退出。")
        # command = input("输入: ")
        # if command.lower() == 'exit':
        #     break

        numbers = generate_random_numbers()
        solution = solve_24(numbers)
        if not solution:
            continue
        print(f"随机生成的数字是: {numbers}")

        

        command = input("输入: ")
        if command.lower() == 'exit':
            break

        # solution = solve_24(numbers)
        # if solution:
        print(f"找到解决方案: {solution} = 24")
        # else:
        #     print("没有找到可以得到24的解决方案。")

if __name__ == "__main__":
    main()
