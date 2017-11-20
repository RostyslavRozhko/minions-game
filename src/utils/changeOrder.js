export const changeOrder = (entities, result, updatedEntity, updatedEntityId) => {
  const updatedEntityPos = result.indexOf(updatedEntityId)
  result.splice(updatedEntityPos, 1)
  
  for(let i = 0; i < result.length; i++) {
    const currId = result[i]
    const currPerc = entities[currId].percent
    if(currPerc < updatedEntity.percent) {
      result.splice(i, 0, updatedEntityId)
      break
    }
  }
  return result
}