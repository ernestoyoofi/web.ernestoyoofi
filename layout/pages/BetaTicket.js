import l from "./BetaTicket.module.css"

const statusAccpeted = ["Pending", "Accpeted", "Cancel"]
const colorAccpeted  = ["#5c5c5c","#00cc36","#ff0000"]
export default function BetaTicketPageView({ data }) {
  return <div className={l.allbackground}>
    <div className={l.content_app}>
      <div className={l.cardview}>
        <div className={l.cardview_headtext}>
          <div className={l.nametaghead}>
            <h3>{data.name}</h3>
            <p>ticket-{data.tiket_id}</p>
          </div>
        </div>
        <div className={l.cardview_headbg}></div>
        <div className={l.cardview_bodytext}>
          <div className={l.cardtext_body}>
            <b>QR Code</b>
            <p><img src={`https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=QRCODE:memberbeta-scan/${data.tiket_id}/submitcard`} /></p>
          </div>
          <div className={l.cardtext_body}>
            <b>Status</b>
            <p>
              <span style={{background:colorAccpeted[data.status],color:"#ffffff",borderRadius: 9,padding:"4px 9px"}}>
                {statusAccpeted[data.status]}
              </span>
            </p>
          </div>
          <div className={l.cardtext_body}>
            <b>Date Register</b>
            <p>{new Date(data.date_reg).toISOString()}</p>
          </div>
          <div className={l.cardtext_body}>
            <b>Date Accpeted</b>
            <p>{new Date(data.date_acc).toISOString()}</p>
          </div>
          <div className={l.cardtext_body}>
            <b>Your Email</b>
            <p>{data.contact.email}</p>
          </div>
          <div className={l.cardtext_body}>
            <b>Your Phone</b>
            <p>{data.contact.phone}</p>
          </div>
        </div>
      </div>
      <center style={{color:"#919191",fontSize:10,marginTop:10}}>Screenshot To Share Your Card Coffee Laked's Beta</center>
    </div>
  </div>
}