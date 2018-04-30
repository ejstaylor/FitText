# FitText
A responsive text container.

I have used the jquery plugin jquery.textfill.js from https://github.com/jquery-textfill/jquery-textfill

# Demo
Clone the repo and open fitText.html in your browser.

# Unit Tests
I have not added any unit tests to this solution - I am using a jquery library for the logic to fit the text to the container, and that library came with it's own unit test.
I think this element lends itself to an end-to-end test. I would like to see a test that sets the values of the text and slider inputs, then tests the resulting font size.

# Improvements
There are many ways to improve this solution!

The size of the output font cannot be any smaller than 1px, so sometimes there is no choice but to overflow the output container.
This could be avoided by setting a limit on the length of the text, or adding a horizontal scrollbar onto the container.

It is also no use to have font as small as 1px as users won't be able to read it - the font should have a minumum value of say 5px.

Similarly, there is no point in having an output display with zero width - there should be a user-friendly min width of 50px or so.

Finally, this responsive text container is functional but rather ugly! I would like to see the styling of the page improved.