# Codeschool hints

### I What are we going to do

	No hints needed here :)

### II Browse Code

    No hints needed here :)

### III Making main page

1 Change the 'Hello world' to header. Copy and paste this:

		<h1>Livefeed</h1>


2 Add a short introduction in p tag. Copy and paste this under h1 tag.

	<p>Follow the livefeed of Codeschool</p>

3 Find element with class 'feed-container'

 		<div class="feed-container"></div>

Add feed-element to your feed-container so copy paste this inside feed-container

		<div class="feed-element">
        	<p>Static test data to mock message</p>
        	<span class="username">by Commenter</span>
        	<span class="timestamp">sent at  May 19th 2015, 8.34 pm</span>
    	</div>

### IV Add some styles to page
1 Your head-tag should look like this:

	<head>
    	<title>Livefeed</title>
    	<link rel='stylesheet' href='/stylesheets/style.css' />
	</head>

2 & 3 You can define styles by classes or elements. For example in our stylesheet we have style for h1 level elements and for example introduction class. Your introduction should look like

    <p class="introduction">Follow the livefeed of Codeschool</p>



### V Add Link to form

Your link should look like this

	<div class="link-container">
        <a href="/form">Want to join? Leave your comment!</a>
    </div>

### VI Adding some Javascript to the front
Complete functions. Your functions could look like this:

    function getLengthOfText(text) {
        return text.length;
    }

    function prepareMessage(user, count) {
        return user + ' wrote ' + count + ' characters';
    }

### VII Moving from Frontend to Backend

    No hints needed here :)

### VIII Showing Data
Your body should look like this:

    <body>
        <div class="image-container"></div>
        <div class="container">
            <h1>Livefeed</h1>
            <p class="introduction">Follow the livefeed of Codeschool</p>
            <div class="feed-container">
                {{#messages}}
                    <div class="feed-element">
                        <p class="message">{{ message }}</p>
                        <span>by</span>
                        <span class="username">{{ user }}</span>
                        <span>sent at</span>
                        <span class="timestamp">{{ time }}</span>
                    </div>
                {{/messages}}
            </div>
            <div class="link-container">
                <a href="/form">Want to join? Leave your comment!</a>
            </div>
        </div>
    </body>


### IX Modifying Data
Add this to index.hjs

    <div class="count-container">Total count of messages: {{ count }}</div>

You function shoudl look like this:

    function lenghtOfEntries(entries) {
        return entries.length;
    }


### EXTRA: Making Request
Here is the code we have on function submit.

	exports.submit = function(req, res) {
    	var newEntry = req.body;

    	if(_.isEmpty(newEntry.user)) {
        	newEntry.user = 'Anonymous';
    	}

    	db.saveEntry(newEntry)
    	.then(function(message) {
        	res.status(200).redirect('/');
    	})
    	.catch(function(err) {
        	console.log('Saving to db failed ', err);
        	res.status(400).end();
    	});
	};

The first line is basicly syntax we get from using Express. Don't worry about it. All it is trying to say is that submit is a function that we use to handle our request.

		exports.submit = function(req, res) {

On this line we define new variable __newEntry__ and we assign it to be same as the body of our request.

    	var newEntry = req.body;

The body of our request is the data we get from our form so it will be something like:

	{"user":"Sarah","message":"Hello world"}

On these lines we check if our data has username in it. If not we'll add Anonymous to the name. This way we'll make sure we always have a name for user.

    	if(_.isEmpty(newEntry.user)) {
        	newEntry.user = 'Anonymous';
    	}

Now comes the interesting part. We call the function saveEntry of our db.

    	db.saveEntry(newEntry)


    	.then(function(message) {
        	res.status(200).redirect('/');
    	})
    	.catch(function(err) {
        	console.log('Saving to db failed ', err);
        	res.status(400).end();
    	});
	};
