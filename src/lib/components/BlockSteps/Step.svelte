<script lang="ts" context="module">
    export let number = 1;
</script>

<div class="wrapper">
    <!-- First checkbox is checked because you want the first conatiner to be seen -->
    <input type="checkbox" id="firstStep" name="toggler" checked />
    <div class="content">
        <label for="secondStep">Next</label>
        <h1>This is a CSS-only way of separating text into interactive blocks</h1>
        <p>
            Scratch leg; meow for can opener to feed me the fat cat sat on the mat bat away with paws.
            Carefully drink from water glass and then spill it everywhere and proceed to lick the puddle
            fart in owners food and stretch out on bed, yet scoot butt on the rug. Pounce on
            unsuspecting person walk on keyboard or jump on fridge stare at the wall, play with food and
            get confused by dust yet i dreamt about fish yum! for where is it?
        </p>
    </div>
    <div class="step first"></div>
</div>

<style lang="scss">
    .content {
  border-radius: 32px;
  top: 70px;

  /* Leave space for the progress bar */
  position: absolute;

  /* Place each text container on top of each other. */
  display: flex;
  flex-direction: column;
  gap: 1.5em;
  width: 100%;
  height: 100%;
  left: 0;
  padding: 3em;
  display: none;

  /* Hide all text containers */
  background: linear-gradient(139deg, rgb(190, 167, 180) 2%, rgb(168, 138, 155) 33%, rgb(168, 138, 155) 73%, rgb(190, 167, 180) 98%);

  /* Add background so when next text containers are shown, the previous one are not being seen anymore. */
}

.step {
  float: left;
  position: relative;
  top: 0;
  left: 0;
  height: 35px;
  width: 33.33%;
  font-weight: bold;

  &:after {
    content: '';

    /* Content will be assign to each circle independently */
    position: absolute;
    width: 35px;
    color: white;
    font-size: 1.2em;
    height: 35px;
    border-radius: 50%;
    background: none;
    left: 50%;
    transform: translateX(-50%);
    z-index: 99;
    background: #a68797;

    /* Setting background so that part of the progress line is not seen */
    transition: 0.5s ease-in-out;

    /* Transition for color fill */
    border: 2px solid white;
    box-shadow: 8px 8px 10px rgba(132, 98, 115, 0.4);
    display: flex;
    align-items: center;

    /* Center text */
    justify-content: center;
  }

  &.first:after {
    content: '1';
  }

  &.second:after {
    content: '2';
  }

  &.third:after {
    content: '3';
  }

  &:before {
    content: '';
    position: absolute;
    width: 100%;
    top: 50%;
    right: 50%;
    transform: translateY(-50%);
    height: 7px;
    border: 2px solid white;
    box-shadow: 8px 8px 10px rgba(132, 98, 115, 0.4);
    transition: 0.1s ease-in-out;
  }

  &.first:before {
    display: none;
  }
}

/* Circles referencing each step */

/* Progress bar, before each step circle */

/* Hide the progress bar before the first step circle */

/* Each "button" */

label {
  background: #a68797;
  color: white;
  padding: 0.5em 1.75em;
  position: absolute;
  right: 4em;
  bottom: 2em;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  border-radius: 8px;
  user-select: none;

  /* Just so the text can't be seleted. Not needed. */
  -webkit-user-select: none;

  /* Just so the text can't be seleted. Not needed. */

  &:hover {
    background: rgb(147, 108, 128);
    box-shadow: 10px 10px 10px rgba(132, 98, 115, 0.4);
    bottom: calc(2em + 2px);
    right: calc(4em + 2px);
  }
}

/* Hide all checkboxes. They are not needed since they can be checked with the labels. */

input {
  &[name='toggler'] {
    display: none;

    &:checked + .content {
      display: flex;

      + .step {
        &:after {
          background: white;
          color: rgb(147, 108, 128);
        }

        &:before {
          background: white;
        }
      }
    }
  }

  &:not(:checked) + .step {
    color: white;

    &:after {
      border-color: white;
      color: white;
    }
  }

  &[type='reset'] {
    align-self: flex-end;
    background: #a68797;
    color: white;
    padding: 0.75em 2em;
    position: absolute;
    right: 4em;
    bottom: 2em;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    border-radius: 8px;
    user-select: none;

    /* So the text can't be seleted. Not needed. */
    -webkit-user-select: none;

    /* So the text can't be seleted. Not needed. */
    border: none;
    font-size: 1rem;

    &:hover {
      background: rgb(147, 108, 128);
      box-shadow: 10px 10px 10px rgba(132, 98, 115, 0.4);
      bottom: calc(2em + 2px);
      right: calc(4em + 2px);
    }
  }
}
</style>