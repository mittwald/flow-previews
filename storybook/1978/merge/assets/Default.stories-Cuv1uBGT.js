import{j as r,R}from"./iframe-FeXPLmWJ.js";import{P as i,a as x}from"./Popover-DoIFupUP.js";import{B as h}from"./Button-DtLhlb3k.js";import{u as P}from"./DialogTriggerView-3szeiVhS.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DOQJhc0c.js";import"./mergeRefs-DBXayCo7.js";import"./index-Dw1iNfwN.js";import"./Dialog-D0hlM8gs.js";import"./Button-DC1Hivs6.js";import"./utils-CXtn_DQA.js";import"./ProgressBar-Dp_oIg1b.js";import"./Label-DaJTJCE8.js";import"./Hidden-5GhHzgiK.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DVVoN6WB.js";import"./context-CdDLZW_F.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CiJ5VmDC.js";import"./useFocus-utUwSX9z.js";import"./useFocusRing-CtO3s9Jp.js";import"./useFocusable-DUk2eF1B.js";import"./RSPContexts-l4hadVnr.js";import"./OverlayArrow-QfoTus34.js";import"./useControlledState-Bg7JB_7p.js";import"./Collection-BSFTurc1.js";import"./CollectionBuilder-DjcZXz9H.js";import"./Separator-qHYMipPY.js";import"./Text-D-W6Oypd.js";import"./Group-BYKu_D4V.js";import"./SearchField-CExAiUx6.js";import"./FieldError-C1vR0UXv.js";import"./Form-1I64UDUq.js";import"./useLocalizedStringFormatter-SRxq75M0.js";import"./useTextField-DIQk2fEk.js";import"./useFormReset-Dq2F4z6p.js";import"./TextField-EiqUYwfM.js";import"./useEvent-VX8xqKP_.js";import"./SelectionManager-DgeS2fE0.js";import"./useCollator-DCfokZLU.js";import"./FocusScope-D_yyKfql.js";import"./VisuallyHidden-BFgml7Em.js";import"./IconWarning-Bft-d4EJ.js";import"./Text-Bk-26kZZ.js";import"./browser-oak4xKwc.js";import"./EmulatedBoldText-Dl2sTmnq.js";import"./LoadingSpinner-C0aHJiGC.js";import"./context-BnjGRpmB.js";import"./useStatic-LuaoAJ0q.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
