<?php

$keys = range('A', 'Z');
$values = array_reverse($keys);
$criptographyCode = array_combine($keys, $values);

$word = filter_input(INPUT_POST, 'text');
$mode = filter_input(INPUT_POST, 'mode');
$newWord;

function encrypt(string $word, array $criptographyCode)
{
  $encrypted = array_map(function($letter) use ($criptographyCode){
    return array_key_exists($letter, $criptographyCode) ?  $criptographyCode[$letter] : $letter;
  }, str_split($word));

  return implode('', $encrypted);
}

function decrypt(string $word, array $criptographyCode)
{
  $decrypted = array_map(function($letter) use ($criptographyCode){
    return in_array($letter, $criptographyCode) ?  array_search($letter, $criptographyCode): $letter;
  }, str_split($word));

  return implode('', $decrypted);
}

$newWord = $mode === 'encrypt' ? encrypt($word, $criptographyCode) : decrypt($word, $criptographyCode);

?>

<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Criptografia</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
    crossorigin="anonymous"></script>
    <link rel="stylesheet" href="main.css">
</head>

<body>
  <div class="form-body">
    <div class="row">
        <div class="form-holder">
            <div class="form-content">
                <div class="form-items">
                    <h3>Criptografia</h3>
                    <form method="POST" class="requires-validation">
                        <div class="col-md-12">
                           <textarea name="" id="" cols="30" rows="10"><?= $newWord ?></textarea>
                        </div>       
                        <div class="form-button mt-3">
                          <a href="index.html" class="btn btn-primary">Voltar</a>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>

<footer>
  <script src="app.js"></script>
</footer>
</body>

</html>