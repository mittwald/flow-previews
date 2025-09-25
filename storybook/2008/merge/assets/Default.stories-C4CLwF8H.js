import{j as r,R}from"./iframe-CQa7qTJa.js";import{P as i,a as x}from"./Popover-DDG0vMkE.js";import{B as h}from"./Button-CHgvO37v.js";import{u as P}from"./DialogTriggerView-Cf-mCLAZ.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-C1od4eVS.js";import"./mergeRefs-Da4MPh46.js";import"./index-BsJVg0bb.js";import"./ClearPropsContextView-CMBXwDsP.js";import"./useFocus-C9JxIGDi.js";import"./ProgressBar-FMaJOq3V.js";import"./utils-cYx4gHhD.js";import"./Label-DUJFwkpM.js";import"./Hidden-Xar3rui2.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DGKdhdH_.js";import"./context-BU9KDZsm.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-CFUYHrzm.js";import"./IconWarning-CeyZIf1V.js";import"./Text-CH2mDEXN.js";import"./browser-BhSl0yCb.js";import"./EmulatedBoldText-Ce7b_D_t.js";import"./Text-BRoIiTz6.js";import"./LoadingSpinner-DVFRCiEF.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-DxdNJ3BP.js";import"./Button-DeHwua8T.js";import"./usePress-D-jgt3FH.js";import"./useFocusRing-DJ1LjUwE.js";import"./useFocusable-FCuKz-qE.js";import"./context-D_sCsAkv.js";import"./useStatic-ByirIl9X.js";import"./RSPContexts-C2Phcdxj.js";import"./FocusScope-C4mxiVmq.js";import"./useCollator-BHsFeSET.js";import"./VisuallyHidden-CQfZ6AGe.js";import"./Collection-CLijKRGN.js";import"./CollectionBuilder-BuoP7Qv-.js";import"./Separator-D9m_TYOZ.js";import"./Group-D-4ygLJZ.js";import"./SearchField-DroG_a10.js";import"./FieldError-D5-jV0S5.js";import"./Form-CF3ngYGn.js";import"./useTextField-DOzcbfzW.js";import"./useFormReset-DY9tf8Hl.js";import"./TextField-BNBlfRPu.js";import"./useEvent-CyQldz3u.js";import"./SelectionManager-CZ4deCBD.js";const vr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
