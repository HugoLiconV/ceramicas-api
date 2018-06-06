import mongoose, { Schema } from 'mongoose'
// (nombre text, lat real, lng real)
const ubicacionSchema = new Schema({
  nombre: {
    type: String
  },
  lat: {
    type: Number
  },
  long: {
    type: Number
  }
}, {
  timestamps: true
})

ubicacionSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      nombre: this.nombre,
      lat: this.lat,
      long: this.long,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Ubicacion', ubicacionSchema)

export const schema = model.schema
export default model
