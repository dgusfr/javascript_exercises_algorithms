function formataData() {
  const now = new Date();

  const dia_da_semana = now.toLocaleDateString("pt-BR", { weekday: "long" });
  const dia = now.getDate();
  const mes = now.toLocaleDateString("pt-BR", { month: "long" });
  const ano = now.getFullYear();
  const hora = now.toTimeString().split(" ")[0];

  // Representação da data e hora no formato ISO 8601
  const isoFormat = now.toISOString();

  return {
    fullDate: `${dia_da_semana}, ${dia} de ${mes} de ${ano}`,
    hora: hora,
    isoFormat: isoFormat,
  };
}

const dateFormats = formataData();
console.log("Data completa:", dateFormats.fullDate);
console.log("Hora:", dateFormats.hora);
console.log("Formato ISO 8601:", dateFormats.isoFormat);
