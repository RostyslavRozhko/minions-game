import { normalize, schema } from 'normalizr';

const leaderSchema = new schema.Entity('leaders')
const leaderListSchema = [ leaderSchema ]

const normalizeData = (data) => normalize(data, leaderListSchema)

export default normalizeData