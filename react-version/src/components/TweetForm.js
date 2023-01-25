import React,{useState} from "react"

function TweetForm() {
  const greeting = "What are you humming about?"
  const [tweet, setTweet] = useState()
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(tweet);
  }
  const onTweetChange = (event) => {
    console.log("11",event.target.value);
  };
  return (
    <section className="newtweet">
      <form method="post" action="/tweets" className="newtweet__form" onSubmit={handleSubmit}>
        <textarea className="form__textarea" name="text" placeholder={greeting} onChange={onTweetChange} value={tweet}></textarea>
        <input type="submit" className="form__input" value="Tweet"  />
        <span className="form__counter">140</span>
      </form>
    </section>);
};

export default TweetForm;