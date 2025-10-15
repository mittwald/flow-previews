import{j as r,R as P}from"./iframe-tskdVQ8N.js";import{P as i}from"./Popover-D2XSaC_F.js";import{B as h}from"./Button-Dsg_4rdI.js";import{P as R}from"./PopoverTrigger-BGI_ydtn.js";import{u as x}from"./useOverlayController-B3CyRh3q.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DXfmr-ai.js";import"./index-D6N0AnTm.js";import"./index-C1m14znk.js";import"./OverlayContextProvider-DD0eGq15.js";import"./context-CVZR0KsW.js";import"./useStatic-1YPHy18H.js";import"./Dialog-D58MUJ_9.js";import"./Button-DB-V2NKd.js";import"./utils-B12eWPaZ.js";import"./ProgressBar-rxfhBUJO.js";import"./Label-ZNOxXk3Q.js";import"./Hidden-D_rJ6hGg.js";import"./filterDOMProps-CghfNOdR.js";import"./context-DiW1jRMX.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BvJ9VF5d.js";import"./useFocus-DfZ-8u74.js";import"./useFocusRing-L-u3dQN8.js";import"./useFocusable-DY9nb4Q3.js";import"./RSPContexts-w3AEViLT.js";import"./OverlayArrow-CQI9fhos.js";import"./useControlledState-Py7g_hCX.js";import"./Collection-BQ6XNSlA.js";import"./CollectionBuilder-B0ypalQC.js";import"./SelectionIndicator-By4SQJVw.js";import"./Separator-N_51tPRN.js";import"./Text-DKYFQica.js";import"./SelectionManager-6kMjKjHw.js";import"./useEvent-r3YrjOS6.js";import"./useCollator-BdaohURQ.js";import"./FocusScope-D_vsK9iJ.js";import"./useLocalizedStringFormatter-B-RI6mzv.js";import"./VisuallyHidden-BVBeKb2k.js";import"./ClearPropsContextView-CYMEx9M6.js";import"./IconWarning-Bd2S-Yd8.js";import"./Text-jVUpGvvP.js";import"./browser-C459Qnce.js";import"./EmulatedBoldText-BMIw02bL.js";import"./LoadingSpinner-DLMtzbRX.js";import"./OverlayTrigger-CPNea7uG.js";import"./ControlledNotification-CR3joEtN.js";import"./DialogTriggerView-BSTysCeK.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(R,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=x("Popover"),s=P.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(v=(f=e.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const Pr=["Default","CustomWidth","WithController"];export{t as CustomWidth,o as Default,e as WithController,Pr as __namedExportsOrder,hr as default};
