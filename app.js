const autoMessages = [
  "Lorem ipsum dolor sit amet 1",
  "Lorem ipsum dolor sit amet 2",
  "Lorem ipsum dolor sit amet 3",
  "Lorem ipsum dolor sit amet 4",
  "Lorem ipsum dolor sit amet 5",
  "Lorem ipsum dolor sit amet 6",
  "Lorem ipsum dolor sit amet 7",
  "Lorem ipsum dolor sit amet 8",
  "Lorem ipsum dolor sit amet 9",
  "Lorem ipsum dolor sit amet 10",
];

// Event listeners
$("#send-btn").on("click", sendMessage);

// Functions
setTimeout(() => {
  constructMessage("Hey, how is your day?", "received", "row");
}, 1500);

function sendMessage(e) {
  constructMessage($("#message-input").val(), "sent", "row-reverse");
  $("#message-input").val("");

  setTimeout(autoReply, 2000);

  e.preventDefault();
}

function autoReply() {
  let index = Math.floor(Math.random() * (9 - 0 + 1) + 0);

  constructMessage(autoMessages[index], "received", "row");
}

function constructMessage(text, cls, styl) {
  let currentTime = new Date();

  $(".message-display").append(`
    <div class="message ${cls}" style="flex-direction: ${styl}">
      <p class="message-content">
          ${text}
      </p>
      <p class="message-date">${currentTime.toUTCString()}</p>
    </div> 
  `);

  $(".message-display").scrollTop($(".message-display")[0].scrollHeight);
}
