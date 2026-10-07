const deck = document.querySelector("[data-intro-deck]");

if (deck) {
  const slides = [
    "Γνωριμία με το μάθημα",
    "Γιατί υπάρχει αυτό το μάθημα",
    "Το σύγχρονο όχημα είναι ένα δίκτυο",
    "Η πορεία των 15 μαθημάτων",
    "Ενότητα 1 — Βασικές αρχές",
    "Ενότητα 2 — CAN Bus",
    "Ενότητα 3 — Άλλα δίκτυα και δεδομένα",
    "Ενότητα 4 — OBD και διάγνωση",
    "Ενότητα 5 — Συνδεδεμένο όχημα",
    "Πώς θα δουλεύουμε κάθε εβδομάδα",
    "Τι θα μπορείτε να κάνετε",
    "Τι γνωρίζουμε ήδη;",
  ];

  const quizData = [
    {
      question: "Γιατί οι ηλεκτρονικές μονάδες ενός σύγχρονου αυτοκινήτου συνδέονται σε δίκτυο;",
      options: ["Για να λειτουργούν όλες με την ίδια τάση", "Για να ανταλλάσσουν δεδομένα χωρίς ξεχωριστό καλώδιο για κάθε πληροφορία", "Για να αντικαθίστανται οι αισθητήρες", "Για να αυξάνεται η ισχύς του κινητήρα"],
      correct: 1,
      feedback: "Το δίκτυο επιτρέπει στις μονάδες να μοιράζονται πληροφορίες μέσω κοινών γραμμών επικοινωνίας.",
    },
    {
      question: "Τι θα συνέβαινε αν ένα σύγχρονο αυτοκίνητο χρειαζόταν ξεχωριστό καλώδιο για κάθε πληροφορία;",
      options: ["Θα χρειαζόταν λιγότερες ασφάλειες", "Θα λειτουργούσε χωρίς ηλεκτρονικές μονάδες", "Θα μειωνόταν η κατανάλωση ρεύματος", "Η καλωδίωση θα γινόταν βαρύτερη και πιο σύνθετη"],
      correct: 3,
      feedback: "Οι κοινές γραμμές δεδομένων μειώνουν την περιττή καλωδίωση, τις συνδέσεις και τα πιθανά σημεία βλάβης.",
    },
    {
      question: "Ποια είναι η βασική δουλειά ενός αισθητήρα;",
      options: ["Να μετρά ένα φυσικό μέγεθος και να στέλνει σχετική πληροφορία", "Να επισκευάζει αυτόματα μια βλάβη", "Να αποφασίζει ποια ενέργεια θα εκτελεστεί", "Να τροφοδοτεί όλες τις μονάδες με ρεύμα"],
      correct: 0,
      feedback: "Ο αισθητήρας είναι η είσοδος του συστήματος: μετρά και μετατρέπει το φυσικό μέγεθος σε πληροφορία.",
    },
    {
      question: "Ποια είναι η βασική δουλειά μιας ECU;",
      options: ["Να δημιουργεί μηχανική κίνηση", "Να αντικαθιστά την μπαταρία", "Να επεξεργάζεται δεδομένα και να δίνει εντολές", "Να λειτουργεί μόνο ως αποθηκευτικός χώρος"],
      correct: 2,
      feedback: "Η ECU λαμβάνει δεδομένα, εφαρμόζει την προγραμματισμένη λογική της και ελέγχει τις εξόδους.",
    },
    {
      question: "Ποιο από τα παρακάτω είναι ενεργοποιητής;",
      options: ["Ο αισθητήρας θερμοκρασίας", "Το μοτέρ του ανεμιστήρα ψύξης", "Η διαγνωστική υποδοχή", "Η ECU του κινητήρα"],
      correct: 1,
      feedback: "Ο ενεργοποιητής μετατρέπει την εντολή της ECU σε πραγματική ενέργεια, όπως κίνηση ή άνοιγμα μιας βαλβίδας.",
    },
    {
      question: "Η θερμοκρασία του κινητήρα ανεβαίνει αλλά ο ανεμιστήρας δεν ξεκινά. Ποια είναι η σωστή διαγνωστική προσέγγιση;",
      options: ["Αντικαθιστούμε αμέσως την ECU", "Αλλάζουμε μόνο τον αισθητήρα", "Αλλάζουμε τον ανεμιστήρα χωρίς έλεγχο", "Ελέγχουμε δεδομένα αισθητήρα, εντολή ECU, καλωδίωση και ανεμιστήρα"],
      correct: 3,
      feedback: "Η σωστή διάγνωση ακολουθεί ολόκληρη την αλυσίδα: μέτρηση, απόφαση, εντολή και εκτέλεση.",
    },
    {
      question: "Η ταχύτητα του οχήματος χρησιμοποιείται από το ABS, την ECU και τον πίνακα οργάνων. Τι δείχνει αυτό;",
      options: ["Κάθε μονάδα μετρά υποχρεωτικά μόνη της την ταχύτητα", "Οι μονάδες δεν επικοινωνούν μεταξύ τους", "Μία πληροφορία μπορεί να χρησιμοποιείται από περισσότερες μονάδες", "Η πληροφορία μεταφέρεται μόνο όταν το όχημα σταματήσει"],
      correct: 2,
      feedback: "Μία μέτρηση μπορεί να μεταδοθεί στο δίκτυο και να αξιοποιηθεί από πολλούς διαφορετικούς χρήστες.",
    },
    {
      question: "Παρουσιάζεται βλάβη σε έναν αισθητήρα ταχύτητας τροχού και ανάβουν πολλές ενδείξεις. Γιατί;",
      options: ["Τα δεδομένα του χρησιμοποιούνται από περισσότερα από ένα συστήματα", "Κάηκαν ταυτόχρονα όλες οι ηλεκτρονικές μονάδες", "Η μπαταρία σταμάτησε να φορτίζει", "Το αυτοκίνητο διέγραψε μόνο του τα δεδομένα"],
      correct: 0,
      feedback: "Μία κοινή πληροφορία μπορεί να επηρεάζει ABS, ESP, πίνακα οργάνων και άλλα συστήματα.",
    },
    {
      question: "Ποιος είναι ο βασικός ρόλος του ABS;",
      options: ["Να αυξάνει την ισχύ του κινητήρα", "Να υποβοηθά το στρίψιμο του τιμονιού", "Να ελέγχει τον φωτισμό του οχήματος", "Να αποτρέπει το μπλοκάρισμα των τροχών κατά το έντονο φρενάρισμα"],
      correct: 3,
      feedback: "Το ABS ρυθμίζει την πίεση πέδησης ώστε οι τροχοί να μη μπλοκάρουν στο έντονο φρενάρισμα.",
    },
    {
      question: "Τι κάνει κυρίως το ESP;",
      options: ["Ελέγχει τα ηλεκτρικά παράθυρα", "Βοηθά το όχημα να διατηρήσει την επιθυμητή πορεία όταν χάνει την ευστάθειά του", "Υποβοηθά αποκλειστικά το τιμόνι", "Εμφανίζει την ταχύτητα στον πίνακα οργάνων"],
      correct: 1,
      feedback: "Το ESP συγκρίνει την επιθυμητή με την πραγματική πορεία και μπορεί να επέμβει στα φρένα και στη ροπή του κινητήρα.",
    },
    {
      question: "Τι είναι το EPS;",
      options: ["Σύστημα ελέγχου εκπομπών", "Ηλεκτρονικό σύστημα πέδησης", "Ηλεκτρική υποβοήθηση διεύθυνσης", "Δίκτυο πολυμέσων"],
      correct: 2,
      feedback: "Το EPS είναι το σύστημα ηλεκτρικής υποβοήθησης του τιμονιού και δεν πρέπει να συγχέεται με το ESP.",
    },
    {
      question: "Ποια λειτουργία συνδέεται συνήθως με τη BCM;",
      options: ["Κεντρικό κλείδωμα, φωτισμός και ηλεκτρικά παράθυρα", "Ψεκασμός καυσίμου και ανάφλεξη", "Έλεγχος πίεσης πέδησης ABS", "Μέτρηση της ταχύτητας περιστροφής του κινητήρα"],
      correct: 0,
      feedback: "Η BCM είναι η μονάδα ελέγχου αμαξώματος και διαχειρίζεται πολλές λειτουργίες άνεσης και εξοπλισμού.",
    },
    {
      question: "Τι είναι ένα πρωτόκολλο επικοινωνίας;",
      options: ["Ένα είδος αισθητήρα", "Ένα σύνολο συμφωνημένων κανόνων ανταλλαγής δεδομένων", "Μία διαγνωστική βλάβη", "Ένα καλώδιο τροφοδοσίας"],
      correct: 1,
      feedback: "Το πρωτόκολλο ορίζει τη μορφή, τη σειρά και τον τρόπο ελέγχου των μηνυμάτων.",
    },
    {
      question: "Για ποιον λόγο χρησιμοποιείται ευρέως το CAN στα οχήματα;",
      options: ["Μεταφέρει μόνο ήχο", "Λειτουργεί χωρίς κανόνες επικοινωνίας", "Συνδέει μόνο δύο αισθητήρες", "Επιτρέπει αξιόπιστη και οργανωμένη επικοινωνία πολλών μονάδων"],
      correct: 3,
      feedback: "Το CAN επιτρέπει σε πολλές ECU να ανταλλάσσουν οργανωμένα μηνύματα με προτεραιότητες και έλεγχο σφαλμάτων.",
    },
    {
      question: "Γιατί το CAN χρησιμοποιεί τα καλώδια CAN High και CAN Low;",
      options: ["Το σήμα μεταφέρεται διαφορικά, ώστε να έχει μεγαλύτερη αντοχή στις ηλεκτρικές παρεμβολές", "Το ένα καλώδιο είναι για δεδομένα και το άλλο αποκλειστικά για τροφοδοσία", "Το ένα χρησιμοποιείται μόνο όταν το αυτοκίνητο είναι σταματημένο", "Τα δύο καλώδια μεταφέρουν διαφορετικά δίκτυα"],
      correct: 0,
      feedback: "Ο δέκτης αξιοποιεί κυρίως τη διαφορά τάσης ανάμεσα στις δύο γραμμές, περιορίζοντας την επίδραση κοινού θορύβου.",
    },
    {
      question: "Δύο μονάδες προσπαθούν να μεταδώσουν ταυτόχρονα στο CAN. Ποιο μήνυμα μεταδίδεται πρώτο;",
      options: ["Αυτό που προέρχεται από τη μεγαλύτερη μονάδα", "Αυτό που έχει το μεγαλύτερο μήκος", "Αυτό που έχει μεγαλύτερη προτεραιότητα σύμφωνα με τους κανόνες του CAN", "Κανένα, επειδή το δίκτυο σταματά να λειτουργεί"],
      correct: 2,
      feedback: "Η διαιτησία του CAN επιτρέπει στο μήνυμα υψηλότερης προτεραιότητας να συνεχίσει χωρίς να καταστραφούν τα δεδομένα.",
    },
    {
      question: "Πού χρησιμοποιείται συνήθως το LIN;",
      options: ["Σε κάμερες πολύ υψηλής ανάλυσης", "Ως βασικό δίκτυο όλων των συστημάτων ασφαλείας", "Μόνο για τη διάγνωση του κινητήρα", "Σε απλές και οικονομικές λειτουργίες, όπως καθρέφτες ή διακόπτες θυρών"],
      correct: 3,
      feedback: "Το LIN είναι κατάλληλο για απλές τοπικές λειτουργίες όπου δεν απαιτείται μεγάλη ταχύτητα μετάδοσης.",
    },
    {
      question: "Με ποια χρήση συνδέεται κυρίως το MOST;",
      options: ["Με τους αισθητήρες ταχύτητας τροχών", "Με συστήματα πολυμέσων, ήχου και εικόνας", "Με τον έλεγχο του ανεμιστήρα ψύξης", "Με την τροφοδοσία των ηλεκτρονικών μονάδων"],
      correct: 1,
      feedback: "Το MOST αναπτύχθηκε κυρίως για τη μεταφορά δεδομένων πολυμέσων μέσα στο όχημα.",
    },
    {
      question: "Γιατί χρησιμοποιείται Automotive Ethernet στα νεότερα οχήματα;",
      options: ["Για τη γρήγορη μεταφορά μεγάλου όγκου δεδομένων", "Για να αντικαταστήσει την μπαταρία", "Για να λειτουργούν οι μηχανικές ασφάλειες", "Για να μειώσει την πίεση των ελαστικών"],
      correct: 0,
      feedback: "Το Automotive Ethernet εξυπηρετεί εφαρμογές υψηλού εύρους ζώνης, όπως κάμερες, ADAS και κεντρικούς υπολογιστές.",
    },
    {
      question: "Τι είναι τα SAE J1850 και PCI Bus;",
      options: ["Σύγχρονα συστήματα ηλεκτρικής διεύθυνσης", "Τύποι αισθητήρων θερμοκρασίας", "Παλαιότερες τεχνολογίες επικοινωνίας οχημάτων", "Κωδικοί βλαβών του ABS"],
      correct: 2,
      feedback: "Πρόκειται για παλαιότερες τεχνολογίες επικοινωνίας που συναντώνται σε οχήματα προηγούμενων γενεών.",
    },
    {
      question: "Σε τι χρησιμεύει κυρίως το OBD;",
      options: ["Στη ρύθμιση των καθισμάτων", "Στην πρόσβαση σε διαγνωστικές πληροφορίες των ηλεκτρονικών συστημάτων", "Στη φόρτιση της μπαταρίας", "Στην αύξηση της ισχύος του κινητήρα"],
      correct: 1,
      feedback: "Το OBD δίνει πρόσβαση σε κωδικούς βλάβης και δεδομένα λειτουργίας, αλλά δεν επισκευάζει από μόνο του τη βλάβη.",
    },
    {
      question: "Τι είναι ένας κωδικός DTC;",
      options: ["Εντολή ενεργοποίησης του κινητήρα", "Αριθμός ανταλλακτικού", "Μέτρηση της τάσης της μπαταρίας", "Κωδικός που δείχνει δυσλειτουργία σε συγκεκριμένο σύστημα ή κύκλωμα"],
      correct: 3,
      feedback: "Ο DTC κατευθύνει τον έλεγχο προς ένα σύστημα ή κύκλωμα· δεν αποδεικνύει μόνος του ποιο εξάρτημα χάλασε.",
    },
    {
      question: "Το διαγνωστικό εμφανίζει θερμοκρασία ψυκτικού −40 °C ενώ ο κινητήρας είναι ζεστός. Τι πρέπει να σκεφτούμε πρώτα;",
      options: ["Πιθανό πρόβλημα στον αισθητήρα, στη φίσα ή στην καλωδίωσή του", "Ότι η ένδειξη είναι φυσιολογική", "Ότι χρειάζεται αλλαγή ολόκληρου του κινητήρα", "Ότι ευθύνεται ο αισθητήρας ταχύτητας τροχού"],
      correct: 0,
      feedback: "Η παράλογη τιμή μάς οδηγεί πρώτα στον έλεγχο της εισόδου, της φίσας και της ηλεκτρικής διαδρομής της.",
    },
    {
      question: "Τι μας δείχνει το Freeze Frame;",
      options: ["Τη μελλοντική συμπεριφορά του οχήματος", "Μόνο την τάση της μπαταρίας", "Τις συνθήκες λειτουργίας τη στιγμή που καταγράφηκε η βλάβη", "Όλες τις επισκευές που έγιναν στο συνεργείο"],
      correct: 2,
      feedback: "Το Freeze Frame αποθηκεύει ένα στιγμιότυπο δεδομένων από τη στιγμή που καταγράφηκε ο κωδικός.",
    },
    {
      question: "Το διαγνωστικό δεν επικοινωνεί με τη μονάδα ABS. Ποιος πρέπει να είναι ο πρώτος έλεγχος;",
      options: ["Αντικατάσταση όλων των αισθητήρων τροχών", "Αντικατάσταση της μονάδας ABS", "Διαγραφή όλων των κωδικών βλάβης", "Έλεγχος τροφοδοσίας, γείωσης, ασφαλειών, συνδέσεων και γραμμών επικοινωνίας"],
      correct: 3,
      feedback: "Η απουσία επικοινωνίας απαιτεί πρώτα βασικούς ηλεκτρικούς και δικτυακούς ελέγχους, όχι άμεση αντικατάσταση μονάδας.",
    },
    {
      question: "Γιατί δεν αντικαθιστούμε αμέσως μια ECU όταν εμφανιστεί κωδικός βλάβης;",
      options: ["Επειδή οι ECU δεν παθαίνουν ποτέ βλάβη", "Επειδή η αιτία μπορεί να βρίσκεται σε αισθητήρα, καλωδίωση, τροφοδοσία ή επικοινωνία", "Επειδή οι κωδικοί βλάβης δεν έχουν καμία χρησιμότητα", "Επειδή πρέπει πρώτα να αντικατασταθεί η μπαταρία"],
      correct: 1,
      feedback: "Η μεθοδική διάγνωση επιβεβαιώνει την αιτία πριν από οποιαδήποτε ακριβή αντικατάσταση.",
    },
    {
      question: "Γιατί η κυβερνοασφάλεια είναι σημαντική στα συνδεδεμένα οχήματα;",
      options: ["Επειδή βελτιώνει το χρώμα της οθόνης", "Επειδή αυξάνει τον κυβισμό του κινητήρα", "Επειδή μη εξουσιοδοτημένη πρόσβαση μπορεί να επηρεάσει δεδομένα και λειτουργίες", "Επειδή καταργεί την ανάγκη διάγνωσης"],
      correct: 2,
      feedback: "Οι εξωτερικές συνδέσεις και οι ενημερώσεις λογισμικού απαιτούν ελεγχόμενη πρόσβαση και επαληθευμένες διαδικασίες.",
    },
    {
      question: "Ποια σειρά περιγράφει καλύτερα τον τρόπο εργασίας του μαθήματος;",
      options: ["Θεωρία → παράδειγμα → πρακτική εφαρμογή → έλεγχος κατανόησης", "Τεστ → βαθμός → θεωρία → διάλειμμα", "Ανταλλακτικό → αντικατάσταση → διάγνωση → έλεγχος", "Απομνημόνευση κωδικών χωρίς πρακτική εφαρμογή"],
      correct: 0,
      feedback: "Η θεωρία συνδέεται κάθε φορά με παράδειγμα, εφαρμογή και έλεγχο κατανόησης.",
    },
    {
      question: "Ποιος είναι βασικός μαθησιακός στόχος του μαθήματος;",
      options: ["Να απομνημονεύσουμε όλους τους κωδικούς βλάβης", "Να ακολουθούμε την πορεία της πληροφορίας και να κάνουμε μεθοδική διάγνωση", "Να αντικαθιστούμε κάθε μονάδα που εμφανίζει σφάλμα", "Να ασχολούμαστε μόνο με τη μηχανική λειτουργία του κινητήρα"],
      correct: 1,
      feedback: "Στόχος είναι να κατανοούμε τη ροή των δεδομένων και να ελέγχουμε με σειρά πριν καταλήξουμε σε συμπέρασμα.",
    },
    {
      question: "Το διαγνωστικό δεν επικοινωνεί με πολλές μονάδες που βρίσκονται στο ίδιο δίκτυο. Ποιο συμπέρασμα είναι λογικότερο;",
      options: ["Χάλασαν ταυτόχρονα όλοι οι αισθητήρες", "Ευθύνεται οπωσδήποτε μία λάμπα", "Πρέπει να αντικατασταθούν όλες οι μονάδες", "Πρέπει να εξεταστεί πιθανό κοινό πρόβλημα στο δίκτυο, στην τροφοδοσία ή στην πύλη επικοινωνίας"],
      correct: 3,
      feedback: "Όταν επηρεάζονται πολλές μονάδες μαζί, αναζητούμε πρώτα την κοινή αιτία αντί να θεωρούμε ότι χάλασαν όλες ταυτόχρονα.",
    },
  ];

  const image = deck.querySelector("[data-slide-image]");
  const title = deck.querySelector("[data-slide-title]");
  const current = deck.querySelector("[data-slide-current]");
  const slideCounter = deck.querySelector(".intro-slide-counter");
  const previousButtons = [...deck.querySelectorAll("[data-slide-prev]")];
  const nextButtons = [...deck.querySelectorAll("[data-slide-next]")];
  const dotsContainer = deck.querySelector("[data-slide-dots]");
  const frame = deck.querySelector(".intro-slide-frame");
  const slidesView = deck.querySelector("[data-intro-slides-view]");
  const quizView = deck.querySelector("[data-intro-quiz-view]");
  const quizToggle = deck.querySelector("[data-intro-test-toggle]");
  const quizToggleLabel = deck.querySelector("[data-intro-test-toggle-label]");
  let currentIndex = 0;
  let touchStartX = 0;

  const dots = slides.map((slideTitle, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = String(index + 1);
    button.setAttribute("aria-label", `Διαφάνεια ${index + 1}: ${slideTitle}`);
    button.addEventListener("click", () => showSlide(index));
    dotsContainer.append(button);
    return button;
  });

  const preloadAdjacent = () => {
    [currentIndex - 1, currentIndex + 1]
      .filter((index) => index >= 0 && index < slides.length)
      .forEach((index) => {
        const preload = new Image();
        preload.src = `assets/slides/intro/slide-${index + 1}.webp`;
      });
  };

  function showSlide(index, updateHash = true) {
    currentIndex = Math.max(0, Math.min(index, slides.length - 1));
    const slideNumber = currentIndex + 1;
    image.classList.add("is-changing");
    image.src = `assets/slides/intro/slide-${slideNumber}.webp`;
    image.alt = `Διαφάνεια ${slideNumber} από ${slides.length}: ${slides[currentIndex]}`;
    title.textContent = slides[currentIndex];
    current.textContent = String(slideNumber);
    previousButtons.forEach((button) => { button.disabled = currentIndex === 0; });
    nextButtons.forEach((button) => { button.disabled = currentIndex === slides.length - 1; });
    dots.forEach((button, dotIndex) => {
      const active = dotIndex === currentIndex;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-current", active ? "true" : "false");
    });
    dots[currentIndex].scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    if (updateHash && quizView.hidden) history.replaceState(null, "", `#slide-${slideNumber}`);
    preloadAdjacent();
  }

  const showQuiz = (open, updateHash = true) => {
    slidesView.hidden = open;
    quizView.hidden = !open;
    deck.classList.toggle("is-quiz-mode", open);
    quizToggle.setAttribute("aria-expanded", String(open));
    quizToggleLabel.textContent = open ? "Επιστροφή στις διαφάνειες" : "Τεστ 30 ερωτήσεων";
    slideCounter.hidden = open;
    title.textContent = open ? "Τεστ Μαθήματος 1" : slides[currentIndex];
    if (updateHash) history.replaceState(null, "", open ? "#test" : `#slide-${currentIndex + 1}`);
  };

  image.addEventListener("load", () => image.classList.remove("is-changing"));
  previousButtons.forEach((button) => button.addEventListener("click", () => showSlide(currentIndex - 1)));
  nextButtons.forEach((button) => button.addEventListener("click", () => showSlide(currentIndex + 1)));
  quizToggle.addEventListener("click", () => showQuiz(quizView.hidden));

  document.addEventListener("keydown", (event) => {
    if (!quizView.hidden) return;
    if (event.key === "ArrowLeft") showSlide(currentIndex - 1);
    if (event.key === "ArrowRight") showSlide(currentIndex + 1);
    if (event.key === "Home") showSlide(0);
    if (event.key === "End") showSlide(slides.length - 1);
  });

  frame.addEventListener("touchstart", (event) => {
    touchStartX = event.changedTouches[0]?.clientX || 0;
  }, { passive: true });
  frame.addEventListener("touchend", (event) => {
    const touchEndX = event.changedTouches[0]?.clientX || 0;
    const distance = touchEndX - touchStartX;
    if (Math.abs(distance) < 45) return;
    showSlide(currentIndex + (distance < 0 ? 1 : -1));
  }, { passive: true });

  const quiz = deck.querySelector("[data-intro-quiz]");
  const questionsContainer = deck.querySelector("[data-intro-quiz-questions]");
  const moduleData = [
    { title: "Βασικές έννοιες λειτουργίας", meta: "Δίκτυο • αισθητήρας • ECU • ενεργοποιητής", start: 0, end: 6 },
    { title: "Κοινά δεδομένα και συστήματα", meta: "ABS • ESP • EPS • BCM", start: 6, end: 12 },
    { title: "Πρωτόκολλα επικοινωνίας", meta: "CAN • LIN • J1850 • MOST • Ethernet", start: 12, end: 18 },
    { title: "OBD και μεθοδική διάγνωση", meta: "DTC • live data • Freeze Frame • έλεγχοι", start: 18, end: 24 },
    { title: "Εφαρμογή και σύγχρονο όχημα", meta: "Συνδεσιμότητα • ασφάλεια • μαθησιακοί στόχοι", start: 24, end: 30 },
  ];
  const letters = ["Α", "Β", "Γ", "Δ"];

  moduleData.forEach((module, moduleIndex) => {
    const section = document.createElement("section");
    section.className = "intro-quiz-module";
    section.setAttribute("aria-labelledby", `intro-module-${moduleIndex + 1}`);
    const heading = document.createElement("header");
    heading.className = "intro-quiz-module-heading";
    heading.innerHTML = `<span>${moduleIndex + 1}</span><div><h3 id="intro-module-${moduleIndex + 1}">${module.title}</h3><p>${module.meta}</p></div>`;
    section.append(heading);

    quizData.slice(module.start, module.end).forEach((item, localIndex) => {
      const index = module.start + localIndex;
      const fieldset = document.createElement("fieldset");
      fieldset.className = "intro-quiz-question";
      fieldset.dataset.introQuestion = "";
      fieldset.dataset.correct = String(item.correct);
      const legend = document.createElement("legend");
      const number = document.createElement("span");
      number.textContent = String(index + 1);
      const questionText = document.createElement("strong");
      questionText.textContent = item.question;
      legend.append(number, questionText);
      fieldset.append(legend);

      item.options.forEach((option, optionIndex) => {
        const label = document.createElement("label");
        const input = document.createElement("input");
        input.type = "radio";
        input.name = `intro-q${index + 1}`;
        input.value = String(optionIndex);
        const letter = document.createElement("b");
        letter.textContent = letters[optionIndex];
        const optionText = document.createElement("span");
        optionText.textContent = option;
        label.append(input, letter, optionText);
        fieldset.append(label);
      });

      const feedback = document.createElement("p");
      feedback.className = "intro-question-feedback";
      feedback.dataset.introFeedback = "";
      feedback.textContent = item.feedback;
      feedback.hidden = true;
      fieldset.append(feedback);
      section.append(fieldset);
    });
    questionsContainer.append(section);
  });

  deck.querySelector("[data-intro-quiz-loading]")?.remove();
  const questions = [...deck.querySelectorAll("[data-intro-question]")];
  const modules = [...deck.querySelectorAll(".intro-quiz-module")];
  const mobileQuery = window.matchMedia("(max-width: 700px)");
  const previousQuestion = deck.querySelector("[data-intro-question-prev]");
  const nextQuestion = deck.querySelector("[data-intro-question-next]");
  const questionPosition = deck.querySelector("[data-intro-question-position]");
  const quizScroll = deck.querySelector("[data-intro-quiz-scroll]");
  const warning = deck.querySelector("[data-intro-quiz-warning]");
  const result = deck.querySelector("[data-intro-quiz-result]");
  const scoreTarget = deck.querySelector("[data-intro-score]");
  const gradeTarget = deck.querySelector("[data-intro-grade]");
  const percentageTarget = deck.querySelector("[data-intro-percentage]");
  const statusTarget = deck.querySelector("[data-intro-result-status]");
  const resultMessage = deck.querySelector("[data-intro-result-message]");
  const progressCurrent = deck.querySelector("[data-intro-progress-current]");
  const progressBar = deck.querySelector("[data-intro-progress-bar]");
  const resetButton = deck.querySelector("[data-intro-quiz-reset]");
  const submitButton = quiz.querySelector('button[type="submit"]');
  let mobileQuestionIndex = 0;

  const showMobileQuestion = (index, focus = false) => {
    mobileQuestionIndex = Math.max(0, Math.min(index, questions.length - 1));
    const mobile = mobileQuery.matches;
    const activeQuestion = questions[mobileQuestionIndex];
    quiz.classList.toggle("is-mobile-paged", mobile);
    quiz.classList.toggle("is-mobile-last", mobile && mobileQuestionIndex === questions.length - 1);
    modules.forEach((module) => {
      const active = module.contains(activeQuestion);
      module.classList.toggle("is-mobile-active", mobile && active);
      module.hidden = mobile && !active;
    });
    questions.forEach((question, questionIndex) => {
      const active = !mobile || questionIndex === mobileQuestionIndex;
      question.classList.toggle("is-mobile-active", mobile && active);
      question.hidden = !active;
    });
    questionPosition.textContent = String(mobileQuestionIndex + 1);
    previousQuestion.disabled = mobileQuestionIndex === 0;
    nextQuestion.disabled = mobileQuestionIndex === questions.length - 1;
    if (mobile) {
      quizScroll.scrollTop = 0;
      if (focus) activeQuestion.querySelector("input")?.focus({ preventScroll: true });
    }
  };

  const updateProgress = () => {
    const answered = questions.filter((question) => question.querySelector("input:checked")).length;
    progressCurrent.textContent = String(answered);
    progressBar.style.width = `${Math.round((answered / questions.length) * 100)}%`;
  };

  previousQuestion.addEventListener("click", () => showMobileQuestion(mobileQuestionIndex - 1, true));
  nextQuestion.addEventListener("click", () => showMobileQuestion(mobileQuestionIndex + 1, true));
  mobileQuery.addEventListener?.("change", () => showMobileQuestion(mobileQuestionIndex));
  quiz.addEventListener("change", (event) => {
    event.target.closest("[data-intro-question]")?.classList.remove("needs-answer");
    warning.hidden = true;
    updateProgress();
  });

  quiz.addEventListener("submit", (event) => {
    event.preventDefault();
    const unanswered = questions.find((question) => !question.querySelector("input:checked"));
    if (unanswered) {
      warning.hidden = false;
      unanswered.classList.add("needs-answer");
      if (mobileQuery.matches) showMobileQuestion(questions.indexOf(unanswered), true);
      else unanswered.scrollIntoView({ behavior: "smooth", block: "center" });
      return;
    }

    let score = 0;
    warning.hidden = true;
    questions.forEach((question) => {
      const selected = question.querySelector("input:checked");
      const correct = question.dataset.correct;
      const isCorrect = selected?.value === correct;
      const correctInput = question.querySelector(`input[value="${correct}"]`);
      question.classList.toggle("is-correct", isCorrect);
      question.classList.toggle("is-incorrect", !isCorrect);
      selected?.closest("label")?.classList.add("selected-answer");
      correctInput?.closest("label")?.classList.add("correct-answer");
      question.querySelector("[data-intro-feedback]").hidden = false;
      question.querySelectorAll("input").forEach((input) => { input.disabled = true; });
      if (isCorrect) score += 1;
    });

    const percentage = Math.round((score / questions.length) * 100);
    const grade = ((score / questions.length) * 20).toFixed(1).replace(".0", "");
    scoreTarget.textContent = `${score}/${questions.length}`;
    gradeTarget.textContent = `${grade}/20`;
    percentageTarget.textContent = `${percentage}%`;
    result.classList.toggle("is-pass", score >= 24);
    result.classList.toggle("is-review", score < 24);
    if (score >= 27) {
      statusTarget.textContent = "Εξαιρετική επίδοση";
      resultMessage.textContent = "Έχεις πολύ καθαρή εικόνα των βασικών εννοιών και των πρακτικών παραδειγμάτων.";
    } else if (score >= 24) {
      statusTarget.textContent = "Επιτυχής ολοκλήρωση";
      resultMessage.textContent = "Πέρασες το τεστ. Δες τις εξηγήσεις στις λανθασμένες απαντήσεις για να κλείσεις τα κενά.";
    } else if (score >= 18) {
      statusTarget.textContent = "Χρειάζεται στοχευμένη επανάληψη";
      resultMessage.textContent = "Επανέλαβε τις ενότητες στις οποίες έκανες λάθη και δοκίμασε ξανά.";
    } else {
      statusTarget.textContent = "Χρειάζεται επανάληψη της παρουσίασης";
      resultMessage.textContent = "Δες ξανά τις 12 διαφάνειες και χρησιμοποίησε την ανατροφοδότηση κάθε ερώτησης.";
    }
    result.hidden = false;
    resetButton.hidden = false;
    submitButton.disabled = true;
  });

  resetButton.addEventListener("click", () => {
    quiz.reset();
    questions.forEach((question) => {
      question.classList.remove("is-correct", "is-incorrect", "needs-answer");
      question.querySelectorAll("label").forEach((label) => label.classList.remove("selected-answer", "correct-answer"));
      question.querySelector("[data-intro-feedback]").hidden = true;
      question.querySelectorAll("input").forEach((input) => { input.disabled = false; });
    });
    result.hidden = true;
    resetButton.hidden = true;
    submitButton.disabled = false;
    warning.hidden = true;
    scoreTarget.textContent = "0/30";
    gradeTarget.textContent = "0/20";
    percentageTarget.textContent = "0%";
    statusTarget.textContent = "";
    resultMessage.textContent = "";
    updateProgress();
    showMobileQuestion(0);
  });

  const hashSlide = Number(window.location.hash.match(/^#slide-(\d+)$/)?.[1]);
  showSlide(Number.isInteger(hashSlide) ? hashSlide - 1 : 0, false);
  showMobileQuestion(0);
  showQuiz(window.location.hash === "#test", false);
}
