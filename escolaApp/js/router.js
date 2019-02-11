/*escolaApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'home.html'
        })
        .state('escolas', {
            url: '/escolas',
            templateUrl: 'listarEscolas.html',
            controller: 'ListarEscolasCtrl'
        })
        .state('escolaPorCodigo', {
            url: '/escolas/:codEscola',
            templateUrl: 'pesquisarEscola.html',
            controller: 'PesquisarEscolaCtrl'
        })
        .state('tiposAvaliacao', {
            url: '/tiposavaliacao',
            templateUrl: 'listarTiposAvaliacao.html',
            controller: 'ListarTiposAvaliacaoCtrl'
        });
});*/

//configuração das rotas.
escolaApp.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/home');

    var homeState = {
        url: '/home',
        templateUrl: 'home.html'
    };

    var listarEscolasState = {
        url: '/listar',
        templateUrl: 'listarEscolas.html',
        controller: 'listarEscolasCtrl'
    };

    var listarAvaliacaoMediaState = {
        url: '/listarAvaliacaoMedia',
        templateUrl: 'listarAvaliacaoMedia.html',
        controller: 'listarAvaliacaoMediaCtrl'
    };

    var listarTipoAvaliacaoState = {
        url: '/listarTipoAvaliacao',
        templateUrl: 'listarTipoAvaliacao.html',
        controller: 'listarTipoAvaliacaoCtrl'
    };

    var pesquisarEscolaPorAnoState = {
        url: "/pesquisarEscolaPorAno",
        templateUrl: "pesquisarEscolaPorAno.html",
        controller: "pesquisarEscolaPorAnoCtrl"
    };

    var pesquisarEscolaPorCodigoState = {
        url: "/pesquisarEscolaPorCodigo",
        templateUrl: "pesquisarEscolaPorCodigo.html",
        controller: "pesquisarEscolaPorCodigoCtrl"
    };

    var listarAvaliacaoPorTipoState = {
            url: "/listarAvaliacaoPorTipo",
            templateUrl: "listarAvaliacaoPorTipo.html",
            controller: "listarAvaliacaoPorTipoCtrl"
    };

    var listarAvaliacoesEscolaState = {
            url: "/listarAvaliacoesEscola",
            templateUrl: "listarAvaliacoesEscola.html",
            controller: "listarAvaliacoesEscolaCtrl"
    };


    $stateProvider.state("home", homeState);
    $stateProvider.state("listarEscolas", listarEscolasState);
    $stateProvider.state("listarAvaliacaoMedia", listarAvaliacaoMediaState);
    $stateProvider.state("listarTipoAvaliacao", listarTipoAvaliacaoState);
    $stateProvider.state("pesquisarEscolaPorAno", pesquisarEscolaPorAnoState);
    $stateProvider.state("pesquisarEscolaPorCodigo", pesquisarEscolaPorCodigoState);
    $stateProvider.state("listarAvaliacaoPorTipo", listarAvaliacaoPorTipoState);
    $stateProvider.state("listarAvaliacoesEscola", listarAvaliacoesEscolaState);
});