import React from 'react';
import { FileText, Mail, MapPin } from 'lucide-react';

const TermsConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-purple-700 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <FileText className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-4xl font-bold mb-4">Términos y Condiciones</h1>
          <p className="text-xl">Los valores surgen de nuestro enfoque en el bienestar del cliente</p>
          <div className="flex justify-center space-x-8 mt-6 text-sm">
            <span>Ética</span>
            <span>Responsabilidad</span>
            <span>Respeto</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-bold text-purple-700 mb-6">Términos de Servicio DonHoster</h2>
          
          <p className="mb-8 text-gray-700">
            Este documento expresa los términos de servicio a los cuales todos los clientes que adquieren un producto de nuestra empresa DonHoster aceptan completamente, y bajo los cuales se rige para brindar su servicio. Por lo tanto, todos los productos o servicios presentes o futuros se regulan bajo esta reglamentación, que a su vez puede ser modificada en cualquier momento con previo aviso o no, y el usuario acepta dichos cambios.
          </p>

          <div className="space-y-8">
            <section>
              <h3 className="text-2xl font-bold text-purple-700 mb-6">RESPONSABILIDADES DE LA EMPRESA</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-purple-700 mb-4">1. Notificaciones</h4>
                  <p className="text-gray-700">
                    La empresa se compromete a enviar notificaciones, promociones, recordatorios de pago y/o promociones, a través de tickets o correo electrónico. Cabe señalar que en el caso de recordatorios de pago, a pesar de que la empresa se compromete a notificarlos, es deber del cliente estar al tanto de sus fechas de vencimiento y/o renovación de servicios. Por esta razón, es de suma importancia que el cliente se comprometa a suministrar sus datos de contacto, actuales y actualizados, para que de esta manera puedan recibir efectivamente nuestros avisos, a su vez notificarnos si cambian por cualquier motivo, quedando exentos la empresa de responsabilidad, si un correo electrónico no llega a su destino, por las razones mencionadas anteriormente.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-purple-700 mb-4">2. Soporte Técnico</h4>
                  <p className="text-gray-700">
                    La empresa se compromete a brindar soporte técnico exclusivamente por ticket o correo electrónico, solo para problemas relacionados con hardware y conectividad del servidor, pero no soporte vinculado al Software, entendiendo que el cliente es el único administrador de su producto, su seguridad, operatividad y la presencia de respaldo de su contenido. No brindamos soporte técnico vía telefónica, ni a través de REDES SOCIALES.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-purple-700 mb-4">3. Garantía</h4>
                  <p className="text-gray-700">
                    No podemos proporcionar una garantía de que el servicio ofrecido pueda no ser interrumpido o libre de errores, que la información disponible de nuestros productos esté libre de virus, entendiéndose que el cliente conoce de antemano todos los peligros inherentes al uso de las tecnologías, y las vulnerabilidades que tienen. El cliente acepta y es consciente de que toda información colocada en nuestros servidores podría estar disponible para cualquier usuario de internet, y que no tienen responsabilidad con nosotros, es decir, no somos responsables por la pérdida de su información.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-purple-700 mb-4">4. Precios</h4>
                  <p className="text-gray-700">
                    La empresa está completamente libre de modificar el precio de sus productos en cualquier momento que desee, ya sea el valor para adquirir un nuevo servicio o, para su renovación; con o sin previo aviso a sus clientes.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h3 className="text-2xl font-bold text-purple-700 mb-6">RESPONSABILIDADES DEL CLIENTE</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-purple-700 mb-4">1. Uso de Nuestros Productos</h4>
                  <p className="text-gray-700">
                    El cliente se compromete a usar nuestros productos, solo para propósitos legales, es decir, cualquier conducta ilícita o que la empresa considere impropia, de acuerdo con lo dispuesto por las normas internacionales está estrictamente prohibida, y la empresa está en todo su derecho de analizar y tomar decisiones o sanciones dependiendo de la situación, llegando incluso hasta la terminación temporal o total del contrato de servicio. El cliente acepta que es completamente responsable, y exime a nuestra empresa, por cualquier contenido en los productos adquiridos por él, el uso que se haga del mismo, y las sanciones legales internacionales que estos puedan incurrir.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-purple-700 mb-4">2. Infracciones</h4>
                  <p className="text-gray-700">
                    El cliente se compromete a tener una conducta respetuosa hacia nuestra empresa y sus empleados; considerando que cualquier acción en pro de deteriorar nuestra imagen, maltratar, amenazar u ofender, será motivo suficiente para la terminación inmediata de todos los servicios prestados por nuestra empresa. Asimismo, el cliente se compromete a no ejecutar ninguna acción voluntaria o involuntaria que perjudique cualquiera de nuestros servidores, afectando el libre funcionamiento del mismo para otros clientes.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-purple-700 mb-4">3. Suspensión del Producto</h4>
                  <p className="text-gray-700">
                    El cliente entiende que la no cancelación del valor del producto antes de la fecha de vencimiento es motivo suficiente para su suspensión, dejando nuestra empresa un período de 72 horas para que el cliente se comunique con nuestra empresa, antes de que se elimine toda su información en el producto. Si el cliente desea cancelar su producto, o no continuar renovándolo, debe notificarlo a través de una solicitud de cancelación, con su respectiva justificación.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-purple-700 mb-4">4. Adquisición de Dominios</h4>
                  <p className="text-gray-700">
                    El cliente entiende que la disponibilidad de un nombre de dominio no está controlada por nuestra empresa, por lo que es responsabilidad del cliente esperar hasta que se haga una confirmación de registro. Asimismo, este no podrá ser modificado hasta completar el contrato, por lo que cualquier error en su transcripción o cambio de opinión por parte del cliente será de su responsabilidad; por lo que si desea cambiar el nombre de su dominio, deberá registrar y adquirir uno nuevo, que esté disponible.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-purple-700 mb-4">5. Renovaciones</h4>
                  <p className="text-gray-700">
                    Es del conocimiento del cliente que los dominios vencidos, que fueron renovados tardíamente, tendrán un límite de hasta 10 días, los cuales tomarán entre 24 y 48 horas para reactivarse debido a la propagación requerida, y que pueden no estar disponibles, entendiendo que dicho período de tiempo no está controlado por nosotros.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-purple-700 mb-4">6. Limitaciones del Servicio de Dominios</h4>
                  <p className="text-gray-700">
                    Es conocimiento del cliente que el registro así como el uso de un dominio puede ser cancelado, suspendido, limitado o transferido, si nuestra empresa, el proveedor de dominios o incluso si ICANN, el gobierno o cualquier otra entidad relevante, así lo considere, ya sea por motivos de resolución de disputas, protección de su seguridad, reclamos por infracción de propiedad intelectual, entre otros.
                  </p>
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-purple-700 mb-4">7. Identificación del Usuario</h4>
                  <p className="text-gray-700">
                    El cliente asegura ser una persona legalmente responsable, ser mayor de 18 años o contar con la autorización de su representante, siendo este último el responsable legal del uso dado a este producto y la información subida allí. Por otra parte, también asegura que la información que nos proporciona, correo electrónico, nombre, número telefónico u otros datos que sean necesarios, es verdadera y que la mantendrá actualizada. Finalmente, el cliente a través de este documento acepta también las políticas de tratamiento de sus datos, así como la publicación de información en la base de datos WHOIS y su uso por parte de la empresa, proveedores de servicios o entidades gubernamentales que lo requieran, Políticas de Privacidad.
                  </p>
                </div>
              </div>
            </section>
          </div>

          <div className="mt-12 p-6 bg-purple-50 rounded-lg">
            <h3 className="text-lg font-semibold text-purple-700 mb-4">Contacto</h3>
            <p className="text-gray-700 mb-4">
              Si tienes alguna pregunta sobre estos términos y condiciones, no dudes en contactarnos.
            </p>
            <div className="flex items-center space-x-4">
              <Mail className="w-5 h-5 text-purple-600" />
              <span className="text-purple-700 font-medium">admin@donhoster.com</span>
            </div>
            <div className="flex items-center space-x-4 mt-2">
              <MapPin className="w-5 h-5 text-purple-600" />
              <span className="text-purple-700 font-medium">Miami, USA</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;