import React from 'react';

const questionBank = [
    {
        question: 'What is the main cause/ spreading agent of the Bubonic Plague ?',
        answers: ["A. Fleas","B. God's Punishment ","C. Sheep"],
        correct: "A. Fleas",
        image: "https://images.app.goo.gl/YSmopngSNFCsFCjg7",
        explanation:"Keeping your animals apart from humans will minimize the chances of Plague infested fleas making their way to you and your home.",
        questionId:"1"
    },
    {
        question: "What is NOT a symptom of the Bubonic Plague ?",
        answers: ["A. Flu-Like Symptoms","B. Black splotches","C. Persistent Thirst"],
        correct: "C. Persistent Thirst",
        image: "https://images.app.goo.gl/KbGwdR4ZEH951fmC8",
        explanation:"Visit your local healthcare practitioner as soon as you see black splotches develop on your skin.",
        questionId:"2"
    },
    {
        question: "What is the cure for the Bubonic Plague ?",
        answers: ["A. Anti -biotics (Which have not yet been invented )","B. Placing a hen next to the wound to draw out the pestilence","C. Cut open the veins leading to the heart because the disease is in the blood"],
        correct: "A. Anti -biotics (Which have not yet been invented )",
        image: "https://images.app.goo.gl/LavGFPw9V265FGWT9",
        explanation:"Sit tight… Help is on the way ;)",
        questionId:"3"
    },
    {
        question: "How often should one take a shower ?",
        answers: ["A. At least once a day","B. At least once a week","C. At least once every fortnight"],
        correct: "A. At least once a day",
        image: "https://images.app.goo.gl/1f865HAhUPf5Hv858",
        explanation:"At least one shower a day will make sure that your body is not the habitat of choice for fleas or any other disease spreading organisms",
        questionId:"4"
    },
    {
        question: "Which is NOT a way to avoid tooth decay / toothaches ?",
        answers: ["A. Brush your teeth twice a day","B. Floss regularly","C. Burn out the rot/disease with a candle"],
        correct: "C. Burn out the rot/disease with a candle",
        image: "https://images.app.goo.gl/zdaN8Xwu7C8GTVdc7",
        explanation:"You are more likely to burn yourself than treat your tooth ache. Just keep your mouth clean.",
        questionId:"5"
    },
    {
        question: "Is anatomy a demonic science ?",
        answers: ["A. It comes from the devil","B. It’s not a demonic science","C. I don’t know"],
        correct: "B. It’s not a demonic science",
        image: "https://i.pinimg.com/originals/ca/30/70/ca30701529f6c2225f4db1803b6ebba8.jpg",
        explanation:"In the future the study of the human body will allow us to understand the function of the body and how to treat it. Millions of lives will be saved.",
        questionId:"6"
    },
    {
        question: "What is the shape of the Earth ?",
        answers: ["A. It’s flat","B. It is spherical","C. My believe isn't represented"],
        correct: "B. It is spherical",
        image: "https://climate.nasa.gov/system/internal_resources/details/original/309_ImageWall5_768px-60.jpg",
        explanation:"The Earth is spherical. In the future, humans found a way to answer this question. they were able to go through it without falling into a void. We also traveled into space and we walked on the moon and the name of the first human who realized this exploit is Neil Armstrong.",
        questionId:"7"
    },
    {
        question: "What is true about breaking a mirror ?",
        answers: ["A. You will have bad luck for seven years","B. You will have good luck for seven years ","C. None of the above"],
        correct: "C. None of the above",
        image: "https://images.app.goo.gl/VPFPcNCVEFD6J5ou5",
        explanation:"Many people believe in 7 year cycles of life. The truth is that life one long cycle and breaking a mirror does not affect it in any way.",
        questionId:"8"
    },
    {
        question: "Why is it necessary to say “Bless you” after someone sneezes ?",
        answers: ["A. You might sneeze your soul out ","B. You might sneeze all your good fortune out","C. It is not necessary to say “Bless You” but it is polite and part of good manners"],
        correct: "C. It is not necessary to say “Bless You” but it is polite and part of good manners",
        image: "https://images.app.goo.gl/ChD7zoxckEtxXEsT9",
        explanation:"It is not necessary to stop saying “bless you” when people sneeze it is just important the people know that souls cannot and will not leave the body through the mouth when sneezing.",
        questionId:"9"
    },
    {
        question: "What are the benefits of throwing salt over your shoulder ?",
        answers: ["A. It is just a way to get rid of salt which has been spilt by mistake","B. It blinds the evil spirits which follow people around","C. The salt will make the land of your enemies barren"],
        correct: "A. It is just a way to get rid of salt which has been spilt by mistake",
        image: "https://images.app.goo.gl/BSXhhhnTaK65RdAe8",
        explanation:"Salt is a resource which will drop in value in years to come. Most people in the future will use salt only to flavor their food. ",
        questionId:"10"
    },
    {
        question: "How to poop ?",
        answers: ["A. Everywhere, when I feel like it","B. In a dedicated place called the toilets","C. In the neighbor's garden"],
        correct: "B. In a dedicated place called the toilets",
        image: "https://lamaindaristote.files.wordpress.com/2015/04/cacacac.png?w=640",
        explanation:" It is best to wash your hands after each visit to the toilet because human feces carry pathogens such as E. coli, Shigella, Streptococcus, hepatitis A and E virus, and more.",
        questionId:"11"
    },
    {
        question: "How to brush your teeth?",
        answers: ["A. Washing your teeth with soap  or adequate product","B. Wash your teeth with the horse's pee","C. Pulling teeth out when they are dirty"],
        correct: "A. Washing your teeth with soap  or adequate product",
        image: "https://www.anecdotes-historiques.com/wp-content/uploads/2017/11/Les-visiteurs-hygi%C3%A8ne-dents-moyen-age-clich%C3%A9.jpg",
        explanation:"Brush the top and bottom of the jaw separately. Use a rolling motion to brush the teeth and gums. Tilt the toothbrush at the same time at 45°. Follow a precise path so that you don't forget any corners of the mouth and no teeth!",
        questionId:"12"
    },
    {
        question: "How to relieve a headache ?",
        answers: ["A. Break a finger to get rid of a headache","B. Drink toad slime","C. Massage the forehead and temples"],
        correct: "C. Massage the forehead and temples",
        image: "https://escualpetisis.files.wordpress.com/2017/03/medieval-pain.png?w=640",
        explanation:"Relax or lie down in a quiet place. Do relaxation exercises. Drink water, because dehydration causes headaches. Massage your temples if you have a migraine.",
        questionId:"13"
    },
    {
        question: "How to eat meat ?",
        answers: ["A. Cook before eating","B. Let it rot before eating it","C. Bread the meat with sand"],
        correct: "A. Cook before eating",
        image: "https://assets.atlasobscura.com/article_images/44314/image.jpg",
        explanation:"Frying: sear the meat over high heat and then cook it in fat at a higher or lower temperature. Grilling: Quickly sear the meat over very high heat on a grill or in a pan without fat. Roasting: cooking the meat in the oven with little or no fat.",
        questionId:"14"
    },
    {
        question: "How to take a bath ?",
        answers: ["A. In wastewater ","B. Dark water","C. In hot water and jacuzzi"],
        correct: "C. In hot water and jacuzzi",
        image: "https://lh3.googleusercontent.com/proxy/fj6l6iUXK6DTcoJJx356h1DDWvNCDDZeNClOuFIP6PmPpUd665t9RU84mWd-7MJlwSIB0pgvK1vmiFmeaeNj9rNKQ4GwY_HzOB5VoZtzujHMwIB5eXrMfetbPUcahuDseOpz8mset6UzwGxIrux3rQFeVfhrwv096DE",
        explanation:"Take off your clothes. Put your dirty clothes in the laundry basket. Put your clean clothes or pajamas in a place where they won't be. Adjust the water temperature. Turn on the water faucet and let it run until the desired temperature is reached. Check the position of the… Get into the shower. Wait until the temperature is correct and enjoy .",
        questionId:"15"
    }
];

export default questionBank;