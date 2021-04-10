var signo = prompt('¿Caul es tu signo?');

switch (signo != null ? signo.toLocaleLowerCase() : '') {
    case 'tauro':
        console.log('En este día, deberá extremar su paciencia al máximo. Sepa que no debe desesperarse si hoy siente que las obligaciones lo superan más de lo habitual.');
        break;

    case 'sagitario':
        console.log('En este día, deberá hablar menos y escuchar más. De esta manera, mejorará la comunicación y aprenderá a mantener un mejor vínculo con los demás.');
        break;

    case 'picis':
        console.log('Entienda que el rencor no es un buen consejero en la vida. Sepa que debe actuar sin que el sentimiento oscurezca su razón. Actúe de forma prudente.');
        break;

    default:
        console.log('El signo no exite, por favor validelo');
        break;
}