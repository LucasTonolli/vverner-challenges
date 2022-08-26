* Comece criando um novo Estacionamento:<br>
    → $nomeDoEstacionamento = new ParkingLot($numeroVagas, $valorParaEstacionar)<br>
    → Você pode definir quantas vagas tem, caso não informar será criado um estacionamento com 1 vaga apenas<br>
    → O valor que deve ser pago pelos veículos pode ser informado ou não, caso não for, é cobrado R$ 5,00<br>
 
* Ações que podem ser feitas:<br>
    → limitOfVehicles() - Verificar a quantidade de vagas do estacionameto<br>
    → toParkVehicle() - Estacionar um veículo;<br>
    → getOutOfTheParkVehicle() - Veículo sai do estacionamento;<br>
    → areThereFreeParkingLots() - Verificar se há vagas no estacionamento;<br>
    → showInvoicing() - Ver o faturamento atual do estacionamento;<br>
    → expansionParkingLot(int $newQtdOfParkingLots) - Expandir o estacionamento;<br>
    → howManyVehiclesAreInParkingLot() - Quantidade de veículos estacionados;

