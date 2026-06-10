# MFA Business Intelligence - Prototipo Funcional v2.6

## Correcciones principales
1. La balanza se procesa por cuentas de detalle para evitar duplicar importes:
   - Nivel 1: Cuenta mayor
   - Nivel 2: Subcuenta
   - Nivel 3: Subcuenta auxiliar
   - El motor suma solo el último nivel disponible.

2. La carga principal ya no pide JSON.
   Ahora puedes cargar directamente el archivo Excel MFA con hojas:
   - BALANZA
   - DICCIONARIO MFA
   - BANCOS

## Cómo actualizar la información en la web
1. Entra al módulo **Carga de Datos**.
2. Selecciona tu archivo `.xlsx` o `.xlsm`.
3. El navegador procesa la información y actualiza el dashboard.

## Opción avanzada
También se puede cargar un archivo `data_mfa.json`, pero ya no es la ruta principal.
