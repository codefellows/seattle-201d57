Part of your assignment today is to write your own user stories. Be sure to consider the multiple roles involved: the marketing research team, the developer, and the focus group participant who will be using the application. Try to write 4-5 user stories for each role.

As a reminder, user stories typically take the form of, “As X, I want Y, so that Z” but do not necessarily need that structure.

#Job Description/problem domain

You’ve been hired by a startup called BusMall, whose product is similar to the SkyMall catalog found in the seatback pockets on airplanes: a catalog of assorted high-markup products provided to a captive audience seeking a mental escape from the drudgery of travel.

BusMall wants to do market analysis on proposed products to test their potential customer interest… before actually putting them into the catalog and getting the manufacturing wheels in motion.

To make this market analysis maximally effective, BusMall wants you to build an app that displays potential products to individuals in focus groups (three products at a time, side-by-side-by-side) so you’ll need to manage the size and the aspect ratio of the images and perhaps edit them a bit; Mac users can do this in Preview (very cool!), plus, there are lots of online tools.

The app’s purpose is to have the group members choose which product, of the three displayed images, that they would be most likely to purchase, and then store, calculate, and visually display the resulting data.

To keep the product selection process as untainted as possible, you have been instructed to not allow any results to be shown to users until there have been a total of 25 selections made.

The marketing team is not only interested in the total number of clicks, but also the percentage of times that an item was clicked when it was shown. So, you’ll also need to keep track of how many times each image is displayed and do the calculations.

You are also responsible for the look and feel of the app, so don’t forget a custom font, color palette, layout with semantic HTML, and so on.

# As a member of the Market Research team I want:

1.  Easily accessed results with the math already done so that I don't have to do it;
2.  Correct and unbiased information so that I don't have to redo the study later;
3.  Randomized selection process for the information to remove any lurking variables;
4.  Limit the number of selection cycles to 25 per focus group attendant.

# As a Developer I want:

1.  To keep the process DRY to limit resources;
2.  A simple design to keep development time to a minimum;
3.  To limit the functionality to balance the needs of the Market Research team with the desires of the Focus Group Attendants;
4.  To Show off my deveoloper chops and impress the client;

# As a Focus Group Attendant I want:

1.  To do as little work as possible but get paid for it;
2.  An entertaining experience that I can brag to my friends about;
3.  To know how great I am for what I selected;
4.  To be rewarded at every step of the process.

# Build process

1.  DONE Set up file scaffolding
2.  DONE Download images
3.  DONE Set up coding environment (linter, readme, etc...)
4.  DONE Draw a wireframe of product
5.  DONE Set up index.html page.
6.  DONE Build wireframe in index.html with temporary placeholders
7.  Build app.js file, testing features one at a time.
    a. Build object constructor.
    b. Set document entry points.
    c. Set up state buckets. count, image holder, etc...
