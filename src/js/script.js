const password = document.querySelector('.password');
const upperCase = document.querySelector('.upper-case');
const lowerCase = document.querySelector('.lower-case');
const numbers = document.querySelector('.numbers');
const specialCharacters = document.querySelector('.special-characters');
const qtdCharacters = document.querySelector('.characters');
const btnGeneratePassword = document.querySelector('.generate-password');
const btnDelete = document.querySelector('.delete');

class GeneratePassword {
  constructor() {
    this.password = [];
    this.upperCase = [
      'A',
      'B',
      'C',
      'D',
      'E',
      'F',
      'G',
      'H',
      'I',
      'J',
      'K',
      'L',
      'M',
      'N',
      'O',
      'P',
      'Q',
      'R',
      'S',
      'T',
      'U',
      'V',
      'W',
      'X',
      'Y',
      'Z',
    ];
    this.lowerCase = [
      'a',
      'b',
      'c',
      'd',
      'e',
      'f',
      'g',
      'h',
      'i',
      'j',
      'k',
      'l',
      'm',
      'n',
      'o',
      'p',
      'q',
      'r',
      's',
      't',
      'u',
      'v',
      'w',
      'x',
      'y',
      'z',
    ];
    this.numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    this.specialCharacter = [
      '!',
      '@',
      '#',
      '$',
      '&',
      '<',
      '>',
      '?',
      '/',
      '(',
      ')',
      '-',
      '_',
      '+',
      '~',
      '^',
      '*',
      '=',
    ];
  }

  showPassword() {
    for (let i = this.password.length - 1; i > 0; i--) {
      const random = Math.floor(Math.random() * (i + 1));

      [this.password[i], this.password[random]] = [
        this.password[random],
        this.password[i],
      ];
    }

    const passwordString = this.password.join('');

    return passwordString.slice(0, qtdCharacters.value);
  }

  upperCaseOption() {
    for (let i = 0; i < qtdCharacters.value; i++) {
      const randomIndex = Math.floor(Math.random() * this.upperCase.length);

      this.password.push(this.upperCase[randomIndex]);
    }
  }

  lowerCaseOption() {
    for (let i = 0; i < qtdCharacters.value; i++) {
      const randomIndex = Math.floor(Math.random() * this.lowerCase.length);

      this.password.push(this.lowerCase[randomIndex]);
    }
  }

  numbersOption() {
    for (let i = 0; i < qtdCharacters.value; i++) {
      const randomIndex = Math.floor(Math.random() * this.numbers.length);

      this.password.push(this.numbers[randomIndex]);
    }
  }

  specialCharactersOption() {
    for (let i = 0; i < qtdCharacters.value; i++) {
      const randomIndex = Math.floor(
        Math.random() * this.specialCharacter.length,
      );

      this.password.push(this.specialCharacter[randomIndex]);
    }
  }
}

btnGeneratePassword.addEventListener('click', () => {
  const generatePassword = new GeneratePassword();

  if (upperCase.checked) {
    generatePassword.upperCaseOption();
  }

  if (lowerCase.checked) {
    generatePassword.lowerCaseOption();
  }

  if (numbers.checked) {
    generatePassword.numbersOption();
  }

  if (specialCharacters.checked) {
    generatePassword.specialCharactersOption();
  }

  if (
    !upperCase.checked &&
    !lowerCase.checked &&
    !numbers.cheked &&
    !specialCharacters.checked
  ) {
    window.alert('Selecione ao menos uma opção.');
    return;
  }

  if (qtdCharacters.value === '') {
    window.alert('A quantidade de caracteres não pode estar vazia.');
    return;
  }

  password.innerHTML = generatePassword.showPassword();

  qtdCharacters.value = '';

  btnDelete.classList.remove('hidden');
});

btnDelete.addEventListener('click', () => {
  password.innerHTML = '';

  if (upperCase.checked) {
    upperCase.checked = false;
  }

  if (lowerCase.checked) {
    lowerCase.checked = false;
  }

  if (numbers.checked) {
    numbers.checked = false;
  }

  if (specialCharacters.checked) {
    specialCharacters.checked = false;
  }

  btnDelete.classList.add('hidden');
});
