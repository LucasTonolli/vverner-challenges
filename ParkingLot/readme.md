* Comece criando um novo Estacionamento:
    → $nomeDoEstacionamento = new ParkingLot($numeroVagas, $valorParaEstacionar)
    → Você pode definir quantas vagas tem, caso não informar será criado um estacionamento com 1 vaga apenas
    → O valor que deve ser pago pelos veículos pode ser informado ou não, caso não for, é cobrado R$ 5,00
 
* Ações que podem ser feitas:
    → limitOfVehicles() - Verificar a quantidade de vagas do estacionameto
    → toParkVehicle() - Estacionar um veículo;
    → getOutOfTheParkVehicle() - Veículo sai do estacionamento;
    → areThereFreeParkingLots() - Verificar se há vagas no estacionamento;
    → showInvoicing() - Ver o faturamento atual do estacionamento;
    → expansionParkingLot(int $newQtdOfParkingLots) - Expandir o estacionamento;
    → howManyVehiclesAreInParkingLot() - Quantidade de veículos estacionados;

