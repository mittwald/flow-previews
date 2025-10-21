import{j as r,R as P}from"./iframe-DTheBFqg.js";import{P as i}from"./Popover-BFP7d86q.js";import{B as h}from"./Button-Bmq0qjWo.js";import{P as R}from"./PopoverTrigger-uPh_sPc8.js";import{u as x}from"./useOverlayController-CV2OMrve.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-gCUS5Qd-.js";import"./index-ulNAr9WE.js";import"./index-C24gQbls.js";import"./OverlayContextProvider-D45bIP_5.js";import"./context-D5Eh6Kjh.js";import"./useStatic-KScOH6sT.js";import"./Dialog-DwHrBIEx.js";import"./Button-B9sfb4m-.js";import"./utils-CIVb4-pA.js";import"./ProgressBar-Dr6zks-A.js";import"./Label-DaxiHPCi.js";import"./Hidden-BUnkE8VR.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DE7AINdt.js";import"./context-BBJsvWP1.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DWQVem_V.js";import"./useFocus-gFMm1SVx.js";import"./useFocusRing-Bw6jYcrF.js";import"./useFocusable-CIkWBa0n.js";import"./RSPContexts-DdYP_yiK.js";import"./OverlayArrow-Bio3H0xn.js";import"./useControlledState-CxM5G25q.js";import"./Collection-BJPKgIab.js";import"./CollectionBuilder-CQSVhr8L.js";import"./SelectionIndicator-CjHN0yDY.js";import"./Separator-D87Ko5QM.js";import"./Text-C48huDBb.js";import"./SelectionManager-uhDgeTSM.js";import"./useEvent-BjpDtAMc.js";import"./useCollator-2o_2J_me.js";import"./FocusScope-CHz78Q3h.js";import"./useLocalizedStringFormatter-CvDaoHpN.js";import"./VisuallyHidden-D3PBi60E.js";import"./ClearPropsContextView-CxFwQ4wb.js";import"./ClearPropsContext-NW1-nYLP.js";import"./IconWarning-CXTS1Zmo.js";import"./Text-DVaBUvZL.js";import"./browser-BqPz5wcV.js";import"./EmulatedBoldText-P0d28SeQ.js";import"./LoadingSpinner-CLX8R9JK.js";import"./OverlayTrigger-CpKaALyE.js";import"./ControlledNotification-Bs-S7xry.js";import"./DialogTriggerView-CT5NOY18.js";const Rr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(R,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=x("Popover"),s=P.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(v=(f=e.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const xr=["Default","CustomWidth","WithController"];export{t as CustomWidth,o as Default,e as WithController,xr as __namedExportsOrder,Rr as default};
