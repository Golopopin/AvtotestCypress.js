describe('Проверка авторизации', function () {

    it('1 Верный пароль и верный логин', function () {
         cy.visit('https://login.qa.studio/');

         cy.get('#mail').type('german@dolnikov.ru')// Найти поле логин вести логин
         cy.get('#pass').type('iLoveqastudio1')// Найти поле пароль Ввести правильный пароль
         cy.get('#loginButton').click();// Нажать войти

         cy.get('#messageHeader').contains('Авторизация прошла успешно');// Проверить нужный текст
         cy.get('#messageHeader').should('be.visible');// Проверить видимость текста
         cy.get('#exitMessageButton > .exitIcon').should('be.visible');// Проверить наличие кнопки крестик

     })
     it('2 автотест на проверку логики восстановления пароля', function () {
        cy.visit('https://login.qa.studio/');

        cy.get('#forgotEmailButton').click();// Нажать «Забыли пароль»
        cy.get('#mailForgot').type('german@dolnikov.ru')//Ввести любой имейл
        cy.get('#restoreEmailButton').click();// нажать кнопку отправить код


        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail');// Проверить нужный текст
        cy.get('#messageHeader').should('be.visible');// Проверить видимость текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');// Проверить наличие кнопки крестик

    })
    it('3 Проверка на негативный кейс авторизации пароля', function () {
        cy.visit('https://login.qa.studio/');

        cy.get('#mail').type('german@dolnikov.ru')// Найти поле логин вести логин
        cy.get('#pass').type('iLoveqastudio123')// Найти поле пароль Ввести НЕправильный пароль
        cy.get('#loginButton').click();// Нажать войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет');// Проверить нужный текст
        cy.get('#messageHeader').should('be.visible');// Проверить видимость текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');// Проверить наличие кнопки крестик
    })
    it('4 Проверка на негативный кейс авторизации логина', function () {
        cy.visit('https://login.qa.studio/');

        cy.get('#mail').type('geman@dolnikov.ru')// Найти поле логин вести НЕ правильный логин
        cy.get('#pass').type('iLoveqastudio1')// Найти поле пароль Ввести правильный пароль
        cy.get('#loginButton').click();// Нажать войти

        cy.get('#messageHeader').contains('Такого логина или пароля нет');// Проверить нужный текст
        cy.get('#messageHeader').should('be.visible');// Проверить видимость текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');// Проверить наличие кнопки крестик
    })
    it('5 проверку на негативный кейс валидации логина', function () {
        cy.visit('https://login.qa.studio/');

        cy.get('#mail').type('germandolnikov.ru')// Найти поле логин вести НЕ правильный логин без @
        cy.get('#pass').type('iLoveqastudio1')// Найти поле пароль Ввести правильный пароль
        cy.get('#loginButton').click();// Нажать войти

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации');// Проверить нужный текст
        cy.get('#messageHeader').should('be.visible');// Проверить видимость текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');// Проверить наличие кнопки крестик
    })
    it('6 проверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/');

        cy.get('#mail').type('GerMan@Dolnikov.ru')// Найти поле логин вести логин с заглавными буквами
        cy.get('#pass').type('iLoveqastudio1')// Найти поле пароль Ввести правильный пароль
        cy.get('#loginButton').click();// Нажать войти

        cy.get('#messageHeader').contains('Авторизация прошла успешно');// Проверить нужный текст
        cy.get('#messageHeader').should('be.visible');// Проверить видимость текста
        cy.get('#exitMessageButton > .exitIcon').should('be.visible');// Проверить наличие кнопки крестик
 })

})
 // После проведенияч первых 5-и автотестов на 6-м сайт выдает ошибку, там обнаружен БАГ