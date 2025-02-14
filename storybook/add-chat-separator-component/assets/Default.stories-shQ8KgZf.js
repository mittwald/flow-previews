import{A as e}from"./ActionGroup-BZDDDlqR.js";import{R as r}from"./index-B-o1Wr-g.js";import{B as o}from"./Button-DxJ53Gh-.js";import{A as l,s as V}from"./Action-_v7HSv4S.js";import{S as _}from"./Switch-LAW--_h0.js";import{L as C}from"./Link-Lqnfb2ti.js";import"./flowComponent-Bi8R7MU8.js";import"./index-ynQ6n1pc.js";import"./clsx-B-dksMZM.js";import"./index-DolzVqEf.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./dynamic-DKDa4OpU.js";import"./getActionGroupSlot-7U_pQ_UO.js";import"./useStatic-DVVlOpvb.js";import"./IconApp-B0VM5pA-.js";import"./IconWarning-CeoFRZGA.js";import"./Wrap-DQq6jo70.js";import"./Text-Cxo14Dks.js";import"./browser-B3hGj0u-.js";import"./EmulatedBoldText-1x_0FOGF.js";import"./Text-R-rrVGxo.js";import"./utils-7gTBvjqH.js";import"./LoadingSpinner-BIc094zz.js";import"./useLocalizedStringFormatter-BQr1rA-c.js";import"./Button-CPCoFgob.js";import"./ProgressBar-BQAJCbMD.js";import"./Label-CqgmsInd.js";import"./Hidden-CRdWNeH8.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DrlXsFf-.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-BXVt7Q_3.js";import"./useFocusRing-CTDVvBmm.js";import"./usePress-C3EQNDer.js";import"./context-tra5QY3B.js";import"./Label-DMTVGheq.js";import"./useToggleState-C-A--gcY.js";import"./useFormReset-DMREOE0P.js";import"./useControlledState-BgxdDqm0.js";import"./VisuallyHidden-lWpahT0S.js";const Wr={title:"Actions/ActionGroup",component:e,render:t=>r.createElement(e,{...t},r.createElement(l,{action:()=>V(1500)},r.createElement(o,{color:"accent"},"Create customer")),r.createElement(l,null,r.createElement(o,{slot:"abort",variant:"soft",color:"secondary"},"Abort")))},a={},n={render:t=>r.createElement(e,{...t},r.createElement(o,{color:"danger"},"Delete project"),r.createElement(o,{slot:"abort",variant:"soft",color:"secondary"},"Abort"))},s={render:t=>r.createElement(e,{...t},r.createElement(o,null,"Ok"))},c={render:t=>r.createElement(e,{...t},r.createElement(o,{slot:"primary",color:"accent"},"Add email address"),r.createElement(o,{slot:"secondary",variant:"soft",color:"secondary"},"Save and add more"),r.createElement(o,{slot:"abort",variant:"soft",color:"secondary"},"Abort"))},i={render:t=>r.createElement(e,{...t},r.createElement(o,{slot:"primary",color:"accent"},"Add email address"),r.createElement(o,{slot:"secondary",variant:"soft",color:"secondary"},"Save and add more"),r.createElement(o,{slot:"secondary",variant:"soft",color:"secondary"},"Save as new"),r.createElement(o,{slot:"abort",variant:"soft",color:"secondary"},"Abort"))},p={parameters:{viewport:{defaultViewport:"mobile1"}}},m={render:t=>r.createElement(e,{...t},r.createElement(o,{slot:"secondary"},"Edit"),r.createElement(_,{slot:"primary"},"Activate"))},d={render:t=>r.createElement(e,{...t},r.createElement(C,{slot:"abort"},"Forgot password?"),r.createElement(o,{color:"accent"},"Login"))};var u,A,y;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:"{}",...(y=(A=a.parameters)==null?void 0:A.docs)==null?void 0:y.source}}};var E,f,B;n.parameters={...n.parameters,docs:{...(E=n.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: props => <ActionGroup {...props}>
      <Button color="danger">Delete project</Button>
      <Button slot="abort" variant="soft" color="secondary">
        Abort
      </Button>
    </ActionGroup>
}`,...(B=(f=n.parameters)==null?void 0:f.docs)==null?void 0:B.source}}};var S,v,b;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: props => <ActionGroup {...props}>
      <Button>Ok</Button>
    </ActionGroup>
}`,...(b=(v=s.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var g,G,h;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: props => <ActionGroup {...props}>
      <Button slot="primary" color="accent">
        Add email address
      </Button>
      <Button slot="secondary" variant="soft" color="secondary">
        Save and add more
      </Button>
      <Button slot="abort" variant="soft" color="secondary">
        Abort
      </Button>
    </ActionGroup>
}`,...(h=(G=c.parameters)==null?void 0:G.docs)==null?void 0:h.source}}};var w,L,W;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: props => <ActionGroup {...props}>
      <Button slot="primary" color="accent">
        Add email address
      </Button>
      <Button slot="secondary" variant="soft" color="secondary">
        Save and add more
      </Button>
      <Button slot="secondary" variant="soft" color="secondary">
        Save as new
      </Button>
      <Button slot="abort" variant="soft" color="secondary">
        Abort
      </Button>
    </ActionGroup>
}`,...(W=(L=i.parameters)==null?void 0:L.docs)==null?void 0:W.source}}};var k,D,x;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  }
}`,...(x=(D=p.parameters)==null?void 0:D.docs)==null?void 0:x.source}}};var O,j,F;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: props => <ActionGroup {...props}>
      <Button slot="secondary">Edit</Button>
      <Switch slot="primary">Activate</Switch>
    </ActionGroup>
}`,...(F=(j=m.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var I,M,R;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: props => <ActionGroup {...props}>
      <Link slot="abort">Forgot password?</Link>
      <Button color="accent">Login</Button>
    </ActionGroup>
}`,...(R=(M=d.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};const kr=["Default","Danger","Info","WithSecondaryAction","WithExtraSecondaryAction","Mobile","WithSwitch","WithLink"];export{n as Danger,a as Default,s as Info,p as Mobile,i as WithExtraSecondaryAction,d as WithLink,c as WithSecondaryAction,m as WithSwitch,kr as __namedExportsOrder,Wr as default};
