
function layer(context, selectedLayer) {

   var colorR;
   var colorG;
   var colorB;
   var colorA;
   var colorRgba;
   var cssCode;
   var backroudColorRgbaCode;
   var colorType1;
   var colorType2;
   colorType1 = 'background-color: rgba(';
   colorType2 = 'color: rgba(';

   if( selectedLayer.type == "shape" ) {

           colorR = selectedLayer.fills[0].color.r;
           colorG = selectedLayer.fills[0].color.g;
           colorB = selectedLayer.fills[0].color.b;
           colorA = Math.round(selectedLayer.opacity.toFixed(1) * 100) / 100;

           colorRgba = colorR+", "+colorG+", "+colorB+", "+colorA;
           backroudColorRgbaCode = colorType1 + colorRgba+');\n'+colorType2 + colorRgba+');\n';

   }else if(selectedLayer.type == "text") {
 
          colorR = selectedLayer.textStyles[0].textStyle.color.r;
          colorG = selectedLayer.textStyles[0].textStyle.color.g;
          colorB = selectedLayer.textStyles[0].textStyle.color.b;
          colorA = Math.round(selectedLayer.opacity.toFixed(1) * 100) / 100;

          colorRgba = colorR+", "+colorG+", "+colorB+", "+colorA;
          backroudColorRgbaCode = colorType2 + colorRgba+');';
   
   }

   cssCode = backroudColorRgbaCode;

    return {
        code: cssCode,
        language: "css"
    };
     
}

function dump(v, s) {
    s = s || 1;
    var t = '';
    switch (typeof v) {
      case "object":
        t += "\n";
        for (var i in v) {
          t += Array(s).join(" ")+i+": ";
          t += dump(v[i], s+3);
        }
        break;
      default: //number, string, boolean, null, undefined 
        t += v+" ("+typeof v+")\n";
        break;
    }
    return t;
  }
function screen(context, selectedVersion, selectedScreen) {

}

function component(context, selectedVersion, selectedComponent) {

}

function colors(context, exportColors) {

}




function textStyles(context) {




}

function spacing(context) {

}

function exportColors(context) {

}

function exportTextStyles(context) {

}

function exportSpacing(context) {

}

/**
 * The following functions will be deprecated. Your extensions can export them to support old versions of Zeplin's macOS app.
 * See Zeplin Extensions migration guide for details:
 * https://zpl.io/shared-styleguides-extensions-migration-guide
 */

function styleguideColors(context, colors) {

}

function styleguideTextStyles(context, textStyles) {

}

function exportStyleguideColors(context, colors) {

}

function exportStyleguideTextStyles(context, textStyles) {

}

function comment(context, text) {

}

export default {
    layer
};
