import{j as r,R as P}from"./iframe-CP5fTbjA.js";import{P as i}from"./Popover-JrRBQobZ.js";import{B as h}from"./Button-LzGPdYwx.js";import{P as R}from"./PopoverTrigger-Djs1uJik.js";import{u as x}from"./useOverlayController-DuEm9ptT.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CTnt5eSB.js";import"./index-hIOjYjaD.js";import"./index-DskZqzrG.js";import"./OverlayContextProvider-DdAgShMM.js";import"./context-DXGAVSML.js";import"./useStatic-CBwN_HzY.js";import"./Dialog-DAzhbt-W.js";import"./Button-DcNEz-W6.js";import"./utils-D6GTtcOE.js";import"./ProgressBar-DPdjuR9Z.js";import"./Label-CxfqiuLL.js";import"./Hidden-CR2rUGYE.js";import"./filterDOMProps-CghfNOdR.js";import"./context-pkC0B_Pd.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BOoZUp13.js";import"./useFocus-wlnmJgKA.js";import"./useFocusRing-Cgj30sRP.js";import"./useFocusable-BoWde-QA.js";import"./RSPContexts-BW6Q5n3-.js";import"./OverlayArrow-CtZDvQgB.js";import"./useControlledState-5yv2Ipvc.js";import"./Collection-BOIgwszt.js";import"./CollectionBuilder-HzejECpA.js";import"./context-BoN7p6BF.js";import"./Separator-CXM6la1d.js";import"./Text-BAGiBnj-.js";import"./SelectionManager-zDFJDssk.js";import"./useEvent-B3kJFynN.js";import"./useCollator-NOEQaEQX.js";import"./FocusScope-OWR7C_89.js";import"./useLocalizedStringFormatter-DGz7N0CE.js";import"./VisuallyHidden-umqttFyt.js";import"./ClearPropsContextView-DhKx-WaR.js";import"./IconWarning-YasB_Ei3.js";import"./Text-CHvdz95V.js";import"./browser-BxAQ3I6S.js";import"./EmulatedBoldText-CnmkyqOO.js";import"./LoadingSpinner-B6JgwtAG.js";import"./OverlayTrigger-CR77EUIN.js";import"./ControlledNotification-r3JJBIQm.js";import"./DialogTriggerView-CR3n151M.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(R,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=x("Popover"),s=P.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
