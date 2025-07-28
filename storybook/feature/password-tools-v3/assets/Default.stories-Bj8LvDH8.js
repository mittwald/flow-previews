import{j as r,R}from"./iframe-k40rl9C_.js";import{P as i,a as x}from"./Popover-Dc3psDpE.js";import{B as h}from"./Button-kvMweZlt.js";import{u as P}from"./DialogTriggerView-BqkYAwTD.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DHimXFH6.js";import"./mergeRefs-DeLnkq3n.js";import"./index-0ME5rF8X.js";import"./Dialog-DFB0ODmg.js";import"./Button-BPg5w5qS.js";import"./utils-KRUPT0lQ.js";import"./ProgressBar-CLj2PpPD.js";import"./Label-DIzINetI.js";import"./Hidden-U9FjqIX0.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-D45A24Bq.js";import"./context-B7pdk5J-.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CdMS6zrp.js";import"./useFocus-CSVfmLbx.js";import"./useFocusRing-xJVp1dT7.js";import"./useFocusable-Bkb1JWUQ.js";import"./RSPContexts-D3A90Utg.js";import"./OverlayArrow-QTNcdBpj.js";import"./useControlledState-BJUCb_CR.js";import"./Collection-kWkb4Zd-.js";import"./CollectionBuilder-ByxuUit6.js";import"./Separator-8D9fucmC.js";import"./Text-BHVi9XYC.js";import"./Group-chjP6waA.js";import"./SearchField-CwrX6gQO.js";import"./FieldError-rn1TZOfn.js";import"./Form-c2DgNPZJ.js";import"./useLocalizedStringFormatter-DKKzTgA5.js";import"./useTextField-C_psbwqH.js";import"./useFormReset-CIlCc03R.js";import"./TextField-SZ2aXgcA.js";import"./useEvent-DRBB5MX_.js";import"./SelectionManager-BMLyIVh6.js";import"./useCollator-84Y8Mk4i.js";import"./FocusScope-D54ZyU14.js";import"./VisuallyHidden-CgVp0Wt0.js";import"./IconWarning-Cbv9M52D.js";import"./Text-B-gvPcDV.js";import"./browser-CjSC5npA.js";import"./EmulatedBoldText-BNBH8DgQ.js";import"./LoadingSpinner-BP4NYh9i.js";import"./context-D0ri2Dmb.js";import"./useStatic-DmhG0skw.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    width: 800
  }
}`,...(d=(u=t.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var g,f,v;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: props => {
    const controller = useOverlayController("Popover");
    const triggerRef = React.useRef(null);
    return <>
        <Button ref={triggerRef} onPress={controller.open}>
          Trigger popover
        </Button>
        <Popover triggerRef={triggerRef} {...props} controller={controller}>
          I am a popover.
        </Popover>
      </>;
  }
}`,...(v=(f=e.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const Rr=["Default","CustomWidth","WithController"];export{t as CustomWidth,o as Default,e as WithController,Rr as __namedExportsOrder,hr as default};
