// 65130500043 Pannawat Sripa
function isPasswordValid(password) {
  if (password === null || password === undefined || password === ""){
    return false
  }
 
  let letters = [...password]
  if (letters.length < 8){
    return false
  }else{
    for (let letter of letters ){
      if (letter.includes("@") ||  
          letter.includes("#") || 
          letter.includes("$") || 
          letter.includes("%") ||
          letter.includes("^") ||
          letter.includes("&") ||
          letter.includes("*") ||
          letter.includes("!")){
            return true
          }else{
            return false
          }
    }
  }
}


module.exports = isPasswordValid
