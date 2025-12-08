const fs = require('fs');
try {
  const content = fs.readFileSync('questions.js', 'utf8');
  // Extraer solo la parte del objeto JSON
  const match = content.match(/const QUESTIONS_DATABASE = ({[\s\S]*});/);
  if (match) {
    const jsonStr = match[1];
    try {
      JSON.parse(jsonStr);
      console.log('✓ JSON válido');
      const db = eval('(' + jsonStr + ')');
      console.log('✓ Categorías encontradas:', db.categories.length);
      db.categories.forEach(c => console.log('  -', c.id + ':', c.name));
    } catch (parseError) {
      console.log('✗ Error de parsing:', parseError.message);
      const pos = parseInt(parseError.message.match(/position (\d+)/)?.[1] || '0');
      const lines = jsonStr.substring(0, pos).split('\n');
      console.log('Línea aproximada:', lines.length);
      console.log('Contexto:', lines.slice(-3).join('\n'));
    }
  } else {
    console.log('✗ No se encontró QUESTIONS_DATABASE');
  }
} catch (e) {
  console.log('✗ Error:', e.message);
}

