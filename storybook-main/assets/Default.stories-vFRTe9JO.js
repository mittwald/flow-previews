import{j as r,R}from"./iframe-DRNY0HV6.js";import{P as i,a as x}from"./Popover-BFrfWbji.js";import{B as h}from"./Button-B6yc1Izp.js";import{u as P}from"./DialogTriggerView-C-I_oZhW.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-fzQQ9o1S.js";import"./mergeRefs-BGrmltrg.js";import"./index-BKPaZinn.js";import"./Dialog-DNtMkIXU.js";import"./Button-k2MLEVng.js";import"./utils-BGYRLt27.js";import"./ProgressBar-Bn7inR-A.js";import"./Label-Ddh_b_TK.js";import"./Hidden-tTaWOvSZ.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DGx8VCK9.js";import"./context-wh02hEcl.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CqeZb5V3.js";import"./useFocus-BhLRMKCW.js";import"./useFocusRing-kW39cg4V.js";import"./useFocusable-BSwP4fZ7.js";import"./RSPContexts-CA3pTynJ.js";import"./OverlayArrow-p5g0EdPE.js";import"./useControlledState-EC94ILpF.js";import"./Collection-BD7tjUyW.js";import"./CollectionBuilder-DcMhY1Ql.js";import"./Separator-BpqvMMaG.js";import"./Text-laSnJE4K.js";import"./Group-BnZVzQNe.js";import"./SearchField-VUEN69Zq.js";import"./FieldError-WemdyPf5.js";import"./Form-DE2ohvFV.js";import"./useLocalizedStringFormatter-BEg4k6Ev.js";import"./useTextField-CR9o_0bN.js";import"./useFormReset-CQ99iq-2.js";import"./TextField-Bjv3Nexs.js";import"./useEvent-Bg507xpS.js";import"./SelectionManager-DXHYZg2X.js";import"./useCollator-BrAMHcAl.js";import"./FocusScope-CchoPqp2.js";import"./VisuallyHidden-B4EZo48X.js";import"./IconWarning-BbRR4ujq.js";import"./Text-oBJONlUH.js";import"./browser-D4tnjvnK.js";import"./EmulatedBoldText-B4cW62zw.js";import"./LoadingSpinner-CWL8TI7G.js";import"./context-Ceu1foDq.js";import"./useStatic-Kjlf0EN3.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
