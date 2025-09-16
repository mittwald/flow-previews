import{j as r,R}from"./iframe-DhBjVFTT.js";import{P as i,a as x}from"./Popover-ChkY5JIe.js";import{B as h}from"./Button-Dt7yciC3.js";import{u as P}from"./DialogTriggerView-CvGHXAMK.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Ut4T4mCk.js";import"./mergeRefs-DgdJvSW3.js";import"./index-CE8kWNv6.js";import"./Dialog-BVFVztxJ.js";import"./Button-ClnqUudF.js";import"./utils-BiTM62RC.js";import"./ProgressBar-wpu_Jmey.js";import"./Label-9p36wJlw.js";import"./Hidden-CPEF8tx-.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Cy7W7M25.js";import"./context-BcZ3stI5.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-IeWuLCB9.js";import"./useFocus-Boz126Wy.js";import"./useFocusRing-CZOlFmxO.js";import"./useFocusable-t-PCv4_E.js";import"./RSPContexts-CwPCOUNA.js";import"./OverlayArrow-CEwR5798.js";import"./useControlledState-Cf0EFMq_.js";import"./Collection-BOa2gfjn.js";import"./CollectionBuilder-C5ynp6as.js";import"./Separator-LVnLAfMb.js";import"./Text-BCOK263g.js";import"./Group-DbR3J14H.js";import"./SearchField-o8QMGYZs.js";import"./FieldError-NbMb9-3J.js";import"./Form-CStdbKj5.js";import"./useLocalizedStringFormatter-Dqb82j34.js";import"./useTextField-CmDnLbvp.js";import"./useFormReset-CLUGxJas.js";import"./TextField-BjhwsOaA.js";import"./useEvent-CK4Bm0IT.js";import"./SelectionManager-TQlp0lcm.js";import"./useCollator-Ds09yMoF.js";import"./FocusScope-Cxsex6N2.js";import"./VisuallyHidden-BaY3Aahk.js";import"./IconWarning-BnanZbEc.js";import"./Text-DF-6yo40.js";import"./browser-C93HlYrv.js";import"./EmulatedBoldText-BWS0giPu.js";import"./LoadingSpinner-HTsZz-Eh.js";import"./context-DD9eHGwL.js";import"./useStatic-b8Yzhzvr.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
