(function( $ ){

    /**
    ** Defines method lookup for specific element types.
    **/
    var elementMethods = {
        'DIV': function( $element ) {
            handleTextElement( $element );
        },
        'SPAN': function( $element ) {
            handleTextElement( $element );
        },
        'A': function( $element ) {
            handleTextElement( $element );
        }
    };

    /**
    ** Handles any html element that has a text node.
    **/
    function handleTextElement( $element ) {
        var number = $element.text();
        setElementAttributes( $element, number, function( prettyNumber ){
            if( prettyNumber ) {
                $element.text( prettyNumber );
            }
        });
    }

    /**
    ** Sets element attributes before invoking the callback to set the pretty number.
    ** In an effort to not destroy any existing numbers, we create a data-pretty-number
    ** attribute with the original number and create a title that can display the
    ** original value when the element is hovered.
    **/
    function setElementAttributes( $element, number, callback ) {
        var prettyNumber;
        if( number && number.length > 0 && !isNaN( number ) && !$element.data('pretty-number') ) {
            prettyNumber = prettyPrintNumber( number );
            $element.attr( 'data-pretty-number', number );
            $element.attr( 'title', number );
        }
        if( callback ) {
            callback( prettyNumber );
        }
    }

    /**
    ** Method to transform a number into a pretty number string.
    ** A pretty number example would be 1234 transformed into 1.2K.
    **
    ** This currently supports thousands(K), millions(M), billions(B)
    ** and trillions(T).
    **
    ** Maximum decimals is not configurable and at max will be 1 decimal
    ** place.
    **/
    function prettyPrintNumber( number ) {
        var numberString;
        var scale = '';
        if( isNaN( number ) || !isFinite( number ) ) {
            numberString = 'N/A';
        } else {
            var absVal = Math.abs( number );

            if( absVal < 1000 ) {
                scale = '';
            } else if( absVal < 1000000 ) {
                scale = 'K';
                absVal = absVal/1000;

            } else if( absVal < 1000000000 ) {
                scale = 'M';
                absVal = absVal/1000000;

            } else if( absVal < 1000000000000 ) {
                scale = 'B';
                absVal = absVal/1000000000;

            } else if( absVal < 1000000000000000 ) {
                scale = 'T';
                absVal = absVal/1000000000000;
            }

            var maxDecimals = 0;
            if( absVal < 10 && scale != '' ) {
                maxDecimals = 1;
            }
            numberString = absVal.toFixed( maxDecimals );
            numberString += scale
        }
        return numberString;
    }

    /**
    ** The pretty number formatting method extending jquery.
    ** Elements modifiable by prettyNumber include: div, span, a
    **/
    $.fn.prettyNumber = function() {
        return this.each(function() {
            var $this = $(this);
            if( elementMethods[ this.tagName ] ) {
                elementMethods[ this.tagName ]( $this );
            }
        });
    };

})( jQuery );
