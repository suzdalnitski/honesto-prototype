Due to the limited amount of time available to work on this prototype, I've had to make some tradeoffs, and omit some features. This document contains the details.

# How to demo
1. Click on the "login" button
2. On the "share feedback" page, click the "fill out" button, and proceed to give feedback.
3. Once feedback has been given, it can be viewed on the "team feedback" page.
4. Feedback given by other users can be viewed on the "my feedback page".

# Assumptions made
The data would typically be provided by the backend. However, since this is a frontend-only prototype, example data is being preseeded instead.

# Features implemented
- Three types of feedback: multiple-choice, scale, and freeform text.
- Ability to give feedback to various users, until all of the questions have been answered.
- Progress bar displaying the current question, and the total number of questions.
- Ability to view feedback given to the current user by others
- Ability to view feedback given to other team members by the current user
- Navigation menu to navigate between different pages of the app

# Features omitted

## Logging in
Logging in as different users wouldn't be too hard to implement given the current app structure, however I had to omit this feature since I consider it to be non-essential. It is currently hardcoded that the current user always has the id of "0" (`meId in users.js`). It is possible to change the hardcoded value to change the logged in user.


## Menu
Non-functional:
- Notification count
- Teams tab
- Next feedback cycle
- Logout

## User avatar
Ommited:
- All of the users display the same picture

## Share feedback page
Non-functional:
- Feedback period in the page header
- Skipping feedback
- Previous feedback

Omitted entirely:
- Giving question feedback (rating and the flag)
- View submission (the submitted feedback can be seen on the 'team feedback' page)


## My Feedback / Team Feedback pages
Non-functional:
- Feedback period in the page header
- Publish fedback in the page header


# Tradeoffs made

## Data persistence
The entered data is not persisted anywhere, and will get reset on page refresh

## Documentation
The codebase lacks documentation. While I believe in self-documenting code, I still would document at least the critical areas of the codebase.

## Testing
It is considered a best practice to have good test coverage. However I had to omit tests entirely since writing tests is time-consuming, and is counter-productive when working on a prototype. If the app makes it into production, then the next step would be to spend an equal amount of time writing tests.

## Performance
The current prototype makes no effort to optimize for performance, I've intentionally made some bad performance decisions to save me some time.
Ideally, all of the callbacks have to be memoized. Memoization should also get applied to Redux selectors.

## Styling
While I did my best to adhere to the initial design, some of the UI needs more polishing.

## Responsive design
We always have to design with mobile devices in mind, however this prototype will only look correctly in a browser. If the prototype is approved, then I would spend some time to make sure that the app looks good on different screen sizes.

## Clean code
I typically strive to write clean code on the first try, and refactor as I go. Still, some areas of the codebase might need some cleanup, which I would probably do once the prototype is approved.

## Accessibility
It is considered a good practice to code with accessibility in mind, which I had to neglect.
