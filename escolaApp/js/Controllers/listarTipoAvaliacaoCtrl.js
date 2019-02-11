var listarTipoAvaliacaoCtrl = function($scope, escolaApi) {

            $scope.avaliacoes = [];
            $scope.listarTipoAvaliacao = function() {
                escolaApi.getListarTipoAvaliacao()
                    .then(function(response) {
                        $scope.avaliacoes = response.data;
                    })
                    .catch(function(error) {
                        console.error(error);
                    });
            }
        };

escolaApp.controller("listarTipoAvaliacaoCtrl", listarTipoAvaliacaoCtrl);