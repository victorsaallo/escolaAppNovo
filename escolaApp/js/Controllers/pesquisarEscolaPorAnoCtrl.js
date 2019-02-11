var pesquisarEscolaPorAnoCtrl = function($scope, escolaApi) {
              $scope.escolas = [];
              $scope.pesquisarEscolaPorAno = function(codEscola, anoEscola) {
                escolaApi.getPesquisarEscolaPorAno(codEscola, anoEscola)
                      .then(function (response) {
                          $scope.escolas = response.data;
                      })
                          .catch(function (error) {
                          console.error(error);
                      });
              }
        };

escolaApp.controller("pesquisarEscolaPorAnoCtrl", pesquisarEscolaPorAnoCtrl);