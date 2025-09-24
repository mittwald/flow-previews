import{j as r,R}from"./iframe-upPjViUi.js";import{P as i,a as x}from"./Popover-CM6Xbo5y.js";import{B as h}from"./Button-BdUtk4-2.js";import{u as P}from"./DialogTriggerView-CYID30AX.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-yJMP1aPs.js";import"./mergeRefs-q2W69vto.js";import"./index-RP-73gJI.js";import"./ClearPropsContextView-CWLdfkB7.js";import"./useFocus-CKR8Kfvk.js";import"./ProgressBar-B2varhWC.js";import"./utils-D7Ud1rY1.js";import"./Label-VDo2pjQH.js";import"./Hidden-DUPaGITp.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Bv0sV64n.js";import"./context-DUCBVekV.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-DJQ8YErb.js";import"./IconWarning-CwNATdER.js";import"./Text-DrOfxU9W.js";import"./browser-BQR41_Xo.js";import"./EmulatedBoldText-gAgggVs5.js";import"./Text-CPJx-aex.js";import"./LoadingSpinner-CzeOX1VK.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-BrLv4P2q.js";import"./Button-CWtnBlrz.js";import"./usePress-nNimJg5a.js";import"./useFocusRing-DBg1NGxh.js";import"./useFocusable-D-QSeIiW.js";import"./context-DSTBS2xh.js";import"./useStatic-BNGbJ6l6.js";import"./RSPContexts-CDfzDcm_.js";import"./FocusScope-cBvdiCGC.js";import"./useCollator-C5XQM9l2.js";import"./VisuallyHidden-svNoe17i.js";import"./Collection-C7hZcg-r.js";import"./CollectionBuilder-CvJppZRn.js";import"./Separator-NH6jHWUN.js";import"./Group-ClmTbc4u.js";import"./SearchField-DoTA-SfC.js";import"./FieldError-Dxc2xglq.js";import"./Form-CCPP_JFl.js";import"./useTextField-BoNbQLwS.js";import"./useFormReset-BGI-E8mB.js";import"./TextField-DM_RTlmg.js";import"./useEvent-DEpz7Cvb.js";import"./SelectionManager-CyC5TvbY.js";const vr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(v=(f=e.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const hr=["Default","CustomWidth","WithController"];export{t as CustomWidth,o as Default,e as WithController,hr as __namedExportsOrder,vr as default};
