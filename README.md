Pretty Number - a jQuery plugin
===============================

This jQuery plugin provides a way to format a large number in a pretty 
human readable format.  For example, 100000 (one hundred thousand) would 
be printed as 100K.

Installation
------------

In your head tag, include jQuery and this plugin:

    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
    <script src="jquery.prettyNumbers.js" type="text/javascript"></script>

Use
===

HTML
----

    <div class="pretty-number">123456</div>

JavaScript
----------

    $( function() {
        $('.pretty-number').prettNumber();
    });
    
Resulting HTML
--------------

    <div class="pretty-number" data-pretty-number="123456" title="123456">1.2K</div>

Supported Element Types
-----------------------

Elements modifiable by prettyNumber include: div, span, a

If needed, it can easily be modified to add support for additional element types.

The input element is specifically excluded from this list as the intention of the plugin
is purely for presentation of data, not for data input.

Example
=======

Check the sample directory for an example on how to use the plugin.

You can also hop over to a [jsfiddle](http://jsfiddle.net/mqdvx/1/) for a live example.
