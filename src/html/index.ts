import "dotenv/config";

export function htmlBody(
     token: string,
     message: string,
     reset: boolean = false
) {
     let link = process.env.BASE_URL;

     if (reset === true) {
          link = process.env.BASE_RESET;
     }

     const email = `
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN">
<html xmlns="http://www.w3.org/1999/xhtml" lang="en">
     <head>
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
          <title>Confirm Account KenzieLover!</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     </head>
     <body style="margin: 0; padding: 0; ">
          <!-- HEADER -->
           <table bgcolor="#495057" align="center" border="0" cellpadding="0" cellspacing="0" width="600">
             
               <!-- MAIN BODY -->
               <tr>
                    <td bgcolor=" #495057" style="padding: 2em;">
                         <table border="0" cellpadding="0" cellspacing="0" width="100%">
                              <hr>
                              <tr>
                                   <td align="center" style=" font-weight: 600; color: #FFFFFF; font-family: Arial, sans-serif; font-size: 1.5em; padding-top: 2em;">
                                        Senha nova senha está abaixo
                                   </td>
                              </tr>
                              <tr>
                                   <td align="center" style="padding: 3em 0 1em;">
                                       <span style="background-color: #4529E6; border-radius: 4px; border: 0; padding: 1rem 2em;  font-family: Arial, sans-serif; font-size: 1.5rem; color: #FFFFFF ">
                                            ${token}
                                        </span>
                                   </td>
                              </tr>
                              <tr>
                              </tr>
                              <!-- RODAPE -->
                              <tr>

                                   <td align="bottom" bgcolor="#495057" style="padding: 2em 2em 0;">
                                        <hr>
                                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                             <tr>
                                                  <td style="color: #FFFFFF; font-family: Arial, sans-serif; font-size: 1rem;">
                                                       &reg; Motors shop 2023, velocidade e experiência em um lugar feito para você <br />
                                                  </td>
                                             </tr>


                                        </table>
                                   </td>
                              </tr>
                         </table>
     </body>
</html>`;

     return email;
}
