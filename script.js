// Login Form Submission
document.getElementById("loginForm")?.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form auto-submit

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const rememberMe = document.getElementById("rememberMe").checked;

    // Validate inputs
    if (email === "" || password === "") {
        alert("Please fill in all fields.");
        return;
    }

    // Remember Me functionality
    if (rememberMe) {
        localStorage.setItem("rememberedEmail", email);
    } else {
        localStorage.removeItem("rememberedEmail");
    }

    alert("Login Successful!");
    window.location.href = "home.html"; // Redirect after successful login
});

// Auto-fill email if "Remember Me" was checked
window.onload = function () {
    const rememberedEmail = localStorage.getItem("rememberedEmail");
    if (rememberedEmail) {
        document.getElementById("email").value = rememberedEmail;
        document.getElementById("rememberMe").checked = true;
    }
};

// Password Reset Form Submission
document.getElementById("resetForm")?.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form auto-submit

    const newPassword = document.getElementById("newPassword").value.trim();
    const confirmPassword = document.getElementById("confirmPassword").value.trim();

    // Validate passwords
    if (newPassword === "" || confirmPassword === "") {
        alert("Please enter both password fields.");
        return;
    }

    if (newPassword !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    alert("Password has been reset successfully!");
    window.location.href = "login.html"; // Redirect to login page
});


document.getElementById("addWordForm").addEventListener("submit", function(e) {
    e.preventDefault();
  
    // Get the input values
    const tamilWord = document.getElementById("tamilWord").value.trim();
    const tamilMeaning = document.getElementById("tamilMeaning").value.trim();
    const englishMeaning = document.getElementById("englishMeaning").value.trim();
    const exampleSentence = document.getElementById("exampleSentence").value.trim();
  
    // Check if any field is empty
    if (!tamilWord || !tamilMeaning || !englishMeaning || !exampleSentence) {
      alert("Please fill out all fields.");
      return;
    }
  
    // Create an object for the new word
    const newWord = {
      tamilWord,
      tamilMeaning,
      englishMeaning,
      exampleSentence
    };
  
    // Log the new word to the console (for now)
    console.log("New Word Added:", newWord);
  
    // Display success message after submitting
    document.getElementById("successMessage").style.display = "block";
  
    // Clear the form after submission
    document.getElementById("addWordForm").reset();
  });
  
  // Close the success message when the close button is clicked
  function closeSuccessMessage() {
    document.getElementById("successMessage").style.display = "none";
  }


 // Open Modal Function (Only When a Word is Clicked)
function openModal(word) {
    let wordTitle = document.getElementById("wordTitle");
    let wordMeaning = document.getElementById("wordMeaning");
    let modal = document.getElementById("wordModal");

    // Dictionary Data
    let words = {
        "markkam": {
            title: "மர்க்கம் (Markkam)",
            meaning: `
                <p><b>English Meaning:</b> A mark or stain</p>
                <p><b>Example:</b> The book had a small mark on the cover.</p>
                <p><b>தமிழ் அர்த்தம்:</b> ஒரு மச்சம் அல்லது குறை</p>
                <p><b>எடுத்துக்காட்டு:</b> அந்த புத்தகத்தின் அட்டையில் ஒரு சிறிய மச்சம் இருந்தது.</p>
            `
        },
        "umundi": {
            title: "உமுண்டி (Umundi)",
            meaning: `
                <p><b>English Meaning:</b> A small stone or pebble</p>
                <p><b>Example:</b> I found a shiny pebble near the river.</p>
                <p><b>தமிழ் அர்த்தம்:</b> ஒரு சிறிய கல்</p>
                <p><b>எடுத்துக்காட்டு:</b> நானொரு பிரகாசமான சிறிய கல்லை ஆற்றின் அருகில் கண்டுபிடித்தேன்.</p>
            `
        },"kaava": {
    title: "காவா (Kaava)",
    meaning: `
        <p><b>English Meaning:</b> Dog</p>
        <p><b>Example:</b> The dog was running on the street.</p>
        <p><b>தமிழ் அர்த்தம்:</b> நாய்</p>
        <p><b>எடுத்துக்காட்டு:</b> காவா வீதியில் ஓடிக்கொண்டிருந்தது.</p>
    `
},"kaanjaan": {
    title: "காஞ்சான் (Kanjaan)",
    meaning: `
        <p><b>English Meaning:</b> Cat</p>
        <p><b>Example:</b> The cat meowed loudly.</p>
        <p><b>தமிழ் அர்த்தம்:</b> பூனை</p>
        <p><b>எடுத்துக்காட்டு:</b> காஞ்சான் மியாவ் என்று அலறியது.</p>
    `
},"korpataan": {
    title: "கொர்ப்பத்தான் (Korpataan)",
    meaning: `
        <p><b>English Meaning:</b> Hen</p>
        <p><b>Example:</b> The hen laid an egg.</p>
        <p><b>தமிழ் அர்த்தம்:</b> கோழி</p>
        <p><b>எடுத்துக்காட்டு:</b> கொர்ப்பத்தான் முட்டையிட்டது.</p>
    `
},"veenthal": {
    title: "வேந்தள (Veenthal)",
    meaning: `
        <p><b>English Meaning:</b> Mad</p>
        <p><b>Example:</b> He spoke like a mad person.</p>
        <p><b>தமிழ் அர்த்தம்:</b> பைத்தியம்</p>
        <p><b>எடுத்துக்காட்டு:</b> அவன் வேந்தள மாதிரி பேசினான்.</p>
    `
},"pisaal": {
    title: "பிசால் (Pisaal)",
    meaning: `
        <p><b>English Meaning:</b> Rice</p>
        <p><b>Example:</b> Mom cooked rice.</p>
        <p><b>தமிழ் அர்த்தம்:</b> அரிசி</p>
        <p><b>எடுத்துக்காட்டு:</b> அம்மா பிசால் சமைத்தார்.</p>
    `
},"veppu": {
    title: "வெப்பு (Veppu)",
    meaning: `
        <p><b>English Meaning:</b> Scolding</p>
        <p><b>Example:</b> The teacher scolded the students.</p>
        <p><b>தமிழ் அர்த்தம்:</b> அலட்டு</p>
        <p><b>எடுத்துக்காட்டு:</b> ஆசிரியர் மாணவர்களை வெப்பு கொடுத்தார்.</p>
    `
},"peradu": {
    title: "பெரடு (Peradu)",
    meaning: `
        <p><b>English Meaning:</b> House</p>
        <p><b>Example:</b> He went to his house.</p>
        <p><b>தமிழ் அர்த்தம்:</b> வீடு</p>
        <p><b>எடுத்துக்காட்டு:</b> அவன் பெரடுக்கு சென்றான்.</p>
    `
},

"poondhai": {
    title: "பூந்தை (Poondhai)",
    meaning: `
        <p><b>English Meaning:</b> Human</p>
        <p><b>Example:</b> Human life is important.</p>
        <p><b>தமிழ் அர்த்தம்:</b> மனிதன்</p>
        <p><b>எடுத்துக்காட்டு:</b> பூந்தை வாழ்க்கை முக்கியமானது.</p>
    `
},

"periya_poondhai": {
    title: "பெரிய பூந்தை (Periya Poondhai)",
    meaning: `
        <p><b>English Meaning:</b> Elders</p>
        <p><b>Example:</b> We must respect elders.</p>
        <p><b>தமிழ் அர்த்தம்:</b> பெரியவர்கள்</p>
        <p><b>எடுத்துக்காட்டு:</b> பெரிய பூந்தையை மதிக்க வேண்டும்.</p>
    `
},

"chinna_poondhai": {
    title: "சின்ன பூந்தை (Chinna Poondhai)",
    meaning: `
        <p><b>English Meaning:</b> Youngers</p>
        <p><b>Example:</b> We should take care of young ones with love.</p>
        <p><b>தமிழ் அர்த்தம்:</b> சிறியவர்கள்</p>
        <p><b>எடுத்துக்காட்டு:</b> சின்ன பூந்தையை அன்பாக பார்த்துக் கொள்ள வேண்டும்.</p>
    `
},

"umundi": {
    title: "உமுண்டி (Umundi)",
    meaning: `
        <p><b>English Meaning:</b> Water</p>
        <p><b>Example:</b> I need water.</p>
        <p><b>தமிழ் அர்த்தம்:</b> தண்ணீர்</p>
        <p><b>எடுத்துக்காட்டு:</b> எனக்கு உமுண்டி வேண்டும்.</p>
    `
},

"vaendi": {
    title: "வேண்டி (Vaendi)",
    meaning: `
        <p><b>English Meaning:</b> Narcotics</p>
        <p><b>Example:</b> Narcotics are harmful to the body.</p>
        <p><b>தமிழ் அர்த்தம்:</b> போதைப்பொருள்</p>
        <p><b>எடுத்துக்காட்டு:</b> வேண்டி உடலுக்கு தீங்கு விளைவிக்கும்.</p>
    `
},

"ukkaruchchu": {
    title: "உக்கருச்சு (Ukkaruchchu)",
    meaning: `
        <p><b>English Meaning:</b> Sit</p>
        <p><b>Example:</b> Sit in the hall.</p>
        <p><b>தமிழ் அர்த்தம்:</b> உட்கார்</p>
        <p><b>எடுத்துக்காட்டு:</b> மண்டபத்தில் உக்கருச்சு.</p>
    `
},

"ikkatta_varchu": {
    title: "இக்கட்ட வர்சு (Ikkatta Varchu)",
    meaning: `
        <p><b>English Meaning:</b> Come here</p>
        <p><b>Example:</b> Come here, I need your help.</p>
        <p><b>தமிழ் அர்த்தம்:</b> இங்கு வா</p>
        <p><b>எடுத்துக்காட்டு:</b> இக்கட்ட வர்சு, எனக்கு உதவ வேண்டும்.</p>
    `
},

"akkatta_varchu": {
    title: "அக்கட்ட வர்சு (Akkatta Varchu)",
    meaning: `
        <p><b>English Meaning:</b> Come there</p>
        <p><b>Example:</b> Come there, there is work.</p>
        <p><b>தமிழ் அர்த்தம்:</b> அங்கே வா</p>
        <p><b>எடுத்துக்காட்டு:</b> அக்கட்ட வர்சு, வேலை இருக்கிறது.</p>
    `
},

"ekkiluchchu": {
    title: "எக்கிலுச்சு (Ekkiluchchu)",
    meaning: `
        <p><b>English Meaning:</b> Get up</p>
        <p><b>Example:</b> Get up early in the morning.</p>
        <p><b>தமிழ் அர்த்தம்:</b> எழுந்திரு</p>
        <p><b>எடுத்துக்காட்டு:</b> காலையில் சீக்கிரம் எக்கிலுச்சு.</p>
    `
},"pachchaambu": {
    title: "பச்சாம்பு (Pachchaambu)",
    meaning: `
        <p><b>English Meaning:</b> Meat</p>
        <p><b>Example:</b> Cook the meat.</p>
        <p><b>தமிழ் அர்த்தம்:</b> இறைச்சி</p>
        <p><b>எடுத்துக்காட்டு:</b> பச்சாம்பு சமைத்து வைக்க.</p>
    `
},

"varachchu": {
    title: "வரச்சு (Varachchu)",
    meaning: `
        <p><b>English Meaning:</b> Come</p>
        <p><b>Example:</b> You come tomorrow.</p>
        <p><b>தமிழ் அர்த்தம்:</b> வா</p>
        <p><b>எடுத்துக்காட்டு:</b> நீ நாளைக்கு வரச்சு.</p>
    `
},

"achchu": {
    title: "அச்ச (Achchu)",
    meaning: `
        <p><b>English Meaning:</b> Those</p>
        <p><b>Example:</b> Those books are new.</p>
        <p><b>தமிழ் அர்த்தம்:</b> அவை</p>
        <p><b>எடுத்துக்காட்டு:</b> அச்ச புத்தகங்கள் புதியவை.</p>
    `
},

"ichchu": {
    title: "இச்ச (Ichchu)",
    meaning: `
        <p><b>English Meaning:</b> These</p>
        <p><b>Example:</b> These fruits are sweet.</p>
        <p><b>தமிழ் அர்த்தம்:</b> இவை</p>
        <p><b>எடுத்துக்காட்டு:</b> இச்ச பழங்கள் இனிப்பாக இருக்கின்றன.</p>
    `
},

"sengu": {
    title: "சேங்கு (Sengu)",
    meaning: `
        <p><b>English Meaning:</b> Steal</p>
        <p><b>Example:</b> Do not steal.</p>
        <p><b>தமிழ் அர்த்தம்:</b> திருடு</p>
        <p><b>எடுத்துக்காட்டு:</b> சேங்கு செய்யக்கூடாது.</p>
    `
},

"eppu": {
    title: "எப்பு (Eppu)",
    meaning: `
        <p><b>English Meaning:</b> Take</p>
        <p><b>Example:</b> Take this book.</p>
        <p><b>தமிழ் அர்த்தம்:</b> எடுத்துக்கொள்</p>
        <p><b>எடுத்துக்காட்டு:</b> இந்த புத்தகத்தை எப்பு.</p>
    `
},

"polumai": {
    title: "போலுமை (Polumai)",
    meaning: `
        <p><b>English Meaning:</b> Jewels</p>
        <p><b>Example:</b> Mom wore jewels.</p>
        <p><b>தமிழ் அர்த்தம்:</b> நகைகள்</p>
        <p><b>எடுத்துக்காட்டு:</b> அம்மா போலுமை அணிந்தார்.</p>
    `
},

"unusu": {
    title: "உனுசு (Unusu)",
    meaning: `
        <p><b>English Meaning:</b> Slap / Beat</p>
        <p><b>Example:</b> He got beaten for misbehaving.</p>
        <p><b>தமிழ் அர்த்தம்:</b> அடி</p>
        <p><b>எடுத்துக்காட்டு:</b> அவன் தப்பாக நடந்ததால் உனுசு வாங்கினான்.</p>
    `
},

"sonniyam": {
    title: "சொன்னியம் (Sonniyam)",
    meaning: `
        <p><b>English Meaning:</b> Money</p>
        <p><b>Example:</b> I need money.</p>
        <p><b>தமிழ் அர்த்தம்:</b> பணம்</p>
        <p><b>எடுத்துக்காட்டு:</b> எனக்கு சொன்னியம் தேவை.</p>
    `
},

"musaan": {
    title: "முசான் (Musaan)",
    meaning: `
        <p><b>English Meaning:</b> Pig</p>
        <p><b>Example:</b> The pig was searching for food.</p>
        <p><b>தமிழ் அர்த்தம்:</b> பன்றி</p>
        <p><b>எடுத்துக்காட்டு:</b> முசான் உணவுக்காக தேடிக்கொண்டிருந்தது.</p>
    `
},

"mottittu_varchchu": {
    title: "மொட்டிட்டு வர்ச்சு (Mottittu Varchchu)",
    meaning: `
        <p><b>English Meaning:</b> Buy and come</p>
        <p><b>Example:</b> Buy and come home soon.</p>
        <p><b>தமிழ் அர்த்தம்:</b> வாங்கி வா</p>
        <p><b>எடுத்துக்காட்டு:</b> மொட்டிட்டு வர்ச்சு சீக்கிரம்.</p>
    `
},

"pichchittu_varchchu": {
    title: "பிச்சிட்டு வர்ச்சு (Pichchittu Varchchu)",
    meaning: `
        <p><b>English Meaning:</b> Go and come</p>
        <p><b>Example:</b> Go and come quickly.</p>
        <p><b>தமிழ் அர்த்தம்:</b> போயிட்டு வா</p>
        <p><b>எடுத்துக்காட்டு:</b> பிச்சிட்டு வர்ச்சு விரைவாக.</p>
    `
},

"eppittu_varchchu": {
    title: "எப்பிட்டு வர்ச்சு (Eppittu Varchchu)",
    meaning: `
        <p><b>English Meaning:</b> Bring and come</p>
        <p><b>Example:</b> Bring the books and come.</p>
        <p><b>தமிழ் அர்த்தம்:</b> கொண்டு வா</p>
        <p><b>எடுத்துக்காட்டு:</b> எப்பிட்டு வர்ச்சு புத்தகங்களை.</p>
    `
},

"mooth_sengu": {
    title: "மோத்த சேங்கு (Mooth Sengu)",
    meaning: `
        <p><b>English Meaning:</b> Thief</p>
        <p><b>Example:</b> The thief was caught.</p>
        <p><b>தமிழ் அர்த்தம்:</b> திருடன்</p>
        <p><b>எடுத்துக்காட்டு:</b> மோத்த சேங்கு பிடிபட்டான்.</p>
    `
},

"mottu": {
    title: "மொட்டு (Mottu)",
    meaning: `
        <p><b>English Meaning:</b> Buy</p>
        <p><b>Example:</b> Buy some vegetables.</p>
        <p><b>தமிழ் அர்த்தம்:</b> வாங்கு</p>
        <p><b>எடுத்துக்காட்டு:</b> மொட்டு காய்கறிகளை.</p>
    `
},

"moochchu": {
    title: "மோச்சு (Moochchu)",
    meaning: `
        <p><b>English Meaning:</b> Eat</p>
        <p><b>Example:</b> Eat your food properly.</p>
        <p><b>தமிழ் அர்த்தம்:</b> சாப்பிடு</p>
        <p><b>எடுத்துக்காட்டு:</b> மோச்சு உணவை சரியாக.</p>
    `
},

"vappu": {
    title: "வப்பு (Vappu)",
    meaning: `
        <p><b>English Meaning:</b> Keep</p>
        <p><b>Example:</b> Keep the books safely.</p>
        <p><b>தமிழ் அர்த்தம்:</b> வை</p>
        <p><b>எடுத்துக்காட்டு:</b> வப்பு புத்தகங்களை பாதுகாப்பாக.</p>
    `
},"mooth": {
    title: "மோத்த (Mooth)",
    meaning: `
        <p><b>English Meaning:</b> Steal</p>
        <p><b>Example:</b> He tried to steal money.</p>
        <p><b>தமிழ் அர்த்தம்:</b> திருடு</p>
        <p><b>எடுத்துக்காட்டு:</b> அவன் பணத்தை மோத்த செய்ய முயன்றான்.</p>
    `
},

"sengittu_varchchu": {
    title: "செங்கிட்டு வர்ச்சு (Sengittu Varchchu)",
    meaning: `
        <p><b>English Meaning:</b> Steal and come</p>
        <p><b>Example:</b> He stole and came home.</p>
        <p><b>தமிழ் அர்த்தம்:</b> திருடி வா</p>
        <p><b>எடுத்துக்காட்டு:</b> அவன் செங்கிட்டு வர்ச்சு வீட்டிற்கு வந்தான்.</p>
    `
},

"kondi_manuman": {
    title: "கொண்டி மனுமன் (Kondi Manuman)",
    meaning: `
        <p><b>English Meaning:</b> Officers</p>
        <p><b>Example:</b> The officers investigated the case.</p>
        <p><b>தமிழ் அர்த்தம்:</b> அதிகாரிகள்</p>
        <p><b>எடுத்துக்காட்டு:</b> கொண்டி மனுமன் வழக்கை விசாரித்தனர்.</p>
    `
},

"manume": {
    title: "மனுமே (Manume)",
    meaning: `
        <p><b>English Meaning:</b> Male</p>
        <p><b>Example:</b> The male student won the competition.</p>
        <p><b>தமிழ் அர்த்தம்:</b> ஆண்</p>
        <p><b>எடுத்துக்காட்டு:</b> மனுமே மாணவன் போட்டியில் வெற்றி பெற்றான்.</p>
    `
},

"manuthi": {
    title: "மனுத்தி (Manuthi)",
    meaning: `
        <p><b>English Meaning:</b> Female</p>
        <p><b>Example:</b> The female artist painted beautifully.</p>
        <p><b>தமிழ் அர்த்தம்:</b> பெண்</p>
        <p><b>எடுத்துக்காட்டு:</b> மனுத்தி கலைஞர் அழகாக ஓவியம் வரையினார்.</p>
    `
},

"akkatta": {
    title: "அக்கட்ட (Akkatta)",
    meaning: `
        <p><b>English Meaning:</b> There</p>
        <p><b>Example:</b> Stand there for a while.</p>
        <p><b>தமிழ் அர்த்தம்:</b> அங்கே</p>
        <p><b>எடுத்துக்காட்டு:</b> நீ அக்கட்ட நிற்க.</p>
    `
},

"ikkatta": {
    title: "இக்கட்ட (Ikkatta)",
    meaning: `
        <p><b>English Meaning:</b> Here</p>
        <p><b>Example:</b> Sit here comfortably.</p>
        <p><b>தமிழ் அர்த்தம்:</b> இங்கே</p>
        <p><b>எடுத்துக்காட்டு:</b> இக்கட்ட உட்காரவும்.</p>
    `
},

"kuppu": {
    title: "குப்பு (Kuppu)",
    meaning: `
        <p><b>English Meaning:</b> Give</p>
        <p><b>Example:</b> Give me the book.</p>
        <p><b>தமிழ் அர்த்தம்:</b> கொடு</p>
        <p><b>எடுத்துக்காட்டு:</b> புத்தகத்தை குப்பு.</p>
    `
},

"thoolittu_va": {
    title: "தூலிட்டுவா (Thoolittu Va)",
    meaning: `
        <p><b>English Meaning:</b> See and come</p>
        <p><b>Example:</b> Go see the market and come back.</p>
        <p><b>தமிழ் அர்த்தம்:</b> பார்த்து வா</p>
        <p><b>எடுத்துக்காட்டு:</b> சந்தையை தூலிட்டுவா.</p>
    `
},

"thoolu": {
    title: "தூலு (Thoolu)",
    meaning: `
        <p><b>English Meaning:</b> See</p>
        <p><b>Example:</b> See that building over there.</p>
        <p><b>தமிழ் அர்த்தம்:</b> பார்</p>
        <p><b>எடுத்துக்காட்டு:</b> அந்த கட்டிடத்தை தூலு.</p>
    `
},

"pichchu": {
    title: "பிச்சு (Pichchu)",
    meaning: `
        <p><b>English Meaning:</b> Go</p>
        <p><b>Example:</b> Go to the shop and buy some groceries.</p>
        <p><b>தமிழ் அர்த்தம்:</b> போ</p>
        <p><b>எடுத்துக்காட்டு:</b> கடைக்கு பிச்சு.</p>
    `
},

"vappittu_varchchu": {
    title: "வப்பிட்டு வர்ச்சு (Vappittu Varchchu)",
    meaning: `
        <p><b>English Meaning:</b> Put and come</p>
        <p><b>Example:</b> Put the bag down and come.</p>
        <p><b>தமிழ் அர்த்தம்:</b> வைட்டு வா</p>
        <p><b>எடுத்துக்காட்டு:</b> பையை வப்பிட்டு வர்ச்சு.</p>
    `
}


    };
    // Set Pop-up Content
    if (words[word]) {
        wordTitle.innerHTML = words[word].title;
        wordMeaning.innerHTML = words[word].meaning;
        modal.style.display = "flex"; // Show modal
    }
}

// Close Modal Function
function closeModal() {
    document.getElementById("wordModal").style.display = "none";
}

// Close Modal When Clicking Outside
window.onclick = function(event) {
    let modal = document.getElementById("wordModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

// **NEW FIX:** Ensure modal is hidden on page load
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("wordModal").style.display = "none";
});
