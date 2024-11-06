# Generador de Contraseñas Seguras

Este proyecto es una aplicación de React + Vite en TypeScript que permite a los usuarios generar contraseñas seguras en función de los criterios seleccionados, como longitud, inclusión de mayúsculas, números y símbolos especiales. La contraseña generada se muestra en tiempo real y puede copiarse al portapapeles.

## Funcionalidades
- Selección de longitud de la contraseña.
- Inclusión opcional de letras mayúsculas, minusculas, números y símbolos.
- Visualización de mensajes de advertencia si la contraseña no cumple ciertos criterios.
- Posibilidad de copiar la contraseña generada al portapapeles.

---

## Habilidades Implementadas

### 1. Escribir tu primer componente de React

**Descripción**: Crear un componente llamado `ContraseñaGenerada` que se encargue de mostrar la contraseña generada.

**Código**:
```typescript
import React from "react";

interface PasswordDisplayProps {
  password: string;
  onCopy: () => void;
}

const PasswordDisplay: React.FC<PasswordDisplayProps> = ({ password, onCopy }) => {
  return (
    <div className="result">
      <div className="result__viewbox">{password}</div>
      <button onClick={onCopy}>Copiar</button>
    </div>
  );
};

export default PasswordDisplay;

```
### Explicación

- **¿Qué?:** Este código define el componente `PasswordDisplay`, que se encarga de mostrar la contraseña generada y de permitir su copia al portapapeles.

- **¿Cómo?:** El componente recibe dos props: `password` (la contraseña generada) y `onCopy` (una función que se ejecuta al hacer clic en el botón de copiar).

- **¿Por qué?:** Este enfoque organiza el código, separando las responsabilidades de cada componente. Esto facilita su mantenimiento y reutilización.

---

### 2. Crear archivos con múltiples componentes

**Descripción**: Crear componentes para los controles de generación (longitud, criterios) y la contraseña resultante.

*Este requisito implica crear varios archivos de componentes que se encarguen de controlar los diferentes aspectos de la generación de contraseñas.*


**Código**:
```typescript
<LengthSlider length={length} onChange={handleLengthChange} />
<Checkbox label="Incluir Mayúsculas" checked={includeUppercase} onChange={setIncludeUppercase} />
```
### Explicación

- **¿Qué?:**  El código organiza la lógica de la generación de contraseñas en componentes pequeños, como LengthSlider para controlar la longitud y Checkbox para manejar los criterios de inclusión de mayúsculas, minúsculas, números y símbolos.

- **¿Cómo?:** Cada uno de estos componentes se importa y se utiliza dentro del componente principal PasswordGenerator, pasándoles los valores necesarios a través de props.

- **¿Por qué?:** La separación en componentes pequeños mejora la organización del código, facilita la reutilización y permite que cada parte de la interfaz tenga una responsabilidad clara.
---
### 3. Añadir marcado a JavaScript con JSX

**Descripción**: Usar JSX para crear el formulario de selección de criterios y mostrar la contraseña.

*En este paso se utiliza JSX para crear la interfaz de usuario que permite seleccionar los criterios de la contraseña.*

**Código**:
```typescript
<div>
  <LengthSlider length={length} onChange={handleLengthChange} />
  <Checkbox label="Incluir Minúsculas" checked={includeLowercase} onChange={setIncludeLowercase} />
  <PasswordDisplay password={password} onCopy={copyToClipboard} />
</div>

```
### Explicación

- **¿Qué?:**  En este fragmento de código se usan etiquetas JSX para estructurar la interfaz de usuario, combinando elementos HTML con la lógica de React.
- **¿Cómo?:**  JSX se utiliza para representar los controles y la visualización de la contraseña generada. Este código se renderiza dentro de los componentes React.

- **¿Por qué?:** JSX facilita la escritura de componentes visuales dentro de la lógica de JavaScript, lo que hace que el código sea más legible y expresivo.
---
### 4. Añadir llaves con JSX

**Descripción**: Usar llaves para manejar los criterios seleccionados en los controles del generador.

*Se debe utilizar llaves en JSX para insertar valores dinámicos, como los criterios seleccionados por el usuario.*

**Código**:
```typescript
<label>{length}</label>

```
### Explicación

- **¿Qué?:**  Las llaves en JSX permiten insertar dinámicamente valores de JavaScript, como el valor de la longitud de la contraseña o los criterios seleccionados.

- **¿Cómo?:** Se emplean dentro de las etiquetas JSX para renderizar valores que cambian con el estado del componente.
- **¿Por qué?:** Las llaves permiten que los valores se actualicen en tiempo real, reflejando las interacciones del usuario en la interfaz.
---
### 5. Configurar componentes con props

**Descripción**: Pasar la información de los criterios de generación como props a los componentes.

*En este paso se configura el paso de información entre los componentes mediante `props`.*

**Código**:
```typescript
<LengthSlider length={length} onChange={handleLengthChange} />
<Checkbox label="Incluir Mayúsculas" checked={includeUppercase} onChange={setIncludeUppercase} />

```
### Explicación

- **¿Qué?:**  Los props son utilizados para pasar valores entre componentes. En este caso, el valor de la longitud de la contraseña y los criterios de inclusión se pasan a los componentes hijos.

- **¿Cómo?:** Al renderizar un componente hijo, se le pasan las props necesarias, que permiten modificar su comportamiento o la información que muestra.

- **¿Por qué?:** Usar props facilita la comunicación entre componentes y permite una mayor modularización del código.

---
### 6. Renderizar condicionalmente

**Descripción**: Mostrar advertencias o cambios de color si la contraseña generada no cumple con ciertos criterios (por ejemplo, longitud mínima).

*Este requisito implica mostrar advertencias si la contraseña generada no cumple con los criterios establecidos.*

**Código**:
```typescript
{password === "error_too_short" && <div>La contraseña es demasiado corta.</div>}

```
### Explicación

- **¿Qué?:**  Se utiliza la renderización condicional para mostrar mensajes de advertencia si la contraseña no cumple con los requisitos.

- **¿Cómo?:** Se emplea una condición para verificar si la contraseña es demasiado corta y se renderiza un mensaje de error si la condición es verdadera.

- **¿Por qué?:** La renderización condicional mejora la experiencia del usuario, mostrando mensajes claros cuando los criterios no se cumplen.
---
### 7. Renderizar múltiples componentes a la vez:

**Descripción**: Renderizar los controles de longitud, inclusión de caracteres especiales, mayúsculas, etc.

*Se deben renderizar todos los controles de generación de contraseñas de forma simultánea.*

**Código**:
```typescript
<LengthSlider length={length} onChange={handleLengthChange} />
<Checkbox label="Incluir Números" checked={includeNumber} onChange={setIncludeNumber} />

```
### Explicación

- **¿Qué?:**  Este fragmento de código renderiza los controles necesarios para personalizar la contraseña.

- **¿Cómo?:** Los controles son renderizados en un contenedor que permite al usuario interactuar con ellos para definir los criterios de la contraseña.

- **¿Por qué?:** Renderizar todos los controles de forma agrupada facilita la interacción del usuario, permitiendo un flujo de trabajo claro y eficiente.

---
### 8. Mantener componentes puros

**Descripción**: Asegurar que los componentes de control no alteren directamente el estado, sino que lo reciban a través de props.

*Se debe garantizar que los componentes sean "puros", es decir, que no alteren directamente el estado, sino que lo gestionen a través de props.*

**Código**:
```typescript
<Checkbox checked={includeLowercase} onChange={setIncludeLowercase} />

```
### Explicación

- **¿Qué?:**  Este componente Checkbox recibe el valor del estado a través de props y ejecuta una función cuando el usuario interactúa con él.

- **¿Cómo?:** El componente no modifica el estado directamente. En su lugar, ejecuta la función onChange para que el componente padre maneje el estado.

- **¿Por qué?:**  Mantener los componentes puros mejora la previsibilidad del flujo de datos y facilita la depuración y el mantenimiento del código.
---
### 9. Entender la UI como árboles

**Descripción**: Organizar los controles y la contraseña generada como una estructura jerárquica.

*React organiza los componentes como un árbol jerárquico.*

**Código**:
```typescript
<PasswordGenerator>
  <LengthSlider />
  <Checkbox />
  <PasswordDisplay />
</PasswordGenerator>
```
### Explicación

- **¿Qué?:** La estructura de los componentes en React forma un árbol, donde el componente principal `PasswordGenerator` contiene otros componentes como `LengthSlider` y `PasswordDisplay`.

- **¿Cómo?:** Los componentes hijos se anidan dentro de los componentes padres, creando una jerarquía de UI que facilita la organización.

- **¿Por qué?:** Este enfoque mejora la modularidad y facilita la gestión del estado y los eventos entre los componentes.
---
### 10. Controlar eventos del usuario

**Descripción**: Capturar la interacción del usuario para generar la contraseña en función de los criterios seleccionados.

*Este requisito consiste en escuchar las interacciones del usuario, como los cambios de longitud o la selección de opciones, y reaccionar a ellas para actualizar la contraseña generada.*

**Código**:
```typescript
<button onClick={updatePassword}>Generar Contraseña</button>
```
### Explicación

- **¿Qué?:**  Este código captura los eventos de interacción del usuario, como el clic en el botón para generar la contraseña, y ejecuta la función updatePassword.

- **¿Cómo?:** Usando el evento onClick del botón, se ejecuta la función updatePassword, que actualizará la contraseña generada según los criterios seleccionados.
- **¿Por qué?:** Los eventos permiten que la aplicación responda a las acciones del usuario de manera dinámica y actualice la interfaz de usuario en consecuencia.
---

### 11. Gestionar el estado

**Descripción**: Controlar el estado de los criterios seleccionados y la contraseña generada.

*El estado se utiliza para almacenar y manejar la información de la aplicación, como los criterios de generación de la contraseña y la contraseña generada.*

**Código**:
```typescript
const [password, setPassword] = useState("");
const [length, setLength] = useState(16);
```
### Explicación

- **¿Qué?:**  En este código, se usan los hooks useState para manejar el estado de la contraseña (password) y de la longitud (length) de la contraseña generada.

- **¿Cómo?:** Cada vez que el usuario selecciona un criterio o ajusta la longitud, el estado se actualiza automáticamente, lo que provoca la re-renderización del componente con la nueva información.
- **¿Por qué?:** El uso del estado permite que la aplicación sea interactiva y dinámica, ya que los valores del estado se actualizan automáticamente cuando cambian los criterios, y la interfaz se ajusta en consecuencia.
---
### 12. Levantar el estado

**Descripción**: Compartir el estado entre los componentes de control y la visualización de la contraseña.

*"Levantar el estado" significa mover el estado a un componente común (como el componente principal) para compartirlo con otros componentes hijos.*

**Código**:
```typescript
<PasswordGenerator>
  <PasswordDisplay password={password} />
</PasswordGenerator>
```
### Explicación

- **¿Qué?:**  En lugar de mantener el estado de la contraseña en el componente hijo `(PasswordDisplay)`, el estado se eleva al componente padre `(PasswordGenerator)`, que lo pasa como `prop` a los componentes hijos.

- **¿Cómo?:** Al elevar el estado, el componente principal `(PasswordGenerator)` puede manejar los cambios de estado y distribuir esta información a otros componentes mediante `props`.
- **¿Por qué?:** Este enfoque permite que todos los componentes tengan acceso al mismo estado y se actualicen en consecuencia, mejorando la gestión del flujo de datos entre los componentes.
---
### 13. Acceder a valores del DOM

**Descripción**: Usar useRef para copiar la contraseña generada al portapapeles con un botón

*`useRef` se utiliza para acceder a elementos del DOM directamente sin que esto provoque una nueva renderización del componente.*

**Código**:
```typescript
const copyButtonRef = useRef(null);
const copyToClipboard = () => {
  navigator.clipboard.writeText(password);
};
```
### Explicación

- **¿Qué?:**  `useRef` se utiliza para crear una referencia a un elemento del DOM (el botón de copiar). Al hacer clic en el botón, la contraseña generada se copia al portapapeles.

- **¿Cómo?:** `useRef` permite acceder directamente al botón sin que se realicen nuevas renderizaciones, y la función `copyToClipboard` usa `navigator.clipboard.writeText()` para copiar la contraseña.

- **¿Por qué?:** `useRef` es eficiente porque no provoca una nueva renderización del componente cada vez que se accede al DOM, lo que mejora el rendimiento.

---
### 14.  Efectos opcionales

**Descripción**: Usar `useEffect` para mostrar notificaciones o realizar acciones adicionales cuando la contraseña es copiada al portapapeles.

*`useEffect` es un hook que permite ejecutar efectos secundarios en los componentes, como mostrar notificaciones después de que se realice una acción.*

**Código**:
```typescript
useEffect(() => {
  if (password) {
    toast.success("Contraseña copiada al portapapeles");
  }
}, [password]);
```
### Explicación

- **¿Qué?:**  En este código, `useEffect` se utiliza para mostrar una notificación de éxito cada vez que se actualiza la contraseña.

- **¿Cómo?:** Cada vez que la contraseña cambie (cuando el estado password se actualice), `useEffect` se ejecutará, mostrando una notificación con `toast.success`.

- **¿Por qué?:** `useEffect` ayuda a gestionar los efectos secundarios de manera eficiente, controlando el ciclo de vida de los componentes y evitando la duplicación de código para ejecutar acciones como las notificaciones.

---