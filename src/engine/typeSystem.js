/**
 * Type System — Strict handle type matching for node connections.
 * 
 * Types: image, float, int, vec2, bool, trigger
 * Auto-cast: int → float (widening only)
 */

export const HandleTypes = {
  IMAGE:   'image',
  FLOAT:   'float',
  INT:     'int',
  VEC2:    'vec2',
  BOOL:    'bool',
  TRIGGER: 'trigger',
}

export const TypeColors = {
  [HandleTypes.IMAGE]:   '#00d4ff',  // cyan
  [HandleTypes.FLOAT]:   '#ff9a2e',  // orange
  [HandleTypes.INT]:     '#ffe14d',  // yellow
  [HandleTypes.VEC2]:    '#ff6eb4',  // pink
  [HandleTypes.BOOL]:    '#ff4444',  // red
  [HandleTypes.TRIGGER]: '#ffffff',  // white
}

export const TypeLabels = {
  [HandleTypes.IMAGE]:   'Image',
  [HandleTypes.FLOAT]:   'Float',
  [HandleTypes.INT]:     'Int',
  [HandleTypes.VEC2]:    'Vec2',
  [HandleTypes.BOOL]:    'Bool',
  [HandleTypes.TRIGGER]: 'Trigger',
}

// Compatibility matrix: { sourceType: [allowed target types] }
const COMPATIBILITY = {
  [HandleTypes.IMAGE]:   [HandleTypes.IMAGE],
  [HandleTypes.FLOAT]:   [HandleTypes.FLOAT],
  [HandleTypes.INT]:     [HandleTypes.INT, HandleTypes.FLOAT],  // int → float auto-cast
  [HandleTypes.VEC2]:    [HandleTypes.VEC2],
  [HandleTypes.BOOL]:    [HandleTypes.BOOL],
  [HandleTypes.TRIGGER]: [HandleTypes.TRIGGER],
}

/**
 * Check if a connection from sourceType to targetType is valid.
 */
export function isConnectionValid(sourceType, targetType) {
  const allowed = COMPATIBILITY[sourceType]
  if (!allowed) return false
  return allowed.includes(targetType)
}

/**
 * Get the CSS color for a handle type.
 */
export function getTypeColor(type) {
  return TypeColors[type] || '#888888'
}

/**
 * Cast a value from one type to another if possible.
 */
export function castValue(value, fromType, toType) {
  if (fromType === toType) return value
  if (fromType === HandleTypes.INT && toType === HandleTypes.FLOAT) {
    return Number(value)
  }
  if (fromType === HandleTypes.FLOAT && toType === HandleTypes.INT) {
    return Math.round(value)
  }
  return value
}
