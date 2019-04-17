import WooCommerceAPI from 'react-native-woocommerce-api';
const wp = new WooCommerceAPI({
    url: 'https://itba3ly.com', // Your store URL
    ssl: true,
    consumerKey: 'ck_cc2bb80e892494d6bddba433be9863b911011953', // Your consumer secret
    consumerSecret: 'cs_163157b966815c8cc092a126c813baa96b065163', // Your consumer secret
    wpAPI: true, // Enable the WP REST API integration
    version: 'wc/v2', // WooCommerce WP REST API version
    queryStringAuth: true
});
export default wp;