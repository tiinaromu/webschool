$(function() {
    $('.feed-element').on('click', function() {
        var username = $(this).find('.username').text();
        var message = $(this).find('.message').text();
        var lengthOfText = getLengthOfText(message);
        var text = prepareMessage(username, lengthOfText);
        console.log(text);
        alert(text);
    });

    function getLengthOfText(text) {
        return text.length;
    }

    function prepareMessage(user, count) {
        return user + ' wrote ' + count + ' characters';
    }
});