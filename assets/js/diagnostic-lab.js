const lab = document.querySelector("[data-diagnostic-lab]");

if (lab) {
  const steps = [
    {
      kicker: "Συλλογή αρχικών στοιχείων",
      title: "Ποια είναι η πρώτη σωστή ενέργεια;",
      description: "Η λυχνία ABS είναι αναμμένη και η μονάδα δεν εμφανίζεται στη σάρωση.",
      hint: "Πριν αγγίξεις εξάρτημα, χρειάζεσαι μια συνολική εικόνα των μονάδων και των κωδικών.",
      options: [
        { text: "Πλήρης σάρωση όλων των μονάδων και καταγραφή DTC", meta: "Συλλογή δεδομένων", correct: true },
        { text: "Άμεση αντικατάσταση της μονάδας ABS", meta: "Ακριβή επέμβαση χωρίς έλεγχο", penalty: 12 },
        { text: "Διαγραφή όλων των κωδικών και δοκιμή στον δρόμο", meta: "Χάνονται χρήσιμα στοιχεία", penalty: 8 },
      ],
      success: "Σωστά. Η πλήρης σάρωση δείχνει ποιες μονάδες επικοινωνούν και ποιος κωδικός έχει καταγραφεί.",
      reading: { label: "ΑΠΟΤΕΛΕΣΜΑ ΣΑΡΩΣΗΣ", value: "U0121 - ΧΑΘΗΚΕ Η ΕΠΙΚΟΙΝΩΝΙΑ ΜΕ ABS", detail: "Απαντούν ECU κινητήρα, BCM και πίνακας οργάνων. Η μονάδα ABS δεν απαντά." },
      log: "Πλήρης σάρωση: U0121 και ABS εκτός επικοινωνίας.",
    },
    {
      kicker: "Βασικές προϋποθέσεις λειτουργίας",
      title: "Ποιον έλεγχο κάνεις τώρα στη μονάδα ABS;",
      description: "Ο U0121 δείχνει απώλεια επικοινωνίας, αλλά δεν αποδεικνύει ότι η ECU του ABS έχει καταστραφεί.",
      hint: "Καμία ECU δεν μπορεί να επικοινωνήσει αν δεν τροφοδοτείται ή δεν έχει σωστή γείωση.",
      options: [
        { text: "Μέτρηση τροφοδοσίας και πτώσης τάσης γείωσης στη φίσα ABS", meta: "Βασικός ηλεκτρικός έλεγχος", correct: true },
        { text: "Αλλαγή και των δύο καλωδίων CAN", meta: "Χωρίς προηγούμενη μέτρηση", penalty: 8 },
        { text: "Έλεγχος των τεσσάρων αισθητήρων ταχύτητας τροχού", meta: "Δεν εξηγεί την απουσία της ECU", penalty: 7 },
      ],
      success: "Σωστά. Πρώτα επιβεβαιώνουμε ότι η μονάδα έχει τις βασικές προϋποθέσεις για να λειτουργήσει.",
      reading: { label: "ΜΕΤΡΗΣΗ ΣΤΗ ΦΙΣΑ ABS", value: "B+ 0,18 V  •  ΓΕΙΩΣΗ 0,03 V", detail: "Η γείωση είναι καλή, αλλά στη γραμμή τροφοδοσίας δεν φτάνει η τάση μπαταρίας." },
      measurements: { power: ["0,18 V", "alert"], ground: ["0,03 V", "good"] },
      log: "Στη φίσα ABS: απουσία τροφοδοσίας, σωστή γείωση.",
    },
    {
      kicker: "Εντοπισμός της διακοπής",
      title: "Η τροφοδοσία λείπει. Ποιο είναι το επόμενο βήμα;",
      description: "Σύμφωνα με το ηλεκτρικό διάγραμμα, η μονάδα ABS τροφοδοτείται μέσω της ασφάλειας F17.",
      hint: "Ακολούθησε τη γραμμή τροφοδοσίας προς τα πίσω, ξεκινώντας από το απλούστερο προσβάσιμο σημείο.",
      options: [
        { text: "Έλεγχος της ασφάλειας F17 με πολύμετρο", meta: "Συνέχεια κυκλώματος", correct: true },
        { text: "Άνοιγμα της μονάδας ABS για εσωτερικό έλεγχο", meta: "Πρόωρη και επικίνδυνη ενέργεια", penalty: 10 },
        { text: "Αντικατάσταση αισθητήρα εμπρός αριστερού τροχού", meta: "Άσχετο με την τροφοδοσία ECU", penalty: 9 },
      ],
      success: "Σωστά. Η ασφάλεια είναι ανοιχτή και δεν τροφοδοτεί τη μονάδα ABS.",
      reading: { label: "ΕΛΕΓΧΟΣ ΑΣΦΑΛΕΙΑΣ F17", value: "ΧΩΡΙΣ ΣΥΝΕΧΕΙΑ - ΑΣΦΑΛΕΙΑ ΚΑΜΕΝΗ", detail: "Η καμένη ασφάλεια εξηγεί την απουσία τροφοδοσίας, αλλά πρέπει να βρεθεί γιατί κάηκε." },
      measurements: { fuse: ["ΑΝΟΙΧΤΗ", "alert"] },
      log: "Η ασφάλεια F17 βρέθηκε καμένη.",
    },
    {
      kicker: "Αναζήτηση πραγματικής αιτίας",
      title: "Τι κάνεις πριν τοποθετήσεις καινούρια ασφάλεια;",
      description: "Η απλή αντικατάσταση της F17 μπορεί να οδηγήσει σε δεύτερη καμένη ασφάλεια.",
      hint: "Μια ασφάλεια συνήθως ανοίγει για να προστατεύσει το κύκλωμα από υπερβολικό ρεύμα.",
      options: [
        { text: "Έλεγχος της γραμμής τροφοδοσίας για βραχυκύκλωμα προς γείωση", meta: "Αναζήτηση αιτίας υπερέντασης", correct: true },
        { text: "Τοποθέτηση ασφάλειας μεγαλύτερης έντασης", meta: "Κίνδυνος ζημιάς ή πυρκαγιάς", penalty: 15 },
        { text: "Τοποθέτηση νέας F17 χωρίς άλλο έλεγχο", meta: "Αντιμετωπίζει το αποτέλεσμα, όχι την αιτία", penalty: 8 },
      ],
      success: "Σωστά. Η πλεξούδα πρέπει να ελεγχθεί πριν τροφοδοτηθεί ξανά το κύκλωμα.",
      reading: { label: "ΕΛΕΓΧΟΣ ΚΑΛΩΔΙΩΣΗΣ", value: "0,4 Ω ΠΡΟΣ ΓΕΙΩΣΗ - ΒΡΑΧΥΚΥΚΛΩΜΑ", detail: "Κοντά στη μεταλλική βάση του ABS η μόνωση έχει τριφτεί και ο αγωγός ακουμπά στο αμάξωμα." },
      log: "Εντοπίστηκε τραυματισμένη μόνωση και βραχυκύκλωμα προς γείωση.",
    },
    {
      kicker: "Σωστή επισκευή",
      title: "Ποια εργασία αποκαθιστά με ασφάλεια το κύκλωμα;",
      description: "Η πραγματική αιτία βρίσκεται στην πλεξούδα δίπλα στη βάση της υδραυλικής μονάδας ABS.",
      hint: "Πρέπει να αποκατασταθεί και ο αγωγός και η προστασία του από νέα τριβή.",
      options: [
        { text: "Επισκευή αγωγού, μόνωση, στερέωση πλεξούδας και νέα F17 σωστής έντασης", meta: "Πλήρης και ασφαλής αποκατάσταση", correct: true },
        { text: "Μόνο τύλιγμα εξωτερικά με ταινία και ίδια καμένη ασφάλεια", meta: "Το κύκλωμα παραμένει ανοικτό", penalty: 9 },
        { text: "Γέφυρα στη θέση της ασφάλειας για να μην ξανακαεί", meta: "Καταργεί κρίσιμη προστασία", penalty: 15 },
      ],
      success: "Σωστά. Η αιτία επισκευάστηκε και το κύκλωμα προστατεύεται ξανά με την προβλεπόμενη ασφάλεια.",
      reading: { label: "ΕΛΕΓΧΟΣ ΜΕΤΑ ΤΗΝ ΕΠΙΣΚΕΥΗ", value: "B+ 12,48 V  •  F17: ΣΥΝΕΧΕΙΑ", detail: "Η τροφοδοσία αποκαταστάθηκε. Απομένει ο τελικός λειτουργικός έλεγχος." },
      measurements: { power: ["12,48 V", "good"], fuse: ["ΣΥΝΕΧΕΙΑ", "good"] },
      log: "Επισκευάστηκε ο αγωγός και τοποθετήθηκε σωστή ασφάλεια F17.",
    },
    {
      kicker: "Επιβεβαίωση επισκευής",
      title: "Πώς ολοκληρώνεται σωστά η διάγνωση;",
      description: "Η τάση επέστρεψε στη μονάδα. Χρειάζεται απόδειξη ότι η επικοινωνία και το σύστημα λειτουργούν.",
      hint: "Η επισκευή δεν τελειώνει όταν απλώς τοποθετηθεί το εξάρτημα. Τελειώνει όταν επιβεβαιωθεί το αποτέλεσμα.",
      options: [
        { text: "Νέα πλήρης σάρωση, έλεγχος επικοινωνίας ABS και επιβεβαίωση μετά τη διαγραφή DTC", meta: "Τεκμηριωμένος τελικός έλεγχος", correct: true },
        { text: "Παράδοση του οχήματος χωρίς νέα σάρωση", meta: "Δεν υπάρχει επιβεβαίωση", penalty: 8 },
        { text: "Διαγραφή του κωδικού χωρίς έλεγχο της μονάδας", meta: "Η διαγραφή δεν αποδεικνύει επισκευή", penalty: 7 },
      ],
      success: "Σωστά. Η μονάδα ABS απαντά, ο U0121 δεν επιστρέφει και η λυχνία σβήνει μετά τον αυτοέλεγχο.",
      reading: { label: "ΤΕΛΙΚΗ ΣΑΡΩΣΗ", value: "4/4 ΜΟΝΑΔΕΣ ONLINE - ΚΑΝΕΝΑΣ ΕΝΕΡΓΟΣ DTC", detail: "Η επικοινωνία αποκαταστάθηκε. Η αντίσταση διαύλου είναι 60,1 Ω και η μονάδα ABS λειτουργεί κανονικά." },
      measurements: { can: ["60,1 Ω", "good"] },
      repairNetwork: true,
      log: "Τελικός έλεγχος: ABS online, κανένας ενεργός DTC.",
    },
  ];

  const screens = {
    welcome: lab.querySelector('[data-lab-screen="welcome"]'),
    mission: lab.querySelector('[data-lab-screen="mission"]'),
    result: lab.querySelector('[data-lab-screen="result"]'),
  };
  const startButton = lab.querySelector("[data-start-mission]");
  const restartButton = lab.querySelector("[data-restart-mission]");
  const optionsContainer = lab.querySelector("[data-decision-options]");
  const feedback = lab.querySelector("[data-decision-feedback]");
  const continueButton = lab.querySelector("[data-continue]");
  const hintButton = lab.querySelector("[data-hint]");
  const scoreTarget = lab.querySelector("[data-score]");
  const timerTarget = lab.querySelector("[data-timer]");
  const stepCurrent = lab.querySelector("[data-step-current]");
  const progressBar = lab.querySelector("[data-mission-progress]");
  const stepTag = lab.querySelector("[data-step-tag]");
  const kicker = lab.querySelector("[data-decision-kicker]");
  const title = lab.querySelector("[data-decision-title]");
  const description = lab.querySelector("[data-decision-description]");
  const readingLabel = lab.querySelector("[data-reading-label]");
  const readingValue = lab.querySelector("[data-reading-value]");
  const readingDetail = lab.querySelector("[data-reading-detail]");
  const scanDisplay = lab.querySelector(".scan-display");
  const diagnosticLog = lab.querySelector("[data-diagnostic-log]");
  const absNode = lab.querySelector("[data-abs-node]");
  const absStatus = lab.querySelector("[data-abs-status]");
  const finalScore = lab.querySelector("[data-final-score]");
  const resultTitle = lab.querySelector("[data-result-title]");
  const resultMessage = lab.querySelector("[data-result-message]");
  const letters = ["Α", "Β", "Γ"];

  let stepIndex = 0;
  let score = 100;
  let elapsedSeconds = 0;
  let timerId = null;
  let resolved = false;
  let hintUsed = false;
  let attempted = new Set();

  const showScreen = (name) => {
    Object.entries(screens).forEach(([screenName, screen]) => {
      screen.hidden = screenName !== name;
    });
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60).toString().padStart(2, "0");
    const remainder = (seconds % 60).toString().padStart(2, "0");
    return `${minutes}:${remainder}`;
  };

  const shuffleOptions = (options) => {
    const shuffled = [...options];
    for (let index = shuffled.length - 1; index > 0; index -= 1) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
    }
    return shuffled;
  };

  const updateScore = (penalty = 0) => {
    score = Math.max(0, score - penalty);
    scoreTarget.textContent = String(score);
    scoreTarget.closest("div")?.classList.toggle("is-penalized", penalty > 0);
    window.setTimeout(() => scoreTarget.closest("div")?.classList.remove("is-penalized"), 380);
  };

  const addLog = (message) => {
    const item = document.createElement("li");
    item.textContent = message;
    diagnosticLog.append(item);
    while (diagnosticLog.children.length > 4) diagnosticLog.firstElementChild?.remove();
  };

  const applyMeasurements = (measurements = {}) => {
    Object.entries(measurements).forEach(([key, [value, status]]) => {
      const card = lab.querySelector(`[data-measurement="${key}"]`);
      if (!card) return;
      card.querySelector("strong").textContent = value;
      card.classList.remove("is-alert", "is-good");
      card.classList.add(`is-${status}`);
    });
  };

  const showFeedback = (heading, copy, wrong = false) => {
    feedback.hidden = false;
    feedback.classList.toggle("is-wrong", wrong);
    feedback.querySelector("strong").textContent = heading;
    feedback.querySelector("p").textContent = copy;
  };

  const updateReading = (reading, good = false) => {
    readingLabel.textContent = reading.label;
    readingValue.textContent = reading.value;
    readingDetail.textContent = reading.detail;
    scanDisplay.classList.toggle("is-good", good);
  };

  const chooseOption = (button, option, optionIndex) => {
    if (resolved || attempted.has(optionIndex)) return;
    attempted.add(optionIndex);

    if (!option.correct) {
      button.classList.add("is-wrong");
      button.disabled = true;
      const penalty = option.penalty || 8;
      updateScore(penalty);
      showFeedback("Η σειρά δεν είναι σωστή", `Η ενέργεια αυτή αφαιρεί ${penalty} βαθμούς. Χρειάζεσαι πρώτα έναν έλεγχο που να βασίζεται στα διαθέσιμα στοιχεία.`, true);
      addLog(`Άσκοπη ενέργεια: ${option.text} (−${penalty}).`);
      return;
    }

    resolved = true;
    button.classList.add("is-correct");
    optionsContainer.querySelectorAll("button").forEach((optionButton) => { optionButton.disabled = true; });
    showFeedback("Σωστή διαγνωστική επιλογή", steps[stepIndex].success);
    updateReading(steps[stepIndex].reading, Boolean(steps[stepIndex].repairNetwork));
    applyMeasurements(steps[stepIndex].measurements);
    addLog(steps[stepIndex].log);
    hintButton.disabled = true;

    if (steps[stepIndex].repairNetwork) {
      absNode.classList.remove("is-offline");
      absNode.classList.add("is-repaired");
      absStatus.textContent = "ONLINE";
      continueButton.textContent = "Ολοκλήρωση αποστολής →";
    } else {
      continueButton.textContent = "Συνέχεια →";
    }
    continueButton.hidden = false;
    continueButton.focus({ preventScroll: true });
  };

  const renderStep = () => {
    const step = steps[stepIndex];
    resolved = false;
    hintUsed = false;
    attempted = new Set();
    feedback.hidden = true;
    feedback.classList.remove("is-wrong");
    continueButton.hidden = true;
    hintButton.disabled = false;
    stepCurrent.textContent = String(stepIndex + 1);
    stepTag.textContent = `ΒΗΜΑ ${stepIndex + 1}`;
    kicker.textContent = step.kicker;
    title.textContent = step.title;
    description.textContent = step.description;
    progressBar.style.width = `${(stepIndex / steps.length) * 100}%`;
    optionsContainer.replaceChildren();

    shuffleOptions(step.options).forEach((option, optionIndex) => {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "decision-option";
      button.innerHTML = `<span>${letters[optionIndex]}</span><strong></strong><small></small>`;
      button.querySelector("strong").textContent = option.text;
      button.querySelector("small").textContent = option.meta;
      button.addEventListener("click", () => chooseOption(button, option, optionIndex));
      optionsContainer.append(button);
    });
  };

  const resetMeasurements = () => {
    lab.querySelectorAll("[data-measurement]").forEach((card) => {
      card.classList.remove("is-alert", "is-good");
      card.querySelector("strong").textContent = "—";
    });
    updateReading({
      label: "ΑΡΧΙΚΗ ΚΑΤΑΣΤΑΣΗ",
      value: "ABS: ΧΩΡΙΣ ΕΠΙΚΟΙΝΩΝΙΑ",
      detail: "Οι υπόλοιπες μονάδες απαντούν κανονικά. Απαιτείται οργανωμένος έλεγχος.",
    });
    scanDisplay.classList.remove("is-good");
    absNode.classList.add("is-offline");
    absNode.classList.remove("is-repaired");
    absStatus.textContent = "OFFLINE";
  };

  const finishMission = () => {
    window.clearInterval(timerId);
    timerId = null;
    progressBar.style.width = "100%";
    finalScore.textContent = String(score);
    if (score >= 90) {
      resultTitle.textContent = "Άριστη διαγνωστική πορεία";
      resultMessage.textContent = `Ολοκλήρωσες την αποστολή σε ${formatTime(elapsedSeconds)} ακολουθώντας σχεδόν άψογη σειρά ελέγχων.`;
    } else if (score >= 75) {
      resultTitle.textContent = "Πολύ καλή διάγνωση";
      resultMessage.textContent = `Αποκατέστησες την επικοινωνία σε ${formatTime(elapsedSeconds)}. Με λίγη περισσότερη προσοχή μπορείς να αποφύγεις τις άσκοπες ενέργειες.`;
    } else if (score >= 60) {
      resultTitle.textContent = "Η επισκευή ολοκληρώθηκε";
      resultMessage.textContent = `Βρήκες τη βλάβη σε ${formatTime(elapsedSeconds)}, αλλά έχασες βαθμούς από ελέγχους που δεν ακολουθούσαν τη σωστή σειρά.`;
    } else {
      resultTitle.textContent = "Χρειάζεται νέα προσπάθεια";
      resultMessage.textContent = "Η επικοινωνία αποκαταστάθηκε, αλλά χρειάζεται να επαναλάβεις την αποστολή δίνοντας προτεραιότητα στις βασικές μετρήσεις.";
    }
    showScreen("result");
  };

  const startMission = () => {
    window.clearInterval(timerId);
    stepIndex = 0;
    score = 100;
    elapsedSeconds = 0;
    scoreTarget.textContent = "100";
    timerTarget.textContent = "00:00";
    diagnosticLog.innerHTML = "<li>Η αποστολή ξεκίνησε. Επίλεξε τον πρώτο έλεγχο.</li>";
    resetMeasurements();
    renderStep();
    showScreen("mission");
    timerId = window.setInterval(() => {
      elapsedSeconds += 1;
      timerTarget.textContent = formatTime(elapsedSeconds);
    }, 1000);
  };

  hintButton.addEventListener("click", () => {
    if (hintUsed || resolved) return;
    hintUsed = true;
    updateScore(4);
    showFeedback("Βοήθεια", steps[stepIndex].hint);
    addLog("Χρησιμοποιήθηκε βοήθεια (−4). ");
    hintButton.disabled = true;
  });

  continueButton.addEventListener("click", () => {
    if (!resolved) return;
    if (stepIndex === steps.length - 1) {
      finishMission();
      return;
    }
    stepIndex += 1;
    renderStep();
  });

  startButton.addEventListener("click", startMission);
  restartButton.addEventListener("click", startMission);
}
