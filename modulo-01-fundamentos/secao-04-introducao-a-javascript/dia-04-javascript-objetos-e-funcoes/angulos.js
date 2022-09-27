function triangleAnglesValidate(angleA, angleB, angleC) {
    let sumOfAngles = angleA + angleB + angleC;
    let allAnglesArePositives = angleA > 0 && angleB > 0 && angleC > 0;
  
    if (allAnglesArePositives) {
      if (sumOfAngles === 180) {
        return true;
      } else {
        return false;
      }
    } else {
      return 'Erro: ângulo inválido';
    }
  }