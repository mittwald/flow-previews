import{A as e}from"./ActionGroup-CkAMrken.js";import{R as r}from"./index-B-o1Wr-g.js";import{B as o}from"./Button-19aoBniE.js";import{A as d,s as M}from"./Action-nwH1LYxm.js";import{S as R}from"./Switch-B50DVx1-.js";import"./PropsContextProvider-BHq6Fnml.js";import"./index-ynQ6n1pc.js";import"./clsx-B-dksMZM.js";import"./dynamic-DKDa4OpU.js";import"./flowComponent-SXQnFwcy.js";import"./index-DolzVqEf.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./getActionGroupSlot-Ctir2FTR.js";import"./useSelector-iQqgW7gO.js";import"./IconApp--rto3B0B.js";import"./IconWarning-wVYUmMSD.js";import"./Wrap-DQq6jo70.js";import"./Text-BziEbUGv.js";import"./browser-B3hGj0u-.js";import"./EmulatedBoldText-1x_0FOGF.js";import"./Text-R-rrVGxo.js";import"./utils-7gTBvjqH.js";import"./LoadingSpinner-DRabzFga.js";import"./useLocalizedStringFormatter-BQr1rA-c.js";import"./Button-CFfO75lD.js";import"./ProgressBar-BQAJCbMD.js";import"./Label-CqgmsInd.js";import"./Hidden-CRdWNeH8.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DrlXsFf-.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-BXVt7Q_3.js";import"./useFocusRing-CTDVvBmm.js";import"./usePress-C3EQNDer.js";import"./context-HWij4CCA.js";import"./Label-_TQx26eL.js";import"./useToggleState-C-A--gcY.js";import"./useFormReset-DMREOE0P.js";import"./useControlledState-BgxdDqm0.js";import"./VisuallyHidden-lWpahT0S.js";const Gr={title:"Actions/ActionGroup",component:e,render:t=>r.createElement(e,{...t},r.createElement(d,{action:()=>M(1500)},r.createElement(o,{color:"accent"},"Create customer")),r.createElement(d,null,r.createElement(o,{slot:"abort",variant:"soft",color:"secondary"},"Abort")))},a={},n={render:t=>r.createElement(e,{...t},r.createElement(o,{color:"danger"},"Delete project"),r.createElement(o,{slot:"abort",variant:"soft",color:"secondary"},"Abort"))},s={render:t=>r.createElement(e,{...t},r.createElement(o,null,"Ok"))},c={render:t=>r.createElement(e,{...t},r.createElement(o,{slot:"primary",color:"accent"},"Add email address"),r.createElement(o,{slot:"secondary",variant:"soft",color:"secondary"},"Save and add more"),r.createElement(o,{slot:"abort",variant:"soft",color:"secondary"},"Abort"))},i={render:t=>r.createElement(e,{...t},r.createElement(o,{slot:"primary",color:"accent"},"Add email address"),r.createElement(o,{slot:"secondary",variant:"soft",color:"secondary"},"Save and add more"),r.createElement(o,{slot:"secondary",variant:"soft",color:"secondary"},"Save as new"),r.createElement(o,{slot:"abort",variant:"soft",color:"secondary"},"Abort"))},p={parameters:{viewport:{defaultViewport:"mobile1"}}},m={render:t=>r.createElement(e,{...t},r.createElement(o,{slot:"secondary"},"Edit"),r.createElement(R,{slot:"primary"},"Activate"))};var l,u,A;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:"{}",...(A=(u=a.parameters)==null?void 0:u.docs)==null?void 0:A.source}}};var y,E,f;n.parameters={...n.parameters,docs:{...(y=n.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: props => <ActionGroup {...props}>
      <Button color="danger">Delete project</Button>
      <Button slot="abort" variant="soft" color="secondary">
        Abort
      </Button>
    </ActionGroup>
}`,...(f=(E=n.parameters)==null?void 0:E.docs)==null?void 0:f.source}}};var B,v,S;s.parameters={...s.parameters,docs:{...(B=s.parameters)==null?void 0:B.docs,source:{originalSource:`{
  render: props => <ActionGroup {...props}>
      <Button>Ok</Button>
    </ActionGroup>
}`,...(S=(v=s.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};var b,G,g;c.parameters={...c.parameters,docs:{...(b=c.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(g=(G=c.parameters)==null?void 0:G.docs)==null?void 0:g.source}}};var h,w,D;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(D=(w=i.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};var W,x,O;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  }
}`,...(O=(x=p.parameters)==null?void 0:x.docs)==null?void 0:O.source}}};var j,k,I;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: props => <ActionGroup {...props}>
      <Button slot="secondary">Edit</Button>
      <Switch slot="primary">Activate</Switch>
    </ActionGroup>
}`,...(I=(k=m.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};const gr=["Default","Danger","Info","WithSecondaryAction","WithExtraSecondaryAction","Mobile","WithSwitch"];export{n as Danger,a as Default,s as Info,p as Mobile,i as WithExtraSecondaryAction,c as WithSecondaryAction,m as WithSwitch,gr as __namedExportsOrder,Gr as default};
