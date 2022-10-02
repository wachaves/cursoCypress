Feature: Cadastro de Usuario

    Eu como consumidor desejo poder realizar cadastro no site para que eu possa fazer minhas compras e ter uma lista pessoal de itens de compra e receber promocoes

    Scenario: Cadastrar usuario valido
    Given cliquei para realizar sign-in
    When informo meu email para cadastro de usuario
     And finalizo o cadastro preenchendo todos os dados
    Then O sistema realiza meu cadastro com sucesso me autenticando na pagina

    Scenario: Cadastrar usuario com email invalido
    Given cliquei para realizar sign-in
    When tentei me inscrever com um email invalido
    Then o sistema notifica que o email utilizado e invalido

    Scenario: Cadastrar usuario com email existente
    Given cliquei para realizar sign-in
    When tentei me inscrever com um email que ja esta em uso
    Then o sistema notifica que o email ja esta sendo utilizado por outro usuario