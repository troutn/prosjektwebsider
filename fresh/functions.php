function enqueue_drone_services_styles() {
    if (is_page_template('page-dronetjenester.php')) {
        wp_enqueue_style('drone-services', get_template_directory_uri() . '/assets/drone-services.css');
    }
}
add_action('wp_enqueue_scripts', 'enqueue_drone_services_styles'); 