import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App(){
  let data = [ 
    {
      price : {
        plan : "FREE",
        amount : 0
      },
      user : {
        style : "enabled",
        number : "Single User"
      },
      storage : {
        style : "enabled"
      },
      publicProjects : {
        style : "enabled"
      },
      communityAccess : {
        style : "enabled"
      },
      privateProjects : {
        style : "disabled"
      },
      support : {
        style : "disabled"
      },
      freeSubdomain : {
        style : "disabled"
      },
      report : {
        style : "disabled"
      }
    },
    {
      price : {
        plan : "PLUS",
        amount : 9
      },
      user : {
        style : "enabled",
        number : "5 Users"
      },
      storage : {
        style : "enabled"
      },
      publicProjects : {
        style : "enabled"
      },
      communityAccess : {
        style : "enabled"
      },
      privateProjects : {
        style : "enabled"
      },
      support : {
        style : "enabled"
      },
      freeSubdomain : {
        style : "enabled"
      },
      report : {
        style : "disabled"
      }
    },
    {
      price : {
        plan : "PRO",
        amount : 49
      },
      user : {
        style : "enabled",
        number : "Unlimted Users"
      },
      storage : {
        style : "enabled"
      },
      publicProjects : {
        style : "enabled"
      },
      communityAccess : {
        style : "enabled"
      },
      privateProjects : {
        style : "enabled"
      },
      support : {
        style : "enabled"
      },
      freeSubdomain : {
        style : "enabled"
      },
      report : {
        style : "enabled"
      }
    }
  ];
  return(
    <>
      <h3 className='title'>REACT PRICE CARD</h3>
      <div className='all-card'>
        {data.map((val,index) => (
          <Card data = {val} key = {index}/>
        ))}
      </div>
    </>
  )
}

function Card({data}) {
  return (
    <>
      <div className="card border-primary mb-3">
        <div className='card-header'>
          <div className="card-title plan">{`${data.price.plan}`}</div>
          <div className="card-title amount">{`$${data.price.amount}/month`}</div>
        </div>
        <div className="card-body">
          <p className={`card-text ${data.user.style}`}>
            {data.user.style === "enabled" ? (<span>✔️</span>) : (<span>❌</span>)} {`${data.user.number}`}
          </p>
          <p className={`card-text ${data.storage.style}`}>
            {data.storage.style === "enabled" ? (<span>✔️</span>) : (<span>❌</span>)} {`50GB Storage`}
          </p>
          <p className={`card-text ${data.publicProjects.style}`}>
            {data.publicProjects.style === "enabled" ? (<span>✔️</span>) : (<span>❌</span>)} {`Unlimited Public Projects`}
          </p>
          <p className={`card-text ${data.communityAccess.style}`}>
            {data.communityAccess.style === "enabled" ? (<span>✔️</span>) : (<span>❌</span>)} {`Community Access`}
          </p>
          <p className={`card-text ${data.privateProjects.style}`}>
            {data.privateProjects.style === "enabled" ? (<span>✔️</span>) : (<span>❌</span>)} {`Unlimited Private Projects`}
          </p>
          <p className={`card-text ${data.support.style}`}>
            {data.support.style === "enabled" ? (<span>✔️</span>) : (<span>❌</span>)} {`Dedicated Phone support`}
          </p>
          <p className={`card-text ${data.freeSubdomain.style}`}>
            {data.freeSubdomain.style === "enabled" ? (<span>✔️</span>) : (<span>❌</span>)} {`Free Subdomain`}
          </p>
          <p className={`card-text ${data.report.style}`}>
            {data.report.style === "enabled" ? (<span>✔️</span>) : (<span>❌</span>)} {`Monthly Ststus Reports`}
          </p>
          <button className='btn btn-primary'>BUTTON</button>
        </div>
      </div>
    </>
  )
}

export default App