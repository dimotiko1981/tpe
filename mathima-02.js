const quizData = [
  {
    question: "Τι περιγράφει καλύτερα ένα δίκτυο επικοινωνίας οχήματος;",
    options: [
      "Μία γραμμή που τροφοδοτεί με ρεύμα όλες τις ECU",
      "Σύστημα ανταλλαγής δεδομένων με κοινό μέσο και συμφωνημένους κανόνες",
      "Έναν κεντρικό υπολογιστή που αντικαθιστά όλες τις μονάδες",
      "Ένα σύνολο αισθητήρων χωρίς ηλεκτρονικές μονάδες",
    ],
    correct: "b",
    feedback: "Το δίκτυο επιτρέπει στις μονάδες να ανταλλάσσουν δεδομένα χρησιμοποιώντας κοινό μέσο και πρωτόκολλο.",
  },
  {
    question: "Ποια σχέση αποδίδει σωστά τα βασικά στοιχεία ενός δικτύου;",
    options: [
      "Δίκτυο = μπαταρία + ασφάλεια + γείωση",
      "Δίκτυο = αισθητήρας + καλώδιο + ενεργοποιητής",
      "Δίκτυο = μέσο + μήνυμα + πρωτόκολλο",
      "Δίκτυο = ECU + διαγνωστικό + κινητήρας",
    ],
    correct: "c",
    feedback: "Η επικοινωνία απαιτεί φυσικό μέσο, οργανωμένα μηνύματα και κοινά συμφωνημένους κανόνες.",
  },
  {
    question: "Ποια είναι η βασική λειτουργία ενός αισθητήρα;",
    options: [
      "Μετατρέπει ένα φυσικό μέγεθος σε ηλεκτρική πληροφορία",
      "Αποφασίζει ποια εντολή θα εκτελεστεί",
      "Ενεργοποιεί μηχανικά κάθε σύστημα του οχήματος",
      "Αποθηκεύει όλους τους κωδικούς βλάβης",
    ],
    correct: "a",
    feedback: "Ο αισθητήρας μετρά φυσικό μέγεθος, όπως θερμοκρασία ή ταχύτητα, και το μετατρέπει σε σήμα ή δεδομένο.",
  },
  {
    question: "Τι κάνει κυρίως μία ηλεκτρονική μονάδα ελέγχου ECU;",
    options: [
      "Παράγει την τάση της μπαταρίας",
      "Εκτελεί μόνο μηχανικές κινήσεις",
      "Αντικαθιστά όλους τους αισθητήρες",
      "Λαμβάνει δεδομένα, τα επεξεργάζεται και παίρνει αποφάσεις",
    ],
    correct: "d",
    feedback: "Η ECU διαβάζει δεδομένα, τα συγκρίνει με τη λογική του λογισμικού και στέλνει εντολές ή νέα μηνύματα.",
  },
  {
    question: "Ποιο από τα παρακάτω είναι ενεργοποιητής;",
    options: [
      "Αισθητήρας θερμοκρασίας ψυκτικού",
      "Μονάδα ABS",
      "Ηλεκτρικός ανεμιστήρας ψύξης",
      "Αισθητήρας ταχύτητας τροχού",
    ],
    correct: "c",
    feedback: "Ο ανεμιστήρας μετατρέπει την ηλεκτρική εντολή σε πραγματική κίνηση και ροή αέρα.",
  },
  {
    question: "Ποια σειρά περιγράφει σωστά τη βασική αλυσίδα λειτουργίας;",
    options: [
      "Ενεργοποιητής → αισθητήρας → ECU",
      "Αισθητήρας → ECU → ενεργοποιητής",
      "ECU → ενεργοποιητής → αισθητήρας",
      "ECU → αισθητήρας → ενεργοποιητής",
    ],
    correct: "b",
    feedback: "Η συνήθης λογική είναι μέτρηση από αισθητήρα, απόφαση από ECU και ενέργεια από ενεργοποιητή.",
  },
  {
    question: "Ποιο είναι βασικό όφελος του κοινού διαύλου επικοινωνίας;",
    options: [
      "Καταργεί την ανάγκη τροφοδοσίας των μονάδων",
      "Επιτρέπει μόνο σε μία ECU να χρησιμοποιεί κάθε μέτρηση",
      "Αποτρέπει την καταγραφή διαγνωστικών πληροφοριών",
      "Μειώνει ειδικές καλωδιώσεις και επιτρέπει κοινή χρήση δεδομένων",
    ],
    correct: "d",
    feedback: "Μία μέτρηση μπορεί να διανεμηθεί σε πολλές μονάδες χωρίς ξεχωριστό καλώδιο για κάθε λειτουργία.",
  },
  {
    question: "Πώς μπορεί να χρησιμοποιηθεί η πληροφορία ταχύτητας οχήματος;",
    options: [
      "Μόνο από τον αισθητήρα που τη δημιουργεί",
      "Από πολλές μονάδες, όπως όργανα, ABS και ECU κινητήρα",
      "Μόνο από τη διαγνωστική συσκευή",
      "Αποκλειστικά όταν το όχημα είναι σταματημένο",
    ],
    correct: "b",
    feedback: "Το κοινό δίκτυο επιτρέπει σε περισσότερες ECU να χρησιμοποιούν την ίδια πληροφορία ανάλογα με τη λειτουργία τους.",
  },
  {
    question: "Τι δεν αντικαθιστά το δίκτυο επικοινωνίας;",
    options: [
      "Την ανταλλαγή μηνυμάτων μεταξύ ECU",
      "Τη μετάδοση κοινών δεδομένων",
      "Την τροφοδοσία και τη γείωση κάθε μονάδας",
      "Τη δυνατότητα διαγνωστικού ελέγχου",
    ],
    correct: "c",
    feedback: "Το δίκτυο μεταφέρει δεδομένα, ενώ κάθε μονάδα εξακολουθεί να χρειάζεται κατάλληλη τροφοδοσία και γείωση.",
  },
  {
    question: "Τι δηλώνει κυρίως το αναγνωριστικό ενός μηνύματος;",
    options: [
      "Σε ποια πληροφορία ή λειτουργία αναφέρεται το μήνυμα",
      "Το μήκος του καλωδίου του δικτύου",
      "Την τάση της μπαταρίας",
      "Τον αριθμό των ασφαλειών του οχήματος",
    ],
    correct: "a",
    feedback: "Το αναγνωριστικό βοηθά τις μονάδες να αναγνωρίσουν τι αφορά το μήνυμα.",
  },
  {
    question: "Τι περιέχει το πεδίο δεδομένων ενός μηνύματος;",
    options: [
      "Μόνο το όνομα του κατασκευαστή",
      "Τη φυσική θέση της ECU στο όχημα",
      "Το μήκος της γραμμής επικοινωνίας",
      "Την κωδικοποιημένη τιμή ή κατάσταση που μεταδίδεται",
    ],
    correct: "d",
    feedback: "Τα δεδομένα μεταφέρουν κωδικοποιημένες τιμές, καταστάσεις ή εντολές που ερμηνεύονται με την κατάλληλη τεκμηρίωση.",
  },
  {
    question: "Τι καθορίζει ένα πρωτόκολλο επικοινωνίας;",
    options: [
      "Μόνο το χρώμα των καλωδίων",
      "Τη μορφή, τον χρονισμό και τον έλεγχο των μηνυμάτων",
      "Μόνο τη θέση της διαγνωστικής θύρας",
      "Την ισχύ του κινητήρα",
    ],
    correct: "b",
    feedback: "Το πρωτόκολλο ορίζει κοινούς κανόνες για οργάνωση, μετάδοση, προτεραιότητα και έλεγχο σφαλμάτων.",
  },
  {
    question: "Πώς χαρακτηρίζεται το SAE J1850 στην εισαγωγική ενότητα;",
    options: [
      "Σύγχρονο δίκτυο πολυμέσων υψηλής ταχύτητας",
      "Δίαυλος που χρησιμοποιείται μόνο μέσα σε μία ECU",
      "Παλαιότερο πρότυπο δικτύωσης και διάγνωσης οχημάτων",
      "Ασύρματο πρωτόκολλο επικοινωνίας V2X",
    ],
    correct: "c",
    feedback: "Το SAE J1850 συναντάται κυρίως σε παλαιότερες εφαρμογές δικτύωσης και διάγνωσης.",
  },
  {
    question: "Πού συναντάται κυρίως το PCI Bus;",
    options: [
      "Σε παλαιότερες αρχιτεκτονικές συγκεκριμένων κατασκευαστών",
      "Μόνο σε ηλεκτρικά οχήματα νέας γενιάς",
      "Μέσα σε κάθε αισθητήρα πίεσης ελαστικών",
      "Ως παγκόσμιο πρότυπο δικτύωσης όλων των σημερινών οχημάτων",
    ],
    correct: "a",
    feedback: "Το PCI Bus αποτελεί παράδειγμα παλαιότερης κατασκευαστικής λύσης για μονάδες αμαξώματος και διάγνωση.",
  },
  {
    question: "Πού χρησιμοποιείται κυρίως το I²C;",
    options: [
      "Ως κύριο δίκτυο ανάμεσα σε όλες τις ECU",
      "Μόνο στη διαγνωστική θύρα OBD",
      "Για ασύρματη επικοινωνία οχήματος με υποδομές",
      "Σε επικοινωνία μικρής απόστασης μέσα σε μονάδες και πλακέτες",
    ],
    correct: "d",
    feedback: "Το I²C χρησιμοποιείται συνήθως ανάμεσα σε ολοκληρωμένα κυκλώματα πάνω σε πλακέτα ή μέσα σε μία μονάδα.",
  },
  {
    question: "Ποιο πρωτόκολλο αποτελεί βασικό δίκτυο επικοινωνίας μεταξύ ECU;",
    options: [
      "USB",
      "CAN Bus",
      "HDMI",
      "Bluetooth ήχου",
    ],
    correct: "b",
    feedback: "Το CAN χρησιμοποιείται ευρέως για αξιόπιστη ανταλλαγή σύντομων μηνυμάτων ανάμεσα σε ECU.",
  },
  {
    question: "Ποιες είναι οι δύο γραμμές ενός βασικού διαύλου CAN;",
    options: [
      "SDA και SCL",
      "TX και RX μόνο",
      "CAN-H και CAN-L",
      "Θετικός και αρνητικός πόλος μπαταρίας",
    ],
    correct: "c",
    feedback: "Το CAN χρησιμοποιεί διαφορικό ζεύγος γραμμών που ονομάζονται CAN-H και CAN-L.",
  },
  {
    question: "Πότε θεωρείται σωστή μία μετάδοση μηνύματος;",
    options: [
      "Όταν το μήνυμα φτάνει έγκαιρα και τα δεδομένα είναι έγκυρα",
      "Όταν το μήνυμα φτάνει με οποιαδήποτε καθυστέρηση",
      "Όταν η ECU αγνοεί τον έλεγχο σφαλμάτων",
      "Όταν μεταδίδεται χωρίς αναγνωριστικό",
    ],
    correct: "a",
    feedback: "Η σωστή επικοινωνία απαιτεί έγκυρη πληροφορία που φτάνει στον κατάλληλο χρόνο.",
  },
  {
    question: "Τι σημαίνει καθυστέρηση μηνύματος;",
    options: [
      "Το μήνυμα φτάνει με μεγαλύτερη τάση",
      "Το μήνυμα περιέχει περισσότερα δεδομένα",
      "Το μήνυμα αλλάζει αναγνωριστικό",
      "Το μήνυμα φτάνει αργότερα από τον απαιτούμενο χρόνο",
    ],
    correct: "d",
    feedback: "Η καθυστέρηση αφορά τον χρόνο άφιξης και μπορεί να επηρεάσει λειτουργίες που απαιτούν άμεση απόκριση.",
  },
  {
    question: "Τι περιγράφει καλύτερα την αλλοίωση δεδομένων;",
    options: [
      "Το μήνυμα δεν μεταδίδεται ποτέ",
      "Ο έλεγχος εντοπίζει σφάλμα στο περιεχόμενο του μηνύματος",
      "Το μήνυμα φτάνει σωστά και έγκαιρα",
      "Η ECU απενεργοποιεί την τροφοδοσία της",
    ],
    correct: "b",
    feedback: "Αλλοίωση σημαίνει ότι τα δεδομένα έχουν επηρεαστεί και ο μηχανισμός ελέγχου μπορεί να αναγνωρίσει το σφάλμα.",
  },
  {
    question: "Τι σημαίνει απώλεια μηνύματος;",
    options: [
      "Το μήνυμα φτάνει με μικρή καθυστέρηση",
      "Το μήνυμα έχει διαφορετική προτεραιότητα",
      "Το αναμενόμενο μήνυμα δεν φτάνει στον παραλήπτη",
      "Το μήνυμα μεταδίδεται δύο φορές",
    ],
    correct: "c",
    feedback: "Στην απώλεια, η μονάδα δεν λαμβάνει καθόλου την πληροφορία που περίμενε.",
  },
  {
    question: "Γιατί η επικοινωνία σχετίζεται με την ασφάλεια του οχήματος;",
    options: [
      "Κρίσιμες λειτουργίες χρειάζονται σωστά και έγκαιρα δεδομένα",
      "Όλα τα μηνύματα αφορούν μόνο το ηχοσύστημα",
      "Το δίκτυο λειτουργεί μόνο όταν το όχημα είναι σταματημένο",
      "Η επικοινωνία χρησιμοποιείται μόνο για άνεση",
    ],
    correct: "a",
    feedback: "Συστήματα όπως ABS, αερόσακοι και υποβοήθηση διεύθυνσης βασίζονται σε αξιόπιστη πληροφορία.",
  },
  {
    question: "Ποια σειρά περιγράφει σωστά τον έλεγχο θερμοκρασίας ψυκτικού;",
    options: [
      "Ανεμιστήρας → ECU κινητήρα → αισθητήρας ECT",
      "ECU κινητήρα → αισθητήρας ECT → ανεμιστήρας",
      "Πίνακας οργάνων → ανεμιστήρας → αισθητήρας ECT",
      "Αισθητήρας ECT → ECU κινητήρα → ανεμιστήρας",
    ],
    correct: "d",
    feedback: "Ο αισθητήρας μετρά, η ECU συγκρίνει την τιμή με τα όρια και ο ανεμιστήρας εκτελεί την εντολή.",
  },
  {
    question: "Ποιος είναι ο ρόλος του πίνακα οργάνων στο παράδειγμα θερμοκρασίας;",
    options: [
      "Μετρά απευθείας τη θερμοκρασία χωρίς αισθητήρα",
      "Λαμβάνει την πληροφορία και ενημερώνει τον οδηγό",
      "Τροφοδοτεί με ρεύμα την ECU κινητήρα",
      "Αντικαθιστά τον ανεμιστήρα ψύξης",
    ],
    correct: "b",
    feedback: "Ο πίνακας οργάνων χρησιμοποιεί το μήνυμα θερμοκρασίας για να εμφανίσει την κατάσταση στον οδηγό.",
  },
  {
    question: "Το διαγνωστικό γράφει «καμία επικοινωνία με ABS». Ποιος έλεγχος προηγείται;",
    options: [
      "Άμεση αντικατάσταση της μονάδας ABS",
      "Διαγραφή όλων των κωδικών χωρίς καταγραφή",
      "Έλεγχος τροφοδοσίας, γείωσης και ασφαλειών της μονάδας",
      "Αλλαγή αισθητήρων σε όλους τους τροχούς",
    ],
    correct: "c",
    feedback: "Η διάγνωση ξεκινά από τις βασικές προϋποθέσεις λειτουργίας της μονάδας: τροφοδοσία, γείωση και ασφάλειες.",
  },
  {
    question: "Γιατί μια βλάβη τροφοδοσίας μπορεί να εμφανιστεί ως βλάβη επικοινωνίας;",
    options: [
      "Το δίκτυο αυξάνει αυτόματα την τάση",
      "Η ECU δεν λειτουργεί και δεν μπορεί να μεταδώσει ή να απαντήσει",
      "Η ECU μετατρέπεται σε αισθητήρα",
      "Το διαγνωστικό εργαλείο αλλάζει πρωτόκολλο μόνο του",
    ],
    correct: "b",
    feedback: "Χωρίς σωστή τροφοδοσία και γείωση, η ECU δεν μπορεί να συμμετέχει στο δίκτυο.",
  },
  {
    question: "Τι μπορεί να αποκαλύψει ο έλεγχος μιας φίς δικτύου;",
    options: [
      "Οξείδωση, υγρασία, ζημιά ή χαλαρή επαφή",
      "Τον κυβισμό του κινητήρα",
      "Την έκδοση λογισμικού όλων των ECU",
      "Τη μέγιστη ταχύτητα του οχήματος",
    ],
    correct: "a",
    feedback: "Η φυσική επιθεώρηση μπορεί να εντοπίσει συνηθισμένες αιτίες διακοπής τροφοδοσίας ή επικοινωνίας.",
  },
  {
    question: "Τι ελέγχουμε στην καλωδίωση όταν μία ECU δεν επικοινωνεί;",
    options: [
      "Μόνο το χρώμα της μόνωσης",
      "Μόνο το συνολικό μήκος του οχήματος",
      "Την πίεση των ελαστικών",
      "Συνέχεια, βραχυκύκλωμα και φυσική κατάσταση των γραμμών",
    ],
    correct: "d",
    feedback: "Ο έλεγχος δικτύου εξετάζει αν οι γραμμές είναι συνεχείς, χωρίς βραχυκύκλωμα και χωρίς φυσική ζημιά.",
  },
  {
    question: "Πότε εξετάζεται η αντικατάσταση της ίδιας της ECU;",
    options: [
      "Μόλις εμφανιστεί οποιοσδήποτε κωδικός βλάβης",
      "Πριν ελεγχθούν οι ασφάλειες",
      "Αφού αποκλειστούν τροφοδοσία, γείωση, συνδέσεις και καλωδίωση",
      "Πριν συνδεθεί διαγνωστικό εργαλείο",
    ],
    correct: "c",
    feedback: "Η μονάδα αξιολογείται τελευταία, αφού προηγηθούν οι βασικοί και συχνότεροι έλεγχοι.",
  },
  {
    question: "Ο αισθητήρας ταχύτητας τροχού στέλνει μέτρηση στο ABS. Τι μπορεί να συμβεί στη συνέχεια;",
    options: [
      "Η μέτρηση χρησιμοποιείται μόνο μέσα στον αισθητήρα",
      "Η μονάδα ABS επεξεργάζεται τη μέτρηση και μπορεί να μεταδώσει σχετική πληροφορία στο δίκτυο",
      "Ο πίνακας οργάνων τροφοδοτεί τον αισθητήρα μέσω του μηνύματος",
      "Το δίκτυο αντικαθιστά τη γείωση της μονάδας ABS",
    ],
    correct: "b",
    feedback: "Η μονάδα ABS επεξεργάζεται τις μετρήσεις τροχών και μπορεί να μοιραστεί χρήσιμες πληροφορίες με άλλες ECU.",
  },
];

const quiz = document.querySelector("[data-quiz]");

if (quiz) {
  quiz.querySelectorAll("[data-question]").forEach((question) => question.remove());
  const questionAnchor = quiz.querySelector("[data-quiz-warning]");
  const values = ["a", "b", "c", "d"];
  const optionLetters = ["Α", "Β", "Γ", "Δ"];
  const quizModules = [
    { title: "Βασικές έννοιες", meta: "Αισθητήρας • ECU • Ενεργοποιητής", start: 0, end: 6 },
    { title: "Δίκτυο και μηνύματα", meta: "Δίαυλος • Κοινά δεδομένα • Πρωτόκολλο", start: 6, end: 12 },
    { title: "Πρωτόκολλα επικοινωνίας", meta: "J1850 • PCI • I²C • CAN", start: 12, end: 17 },
    { title: "Μετάδοση και ασφάλεια", meta: "Ορθότητα • Καθυστέρηση • Αλλοίωση • Απώλεια", start: 17, end: 23 },
    { title: "Εφαρμογή και διάγνωση", meta: "Ροή λειτουργίας • Έλεγχοι • Βλάβες", start: 23, end: 30 },
  ];

  quizModules.forEach((module, moduleIndex) => {
    const section = document.createElement("section");
    section.className = "quiz-module";
    section.setAttribute("aria-labelledby", `quiz-module-${moduleIndex + 1}`);

    const moduleHeader = document.createElement("div");
    moduleHeader.className = "quiz-module-heading";
    const moduleNumber = document.createElement("span");
    moduleNumber.textContent = String(moduleIndex + 1);
    const moduleCopy = document.createElement("div");
    const moduleTitle = document.createElement("h3");
    moduleTitle.id = `quiz-module-${moduleIndex + 1}`;
    moduleTitle.textContent = module.title;
    const moduleMeta = document.createElement("p");
    moduleMeta.textContent = module.meta;
    moduleCopy.append(moduleTitle, moduleMeta);
    moduleHeader.append(moduleNumber, moduleCopy);

    const questionGrid = document.createElement("div");
    questionGrid.className = "quiz-question-grid";

    quizData.slice(module.start, module.end).forEach((item, localIndex) => {
      const index = module.start + localIndex;
      const fieldset = document.createElement("fieldset");
      fieldset.className = "quiz-question";
      fieldset.dataset.question = "";
      fieldset.dataset.correct = item.correct;

      const legend = document.createElement("legend");
      const number = document.createElement("span");
      number.className = "question-number";
      number.textContent = String(index + 1);
      const questionText = document.createElement("span");
      questionText.className = "question-text";
      questionText.textContent = item.question;
      legend.append(number, questionText);
      fieldset.append(legend);

      item.options.forEach((option, optionIndex) => {
        const label = document.createElement("label");
        const input = document.createElement("input");
        input.type = "radio";
        input.name = `q${index + 1}`;
        input.value = values[optionIndex];
        const letter = document.createElement("span");
        letter.className = "option-letter";
        letter.textContent = optionLetters[optionIndex];
        const optionText = document.createElement("span");
        optionText.className = "option-text";
        optionText.textContent = option;
        label.append(input, letter, optionText);
        fieldset.append(label);
      });

      const feedback = document.createElement("p");
      feedback.className = "question-feedback";
      feedback.dataset.feedback = "";
      feedback.hidden = true;
      feedback.textContent = item.feedback;
      fieldset.append(feedback);
      questionGrid.append(fieldset);
    });

    section.append(moduleHeader, questionGrid);
    quiz.insertBefore(section, questionAnchor);
  });

  quiz.classList.add("is-ready");

  const questions = [...quiz.querySelectorAll("[data-question]")];
  const result = document.querySelector("[data-quiz-result]");
  const scoreTarget = document.querySelector("[data-score]");
  const percentageTarget = document.querySelector("[data-percentage]");
  const statusTarget = document.querySelector("[data-result-status]");
  const messageTarget = document.querySelector("[data-result-message]");
  const warning = document.querySelector("[data-quiz-warning]");
  const resetButton = document.querySelector("[data-quiz-reset]");
  const progressCurrent = document.querySelector("[data-progress-current]");
  const progressBar = document.querySelector("[data-progress-bar]");

  const updateProgress = () => {
    const answered = questions.filter((question) => question.querySelector("input:checked")).length;
    progressCurrent.textContent = String(answered);
    progressBar.style.width = `${Math.round((answered / questions.length) * 100)}%`;
  };

  quiz.addEventListener("change", (event) => {
    event.target.closest("[data-question]")?.classList.remove("needs-answer");
    warning.hidden = true;
    updateProgress();
  });

  quiz.addEventListener("submit", (event) => {
    event.preventDefault();
    const unanswered = questions.find((question) => !question.querySelector("input:checked"));

    if (unanswered) {
      warning.hidden = false;
      unanswered.classList.add("needs-answer");
      unanswered.scrollIntoView({ behavior: "smooth", block: "center" });
      unanswered.querySelector("input")?.focus({ preventScroll: true });
      return;
    }

    warning.hidden = true;
    let score = 0;

    questions.forEach((question) => {
      const selected = question.querySelector("input:checked");
      const correctValue = question.dataset.correct;
      const isCorrect = selected?.value === correctValue;
      const correctInput = question.querySelector(`input[value="${correctValue}"]`);

      question.classList.toggle("is-correct", isCorrect);
      question.classList.toggle("is-incorrect", !isCorrect);
      question.querySelectorAll("label").forEach((label) => {
        label.classList.remove("selected-answer", "correct-answer");
      });
      selected?.closest("label")?.classList.add("selected-answer");
      correctInput?.closest("label")?.classList.add("correct-answer");
      question.querySelector("[data-feedback]").hidden = false;
      question.querySelectorAll("input").forEach((input) => { input.disabled = true; });
      if (isCorrect) score += 1;
    });

    const percentage = Math.round((score / questions.length) * 100);
    const passed = score >= 24;
    scoreTarget.textContent = `${score}/${questions.length}`;
    percentageTarget.textContent = `${percentage}%`;

    if (score >= 27) {
      statusTarget.textContent = "Πολύ καλή κατάκτηση";
      messageTarget.textContent = "Έχεις κατανοήσει με σαφήνεια τις βασικές έννοιες της πρώτης ενότητας.";
    } else if (score >= 24) {
      statusTarget.textContent = "Επιτυχής ολοκλήρωση";
      messageTarget.textContent = "Έχεις κατακτήσει τις βασικές έννοιες. Μελέτησε τις επισημασμένες απαντήσεις για μεγαλύτερη ακρίβεια.";
    } else if (score >= 18) {
      statusTarget.textContent = "Χρειάζεται στοχευμένη επανάληψη";
      messageTarget.textContent = "Μελέτησε τις ερωτήσεις που απάντησες λανθασμένα και δοκίμασε ξανά.";
    } else {
      statusTarget.textContent = "Χρειάζεται επανάληψη της ενότητας";
      messageTarget.textContent = "Επανέλαβε τις βασικές έννοιες και χρησιμοποίησε την ανατροφοδότηση πριν από νέα προσπάθεια.";
    }

    result.classList.toggle("is-pass", passed);
    result.classList.toggle("is-review", !passed);
    result.hidden = false;
    resetButton.hidden = false;
    quiz.querySelector('button[type="submit"]').disabled = true;
    result.scrollIntoView({ behavior: "smooth", block: "center" });
  });

  resetButton.addEventListener("click", () => {
    quiz.reset();
    questions.forEach((question) => {
      question.classList.remove("is-correct", "is-incorrect", "needs-answer");
      question.querySelectorAll("label").forEach((label) => {
        label.classList.remove("selected-answer", "correct-answer");
      });
      question.querySelector("[data-feedback]").hidden = true;
      question.querySelectorAll("input").forEach((input) => { input.disabled = false; });
    });
    result.hidden = true;
    scoreTarget.textContent = `0/${questions.length}`;
    percentageTarget.textContent = "0%";
    statusTarget.textContent = "";
    messageTarget.textContent = "";
    warning.hidden = true;
    resetButton.hidden = true;
    quiz.querySelector('button[type="submit"]').disabled = false;
    updateProgress();
    quiz.scrollIntoView({ behavior: "smooth", block: "start" });
  });
}
