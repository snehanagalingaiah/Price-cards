import "./styles.css";

export default function App() {
  const cardData = [
    [
      {
        text: "Single User",
        value: true
      },
      {
        text: "5GB Storage",
        value: true
      },
      {
        text: "Unlimited Public Projects",
        value: true
      },
      {
        text: "Community Access",
        value: true
      },
      {
        text: "Unlimited Private Projects",
        value: false
      },
      {
        text: "Dedicated Phone Support",
        value: false
      },
      {
        text: "Free Subdomain ",
        value: false
      },
      {
        text: "Monthly Status Reports",
        value: false
      }
    ],
    [
      {
        text: "5 Users",
        value: true
      },
      {
        text: "50GB Storage",
        value: true
      },
      {
        text: "Unlimited Public Projects",
        value: true
      },
      {
        text: "Community Access",
        value: true
      },
      {
        text: "Unlimited Private Projects",
        value: true
      },
      {
        text: "Dedicated Phone Support",
        value: true
      },
      {
        text: "Free Subdomain ",
        value: true
      },
      {
        text: "Monthly Status Reports",
        value: false
      }
    ],
    [
      {
        text: "Unlimited Users ",
        value: true
      },
      {
        text: "150GB Storage",
        value: true
      },
      {
        text: "Unlimited Public Projects",
        value: true
      },
      {
        text: "Community Access",
        value: true
      },
      {
        text: "Unlimited Private Projects",
        value: true
      },
      {
        text: "Dedicated Phone Support",
        value: true
      },
      {
        text: "Free Subdomain ",
        value: true
      },
      {
        text: "Monthly Status Reports",
        value: true
      }
    ]
  ];

  return (
    <div className="App">
      {cardData.map((card) =>
        card.map((list) => <CardBody text={list.text} value={list.value} />)
      )}
    </div>
  );
}

function CardBody(props) {
  return <p>{props.text}</p>;
}
