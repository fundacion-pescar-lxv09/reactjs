export const links = [
  { id: "a12", url: "#home", text: "inicio" },
  { id: "b57", url: "#gallery", text: "galeria" },
  { id: "d93", url: "#services", text: "servicios" },
  { id: "c28", url: "#contact", text: "contacto" },
]
export const social = [
  {target: "_blank", url: "https://facebook.com", text: "facebook"},
  {target: "_blank", url: "https://instagram.com", text: "instagram"},
  {target: "_blank", url: "https://api.whatsapp.com/send?phone=1103034567&text=mensaje,por+whatsapp", text: "whatsapp"}
]
export const jph = "https://jsonplaceholder.typicode.com"
export const jphLinks = [
  { id: "1", url:"users", text: "Usuarios"},
  { id: "2", url:"posts", text: "Publicaciones" },
  { id: "4", url:"albums", text: "Albumes" },
  { id: "5", url:"todos", text: "Tareas" },
]
export const elements = ["table","article","list","form"]

export const newLinks = () => {
  const newArr=[]
  elements.map(type => {
    jphLinks.map(item => newArr.push({...item, text: item.text+" "+type, type}))
  })
  return newArr
}