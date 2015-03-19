/* 
 * JS for WPEC, EDD and eShop
 * 
 * AJAX not working for you? Look for the (specific) class attached to your 'add to cart' button (example: YOURCLASS)
 * The add it to the list of class selectors in the jQuery command:
 * $(".edd-add-to-cart, .wpsc_buy_button, .eshopbutton, div.cartopt p label.update input#update, .YOURCLASS").click(function(){
 * 
 */

jQuery( function( $ ) {

  $( document ).on( 'click',
    '.edd-add-to-cart, ' +
    '.wpsc_buy_button, ' +
    '.eshopbutton, ' +
    'div.cartopt p label.update input#update, ' +
    '.add_to_cart_button, ' +
    '.woocommerce-cart input.minus, ' +
    '.cart_item a.remove, ' +
    '.woocommerce-cart input.plus',
    function() {
      WPMenucart_Timeout();
  });
    
  function WPMenucart_Timeout() {
      // console.log('WP Menu Cart AJAX triggered'); // used for debugging
      setTimeout(function () { WPMenucart_Load_JS(); }, 1000);
  }

  function WPMenucart_Load_JS() {
    $('#wpmenucartli').load(wpmenucart_ajax.ajaxurl+'?action=wpmenucart_ajax&_wpnonce='+wpmenucart_ajax.nonce);
    $('div.wpmenucart-shortcode span.reload_shortcode').load(wpmenucart_ajax.ajaxurl+'?action=wpmenucart_ajax&_wpnonce='+wpmenucart_ajax.nonce);
  }
});