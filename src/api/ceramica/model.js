import mongoose, { Schema } from 'mongoose'

// idDato integer, datos text, padre integer
const ceramicaSchema = new Schema({
  idDato: {
    type: Number
  },
  datos: {
    type: String
  },
  padre: {
    type: Number
  }
}, {
  timestamps: true
})

ceramicaSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      idDato: this.idDato,
      datos: this.datos,
      padre: this.padre,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Ceramica', ceramicaSchema)

export const schema = model.schema
export default model
