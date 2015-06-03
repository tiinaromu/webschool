# Webschool

Before you start check that you have all required tools set up. See what they are from [Getting Started](GETTINGSTARTED.md). After that you are good to go. You can find all exercises below and if you need help go and see [hints](HINTS.md). Have fun!

### I What we are going to do

We are building a twitter like web app that shows and stores short messages. I made one version of it and you can see it in action here:
[https://sleepy-savannah-8924.herokuapp.com/](https://sleepy-savannah-8924.herokuapp.com/).

**Exercises**

        1 Go on and try the app - see what it can do.
        2 Leave a comment and see it on main page
        3 Click on a comment on frontpage


### II Browse code
Let's first have a look at the code we have. Can you find html, css and javascript files?

        1 Look at the folder views. What do you think these are?
        2 Take a look at the folders public, routes, db. Those are the ones we'll use
        3 Look shortly att myApp.js file. That is the main file of our application.

#####More Info:

We are writing our app with [Node.js](https://nodejs.org/) and on top of Node.js we have [Express](http://expressjs.com/). Those two act as our building [platform](http://en.wikipedia.org/wiki/Cross-platform) or [framework](http://en.wikipedia.org/wiki/Software_framework). In our codebase you can find folder _node_modules_ . This folder contains all core files from Express and Node.js that are needed to run our app and all the libraries we are using in our app to make our job a bit easier. To handle all these libraries we are using [npm](http://en.wikipedia.org/wiki/Npm_(software)).

### III Making main page
We start by adding needed things to main page. We don't yet have a way to store data but let's write an [**hardcoded**](http://en.wikipedia.org/wiki/Hard_coding) version of it first.

**Exercises**

    1 Change the 'Hello world' to header.
            - In our example app the header is LiveFeed but you can name it yourself.

    2 Add a short introduction in p tag.
            - In our example app the introduction is 'Follow the livefeed of Codeschool' but again you can name it yourself

    3 Add one hardcoded comment to the page so we can see how it would look. We want to have actual message but also commenters name and time when the message was send on the page.
        - Add div element with class 'feed-container' and add div with class 'feed-element' inside it.
        - In feed-element make paragraph tag (<p></p>) with your mock data in it.
        - Under paragraph add two span-elements (<span></span>)
        - Give the first one class username and the second one timestamp
        - Add some name and some time to your span elements.
        - If you feel like it, add another comment. Just make sure you make new feed-element under the first one.

### IV Add some styles to page
Now we have some data on our page but it doesn't really look like anything yet. We already have some classes to our html elements. Now we can add some styles to the elements also. We want to write our styles to an external file to keep them in order. The file exists already in path public/stylesheets and is called style.css.

**Exercises**

    1 To actually use our stylesheet file we have to link it to our page. The link is added to the head-part of our html file. Add the row below to be the last element in the head-part.

        <link rel='stylesheet' href='/stylesheets/style.css' />

    2 Open our stylesheet file and look at it a bit. Can you notice some similarities with our html page? Maybe some familiar class names?

    3 In this stylesheet you can see some styles added to class introduction. Go and add that class to our introduction paragraph. Remember that classes are added to the opening tag of the element like this

    <div class="container">Example</div>.

    4. Now look at the stylesheet again. What happened in our page?


#####More info
[CSS](http://en.wikipedia.org/wiki/Cascading_Style_Sheets) comes from Cascading Style Sheets. In our css file we describe how we want our elements to look in our html page. Styles defined by class and element are valid in all instances of the same element or class.

### V Add Link to form
You already saw the form page with our test app. This form is used to send messages to our app. Let's add a link to form page from our front page. (Btw the source or destination is /form.)

**Exercises**

    1 Google how to make a html link.
    2 Add the link to our page
    3 Wrap the link with div tag with class "link-container".
    4 What is the actual link in the code we just added?
    5 Explain to your pair how linking works

### VI Adding some Javascript to the front
We can also run javascript in our browser. With that we can add some interaction to our page and make it more dynamic. We want to make a feature were when user clicks one comment they get a alert saying the name and count of characters in the message. Try it out in our test application.

**Exercises**

    1 Go to path public/javascripts and open myScripts.js file
    2 Complete first function getLengthOfText
    3 Then complete function prepareMessage
    4 Try to print your message to the console before returning it in the function (console.log('my string goes here'))
    5 Right click on the index page and select 'Inspect element'
    6 See our print in action in Console.

#####More info
We are using [jQuery](https://jquery.com/) to fetch data from our page in our javascript code. This is not the only way to do it but for our purposes it's handy. We already know how to right HTML and CSS but now we used [Javascript](http://en.wikipedia.org/wiki/JavaScript).


### VII Moving from Frontend to Backend (*)
Until now we have been doing things in the [frontend](http://en.wikipedia.org/wiki/Front_and_back_ends) of our application. For now it's enough to know that frontend is the part that user sees and interacts with. [Backend](http://en.wikipedia.org/wiki/Front_and_back_ends) in our application is the one who takes care of storing and handling data and giving it to frontend when needed. Again you don't need to understand everything. Go on and read the code and see what you can get out of it.

**Exercises**

    1 First take a look at the file message.js in path db/ and read the comment in the file.
    2 Next we'll go shortly back to front end. In your browser open page http://localhost:3000/form
    3 If you look at the data model that we have and the form that we send data with you notice that we send more data then we ask from user. That means that we have to add the missing data in the backend. So this is what we are saving to our database


### VIII Showing Data (*)
Now we'd like to show the actual data we fetch from [database](http://en.wikipedia.org/wiki/Database) instead of the hardcoded data we wrote to the index page. In path routes you can find index.js file. The first function there is the one that shows our index page.

**Exercises**

    1 While looking at index.js file note line 9 where it says

    res.render('index', { messages: entries, count: count });
    2 Only thing we need to understand from that is that we want to show page index and give etries and count data to it. This means that the page can use the data on entries and count as it wants.

    2 Go back to our index.hjs file and find the element with class 'feed-container'.
    3 Remove the mock data we wrote and copy paste this instead of it

    {{#messages}}
        <div class="feed-element">
            <p>{{ message }}</p>
            <span>by</span>
            <span class="username">{{ user }}</span>
            <span>sent at</span>
            <span class="timestamp">{{ time }}</span>
        </div>
    {{/messages}}

     4 Now try to fill your form few times and see what happens - our data flows nicely!

### IX Modifying Data (*)
Next we want to modify our data a bit. We'd like to add the total count of the messages to the page. You already noticed that we were passing along with entries count to our page. We are just not using this data yet.

**Exercises**

    1 First add needed tag to our index page

    <div class="count-container">Total count of messages: {{ count }}</div>

    2 Then let's get the actual data. Go to folder libraries and find file myAppJS.js

    3 Complete the lenghtOfEntries function in the file. The idea is to ask the lenght of the entries

    4 See what happens on the page

### GREAT JOB! You finished all the exercises
If you still feel doing something go ahead and see the extras below. You don't have to do the extras in order you can choose what suits you best.

### Need help?
If you need help at any point just ask, google or see hints from [here](/HINTS.md).

### EXTRA: Some styling
Feel free to try some other styles and add other content to our page. Go a head and play around! By googling you can find more style options.

### EXTRA: Do some more things in frontend javascript
Feel free to try some other functions. Could you make the alert message show on the page somehow? You might want to google for help in this one.

### EXTRA: Making request
Think of a conversation between two colleagues.

    Frank: Hey Bev, I have the latest numbers of our team here. Could you take them?
    Beverly: Yeah, consider it done!

We'll do the exact same thing. Main difference is that our colleagues in this case only understand certain kind of speech. We'll do it through [http](http://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol) request.

Actually when we press _submit_ on our form we'll make a post request to url

    localhost:3000/submit

This might seem as magic but if you take a look at the form.hjs file you'll notice that on line 11 where we start our form we define that action is "/submit" and method is "post". So after pressing submit our request goest to our main file myApp.js. On line 37 you'll see code like this:

    app.post('/submit', form.submit);

This code means that our application can react to our post and will do it with submit function in file routes/form.js.

    1 Go to form.js in routes/ folder
    2 What do you think function submit is actually doing?
    3 No need to understand it all but try to guess at least what'll happen.
    4 If you want you could try to use our test app again in [https://sleepy-savannah-8924.herokuapp.com/](https://sleepy-savannah-8924.herokuapp.com/)
    5 for more detailed explanation go to HINTS.md
# LICENSE

[The MIT License (MIT)](LICENSE.txt)