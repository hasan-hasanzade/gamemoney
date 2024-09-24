import * as VKID from '@vkid/sdk';

VKID.Config.init({
    app: 52350309, // Идентификатор приложения.
    redirectUrl: "https://google.com", // Адрес для перехода после авторизации.
    state: 'dj29fnsadjsd82', // Произвольная строка состояния приложения.
    codeVerifier: 'FGH767Gd65', // Верификатор в виде случайной строки. Обеспечивает защиту передаваемых данных.
    scope: 'email phone password', // Список прав доступа, которые нужны приложению.
    mode: VKID.ConfigAuthMode.InNewTab// По умолчанию авторизация открывается в новой вкладке.
});

export default VKID
