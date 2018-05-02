(function ( $ ) {
    $.fn.materialColorPicker = function( options ) {

        var flatuicolors = [
            "#1abc9c", "#2ecc71", "#3498db", "#9b59b6", "#34495e", "#16a085", "#27ae60", "#2980b9", "#8e44ad", "#2c3e50", "#f1c40f", "#e67e22", "#e74c3c", "#ecf0f1", "#95a5a6", "#f39c12", "#d35400", "#c0392b", "#bdc3c7", "#7f8c8d"
        ];
        
        var material = {
            "colors": [{
                    "color": "red",
                    "palette": [
                        "#FFEBEE",
                        "#FFCDD2",
                        "#EF9A9A",
                        "#E57373",
                        "#EF5350",
                        "#F44336",
                        "#E53935",
                        "#D32F2F",
                        "#C62828",
                        "#B71C1C",
                        "#FF8A80",
                        "#FF5252",
                        "#FF1744",
                        "#D50000",
                        "#000000"
                    ]
                },
                {
                    "color": "pink",
                    "palette": [
                        "#FCE4EC",
                        "#F8BBD0",
                        "#F48FB1",
                        "#F06292",
                        "#EC407A",
                        "#E91E63",
                        "#D81B60",
                        "#C2185B",
                        "#AD1457",
                        "#880E4F",
                        "#FF80AB",
                        "#FF4081",
                        "#F50057",
                        "#C51162",
                        "#000000"
                    ]
                },
                {
                    "color": "purple",
                    "palette": [
                        "#F3E5F5",
                        "#E1BEE7",
                        "#CE93D8",
                        "#BA68C8",
                        "#AB47BC",
                        "#9C27B0",
                        "#8E24AA",
                        "#7B1FA2",
                        "#6A1B9A",
                        "#4A148C",
                        "#EA80FC",
                        "#E040FB",
                        "#D500F9",
                        "#AA00FF",
                        "#000000"
                    ]
                },
                {
                    "color": "deeppurple",
                    "palette": [
                        "#EDE7F6",
                        "#D1C4E9",
                        "#B39DDB",
                        "#9575CD",
                        "#7E57C2",
                        "#673AB7",
                        "#5E35B1",
                        "#512DA8",
                        "#4527A0",
                        "#311B92",
                        "#B388FF",
                        "#7C4DFF",
                        "#651FFF",
                        "#6200EA",
                        "#000000"
                    ]
                },
                {
                    "color": "indigo",
                    "palette": [
                        "#E8EAF6",
                        "#C5CAE9",
                        "#9FA8DA",
                        "#7986CB",
                        "#5C6BC0",
                        "#3F51B5",
                        "#3949AB",
                        "#303F9F",
                        "#283593",
                        "#1A237E",
                        "#8C9EFF",
                        "#536DFE",
                        "#3D5AFE",
                        "#304FFE",
                        "#000000"
                    ]
                },
                {
                    "color": "blue",
                    "palette": [
                        "#E3F2FD",
                        "#BBDEFB",
                        "#90CAF9",
                        "#64B5F6",
                        "#42A5F5",
                        "#2196F3",
                        "#1E88E5",
                        "#1976D2",
                        "#1565C0",
                        "#0D47A1",
                        "#82B1FF",
                        "#448AFF",
                        "#2979FF",
                        "#2962FF",
                        "#000000"
                    ]
                },
                {
                    "color": "lightblue",
                    "palette": [
                        "#E1F5FE",
                        "#B3E5FC",
                        "#81D4FA",
                        "#4FC3F7",
                        "#29B6F6",
                        "#03A9F4",
                        "#039BE5",
                        "#0288D1",
                        "#0277BD",
                        "#01579B",
                        "#80D8FF",
                        "#40C4FF",
                        "#00B0FF",
                        "#0091EA",
                        "#000000"
                    ]
                },
                {
                    "color": "cyan",
                    "palette": [
                        "#E0F7FA",
                        "#B2EBF2",
                        "#80DEEA",
                        "#4DD0E1",
                        "#26C6DA",
                        "#00BCD4",
                        "#00ACC1",
                        "#0097A7",
                        "#00838F",
                        "#006064",
                        "#84FFFF",
                        "#18FFFF",
                        "#00E5FF",
                        "#00B8D4",
                        "#000000"
                    ]
                },
                {
                    "color": "teal",
                    "palette": [
                        "#E0F2F1",
                        "#B2DFDB",
                        "#80CBC4",
                        "#4DB6AC",
                        "#26A69A",
                        "#009688",
                        "#00897B",
                        "#00796B",
                        "#00695C",
                        "#004D40",
                        "#A7FFEB",
                        "#64FFDA",
                        "#1DE9B6",
                        "#00BFA5",
                        "#000000"
                    ]
                },
                {
                    "color": "green",
                    "palette": [
                        "#E8F5E9",
                        "#C8E6C9",
                        "#A5D6A7",
                        "#81C784",
                        "#66BB6A",
                        "#4CAF50",
                        "#43A047",
                        "#388E3C",
                        "#2E7D32",
                        "#1B5E20",
                        "#B9F6CA",
                        "#69F0AE",
                        "#00E676",
                        "#00C853",
                        "#000000"
                    ]
                },
                {
                    "color": "lightgreen",
                    "palette": [
                        "#F1F8E9",
                        "#DCEDC8",
                        "#C5E1A5",
                        "#AED581",
                        "#9CCC65",
                        "#8BC34A",
                        "#7CB342",
                        "#689F38",
                        "#558B2F",
                        "#33691E",
                        "#CCFF90",
                        "#B2FF59",
                        "#76FF03",
                        "#64DD17",
                        "#000000"
                    ]
                },
                {
                    "color": "lime",
                    "palette": [
                        "#F9FBE7",
                        "#F0F4C3",
                        "#E6EE9C",
                        "#DCE775",
                        "#D4E157",
                        "#CDDC39",
                        "#C0CA33",
                        "#AFB42B",
                        "#9E9D24",
                        "#827717",
                        "#F4FF81",
                        "#EEFF41",
                        "#C6FF00",
                        "#AEEA00",
                        "#000000"
                    ]
                },
                {
                    "color": "yellow",
                    "palette": [
                        "#FFFDE7",
                        "#FFF9C4",
                        "#FFF59D",
                        "#FFF176",
                        "#FFEE58",
                        "#FFEB3B",
                        "#FDD835",
                        "#FBC02D",
                        "#F9A825",
                        "#F57F17",
                        "#FFFF8D",
                        "#FFFF00",
                        "#FFEA00",
                        "#FFD600",
                        "#000000"
                    ]
                },
                {
                    "color": "amber",
                    "palette": [
                        "#FFF8E1",
                        "#FFECB3",
                        "#FFE082",
                        "#FFD54F",
                        "#FFCA28",
                        "#FFC107",
                        "#FFB300",
                        "#FFA000",
                        "#FF8F00",
                        "#FF6F00",
                        "#FFE57F",
                        "#FFD740",
                        "#FFC400",
                        "#FFAB00",
                        "#000000"
                    ]
                },
                {
                    "color": "orange",
                    "palette": [
                        "#FFF3E0",
                        "#FFE0B2",
                        "#FFCC80",
                        "#FFB74D",
                        "#FFA726",
                        "#FF9800",
                        "#FB8C00",
                        "#F57C00",
                        "#EF6C00",
                        "#E65100",
                        "#FFD180",
                        "#FFAB40",
                        "#FF9100",
                        "#FF6D00",
                        "#000000"
                    ]
                },
                {
                    "color": "deeporange",
                    "palette": [
                        "#FBE9E7",
                        "#FFCCBC",
                        "#FFAB91",
                        "#FF8A65",
                        "#FF7043",
                        "#FF5722",
                        "#F4511E",
                        "#E64A19",
                        "#D84315",
                        "#BF360C",
                        "#FF9E80",
                        "#FF6E40",
                        "#FF3D00",
                        "#DD2C00",
                        "#000000"
                    ]
                },
                {
                    "color": "brown",
                    "palette": [
                        "#EFEBE9",
                        "#D7CCC8",
                        "#BCAAA4",
                        "#A1887F",
                        "#8D6E63",
                        "#795548",
                        "#6D4C41",
                        "#5D4037",
                        "#4E342E",
                        "#3E2723",
                        "#000000"
                    ]
                },
                {
                    "color": "grey",
                    "palette": [
                        "#FAFAFA",
                        "#F5F5F5",
                        "#EEEEEE",
                        "#E0E0E0",
                        "#BDBDBD",
                        "#9E9E9E",
                        "#757575",
                        "#616161",
                        "#424242",
                        "#212121",
                        "#000000"
                    ]
                },
                {
                    "color": "bluegrey",
                    "palette": [
                        "#ECEFF1",
                        "#CFD8DC",
                        "#B0BEC5",
                        "#90A4AE",
                        "#78909C",
                        "#607D8B",
                        "#546E7A",
                        "#455A64",
                        "#37474F",
                        "#263238",
                        "#000000"
                    ]
                },
                {
                    "color": "black",
                    "palette": [
                        "#000000"
                    ]
                }
            ]
        };

        var that = $(this);

        // This is the default options.
        var settings = $.extend({
            // These are the defaults.
            container_size: {
                'width': '340px',
                'height': '240px'
            },
            color_size: {
                'width': '50px',
                'height': '50px'
            },

            onChange: ''

        }, options );

        var colors, pickerColors;
        var show_the_colors = '';

        function build_containers()
        {
            var html = [];

            html.push('<div class="csb-material-color-picker">');
            html.push(  '<div class="csb-material-color-picker-sources">');
            html.push(      '<a href="#materialpalette" data-own="material" class="csb-material-color-is_on">materialpalette</a>');
            html.push(      '<a href="#flatuicolors" data-own="flatuicolors">flatuicolors</a>');
            html.push(  '</div>');
            html.push(  '<div class="csb-material-color-picker-colors"></div>');
            html.push(  '<div class="csb-material-color-picker-picker-colors"></div>');
            html.push('</div>');

            that.html( html.join("\n") );

            container_resize();

            colors = that.find(".csb-material-color-picker-colors");
            pickerColors = that.find(".csb-material-color-picker-picker-colors");
        }

        function container_resize()
        {
            that.find(".csb-material-color-picker").css({
                'width': settings.container_size.width,
                'height': settings.container_size.height
            });
        }

        function fill_picker_colors(ref)
        {
            colors.empty();
            $.each(material.colors[ref].palette, function(i, hex_color){
                var color = $('<div class="csb-material-btn"></div>');
                colors.append(color);

                color.css({
                    'width': settings.color_size.width,
                    'height': settings.color_size.height
                });

                color.css('background', hex_color).data('color', hex_color);
                setTimeout(function(){
                    color.addClass('csb-material-animate');
                }, i * 10);
            });

            var allColors = that.find(".csb-material-btn");
            allColors.click(function(){
                var color_pick = $(this);

                if( !color_pick.hasClass('csb-material-back-btn') ){
                    var hex_color = color_pick.data('color');
                    if( typeof(settings.onChange) == 'function' ){
                        settings.onChange( hex_color );
                    }
                }
            });
            
            allColors.last().addClass('csb-material-back-btn').click(function(){
                fill_with_colors();
            });
        }

        function fill_with_colors()
        {
            colors.empty();
            var the_colors = material.colors;
            
            if( show_the_colors == 'flatuicolors' ){
                the_colors = flatuicolors;
            }

            $.each( the_colors, function( i, item ) {
                var color = $('<div class="csb-material-btn"></div>');
                colors.append(color);

                color.css({
                    'width': settings.color_size.width,
                    'height': settings.color_size.height
                });


                if( show_the_colors == 'flatuicolors' ){
                    color.data( 'color', item );
                    color.css('background', item);
                }else{
                    color.css('background', item.palette[i == 19 ? 0 : 5]);
                }
                setTimeout(function(){
                    color.addClass('csb-material-animate');
                }, i * 10);
            });

            var allColors = that.find(".csb-material-btn");

            if( show_the_colors == 'flatuicolors' ){
                allColors.click(function(){
                    if( typeof(settings.onChange) == 'function' ){
                        settings.onChange( $(this).data('color') );
                    }
                });
            }else{
                allColors.click(function(){
                    fill_picker_colors($(this).index());
                });
                allColors.last().remove();
            }
        }

        function get_selected_colors()
        {
            show_the_colors = that.find(".csb-material-color-is_on").data('own');
        }

        return that.each(function() {
            build_containers();
            get_selected_colors();
            fill_with_colors();

            that.on('click', ".csb-material-color-picker-sources a:not(.csb-material-color-is_on)", function(e){
                e.preventDefault();

                that.find(".csb-material-color-is_on").removeClass("csb-material-color-is_on");
                $(this).addClass('csb-material-color-is_on');
                get_selected_colors();
                fill_with_colors();
            });
        });

    };

}( jQuery ));