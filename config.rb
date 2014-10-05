#########################
## Compass Configuration
#########################

# Require any additional compass plugins here.
require 'compass/import-once/activate'
require "breakpoint"
require "singularitygs"
require "toolkit"
require "modular-scale"

add_import_path "bower_components/letterform-shades/stylesheets"


# File system locations
http_path = "./"
css_dir = "css"
sass_dir = "sass"
images_dir = "images"
javascripts_dir = "js"
fonts_dir = "fonts"

# You can select your preferred output style here (can be overridden via the command line): One of: :nested, :expanded, :compact, or :compressed
output_style = :compressed

# Determine whether Compass asset helper functions generate relative or absolute paths
relative_assets = true

# Determine whether debugging comments that display the original location of your selectors will be printed (not needed if Source Maps are enabled).
line_comments = false

# Sass Options
sass_options = {:sourcemaps => true}

#########################
## Full documentation:
##   http://compass-style.org/help/documentation/configuration-reference/
#########################
