var $add = document.querySelector('#addButton');
var $taskInput = document.querySelector('#taskInput');
var $taskList = document.querySelector('.task-list');
var $doneButtons = document.querySelectorAll('.task-list .done');
var $removeButtons = document.querySelectorAll('.task-list .remove');
var $showHide = document.querySelector('#showHideButton');
var $form = document.querySelector('#todoForm');

$form.addEventListener('submit', function (event) {
    event.preventDefault();
})

$showHide.addEventListener('click', function () {
    $taskList.classList.toggle('hide-done');
});

$add.addEventListener('click', function () {
    if ($taskInput.value.length < 3) return;

    var $li = document.createElement('li');
    $li.classList.add('task-list-item'); 

    var $newTask = document.createElement('span');
    $newTask.classList.add('task');
    $newTask.textContent = $taskInput.value;
    $taskInput.value = '';
    $li.appendChild($newTask);

    var $newButtons = document.createElement('div');
    $newButtons.classList.add('list-buttons');
    $li.appendChild($newButtons);

    var $doneButton = document.createElement('button');
    $doneButton.classList.add('done', 'button');

    var $doneCheck = document.createElement('span');
    $doneCheck.classList.add('check');
    $doneCheck.textContent = '✔';
    $doneButton.appendChild($doneCheck);

    $newButtons.appendChild($doneButton);

    $doneButton.addEventListener('click', doneHandler);

    var $removeButton = document.createElement('button');
    $removeButton.textContent = '×';
    $removeButton.classList.add('remove');
    $removeButton.classList.add('button');
    $newButtons.appendChild($removeButton);

    $removeButton.addEventListener('click', removeHandler);

    $taskList.appendChild($li);

});

$doneButtons.forEach(function (item) {
    item.addEventListener('click', doneHandler);
});

$removeButtons.forEach(function (item) {
    item.addEventListener('click', removeHandler);
});


function doneHandler() {
    this.closest('li').classList.toggle('task-done');
}

function removeHandler() {
    this.closest('li').remove();
}