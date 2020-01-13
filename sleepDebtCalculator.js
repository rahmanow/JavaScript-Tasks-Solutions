const getSleepHours = day => {
    switch (day) {
        case 'Monday':
            return 6;
        case 'Tuesday':
            return 5;
        case 'Wednesday':
            return 7;
        case 'Thirsday':
            return 5;
        case 'Friday':
            return 6;
        case 'Saturday':
            return 12;
        case 'Sunday':
            return 13;
    }
}

const getActualSleepHours = () => {
    return getSleepHours('Monday') + getSleepHours('Tuesday') + getSleepHours('Wednesday') + getSleepHours('Thirsday') + getSleepHours('Friday') + getSleepHours('Saturday') + getSleepHours('Sunday');
}

const getIdealSleepHours = idealHours => {
    return idealHours * 7;
}

const calculateSleepDebt = () => {
    let actualSleepHours = getActualSleepHours();
    let idealSleepHours = getIdealSleepHours(8);
    if (actualSleepHours < idealSleepHours) {
        console.log('Goşmaça ' + (idealSleepHours - actualSleepHours) + ' sagat dynjyny al wasyok');
    } else if (actualSleepHours > idealSleepHours) {
        console.log('Gereginden '+ (actualSleepHours - idealSleepHours) + ' sagat artyk yatyan');
    } else {
        console.log('Kadaly yatyp turyaň tüweleme');
    }
}

calculateSleepDebt();

console.log(getActualSleepHours());
console.log(getIdealSleepHours(8));
console.log(getSleepHours('Thirsday'));