<template>
    <div>
      <li class="chatMessage text-left">
        <div class="msg-info">
          <figure class="image is-48x48">
            <img src="https://avatars0.githubusercontent.com/u/29359008?s=400&v=4" alt="" class="round-image">
          </figure>
          <div>
            <p class="author is-size-4 has-text-white-ter">Dog</p>
            <p class="has-text-grey is-size-7">10:35 AM - 13/04/2018 </p>
          </div>
        </div>
        <div>
          <p class="has-text-white-ter chat-message">
            This is a very long and boring message that adds nothing of substance to the
            conversation but it's here anyway as placeholder text so that we can see how
            it will look since we're too lazy to make a working prototype
          </p>
        </div>
      </li>
      <hr class="message-divider">
    </div>
</template>

<style scoped>
  .chatMessage {
    word-wrap: break-word;
    overflow: hidden;
  }
  .msg-info {
    display: flex;
    align-items: center;
  }

  .msg-info div {
    margin-left: 10px;
  }
  .round-image {
    border-radius: 100%;
  }
  .chat-message {
    color: hsl(0, 0%, 75%)
  }
  .message-divider {
    border: 0;
    border-top: #5A636A 1px solid;
    box-shadow: 0px 0px 2px 1px rgba(61,61,61,1);
  }
  .text-left {
    text-align: left;
  }
</style>
