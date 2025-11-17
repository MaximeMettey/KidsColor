/**
 * Implémentation de l'algorithme de flood fill (remplissage par diffusion)
 * Utilisé pour l'outil pot de peinture
 */

/**
 * Compare deux couleurs avec une tolérance
 * @param {number} r1, g1, b1, a1 - Composantes RGBA de la couleur 1
 * @param {number} r2, g2, b2, a2 - Composantes RGBA de la couleur 2
 * @param {number} tolerance - Tolérance (0-255)
 * @returns {boolean} - true si les couleurs sont similaires
 */
function colorsMatch(r1, g1, b1, a1, r2, g2, b2, a2, tolerance = 0) {
  return (
    Math.abs(r1 - r2) <= tolerance &&
    Math.abs(g1 - g2) <= tolerance &&
    Math.abs(b1 - b2) <= tolerance &&
    Math.abs(a1 - a2) <= tolerance
  );
}

/**
 * Obtient l'index dans le tableau de pixels pour une position (x, y)
 */
function getPixelIndex(x, y, width) {
  return (y * width + x) * 4;
}

/**
 * Applique le flood fill sur un ImageData
 * @param {Uint8Array} pixels - Tableau de pixels (format RGBA)
 * @param {number} width - Largeur de l'image
 * @param {number} height - Hauteur de l'image
 * @param {number} startX - Position X de départ
 * @param {number} startY - Position Y de départ
 * @param {Object} fillColor - Couleur de remplissage {r, g, b, a}
 * @param {number} tolerance - Tolérance de couleur (0-255)
 * @returns {Uint8Array} - Nouveau tableau de pixels modifié
 */
export function floodFill(pixels, width, height, startX, startY, fillColor, tolerance = 1) {
  // Créer une copie du tableau de pixels
  const result = new Uint8Array(pixels);

  // Vérifier les limites
  if (startX < 0 || startX >= width || startY < 0 || startY >= height) {
    return result;
  }

  // Obtenir la couleur du pixel de départ
  const startIndex = getPixelIndex(startX, startY, width);
  const targetR = pixels[startIndex];
  const targetG = pixels[startIndex + 1];
  const targetB = pixels[startIndex + 2];
  const targetA = pixels[startIndex + 3];

  // Si la couleur cible est la même que la couleur de remplissage, ne rien faire
  if (
    colorsMatch(
      targetR, targetG, targetB, targetA,
      fillColor.r, fillColor.g, fillColor.b, fillColor.a,
      0
    )
  ) {
    return result;
  }

  // Utiliser une file (queue) pour l'algorithme de flood fill itératif
  const queue = [[startX, startY]];
  const visited = new Set();

  while (queue.length > 0) {
    const [x, y] = queue.shift();

    // Créer une clé unique pour ce pixel
    const key = `${x},${y}`;

    // Si déjà visité, passer
    if (visited.has(key)) continue;
    visited.add(key);

    // Vérifier les limites
    if (x < 0 || x >= width || y < 0 || y >= height) continue;

    // Obtenir l'index du pixel
    const index = getPixelIndex(x, y, width);

    // Vérifier si la couleur correspond
    if (!colorsMatch(
      result[index], result[index + 1], result[index + 2], result[index + 3],
      targetR, targetG, targetB, targetA,
      tolerance
    )) {
      continue;
    }

    // Remplir le pixel avec la nouvelle couleur
    result[index] = fillColor.r;
    result[index + 1] = fillColor.g;
    result[index + 2] = fillColor.b;
    result[index + 3] = fillColor.a;

    // Ajouter les pixels adjacents à la file
    queue.push([x + 1, y]);
    queue.push([x - 1, y]);
    queue.push([x, y + 1]);
    queue.push([x, y - 1]);
  }

  return result;
}

/**
 * Convertit une couleur hexadécimale en RGBA
 * @param {string} hex - Couleur au format #RRGGBB
 * @returns {Object} - {r, g, b, a}
 */
export function hexToRgba(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
    a: 255
  } : { r: 0, g: 0, b: 0, a: 255 };
}
