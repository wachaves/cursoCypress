Feature: Login

    Eu como consumidor que ja possuo cadastro gostaria de fazer login para realizar mais compras ou continuar alguma que deixei pendente.
    Eu como consumidor quero fazer login para verificar meu historico de pedidos.
    Eu como consumidor quero fazer login para pedir ajuda pois tive problema em uam ecomenda.

    Scenario: Login com usuario valido
    Given cliquei para realizar sign-in
    When preencho os dados de login com um usuario valido
     And clico para realizar login
    Then O sistema realiza meu login com sucesso me autenticando na pagina

    Scenario: Login com usuario valido pressionando enter
    Given cliquei para realizar sign-in
    When preencho os dados de login com um usuario valido pressionando enter
    Then O sistema realiza meu login com sucesso me autenticando na pagina

    Scenario: Login com usuario valido informando uma senha errada
    Given cliquei para realizar sign-in
    When preencho os dados de login com um usuario valido e senha incorreta
     And clico para realizar login
    Then O sistema notifica usuario que houve problema com a autenticacao

    Scenario: Login com email nao cadastrado
    Given cliquei para realizar sign-in
    When preencho os dados de login com um usuario nao cadastrado
     And clico para realizar login
    Then O sistema notifica usuario que houve problema com a autenticacao

    Scenario: Login sem informar email
    Given cliquei para realizar sign-in
    When preencho os dados de login sem informar email
     And clico para realizar login
    Then O sistema notifica usuario que necessita informar um email

    Scenario: Login com usuario valido sem informar senha
    Given cliquei para realizar sign-in
    When preencho os dados de login com um usuario valido sem informar senha
     And clico para realizar login
    Then O sistema notifica usuario que houve falta uma senha