$(document).ready(function() {
    $('#taskForm').on('submit', function(e) {
        e.preventDefault();
        var newTask = $('#taskInput').val();
        if(newTask !== '') {
            var listItem = $('<li style="padding: 8px;"></li>').text(newTask);
            listItem.on('click', function() {
                $(this).css('text-decoration', 'line-through');
            });
            $('#list').append(listItem);
            $('#taskInput').val('');
        }
    });
});