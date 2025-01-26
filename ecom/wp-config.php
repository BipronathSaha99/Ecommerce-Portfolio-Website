<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'ecom' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'u!_S4>`6`^!gd1Y_npeSA_$]QTZ2jE)}Z`ml~&8U2N[<T7a6A}Xf!*68M7HK507i' );
define( 'SECURE_AUTH_KEY',  'Zr RE8hDHSCr&C?F@C};yfZhOxEFtW!;hvZH#Ae3/g;d7gL;S2LbDVXewQO_Jl=<' );
define( 'LOGGED_IN_KEY',    '3vl $mW?YJBmmGsgf#<<A^r=oe@kYB<:~}/3Q~D8v$):~SAG17cFgHSxL^iXQ-+O' );
define( 'NONCE_KEY',        '<V.as1IcxI%U7d{fQ.t.[;)fjio[c}3v}p/|AGvms*8;YVLqc2BG8Wr!;]z4GXpS' );
define( 'AUTH_SALT',        'At?sxh*)zq$c}s7TyY_`f%%ImY{`YnS%YgXK_9+k[6O!j{>9^KPGg4YhhxLsJ!72' );
define( 'SECURE_AUTH_SALT', ')P}MJ)FD#6Ui72B5$Icxi:1S!zV:m<5x5XQ_?xtXHF!j+yDj$7rmo!f?G-D>DP&X' );
define( 'LOGGED_IN_SALT',   'jc36Pm,$]K#9Jg`1M.ySj6fJ==vNdB0CGu7:5<U%KmkYL.?ktYmjl-ws36H L12I' );
define( 'NONCE_SALT',       'ob[,Dws_]w#YVFNMD$}mo{jy6ZAwWg$&v,8Pg>Nnw}b5QAc~5j.JTju%WiI%Rw~!' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 *
 * At the installation time, database tables are created with the specified prefix.
 * Changing this value after WordPress is installed will make your site think
 * it has not been installed.
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/#table-prefix
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
