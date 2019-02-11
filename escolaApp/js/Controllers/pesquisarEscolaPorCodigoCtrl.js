var pesquisarEscolaPorCodigoCtrl = function($scope, escolaApi) {
              $scope.escola = {};
              $scope.pesquisarEscolaPorCodigo = function(codEscola) {
                escolaApi.getPesquisarEscolaPorCodigo(codEscola)
                      .then(function (response) {
                          $scope.escola = response.data;
                      })
                      .catch(function (error) {
                          console.error(error);
                      });
              }
        };

escolaApp.controller("pesquisarEscolaPorCodigoCtrl", pesquisarEscolaPorCodigoCtrl);