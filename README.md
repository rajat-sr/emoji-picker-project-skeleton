# Emoji Picker
A react project that implements a pop-up emoji picker. 😄<br/>
Total time spent on this project: ~4 hours

![emoji-picker-demo](https://user-images.githubusercontent.com/13731210/65131402-caed4e80-da1c-11e9-95bb-d401139b4f62.gif)

#### Experience
I made the following additions to the project. <br/>
##### 1. EmojiPicker
The `EmojiPicker` React component consists of the following three sections: <br/>
* **Category Row** section shows the list of categories of emojis.
<img src="https://user-images.githubusercontent.com/13731210/64701642-c4b01d00-d4c6-11e9-847d-384c793629f7.png" width="200">

* **Emojis** section shows all the emojis from the selected category.
<img src="https://user-images.githubusercontent.com/13731210/64702222-c29a8e00-d4c7-11e9-975d-0b8a74544da5.png" width="200">

* **Tooltip** section displays the name of emoji (or catrgory) on mouse hover.
<img src="https://user-images.githubusercontent.com/13731210/64702288-e1992000-d4c7-11e9-889b-90f023c6ac25.png" width="200">

All emoji data was taken from `emojis.js`. <br/>
I added CSS styling in `App.css` to maintain consistency because it already had styling for other components. Although, my preferred way of adding CSS in a React project is CSS Modules.

##### 2. TetherComponent
I used `TetherComponent` from `react-tether` library to display pop-up on button click. `TetherComponent` renders the `EmojiPicker` React component. This library was new to me and I had to look up examples on how to attach a component inside the pop-up. The implementation turned out to be pretty simple and straight-forward.

##### 3. Redux Action
I added a new Redux action `togglePicker` to open or close the pop-up based on `displayPicker` variable in Redux store. <br/>
I chose to implement this functionality using Redux and not using local state. This is because the action of closing the pop-up can be performed from more than one component. In current implementation, the pop-up can be closed from two components - by clicking the `CLICK ME` button and whenever an emoji is *selected*. We can add more ways of opening/closing the pop-up such as pressing a specific key combination or clicking outside the pop-up when it is open.


#### Extra Features Implemented
* [ ] Emoji Search
* [x] tooltips w/ names
* [ ] non-unicode emoji (ie. images, emoji packs, etc)
* [ ] emoji skintone implementation

#### Challenges
Implementing a basic emoji picker was not hard and the parts that I found challenging while creating this project were
* Figuring out a new library (`react-tether`) in a short time.
* Styling the emoji picker pop-up component. 

#### Trade-offs
* Displaying emoji name inside the `EmojiPicker` component instead of in a mouse tooltip box, on mouse hover.
* Did not implement other extra features because of time constraint.
