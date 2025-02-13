<?php
/**
 * Plugin Name: Copy Code
 * Description: Adds a copy button to WordPress code blocks
 * Version: 0.1.0
 * Author: WordPress Developer
 * License: GPL v2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: copy-code
 */

if (!defined('ABSPATH')) {
    exit;
}

/**
 * Enqueue frontend assets
 */
function copy_code_enqueue_assets() {
    if (!is_admin()) {
        wp_enqueue_style('dashicons');
        wp_enqueue_style(
            'copy-code-styles',
            plugins_url('assets/index.css', __FILE__),
            array(),
            '0.1.0'
        );
        wp_enqueue_script(
            'copy-code-script',
            plugins_url('assets/index.js', __FILE__),
            array(),
            '0.1.0',
            true
        );
    }
}
add_action('wp_enqueue_scripts', 'copy_code_enqueue_assets'); 