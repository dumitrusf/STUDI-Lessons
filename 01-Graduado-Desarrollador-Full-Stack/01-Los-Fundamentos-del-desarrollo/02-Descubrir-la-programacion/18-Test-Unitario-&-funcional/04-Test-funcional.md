# **Test Funcional**

<br>

## **_Objetivo_**

- **Aprender a redactar un test funcional**

---

---

<br>

<br>

---

## **Contexto**

---

<br>

**Los tests funcionales prueban directamente las funcionalidades de un programa "desde la perspectiva del usuario".**

****En lugar de:**

- **probar una función en el código fuente**

- **se prueba una característica del programa.**

---

<br>

**Por ejemplo, se verifica que el proceso de registro funcione correctamente en un sitio web.**

**Este enfoque de pruebas:**

- **está menos centrado en la técnica que las pruebas unitarias**

    y
    
- **se enfoca más en la experiencia del usuario**

---

<br>

```
El propósito aquí es asegurarse de que no se introduzcan retrocesos en el funcionamiento de nuestro software.
```

<br>

---

### **Recordatorio: Test Funcional**

---

<br>

El propósito de un test funcional es verificar el correcto funcionamiento de una funcionalidad completa.

La prueba se realiza en una caja negra, lo que significa que las operaciones intermedias realizadas por la funcionalidad se ignoran.

A diferencia de las pruebas unitarias, que examinan el flujo de una componente, las pruebas funcionales analizan el comportamiento de un programa en su conjunto.

Por lo tanto, es una prueba más integral que no será tan exhaustiva como la prueba unitaria.

<br>

---

---

<br>

<br>

---

### **Cómo Realizar Pruebas Funcionales**

---

<br>

**Para llevar a cabo pruebas funcionales, hay dos etapas:**

**El funcionamiento normal y el funcionamiento en situaciones anormales.**

---

<br>

- **Funcionamiento Normal**

    - La etapa de funcionamiento normal asegura que la funcionalidad se comporte correctamente en términos generales, sin intentar cubrir todos los posibles casos (ya que la combinación de casos suele ser muy extensa).

    ---

    <br>    

- **Funcionamiento en Situaciones Anormales**

    - La etapa de funcionamiento en situaciones anormales prueba escenarios anómalos que podrían causar un fallo en el programa.

---    

<br>    

**En resumen, las pruebas funcionales se centran en verificar que la funcionalidad general del programa sea la adecuada tanto en:**

- **condiciones normales**

- **como en situaciones inusuales que podrían provocar problemas**

<br>

---

---

<br>

<br>

---

## **Programa Resistente a Incidentes** 

---

<br>

**Un programa que NO SE BLOQUEA "durante las pruebas de funcionamiento en situaciones anormales" se considerará como:**

- un programa resistente a incidentes.

---

<br>

**A veces, también se utiliza una terminología en inglés con una connotación negativa:**

- `"idiot-proof program"` **(programa a prueba de idiotas):**

    - haciendo referencia a la supuesta simplicidad de las entradas probadas.

<br>

---

---

<br>

<br>

---

## **Atención!: Ley de Murphy**

---

<br>

**Según la Ley de Murphy, todo lo que pueda salir mal, saldrá mal.**

**Esta ley también se aplica en la programación debido a que los usuarios a veces cometen errores en el uso de una aplicación.**

**Esta exploración a menudo implica un uso completamente ilógico de la funcionalidad.**

**Por lo tanto, probar casos de escenarios ridículos ayudará a prevenir este tipo de errores, que a veces pueden ser utilizados para atacar una aplicación.**

<br>

---

**Por ejemplo:**

- un usuario podría ingresar **"-18"** en el campo "Edad" **para ver si el programa falla** debido a una edad `inferior a 0`.

La Ley de Murphy sugiere que en el desarrollo de software, **debemos considerar incluso las situaciones más improbables y absurdas,** ya que a menudo **son** precisamente **esas situaciones las que pueden causar problemas** inesperados.

<br>

---

### **Ejemplo:**

---

<br>

**En este ejemplo, se presenta una prueba funcional simplificada para la funcionalidad de transferencia de dinero en una aplicación bancaria.**

**Se realizan dos casos de prueba:**

- Transferir con saldo suficiente.

- Intentar transferir sin saldo suficiente.

---

<br>

**El propósito de esta prueba funcional es validar que la transferencia falle cuando el saldo no es suficiente.**

<br>

---

**JavaScript: Prueba Funcional de Transferencia de Dinero**

```javascript
function checkAccount(account, amount) {
  if (account.balance >= amount) {
    return true;
  }
  return false;
}

function transfer(srcAccount, tgtAccount, amount) {
  const newSrcAccount = { ...srcAccount };
  const newTgtAccount = { ...tgtAccount };

  if (checkAccount(newSrcAccount, amount)) {
    newSrcAccount.balance -= amount;
    newTgtAccount.balance += amount;
    console.log('Transfert réussi');
  } else {
    console.log('Echec du transfert');
  }

  return [newSrcAccount, newTgtAccount];
}

function testTransfer() {
  let srcAcc = { owner: 'Jean Dupont', balance: 100 };
  let tgtAcc = { owner: 'Anne Martin', balance: 20 };

  let transferRes = transfer(srcAcc, tgtAcc, 60);
  srcAcc = transferRes[0];
  tgtAcc = transferRes[1];

  if (srcAcc.balance !== 40 || tgtAcc.balance !== 80) {
    console.log('Test transfer échoué lors du premier transfert.');
    return false;
  }

  transferRes = transfer(srcAcc, tgtAcc, 60);
  srcAcc = transferRes[0];
  tgtAcc = transferRes[1];

  if (srcAcc.balance !== 40 || tgtAcc.balance !== 80) {
    console.log('Test transfer échoué lors du second transfert.');
    return false;
  }

  console.log('Test réussi');
  return true;
}

testTransfer();
```

---

<br>

**Python: Prueba Funcional de Transferencia de Dinero**

```python
def check_account(account, amount):
    if account["balance"] >= amount:
        return True
    else:
        return False

def transfer(src_account, tgt_account, amount):
    new_src_account = src_account.copy()
    new_tgt_account = tgt_account.copy()

    if check_account(new_src_account, amount):
        new_src_account["balance"] -= amount
        new_tgt_account["balance"] += amount
        print("Transfert réussi")
    else:
        print("Echec du transfert")

    return new_src_account, new_tgt_account

def test_transfer():
    src_acc = {"owner": "Jean Dupont", "balance": 100}
    tgt_acc = {"owner": "Anne Martin", "balance": 20}

    src_acc, tgt_acc = transfer(src_acc, tgt_acc, 60)

    if src_acc["balance"] != 40 or tgt_acc["balance"] != 80:
        print("Test transfer échoué lors du premier transfert.")
        return False

    src_acc, tgt_acc = transfer(src_acc, tgt_acc, 60)

    if src_acc["balance"] != 40 or tgt_acc["balance"] != 80:
        print("Test transfer échoué lors du deuxième transfert.")
        return False

    print("Test réussi")
    return True

test_transfer()
```

---

Estos ejemplos ilustran cómo realizar pruebas funcionales para verificar el comportamiento de una funcionalidad de transferencia de dinero en una aplicación bancaria.

Se realizan pruebas tanto en situaciones exitosas como en situaciones donde el saldo es insuficiente para la transferencia.

<br>

---

---

<br>

<br>

---

### **Recordatorio: Pruebas de Entrada/Salida**

---

<br>

**Probar las entradas/salidas de un programa es frecuentemente una tarea compleja:**

- Estas pruebas son simplificadas mediante el uso de frameworks de pruebas.

- Los desarrolladores utilizan "mocks" (simulaciones), que imitan las respuestas de bases de datos o servidores.

<br>

---

---

<br>

<br>

---

### **Complemento: test de Integración**

---

<br>

Una prueba de integración verifica que la comunicación entre varias funciones se realice según lo previsto.

Controla la composición de funciones.

<br>

---

---

<br>

<br>

---

## **A recordar**

---

<br>

- **Los tests funcionales son pruebas exhaustivas que evalúan el comportamiento de una funcionalidad.**

- **Es esencial probar tanto con valores correctos como con valores deliberadamente incorrectos para garantizar que las funcionalidades sean resistentes a usos inesperados.**

- **Al desarrollar pruebas para proyectos de gran escala, es necesario utilizar un framework de pruebas.**

<br>

---

---