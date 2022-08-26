<?php
 class ParkingLot  
 {  
     private $parkingLots;  
     private $valueToEnter;  
     private $qtdVehiclesInParkingLot;  
     private $invoicing; 
     
     function __construct(int $parkingLots = 0, float $valueToEnter = 0) 
     {  
         if ($parkingLots < 1) :
            echo "Você tentou criar um estacionamento com menos de uma vaga!<br>";
            echo "Será criado um estacionamento com 1 vaga, para alterar isso faça uma expansão.";
            $this->parkingLots =  1;
         else:
            $this->parkingLots = $parkingLots;
         endif;
         $this->valueToEnter = $valueToEnter === 0.00 ?  5.00 : $valueToEnter; 
         $this->invoicing = 0; 
         $this->qtdVehiclesInParkingLot = 0; 
     }  
  
     private function getQtdOfParkingLots():int  
     {  
         return $this->parkingLots;  
     }  
     public function limitOfVehicles():void
     {
        $limitOfVehicles = $this->getQtdOfParkingLots();
        echo "O limite do estacionamento é $limitOfVehicles veículo(s)";
     }
      
     private function getValueToEnter():float 
     { 
         return $this->valueToEnter; 
     } 
   
     private function getQtdOfVehiclesInParkingLot():int  
     {  
         return $this->qtdVehiclesInParkingLot;  
     }  
     public function howManyVehiclesAreInParkingLot():void
     {
        $vehiclesInParkingLot = $this->getQtdOfVehiclesInParkingLot(); 
        if ($vehiclesInParkingLot !== 0) :
            echo "Há $vehiclesInParkingLot veículo(s) estacionado(s) no momento.";
        else :
            echo "Não há veículos estacionados no momento.";
        endif;
     }

   
   
     private function setQtdVehiclesInParkingLot(int $action):void  
     {  
         if ($action === 1) :  
             $this->qtdVehiclesInParkingLot++;  
         elseif ($action ===-1) :  
             $this->qtdVehiclesInParkingLot--;  
         endif;  
     }  
  
     private function qtdFreeParkingLots():int 
     { 
         return  $this->parkingLots - $this->qtdVehiclesInParkingLot; 
     } 
  
     public function areThereFreeParkingLots(): void  
     {  
         $freeParkingLots = $this->qtdFreeParkingLots();  
         if ( $freeParkingLots > 0) :  
             echo "Há $freeParkingLots vaga(s) livre(s)";  
         else:
            echo "Não há vagas disponíveis";
         endif;  
   
            
     }  
  
  
     private function setParkingLots(int $newQtdOfParkingLots):void 
     { 
         $this->parkingLots = $newQtdOfParkingLots; 
     } 
  
     public function expansionParkingLot(int $newQtdOfParkingLots):void 
     { 
         if ($newQtdOfParkingLots > $this->getQtdOfParkingLots()) : 
             $this->setParkingLots($newQtdOfParkingLots); 
             echo "Reforma concluída!"; 
         else : 
             echo "Reforma não pode ser feita, pois o número de vagas é menor ou igual a quantidade atual"; 
         endif; 
     } 
 
 
     public function toParkVehicle():void  
     {  
         if ($this->qtdFreeParkingLots() > 0) : 
            $this->setQtdVehiclesInParkingLot(1);
            $this->payParkingLot();  
             echo "Veículo estacionado"; 
         else : 
             echo "Estacionamento está lotado!"; 
         endif; 
     }  
 
 
     public function getOutOfTheParkVehicle():void  
     {  
         if ($this->getQtdOfVehiclesInParkingLot() !== 0 ) : 
            $this->setQtdVehiclesInParkingLot(-1);  
             echo "Veículo saiu"; 
         else : 
             echo "Estacionamento está vazio"; 
         endif; 
     } 
 
 
     private function setInvoicing(float $newInvoicing):void 
     { 
         $this->invoicing = $newInvoicing; 
     } 
           
     private function getInvoicing(): float 
     { 
         return $this->invoicing;    
     } 

     private function payParkingLot(): void
     {
        $totInvoicing = $this->getInvoicing() + $this->getValueToEnter();
        $this->setInvoicing($totInvoicing);
     }
     public function showInvoicing():void
     {
        echo "O faturamento atual é R$ " . number_format($this->invoicing,2,',','.');
     }
}  
 
$parkLot = new ParkingLot(-3,100);
$parkLot->howManyVehiclesAreInParkingLot(); 
echo "<br>";
// $parkLot = new ParkingLot(3);
$parkLot->limitOfVehicles(); 
// echo "<br>"; 
$parkLot->toParkVehicle();
echo "<br>"; 
// echo $parkLot->getQtdOfVehiclesInParkingLot();
// echo "<br>"; 
$parkLot->toParkVehicle();
echo "<br>"; 

$parkLot->howManyVehiclesAreInParkingLot(); 
echo "<br>";
// $parkLot->toParkVehicle();
// echo "<br>"; 
// $parkLot->toParkVehicle(); 
// echo "<br>"; 
// echo $parkLot->getQtdOfVehiclesInParkingLot();
// echo "<br>"; 
// $parkLot->areThereFreeParkingLots();
// echo "<br>Faturamento"; 
$parkLot->showInvoicing();
echo "<br>"; 
// $parkLot->getOutOfTheParkVehicle();
// echo "<br>"; 
// $parkLot->areThereFreeParkingLots();
// echo "<br>"; 
// $parkLot->toParkVehicle();
// echo "<br>"; 
// $parkLot->areThereFreeParkingLots();
// echo "<br>"; 
// $parkLot->showInvoicing();
// echo "<br>"; 
// echo $parkLot->getQtdOfVehiclesInParkingLot();
// echo "<br>"; 
echo $parkLot->expansionParkingLot(4);
echo "<br>";
$parkLot->limitOfVehicles(); 
echo $parkLot->expansionParkingLot(-4);
echo "<br>";
// echo $parkLot->getQtdOfParkingLots();
// echo "<br>"; 
// $parkLot->areThereFreeParkingLots();
// echo "<br>"; 
$parkLot->toParkVehicle();
echo "<br>"; 
$parkLot->toParkVehicle();
echo "<br>"; 
$parkLot->areThereFreeParkingLots();
echo "<br>"; 
$parkLot->showInvoicing();
echo "<br>"; 
// echo $parkLot->getQtdOfVehiclesInParkingLot();
// echo "<br>"; 
// $parkLot->getOutOfTheParkVehicle();
// echo "<br>"; 
// $parkLot->getOutOfTheParkVehicle();
// echo "<br>"; 
// $parkLot->getOutOfTheParkVehicle();
// echo "<br>"; 
// $parkLot->getOutOfTheParkVehicle();
// echo "<br>"; 
// $parkLot->getOutOfTheParkVehicle();
// echo "<br>"; 
// $parkLot->getOutOfTheParkVehicle();
// echo "<br>"; 
// echo $parkLot->getQtdOfVehiclesInParkingLot();
// echo "<br>"; 
// $parkLot->showInvoicing();
// echo "<br>"; 
