var facts =[
    "Unlike dogs, cats do not have a sweet tooth. Scientists believe this is due to a mutation in a key taste receptor",
    "When a cat chases its prey, it keeps its head level. Dogs and humans bob their heads up and down",
    "The technical term for a cat’s hairball is a 'bezoar'.",
    "A group of cats is called a 'clowder'.",
    "A cat can’t climb head first down a tree because every claw on a cat’s paw points the same way. To get down from a tree, a cat must back down",
    "Cats make about 100 different sounds. Dogs make only about 10.",
    "There are more than 500 million domestic cats in the world, with approximately 40 recognized breeds.",
    "While it is commonly thought that the ancient Egyptians were the first to domesticate cats, the oldest known pet cat was recently found in a 9,500-year-old grave on the Mediterranean island of Cyprus. This grave predates early Egyptian art depicting cats by 4,000 years or more.",
    "During the time of the Spanish Inquisition, Pope Innocent VIII condemned cats as evil and thousands of cats were burned. Unfortunately, the widespread killing of cats led to an explosion of the rat population, which exacerbated the effects of the Black Death.",
    "During the Middle Ages, cats were associated with withcraft, and on St. John’s Day, people all over Europe would stuff them into sacks and toss the cats into bonfires. On holy days, people celebrated by tossing cats from church towers.",
    "The first cat in space was a French cat named Felicette (a.k.a. 'Astrocat') In 1963, France blasted the cat into outer space. Electrodes implanted in her brains sent neurological signals back to Earth. She survived the trip.",
    "The group of words associated with cat (catt, cath, chat, katze) stem from the Latin catus, meaning domestic cat, as opposed to feles, or wild cat.",
    "Cats are North America’s most popular pets: there are 73 million cats compared to 63 million dogs. Over 30% of households in North America own a cat.",
    "According to Hebrew legend, Noah prayed to God for help protecting all the food he stored on the ark from being eaten by rats. In reply, God made the lion sneeze, and out popped a cat.",
    "A cat’s hearing is better than a dog’s. And a cat can hear high-frequency sounds up to two octaves higher than a human.",
    "A cat can travel at a top speed of approximately 31 mph (49 km) over a short distance.",
    "A cat rubs against people not only to be affectionate but also to mark out its territory with scent glands around its face. The tail area and paws also carry the cat’s scent.",
    "When a family cat died in ancient Egypt, family members would mourn by shaving off their eyebrows. They also held elaborate funerals during which they drank wine and beat their breasts. The cat was embalmed with a sculpted wooden mask and the tiny mummy was placed in the family tomb or in a pet cemetery with tiny mummies of mice.",
    "In 1888, more than 300,000 mummified cats were found an Egyptian cemetery. They were stripped of their wrappings and carted off to be used by farmers in England and the U.S. for fertilizer.",
    "Most cats give birth to a litter of between one and nine kittens. The largest known litter ever produced was 19 kittens, of which 15 survived.",
    "A cat’s brain is biologically more similar to a human brain than it is to a dog’s. Both humans and cats have identical regions in their brains that are responsible for emotions.",
    "Many Egyptians worshipped the goddess Bast, who had a woman’s body and a cat’s head.",
    "While many parts of Europe and North America consider the black cat a sign of bad luck, in Britain and Australia, black cats are considered lucky.",
    "Some Siamese cats appear cross-eyed because the nerves from the left side of the brain go to mostly the right eye and the nerves from the right side of the brain go mostly to the left eye. This causes some double vision, which the cat tries to correct by 'crossing' its eyes.",
    "A cat usually has about 12 whiskers on each side of its face.",
    "Cats don't actually meow at each other, just at humans. Cats typically will spit, purr, and hiss at other cats.",
    "A cat’s back is extremely flexible because it has up to 53 loosely fitting vertebrae. Humans only have 34.",
    "A cat’s nose pad is ridged with a unique pattern, just like the fingerprint of a human.",
    "Cats are extremely sensitive to vibrations. Cats are said to detect earthquake tremors 10 or 15 minutes before humans can.",
];

function newFact(){
    var randomNumber = Math.floor(Math.random() * (facts.length));
    document.getElementById("factDisplay").innerHTML = facts[randomNumber];
};

function tweet() {
    var phrase = document.getElementById("factDisplay").innerText;
    var tweetUrl =
      "https://twitter.com/share?text=" +
      encodeURIComponent(phrase) +
      "." +
      "&url=" +
      "https://codepen.io/ethan0819/pen/VqjKNa" +
      "&hashtags=" +
      "catFacts";
    window.open(tweetUrl);
  }
  