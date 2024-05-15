// Typing effect for the heading and content
const welcomeText = "Welcome to miiTechLab";
const contentText = `Here, curiosity meets code. I'm passionate about unraveling the mysteries of technology, one line of code and experiment at a time.
This is where I share my journey:

Cool things I learn: From the latest frameworks to clever hacks, I'll break down complex concepts into bite-sized pieces.
Projects I build: Whether it's a simple script or a full-fledged app, you'll get a behind-the-scenes look at my creations.
Challenges I face: Because let's be honest, learning isn't always smooth sailing. But every bug is a chance to grow.
Insights I gain: I'll share the "aha!" moments and lessons that shape my understanding of tech.
Whether you're a fellow enthusiast or just curious about what's possible, I hope you find something here to inspire your own exploration.
Let's learn and build together!`;


// Function to type out text with a delay
function typeText(element, text, delay = 50) {
  let index = 0;
  const interval = setInterval(() => {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
    } else {
      clearInterval(interval);
    }
  }, delay);
}

const welcomeElement = document.getElementById("welcome");
const contentElement = document.getElementById("content");

typeText(welcomeElement, welcomeText);
typeText(contentElement, contentText);
