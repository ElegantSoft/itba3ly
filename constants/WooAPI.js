import WooCommerceAPI from 'react-native-woocommerce-api';
const wp = new WooCommerceAPI({
    url: 'https://derarstore.com', // Your store URL
    ssl: true,
    consumerKey: 'ck_8b23219c4e6476dd63aa246fc8fed52b582919d6', // Your consumer secret
    consumerSecret: 'cs_7a7d2dcf81cda68be6437f32f7bc9735d1ce0c43', // Your consumer secret
    wpAPI: true, // Enable the WP REST API integration
    version: 'wc/v2', // WooCommerce WP REST API version
    queryStringAuth: true
});
export default wp;