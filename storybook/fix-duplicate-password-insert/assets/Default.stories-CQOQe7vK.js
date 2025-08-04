import{j as r,R}from"./iframe-CuW8Z7cC.js";import{P as i,a as x}from"./Popover-D_vujyJZ.js";import{B as h}from"./Button-D9Fw6D0O.js";import{u as P}from"./DialogTriggerView-C2lPzY4b.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Dp8IGOOw.js";import"./mergeRefs-B4ZkK10W.js";import"./index-GWM6ljsm.js";import"./Dialog-D1kraT3B.js";import"./Button-XBmqNEFP.js";import"./utils-CgS8DRaE.js";import"./ProgressBar-BpIwFtNJ.js";import"./Label-CGUx7qQt.js";import"./Hidden-Cabgeqjz.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-C7dUje6t.js";import"./context-BYWbGN2W.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-ChUiq42t.js";import"./useFocus-D7WquFnz.js";import"./useFocusRing-DouDeddi.js";import"./useFocusable-GYH2Xp93.js";import"./RSPContexts-Cf0WAJYH.js";import"./OverlayArrow-CyeHV5yR.js";import"./useControlledState-BloqaAdM.js";import"./Collection-DVSzmKrY.js";import"./CollectionBuilder-B5oNNMRo.js";import"./Separator-BVlyHbVt.js";import"./Text-DWn8KR_S.js";import"./Group-Dq-TZzFP.js";import"./SearchField-BtIhQoeP.js";import"./FieldError-C4CBNnNe.js";import"./Form-CVKq_8tp.js";import"./useLocalizedStringFormatter-6gozqQnX.js";import"./useTextField-D2_5QzKr.js";import"./useFormReset-BUJ4pXgh.js";import"./TextField-z_7EUq5A.js";import"./useEvent-CYDGvwkU.js";import"./SelectionManager-C2yhE_X5.js";import"./useCollator-B1wFiJa6.js";import"./FocusScope-C5C0qsLJ.js";import"./VisuallyHidden-DEeOB75f.js";import"./IconWarning-zrofpdfr.js";import"./Text-BVSFkmOJ.js";import"./browser-DxBOFXa_.js";import"./EmulatedBoldText-CK46MGsP.js";import"./LoadingSpinner-Cg9hyS_b.js";import"./context-DcAOWEDn.js";import"./useStatic-MQhSGK4y.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
