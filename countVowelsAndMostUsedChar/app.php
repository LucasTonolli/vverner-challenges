<?php

function createDictionary(string $text): array
{
    $text = explode(' ', $text);

    $dictionary = [];

    foreach ($text as $word) :
        if(isset($dictionary[strtolower($word)])) :
            $dictionary[strtolower($word)]++;
        else:
            $dictionary[strtolower($word)] = 1;
        endif;
    endforeach;

    return $dictionary;
}

function createAlphabet(array $dictionary): array
{
    $alphabet = [];
    foreach ($dictionary as $word => $frequency) :
        $letters = str_split($word);
        foreach ($letters as $letter) :
            if (ord($letter) >= 97 && ord($letter) <= 122) :
                if (isset($alphabet[strtolower($letter)])) :
                    $alphabet[$letter] += $frequency;
                else:
                    $alphabet[$letter] = $frequency;
                endif;
            endif;
        endforeach;
    endforeach;

    return $alphabet;
}

function hasOnlyOneLetterMaxFrequency (array $alphabet): void
{
    $maxFrequency = max($alphabet);
    $letterMostUsed = '';
    $flagLetterMostUsed = 0;

    for ($i = 97; $i <= 122; $i++) :
        if (isset($alphabet[chr($i)])) :
            if ($alphabet[chr($i)] == $maxFrequency) :
                $letterMostUsed = chr($i);
                $flagLetterMostUsed++;
            endif;
        endif;
    endfor;

    if ($flagLetterMostUsed === 1) :
        echo '<h3>A letra que mais apareceu foi a letra - <span class="letter-used">'. strtoUpper($letterMostUsed). '</span> que apareceu '. $alphabet[$letterMostUsed] .' vezes</h3>';
    else:
        echo '<h3 class="error">Não teve uma única letra com o máximo de aparições</h3>';
    endif;
}

function setEmptyLetters ($alphabet):array
{
    for ($i = 97; $i <= 122; $i++) :
        if (!isset($alphabet[chr($i)])) :
            $alphabet[chr($i)] = 0;
        endif;
    endfor;

    return $alphabet;
}

function showVowelsCount(array $alphabet):void
{
    $alphabet = setEmptyLetters($alphabet)
    ?>
    <table>
        <thead>
            <tr>
                <td>Vogal</td>
                <td>Qtd. Ocorrências</td>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>A</td>
                <td><?= $alphabet['a']?></td>
            </tr>
            <tr>
                <td>E</td>
                <td><?= $alphabet['e']?></td>
            </tr>
            <tr>
                <td>I</td>
                <td><?= $alphabet['i']?></td>
            </tr>
            <tr>
                <td>O</td>
                <td><?= $alphabet['o']?></td>
            </tr>
            <tr>
                <td>U</td>
                <td><?= $alphabet['u']?></td>
            </tr>
        </tbody>
    </table>
<?php }
function countVowelsAndMostUsedChar(string $text):void
{
    if (strlen($text) > 0 && $text !== ' ') :
        
        $dictionary = createDictionary($text);
        
        $alphabet = createAlphabet($dictionary);
        
        if (count($alphabet) < 1) :
            echo '<h2 class="error "> Nenhuma letra informada ';
            return;
        endif;

        showVowelsCount($alphabet);

        hasOnlyOneLetterMaxFrequency($alphabet);
    else:
        echo '<h2 class="error "> Nenhuma letra informada ';
    endif;
}
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="main.css">
    <title>Contagem de Vogais e caractere mais usado</title>
</head>
<body>
    <h2>Resultado</h2>
    <div>
        <?php countVowelsAndMostUsedChar($_POST['text_to_get_info']);?>
    </div>
    <div>
        <a href="index.html">Voltar</a>
    </div>
</body>

</html>
