import{j as r,R}from"./iframe-BmaCy5vn.js";import{P as i,a as x}from"./Popover-DJ-DOiR3.js";import{B as h}from"./Button-D_WPZvgQ.js";import{u as P}from"./DialogTriggerView-Cgh3ruvs.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Cdtu9ZvQ.js";import"./mergeRefs-B-jDhE92.js";import"./index-DPf4rLTQ.js";import"./Dialog-DNzI_GfM.js";import"./Button-wePQNGHF.js";import"./utils-BTcDldbE.js";import"./ProgressBar-DbkKYMEg.js";import"./Label-v3v2JpRx.js";import"./Hidden-DFOfTeRc.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-aIW9IeHZ.js";import"./context-D74MXKTM.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-D_L0SfOg.js";import"./useFocus-eJJI3D_B.js";import"./useFocusRing-BIF3mfAv.js";import"./useFocusable-BZM-anb5.js";import"./RSPContexts-BWdUGPyC.js";import"./OverlayArrow-DPRWr8HF.js";import"./useControlledState-D7fTNmKi.js";import"./Collection-De-LJyRM.js";import"./CollectionBuilder-DYux32p_.js";import"./Separator-C4UM9Z4C.js";import"./Text-DKW9AlZS.js";import"./Group-BQQ9lk60.js";import"./SearchField-CGzmXx6T.js";import"./FieldError-DrLNSIg1.js";import"./Form-JYTBzchK.js";import"./useLocalizedStringFormatter-Bee7TgYK.js";import"./useTextField-DWi3otFd.js";import"./useFormReset-BOYVXvui.js";import"./TextField-BuSg5oYg.js";import"./useEvent-BVPjBT0Y.js";import"./SelectionManager-YuLIOZci.js";import"./useCollator-BSPhXtyK.js";import"./FocusScope-BP1WICTq.js";import"./VisuallyHidden-CbssR0xZ.js";import"./IconWarning-HxJndVZz.js";import"./Text-Bb5YosKE.js";import"./browser-CHe_8eCl.js";import"./EmulatedBoldText-6eMdCTCE.js";import"./LoadingSpinner-ht0ZG28N.js";import"./context-unxNYjwy.js";import"./useStatic-CZNYuNH3.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
