$(function () {

    $(".informations-aniversariantes-slide-rightarrow").click(function () {

        $arrowRight = $(this);
        $divContainer = $('.informations-aniversariantes-slide-gallery')[0]; //Div que desliza para os lados

        $arrowLeft = $('.informations-aniversariantes-slide-leftarrow')[0]; //Div da seta esquerda

        $containerCurrLeft = $($divContainer).position().left; //Posicao left da div que desliza

        $containerWidth = $($divContainer).outerWidth(true); //Largura da div que desliza

        $($divContainer).children('.informations-aniversariantes-slide-gallery-person').each(function () {
            //para cada aniversariante, realizar essa funcao

            $position = $(this).position(); //pega a posicao de cada aniversariante
            $itemLeft = $position.left;    // pega a posicao left do aniversariante

            $itemWidth = $(this).outerWidth(true); //largura do aniversariante

            $offsetLeft = $itemLeft + $containerCurrLeft; //
            $offsetRight = $offsetLeft + $itemWidth;

            if ($offsetRight > 805) {

                $diff = $offsetRight - 805;

                $newLeft = $containerCurrLeft - $diff;

                $($divContainer).css('left', $containerCurrLeft).animate({'left': $newLeft}, 'slow');
                console.log($newLeft);
                if ($newLeft + $containerWidth <= 870) {

                    $($arrowRight).removeClass('active');
                    $($arrowRight).addClass('inactive');
                }

                $($arrowLeft).removeClass('inactive');
                $($arrowLeft).addClass('active');

                return false;
            }
        });
    });

    $(".informations-aniversariantes-slide-leftarrow").click(function () {
        $arrowLeft = $(this);

        $divContainer = $('.informations-aniversariantes-slide-gallery')[0]; //Div que desliza para os lados

        $arrowLeft = $('.informations-aniversariantes-slide-rightarrow')[0]; //Div da seta direita

        $containerCurrLeft = $($divContainer).position().left; //Posicao left da div que desliza

        $containerWidth = $($divContainer).outerWidth(true);
        
        $($divContainer).children('.informations-aniversariantes-slide-gallery-person').each(function () {
        
            $currentChild = $(this);
            $childLeft = $($currentChild).position().left; 
            $diff = $containerCurrLeft + $childLeft;
            
            if ($diff < 0) {

                // Move o elemento pai para a direita o suficiente 
                // para apresentar o elemento filho

                $newLeft = $containerCurrLeft + Math.abs($diff);
                $($divContainer).css('left', $containerCurrLeft).animate({'left': $newLeft}, 'slow');

                // Se atingiu o limite à esquerda, então altera a 
                // classe da flecha de navegação para a esquerda

                if ($newLeft >= 0) {

                    $($arrowLeft).removeClass('active');
                    $($arrowLeft).addClass('inactive');
                }

                // Altera a classe da flecha de navegação para a direita

                $($arrowRight).removeClass('inactive');
                $($arrowRight).addClass('active');

                return false;
            }
        
        });
    });
    
});