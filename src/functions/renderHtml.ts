import {EmailStateType} from "../types/EmailStateType";

export default function renderHtml (blocks: EmailStateType, preHeader: string) {
    let html = '<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">\n' +
      '<html lang="ru">\n' +
      '<head>\n' +
      '  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">\n' +
      '  <meta http-equiv="X-UA-Compatible" content="IE=edge">\n' +
      '\n' +
      '  <title>ТНФ</title>\n' +
      '</head>\n' +
      '<body style="margin:0; padding:0; background-color:#F2F2F2; font-family: \'Arial\', sans-serif; min-width: 600px;">\n' +
      '<div style="max-height:0;overflow:hidden;font-family: Helvetica, Arial, sans-serif;">' + (preHeader ?? 'подробности внутри') + ' &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847; &#847;</div>\n' +
      '    <table width="100%" border="0" cellpadding="0" cellspacing="0" bgcolor="#F2F2F2">\n' +
      '        <tr>\n' +
      '            <td align="center" valign="top"><div style="width: 600px;">';
    for (const block of blocks) {
        switch (block.type) {
            case 'text':
				      html += `<${block.tag} style="color: ${block.color}; background-color: ${block.backgroundColor}; font-size: ${block.fontSize}px; line-height: ${block.lineHeight}px; text-align: ${block.textAlign}; padding: ${block.paddingTop}px ${block.paddingRight}px ${block.paddingBottom}px ${block.paddingLeft}px;margin: 0;">${block.text}</${block.tag}>`;
              break;
        }
    }

    html += '</div></td>\n' +
      '        </tr>\n' +
      '    </table>\n' +
      '</body>\n' +
      '</html>';
    const exportHtml =  new Blob([html], {type: 'text/html'});
    return URL.createObjectURL(exportHtml);
}
