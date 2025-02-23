// 获取 DOM 元素
const todoInput = document.getElementById('todo-input');
const addButton = document.getElementById('add-button');
const todoList = document.getElementById('todo-list');
const deleteCompletedButton = document.getElementById('delete-completed');

// 存储待办事项的数组
let todos = [];

// 渲染待办事项列表
function renderTodos() {
    // 清空列表
    todoList.innerHTML = '';

    // 遍历待办事项数组
    todos.forEach((todo, index) => {
        // 创建列表项
        const listItem = document.createElement('li');

        // 创建复选框
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = todo.completed;
        checkbox.addEventListener('change', () => {
            // 切换待办事项的完成状态
            todos[index].completed = !todos[index].completed;
            // 重新渲染列表
            renderTodos();
        });

        // 创建文本节点
        const text = document.createTextNode(todo.text);

        // 如果待办事项已完成，添加 completed 类
        if (todo.completed) {
            listItem.classList.add('completed');
        }

        // 将复选框和文本节点添加到列表项中
        listItem.appendChild(checkbox);
        listItem.appendChild(text);

        // 将列表项添加到待办事项列表中
        todoList.appendChild(listItem);
    });
}

// 添加新的待办事项
function addTodo() {
    const text = todoInput.value.trim();
    if (text !== '') {
        // 创建新的待办事项对象
        const newTodo = {
            text: text,
            completed: false
        };

        // 将新的待办事项添加到数组中
        todos.push(newTodo);

        // 清空输入框
        todoInput.value = '';

        // 重新渲染列表
        renderTodos();
    }
}

// 删除已完成的待办事项
function deleteCompletedTodos() {
    // 过滤掉已完成的待办事项
    todos = todos.filter(todo => !todo.completed);

    // 重新渲染列表
    renderTodos();
}

// 为添加按钮添加点击事件监听器
addButton.addEventListener('click', addTodo);

// 为删除已完成事项按钮添加点击事件监听器
deleteCompletedButton.addEventListener('click', deleteCompletedTodos);

// 为输入框添加键盘事件监听器，按下 Enter 键时添加待办事项
todoInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addTodo();
    }
});

// 初始渲染
renderTodos();