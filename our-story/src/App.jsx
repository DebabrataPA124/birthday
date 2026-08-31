import { useState } from "react";
import "./App.css";

function App() {
  const [chapter, setChapter] = useState(0);

  const nextChapter = () => {
    setChapter((current) => current + 1);
  };

  return (
    <div className="birthday-page">

      {/* =========================
          CHAPTER 0 — INTRO
      ========================== */}

      {chapter === 0 && (
        <main className="hero">
          <p className="small-text">
            A little something for you ❤️
          </p>

          <h1>
            Hey,
            <br />
            <span>My Love</span>
          </h1>

          <p className="intro">
            I made something special for you...
            <br />
            because some stories deserve to be remembered. ❤️
          </p>

          <button className="start-button" onClick={nextChapter}>
            Begin Our Story
            <span>→</span>
          </button>

          <div className="floating-heart heart-1">♥</div>
          <div className="floating-heart heart-2">♥</div>
          <div className="floating-heart heart-3">♥</div>
        </main>
      )}

      {/* =========================
          CHAPTER 1 — CLASS 9
      ========================== */}

      {chapter === 1 && (
        <section className="story-section">
          <p className="story-label">
            Chapter 01
          </p>

          <h2>It all started in...</h2>

          <div className="year">
            CLASS 9
          </div>

          <p className="story-text">
            We were just two tuition mates.
            <br />
            We were in the same place,
            <br />
            but we barely talked.
          </p>

          <p className="story-text">
            Little did we know...
            <br />
            that this ordinary beginning
            <br />
            would become something extraordinary. ❤️
          </p>

          <div className="story-divider">
            ✦
          </div>

          <p className="story-ending">
            If only we knew what was waiting for us...
          </p>

          <button
            className="continue-button"
            onClick={nextChapter}
          >
            Continue our story →
          </button>
        </section>
      )}

      {/* =========================
          CHAPTER 2 — COVID
      ========================== */}

      {chapter === 2 && (
        <section className="story-section">
          <p className="story-label">
            Chapter 02
          </p>

          <h2>Then the world changed...</h2>

          <div className="covid-year">
            2020
          </div>

          <p className="story-text">
            Everything suddenly became different.
            <br />
            Schools closed.
            <br />
            Everyone stayed at home.
          </p>

          <p className="story-text">
            And somewhere in the middle of all that...
            <br />
            I decided to message you. 📱
          </p>

          <div className="instagram-message">

            <div className="message-header">
              Instagram 💬
            </div>

            <div className="message-body">

              <div className="message-bubble">
                Hey... 👋
              </div>

              <div className="message-bubble reply">
                Hey 😊
              </div>

            </div>
          </div>

          <p className="story-ending">
            One simple message.
            <br />
            One unexpected beginning. ❤️
          </p>

          <button
            className="continue-button"
            onClick={nextChapter}
          >
            What happened next? →
          </button>
        </section>
      )}

      {/* =========================
          CHAPTER 3 — HOLI
      ========================== */}

      {chapter === 3 && (
        <section className="story-section">

          <p className="story-label">
            Chapter 03
          </p>

          <h2>
            One little conversation... 🌈
          </h2>

          <div className="memory-year">
            2021
          </div>

          <p className="story-text">
            At first, there was nothing special
            <br />
            about our conversations.
          </p>

          <p className="story-text">
            Then came Holi.
            <br />
            And I suddenly asked you...
          </p>

          <div className="chat-memory">

            <div className="chat-date">
              Holi • 2021 🌈
            </div>

            <div className="chat-row mine">
              <div className="chat-bubble">
                How did you enjoy Holi? 😊
              </div>
            </div>

            <div className="chat-row hers">
              <div className="chat-bubble">
                I don't play Holi 😅
                <br />
                I never really go out.
              </div>
            </div>

          </div>

          <p className="story-text">
            It was just a simple question.
            <br />
            Nothing romantic.
            <br />
            Nothing extraordinary.
          </p>

          <p className="story-ending">
            But looking back now...
            <br />
            that little conversation was one of
            <br />
            the many small steps toward us. ❤️
          </p>

          <button
            className="continue-button"
            onClick={nextChapter}
          >
            Continue →
          </button>

        </section>
      )}

      {/* =========================
          CHAPTER 4 — FIRST WALK
      ========================== */}

      {chapter === 4 && (
        <section className="story-section walk-section">

          <p className="story-label">
            Chapter 04
          </p>

          <h2>
            The first walk ❤️
          </h2>

          <div className="walk-icon">
            🚶‍♂️ ❤️ 🚶‍♀️
          </div>

          <p className="story-text">
            After all those conversations online,
            <br />
            there finally came a day when
            <br />
            I got to meet you again after COVID.
          </p>

          <p className="story-text">
            My tuition was near your house.
            <br />
            And after my tuition ended,
            <br />
            I suddenly thought...
          </p>

          <div className="thought-box">
            <span>“</span>
            Why not ask her to come
            <br />
            for a little walk?
            <span>”</span>
          </div>

          <p className="story-text">
            So I called you. 📞
          </p>

          <p className="story-text">
            There was no special plan.
            <br />
            No special place.
            <br />
            Just a little walk.
          </p>

          <p className="story-ending">
            But after spending so much time
            <br />
            talking through a screen...
            <br />
            finally walking beside you
            <br />
            felt different. ❤️
          </p>

          <div className="memory-photo-card">

  <div className="memory-photo-year">
    2022
  </div>

  <div className="memory-photo-wrapper">
    <img
      src="/memories/photo-2022.jpg"
      alt="Our first walk after COVID"
      className="memory-photo"
    />
  </div>

  <p className="memory-photo-caption">
    Our first walk after COVID. ❤️
    <br />
    Just a little walk that meant so much to me.
  </p>

</div>

          <button
            className="continue-button"
            onClick={nextChapter}
          >
            What happened on that walk? →
          </button>

        </section>
      )}

      {/* =========================
          CHAPTER 5 — FIRST HAND HOLD
      ========================== */}

     {/* =========================
    CHAPTER 5 — THE WALK TO BUS STOP
========================== */}

{chapter === 5 && (
  <section className="story-section hand-section">

    <p className="story-label">
      Chapter 05
    </p>

    <h2>
      The walk I'll always remember ❤️
    </h2>

    <div className="route">

      <div className="route-point">
        🏫
        <span>School</span>
      </div>

      <div className="route-line">
        ❤️ ───── 🤝 ───── ❤️
      </div>

      <div className="route-point">
        🚌
        <span>Bus Stop</span>
      </div>

    </div>

    <p className="story-text">
      We would walk together from
      <br />
      the school to the bus stop.
    </p>

    <p className="story-text">
      And somewhere along that little walk...
      <br />
      you would hold my hand. 🤝❤️
    </p>

    <div className="memory-card">

      <div className="card-symbol">
        🤝
      </div>

      <p>
        Maybe it was just a simple walk
        <br />
        from school to the bus stop...
      </p>

      <p>
        But whenever you held my hand,
        <br />
        <strong>
          those few minutes felt like my favourite part of the day.
        </strong>
      </p>

    </div>

    <p className="story-ending">
      You would eventually leave for home,
      <br />
      and I would take my bus...
      <br /><br />
      but I always wished that little walk
      <br />
      could last just a little longer. ❤️
    </p>

    <button
      className="continue-button"
      onClick={nextChapter}
    >
      Continue our journey →
    </button>

  </section>
)}
     {/* =========================
    CHAPTER 6 — THE WAIT
========================== */}

{chapter === 6 && (
  <section className="story-section wait-section">

    <p className="story-label">
      Chapter 06
    </p>

    <h2>
      Then came Class 12...
    </h2>

    <div className="waiting-year">
      CLASS 12
    </div>

    <p className="story-text">
      By then, you had become someone
      <br />
      very special to me.
    </p>

    <p className="story-text">
      And I had something I wanted
      <br />
      to tell you.
    </p>

    <div className="waiting-card">

      <div className="clock">
        ⏳
      </div>

      <p className="waiting-title">
        I waited...
      </p>

      <div className="waiting-line">
        <span>Beginning of Class 12</span>
        <div className="line"></div>
        <span>End of Class 12</span>
      </div>

      <p className="waiting-description">
        Months passed.
        <br />
        But I kept hoping.
        <br />
        I kept waiting for your answer. ❤️
      </p>

    </div>

    <p className="story-text">
      There were moments when I wondered
      <br />
      whether I should give up.
    </p>

    <p className="story-text">
      But somehow...
      <br />
      I couldn't.
    </p>

    <div className="story-divider">
      ✦
    </div>

    <p className="story-ending">
      Because sometimes,
      <br />
      when someone truly matters to you,
      <br />
      waiting doesn't feel like waiting.
    </p>

    <button
      className="continue-button"
      onClick={nextChapter}
    >
      And then... →
    </button>

  </section>
)}
{/* =========================
    CHAPTER 7 — ANNUAL FUNCTION
========================== */}

{chapter === 7 && (
  <section className="story-section function-section">

    <p className="story-label">
      Chapter 07
    </p>

    <h2>
      Then came a day that changed everything...
    </h2>

    <div className="function-icon">
      ✨ 🏫 ✨
    </div>

    <p className="story-text">
      Our school annual function was coming.
    </p>

    <p className="story-text">
      And somehow, that day felt different.
      <br />
      Maybe it was the way we talked.
      <br />
      Maybe it was the little things you did.
      <br />
      Or maybe... I was finally noticing
      <br />
      what was right in front of me. ❤️
    </p>

    <div className="realization-card">

      <div className="realization-symbol">
        ❤️
      </div>

      <p>
        For the first time,
        <br />
        I started feeling that
        <br />
        maybe...
      </p>

      <strong>
        You had feelings for me too.
      </strong>

    </div>

    <p className="story-text">
      I wasn't completely sure.
      <br />
      But for the first time,
      <br />
      I had hope.
    </p>

    <div className="story-divider">
      ✦
    </div>

    <p className="story-ending">
      And then came my birthday... 🎂
    </p>

    <button
      className="continue-button"
      onClick={nextChapter}
    >
      My birthday... 🎂 →
    </button>

  </section>
)}


{/* =========================
    CHAPTER 8 — HER PROPOSAL
========================== */}

{chapter === 8 && (
  <section className="story-section proposal-section">

    <p className="story-label">
      Chapter 08
    </p>

    <h2>
      The birthday I'll never forget
    </h2>

    <div className="birthday-icon">
      🎂
    </div>

    <p className="story-text">
      It was my birthday.
    </p>

    <p className="story-text">
      I was expecting birthday wishes...
      <br />
      maybe some surprises...
      <br />
      maybe just another ordinary birthday.
    </p>

    <p className="story-text">
      But I wasn't expecting
      <br />
      <strong>what you were about to give me.</strong>
    </p>

    <div className="proposal-card">

      <div className="heart-beat">
        ❤️
      </div>

      <p className="proposal-line">
        You proposed to me.
      </p>

      <p className="proposal-subtext">
        After all the waiting...
        <br />
        after all the uncertainty...
        <br />
        after wondering whether you felt the same...
      </p>

      <div className="proposal-reveal">
        <span>My happiest birthday.</span>
        <span>❤️</span>
      </div>

    </div>

    <p className="story-text">
      I don't think any birthday before that
      <br />
      could ever compare.
    </p>

    <p className="story-ending">
      Because the best birthday gift
      <br />
      wasn't something I could hold...
      <br />
      <strong>it was you choosing me. ❤️</strong>
    </p>

    <button
      className="continue-button"
      onClick={nextChapter}
    >
      And that's how we began... ❤️ →
    </button>

  </section>
)}
{/* =========================
    CHAPTER 9 — WE BECAME US
========================== */}

{chapter === 9 && (
  <section className="story-section us-section">

    <p className="story-label">
      Chapter 09
    </p>

    <p className="tiny-intro">
      And then...
    </p>

    <div className="big-heart">
      ❤️
    </div>

    <h2>
      We became
      <br />
      <span>US.</span>
    </h2>

    <p className="story-text">
      Four years ago,
      <br />
      something beautiful began.
    </p>

    <div className="date-reveal">
      <span>THE DAY</span>
      <strong>WE STARTED</strong>
      <span>OUR JOURNEY ❤️</span>
    </div>

    <p className="story-text">
      All those conversations...
      <br />
      all those walks...
      <br />
      all that waiting...
      <br />
      all the uncertainty...
    </p>

    <p className="story-ending">
      Somehow, they all led us here.
    </p>

    <div className="us-message">
      <p>
        You didn't just become my girlfriend.
      </p>

      <strong>
        You became a part of my life. ❤️
      </strong>
    </div>

    <button
      className="continue-button"
      onClick={nextChapter}
    >
      Four years later... →
    </button>

  </section>
)}
{/* =========================
    CHAPTER 10 — FOUR YEARS
========================== */}

{chapter === 10 && (
  
  <section className="story-section years-section">

    <p className="story-label">
      Chapter 10
    </p>

    <h2>
      Four years of
      <br />
      <span>US. ❤️</span>
    </h2>

    <p className="story-text">
      What started with a simple message...
      <br />
      became four beautiful years.
    </p>

    <div className="years-counter">
      <div className="counter-number">4</div>
      <div className="counter-text">
        YEARS
        <br />
        TOGETHER ❤️
      </div>
    </div>

    <div className="timeline">

      {/* YEAR 1 */}

      <div className="timeline-item">
        <div className="timeline-dot">❤️</div>

        <div className="timeline-content">
          <span>YEAR 01</span>

          <h3>
            The Beginning
          </h3>

          <p>
            Two people who didn't know
            <br />
            how beautiful this journey
            <br />
            was going to become.
          </p>
        </div>
       {/* YEAR 1 — CENTRUM MALL */}

<div className="year-memory">

  <div className="year-memory-label">
    FIRST YEAR TOGETHER
  </div>

  <h3>
    After the Boards 🎓
  </h3>

  <p>
    After our 12th board examinations,
    <br />
    we finally had some time to breathe.
  </p>

  <p>
    So we went to Centrum Mall
    <br />
    with our friends. ❤️
  </p>

  <div className="memory-photo-card">

    <div className="memory-photo-year">
      2022
    </div>

    <div className="memory-photo-wrapper">
      <img
        src="/memories/Centrum-2023.jpg"
        alt="Centrum Mall memory"
        className="memory-photo"
      />
    </div>

    <p className="memory-photo-caption">
      Friends, laughter and a day
      <br />
      we got to enjoy together. ❤️
    </p>

  </div>

  <p className="year-memory-ending">
    It wasn't a grand date...
    <br />
    just a really good day with you. 🫶
  </p>

</div>
      </div>


      {/* YEAR 2 */}

      <div className="timeline-item">
        <div className="timeline-dot">✨</div>

        <div className="timeline-content">
          <span>YEAR 02</span>

          <h3>
            Growing Together
          </h3>

          <p>
            More conversations.
            <br />
            More memories.
            <br />
            More reasons to smile.
          </p>
        </div>
        {/* YEAR 2 — FIRST HOLI TOGETHER */}

<div className="year-memory">

  <div className="year-memory-label">
    YEAR 02 • OUR FIRST HOLI 🌈
  </div>

  <h3>
    You Played Holi With Me ❤️
  </h3>

  <p>
    I still remember asking you
    <br />
    how you enjoyed Holi.
  </p>

  <p>
    You told me that you didn't really
    <br />
    play Holi or go outside.
  </p>

  <p>
    But then, one day...
    <br />
    <strong>you played Holi with me. 🥹❤️</strong>
  </p>

  <div className="memory-photo-card">

    <div className="memory-photo-year">
      OUR FIRST HOLI
    </div>

    <div className="memory-photo-wrapper">
      <img
        src="/memories/holi-2024.jpg"
        alt="Our first Holi together"
        className="memory-photo"
      />
    </div>

    <p className="memory-photo-caption">
      From "I don't play Holi"...
      <br />
      to playing it with me. 🌈❤️
    </p>

  </div>

  <p className="year-memory-ending">
    Maybe it was just another Holi...
    <br />
    but I'll always remember it as ours. 🫶
  </p>

</div>
      </div>


      {/* YEAR 3 */}

      <div className="timeline-item">
        <div className="timeline-dot">🫶</div>

        <div className="timeline-content">
          <span>YEAR 03</span>

          <h3>
            More Than Memories
          </h3>

          <p>
            We learned,
            <br />
            we grew,
            <br />
            and we stayed together.
          </p>
        </div>
        {/* YEAR 3 — SATAPDI PARK */}

<div className="year-memory satapdi-memory">

  <div className="year-memory-label">
    YEAR 03 • FINDING OUR WAY BACK ❤️
  </div>

  <h3>
    After All Those Fights...
  </h3>

  <p>
    There were times when we had
    <br />
    too many fights and misunderstandings.
  </p>

  <p>
    Things didn't always feel easy...
    <br />
    but somehow, we still found
    <br />
    our way back to each other.
  </p>

  <div className="park-memory-icon">
    🌳❤️
  </div>

  <p>
    And then we finally met at
    <br />
    <strong>Satapdi Park.</strong>
  </p>

  <p>
    We spent some quiet,
    <br />
    quality time together...
    <br />
    just being with each other again.
  </p>

  <div className="memory-photo-card">

    <div className="memory-photo-year">
      SATAPDI PARK
    </div>

    <div className="memory-photo-wrapper">
      <img
        src="/memories/satapdi-park.jpg"
        alt="Our memory at Satapdi Park"
        className="memory-photo"
      />
    </div>

    <p className="memory-photo-caption">
      After all the misunderstandings...
      <br />
      we found our way back to each other. ❤️
    </p>

  </div>

  <p className="year-memory-ending">
    Maybe that's what makes us special...
    <br />
    we don't have to be perfect.
    <br />
    We just have to keep choosing each other. 🫶
  </p>

</div>
      </div>


      {/* YEAR 4 */}

      <div className="timeline-item">
        <div className="timeline-dot">❤️</div>

        <div className="timeline-content">
          <span>YEAR 04</span>

          <h3>
            Still Us
          </h3>

          <p>
            Four years later...
            <br />
            and I'm still grateful
            <br />
            that it's you.
          </p>
        </div>
        {/* =========================
    YEAR 4 — ONLY YOU & ME
========================== */}

<div className="year-memory year-four">

  <div className="year-memory-label">
    YEAR 04 • AFTER EVERYTHING ❤️
  </div>

  <div className="year-four-number">
    4
  </div>

  <h3>
    After Everything...
    <br />
    It's Still You & Me.
  </h3>

  <p>
    After all the happy moments,
    <br />
    all the fights,
    <br />
    all the misunderstandings,
    <br />
    and everything life brought our way...
  </p>

  <p>
    We somehow kept finding
    <br />
    our way back to each other.
  </p>

  <div className="only-us">

    <span>YOU</span>

    <div className="us-heart">
      ❤️
    </div>

    <span>ME</span>

  </div>

  <p className="year-four-main">
    And after everything that happened...
  </p>

  <div className="year-four-highlight">
    It's only you and me. ❤️
  </div>

{/* YEAR 4 — OUR PHOTO */}

<div className="year-four-photo">

  <div className="year-four-photo-label">
    FOUR YEARS LATER ❤️
  </div>

  <div className="year-four-photo-wrapper">
    <img
      src="/memories/year4.jpg"
      alt="Four years together"
      className="year-four-image"
    />
  </div>

  <p className="year-four-photo-caption">
    After everything we've been through...
    <br />
    it's still you and me. 🫶
  </p>

</div>

</div>
      </div>

    </div>

    <div className="four-year-message">

      <p>
        Four years.
      </p>

      <strong>
        And I would still choose you. ❤️
      </strong>

    </div>

    <button
      className="continue-button"
      onClick={nextChapter}
    >
     There's something I couldn't put here... →
    </button>

  </section>
)}
{/* =========================
    CHAPTER 11 — THE LETTER
========================== */}

{chapter === 11 && (
  <section className="story-section letter-teaser">

    <p className="story-label">
      Chapter 11
    </p>

    <div className="letter-icon">
      ✉️
    </div>

    <h2>
      Some things
      <br />
      are better written by hand.
    </h2>

    <p className="story-text">
      I've told you our story here...
      <br />
      but there are still things
      <br />
      I want to tell you.
    </p>

    <div className="letter-teaser-card">

      <p>
        So I wrote them down.
      </p>

      <div className="handwriting">
        With love,
        <br />
        just for you. ❤️
      </div>

    </div>

    <p className="story-ending">
      You'll have to read the rest yourself. 💌
    </p>

    <button
      className="continue-button"
      onClick={nextChapter}
    >
      One last thing... →
    </button>

  </section>
)}
{/* =========================
    CHAPTER 12 — FINAL REVEAL
========================== */}

{chapter === 12 && (
  <section className="story-section final-section">
    <div className="floating-hearts">
  <span>❤️</span>
  <span>♡</span>
  <span>❤️</span>
  <span>♡</span>
  <span>❤️</span>
  <span>♡</span>
  <span>❤️</span>
  <span>♡</span>
</div>

    <div className="final-stars">
      ✦
    </div>

    <p className="story-label">
      One last thing...
    </p>

    <div className="final-heart">
      ❤️
    </div>

    <h2>
      Happy Birthday,
      <br />
      <span>Cutoo. 🎂</span>
    </h2>

    <div className="final-message">

      <p>
        From two tuition mates in Class 9...
      </p>

      <p>
        to a random Instagram message...
      </p>

      <p>
        from little conversations
        <br />
        to our walks from school to the bus stop...
      </p>

      <p>
        from waiting for your answer...
        <br />
        to you giving me the happiest birthday...
      </p>

      <p>
        somehow,
        <br />
        all those little moments
        <br />
        became <strong>US.</strong> ❤️
      </p>

    </div>
    {/* CHAPTER 12 — FINAL PHOTO */}

<div className="final-photo">

  <div className="final-photo-label">
    ONE MORE MEMORY ❤️
  </div>

  <div className="final-photo-wrapper">
    <img
      src="/memories/final-photo.jpg"
      alt="A special memory of us"
      className="final-photo-image"
    />
  </div>

  <p className="final-photo-caption">
    After everything...
    <br />
    it's still you and me. ❤️
  </p>

</div>

    <div className="final-quote">

      <span>“</span>

      <p>
        If I could go back
        <br />
        and live it all again...
      </p>

      <strong>
        I would still choose you.
      </strong>

      <span>”</span>

    </div>

    <p className="final-love">
      Happy Birthday, Cutoo. ❤️
      <br />
      Here's to all the memories we've made...
      <br />
      and all the ones still waiting for us.
    </p>

    <div className="final-signature">
      Forever yours,
      <br />
      <strong>Debabrata ❤️</strong>
    </div>

    <button
      className="replay-button"
      onClick={() => setChapter(0)}
    >
      ↺ Replay Our Story
    </button>

    <div className="final-hearts">
      ❤️ &nbsp; ❤️ &nbsp; ❤️
    </div>

  </section>
)}

    </div>
  );
}

export default App;