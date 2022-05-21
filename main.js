// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ["A", "T", "C", "G"];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

// the organism
function pAequorFactory(specimenNum, dna) {
  return {
    specimenNum,
    dna,
    // print the percentage of march to the console
    compareDNA(pAequor) {
      const identical = [];

      for (let a = 0; a < this.dna.length; a++) {
        if (this.dna[a] == pAequor.dna[a]) identical.push(this.dna[a]);
      }
      const percentIdentical = Math.round(
        (identical.length / this.dna.length) * 100
      );
      console.log(
        `specimen ${this.specimenNum} and specimen ${pAequor.specimenNum} have : ${percentIdentical}% DNA in common`
      );
    },

    // return a true or false value
    willLikelySurvive() {
      const mapOfCandG = [];
      this.dna.forEach((val) => {
        if (val == "G" || val == "C") mapOfCandG.push(val);
      });

      if ((mapOfCandG.length / this.dna.length) * 100 >= 60) {
        return true;
      } else {
        return false;
      }
    },

    // randomly change the dna of the organism
    mutate() {
      let length = this.dna.length;
      const rand = Math.floor(randNum(length));
      let base = this.dna[rand];

      if (base == this.dna[Math.floor(randNum(length))]) {
        let a = this.dna.find((val) => val != base);

        this.dna[rand] = a;
      } else {
        let a = this.dna[Math.floor(randNum(length))];

        this.dna[rand] = a;
      }
      return this.dna;
    },
  };
}

// a random number generator used in most part of my code
const randNum = (length) => Math.floor(Math.random() * length);

// the sample of 30 organisms

const specimenNum = () => {
  let num = randNum(30);
  while (sampe30pAeqour.some((any) => any.specimenNum == num)) {
    num = randNum(30);
  }
  return num;
};

function generate30Organisms() {
  const sampe30pAeqour = [];
  while (sampe30pAeqour.length < 30) {
    const org = pAequorFactory(specimenNum(), mockUpStrand());
    if (org.willLikelySurvive() == true) {
      sampe30pAeqour.push(org);
    }
  }
  return sampe30pAeqour;
}

generate30Organisms();
