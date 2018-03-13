export function getMagnitudeFromRange(target, x, length) {
  const rect = target.getBoundingClientRect()
  return Math.ceil((x - rect.left) / (rect.width / length))
}
