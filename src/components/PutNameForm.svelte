<script lang="ts">
  import arrowDown from "../images/form/arrow-down.svg";
  import arrowUp from "../images/form/arrow-up.svg";
  import unChecked from "../images/form/unchecked.svg";
  import checked from "../images/form/checked.svg";

  export let cost: string;

  import { onMount } from "svelte";
  onMount(() => {
    console.log(cost);
  });

  let name: string = "";
  let email: string = "";
  let phone: string = "";
  let medicalConditions: string = "";
  
  let optIn: boolean = false;

  let nameCheck: boolean = true;
  let emailCheck: boolean = true;
  let phoneCheck: boolean = true;
  let optInCheck: boolean = true;
  let invalidSubmission: boolean = false;

  const updateValue = () => {
    invalidSubmission = false;
    if (name !== "") {
      nameCheck = true;
    }
    if (email !== "") {
      emailCheck = true;
    }
    if (phone !== "") {
      phoneCheck = true;
    }
    if (optIn === true) {
      optInCheck = true;
    }
  };

  if (name !== "") {
    nameCheck = true;
  }
  if (email !== "") {
    emailCheck = true;
  }
  if (phone !== "") {
    phoneCheck = true;
  }

  const data = {
    records: [
      {
        fields: {
          Name: name,
          "Email Address": email,
          Phone: phone,
          "Medical Conditions": medicalConditions,
        },
      },
    ],
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    

    if (name === "") {
      nameCheck = false;
    }
    if (email === "") {
      emailCheck = false;
    }
    if (phone === "") {
      phoneCheck = false;
    }
    if (optIn === false) {
      optInCheck = false;
    }

    if (
      nameCheck === false ||
      emailCheck === false ||
      phoneCheck === false ||
      optIn === false
    ) {
        invalidSubmission = true;
      return;
    }

    await fetch(
      "https://zg418763sf.execute-api.ap-south-1.amazonaws.com/sign-up",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        window.location.href = "https://rzp.io/l/AiYuqwY";
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
      });
  };
</script>

<section>
  <h1>PUT YOUR NAME DOWN</h1>
  <form on:submit={handleSubmit}>
    <div class="form-content">
      <label for="name">
        <p>NAME</p>
      </label>
      <div class="form-input">
        <input
          id="name"
          bind:value={name}
          on:change={updateValue}
          placeholder="Your Name"
          type="text"
        />
        <div>
          <img
            class="arrow-down"
            src={arrowDown}
            alt="arrow pointing down"
            class:active={!nameCheck}
          />
        </div>
      </div>
    </div>
    <div class="form-content">
      <label for="email">
        <p>EMAIL</p>
      </label>
      <div class="form-input">
        <input
          id="email"
          bind:value={email}
          placeholder="Your Email"
          type="text"
          on:change={updateValue}
        />
        <div>
          <img
            class="arrow-down"
            src={arrowDown}
            alt="arrow pointing down"
            class:active={!emailCheck}
          />
        </div>
      </div>
    </div>
    <div class="form-content">
      <label for="phone">
        <p>PHONE (WITH COUNTRY CODE)</p>
      </label>
      <div class="form-input">
        <input
          id="phone"
          bind:value={phone}
          placeholder="Your Phone Number"
          type="text"
          on:change={updateValue}
        />
        <div>
          <img
            class="arrow-up"
            src={arrowUp}
            alt="arrow pointing up"
            class:active={!phoneCheck}
          />
        </div>
      </div>
    </div>
    <div class="form-content">
      <label for="medical">
        <p>
          ANY MEDICAL CONDITIONS? EMAIL US A ‘FIT TO DIVE’ CERTIFICATE FROM YOUR
          DOC. NO CERT, NO DIVES!
        </p>
      </label>
      <div class="form-input">
        <input
          id="medical"
          bind:value={medicalConditions}
          placeholder="Any Medical Conditions"
          type="text"
          on:change={updateValue}
        />
        <div />
      </div>
    </div>
    <div class="checkbox form-content">
      <label for="optIn">
        <p>I ACCEPT THE TERMS OF THE LIABILITY AGREEMENT</p>
      </label>
      <img
        class="arrow-up"
        src={arrowUp}
        alt="arrow pointing up"
        class:active={!optInCheck}
      />
      <input
        id="optIn"
        type="checkbox"
        bind:checked={optIn}
        on:change={updateValue}
      />
      <label for="optIn">
        <img src={optIn ? checked : unChecked} alt="checkbox" />
      </label>
    </div>
    <div class="payment-advance">
      <p>
        YOU WILL NOW BE DIRECTED TO A PAYMENT GATEWAY TO PUT DOWN AN ADVANCE OF
        RS {cost}
      </p>
    </div>
    <div class="submission">
      <button type="submit" class:shake={invalidSubmission}> DONE </button>
    </div>
  </form>
</section>

<style>
  input:focus {
    outline: none;
  }
  p {
    font-size: 12px;
    line-height: 19px;
    letter-spacing: 0.05em;
    color: #0349f7;
  }
  h1 {
    font-size: 30px;
    line-height: 31px;
    color: #0349f7;
    text-align: center;
  }
  input {
    font-family: "Brother";
    text-transform: uppercase;
    border: none;
    font-size: 12px;
    line-height: 14px;
    letter-spacing: 0.05em;
    width: 100%;
  }
  .form-content {
    border-bottom: 1px solid #000;
    padding-bottom: 30px;
    padding-top: 30px;
    display: grid;
    row-gap: 10px;
  }
  .form-content label {
    max-width: 69vw;
  }
  .form-input {
    display: flex;
    max-width: 69vw;
  }
  .arrow-down {
    transform: translateY(-10px);
    display: none;
  }
  .arrow-up {
    transform: translateY(10px);
    display: none;
  }
  .active {
    display: block;
  }

  .checkbox {
    display: flex;
    justify-content: space-between;
  }

  .checkbox p {
    font-size: 12px;
    line-height: 19px;
    text-transform: uppercase;
    color: #000000;
  }

  input[type="checkbox"] {
    display: none;
  }

  .payment-advance {
    padding-top: 30px;
    padding-bottom: 47px;
  }
  .payment-advance p {
    font-size: 12px;
    line-height: 19px;
    color: #000000;
  }
  .submission {
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
  }
  button {
    background: #ff4800;
    color: black;
  }

  .shake {
    animation: shake 0.82s cubic-bezier(.36,.07,.19,.97) both;
  transform: translate3d(0, 0, 0);
  backface-visibility: hidden;
  }

  @keyframes shake {
  10%, 90% {
    transform: translate3d(-1px, 0, 0);
  }
  
  20%, 80% {
    transform: translate3d(2px, 0, 0);
  }

  30%, 50%, 70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%, 60% {
    transform: translate3d(4px, 0, 0);
  }
}

  @media (min-width: 1024px) {
    p {
      font-size: 18px;
      line-height: 22px;
    }
    h1 {
      display: none;
    }
    input {
      font-size: 18px;
      line-height: 25px;
    }
    section {
      width: 42vw;
    }
    .form-content label {
      max-width: 31vw;
    }
    .form-input {
      max-width: 31vw;
    }
    .checkbox {
      padding-right: 30px;
    }
    .submission {
      justify-content: flex-start;
    }
    .checkbox p {
      font-size: 18px;
      line-height: 22px;
      letter-spacing: 0.05em;
    }
    .payment-advance p {
      font-size: 18px;
      line-height: 30px;
      letter-spacing: 0.05em;
    }
  }
</style>
