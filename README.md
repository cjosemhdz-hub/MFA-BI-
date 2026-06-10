# MFA Business Intelligence - v2.8

## Cambios
- Carga de tres archivos separados:
  - Diccionario MFA
  - Balanza
  - Bancos
- Conserva opción avanzada de JSON.
- Bancos separa:
  - Movimientos en MXN
  - Saldo en USD
  - Tipo de cambio para conversión del saldo a MXN
- Mantiene regla de no duplicar importes por niveles de balanza.

## Nota técnica
Por ahora la conversión USD/MXN se usa como parámetro de lectura para saldo bancario.  
El flujo operativo se calcula con cargos y abonos en MXN.
