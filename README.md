# MFA Business Intelligence - Prototipo Funcional v2.5

## Qué incluye
- Interfaz web corporativa.
- Lectura automática de `data/data_mfa.json`.
- Carga manual de JSON desde el módulo **Carga de Datos**.
- Datos procesados desde `MFA MAYO BASE.xlsm`, anonimizados para visualización.

## Cómo actualizar información hoy
1. Genera un nuevo `data_mfa.json`.
2. Reemplaza `data/data_mfa.json`.
3. Haz redeploy en Vercel.

También puedes abrir la web y cargar un JSON desde **Carga de Datos** para probarlo en tu navegador.

## Próximo desarrollo
v2.6: procesar directamente Excel desde navegador o backend:
- Diccionario MFA
- Balanza
- Bancos
- Clientes / Proveedores
