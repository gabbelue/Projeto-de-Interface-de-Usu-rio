const times = ["Flamengo", "Palmeiras", "Vasco", "Corinthians"];

export default function ListasFilter() {
  const maiordetodos = times.filter(time => time === "Flamengo");

  return (
    <div>
      <ul>
        {maiordetodos.map(maior => (
          <li style={{ fontSize: '36px', backgroundColor: 'red', color: 'black' }}>
            {maior}
          </li>
        ))}
      </ul>
    </div>
  );
}
