$(function() {
    $('.feed-element').on('click', function() {
        var username = $(this).find('.username').text();
        var message = $(this).find('.message').text();
        var lengthOfText = getLengthOfText(message);
        var text = prepareMessage(username, lengthOfText);
        if(text !== '') {
            alert(text);
        }
    });

    function getLengthOfText(text) {
        // Instead of 0 write your own implementation
        var lengthOfText = 0;
        return lengthOfText;
    }

    function prepareMessage(user, count) {
        // Instead of '' write your own implementation
        var stringMessage = '';
        return stringMessage;
    }
});