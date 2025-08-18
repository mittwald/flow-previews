import{j as r,R}from"./iframe-xY198WZi.js";import{P as i,a as x}from"./Popover-LfzPlCkT.js";import{B as h}from"./Button-Bwr0Tqpq.js";import{u as P}from"./DialogTriggerView-CQH_y4wT.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Bcl1TdL7.js";import"./mergeRefs-C3ATilz7.js";import"./index-DUH-JGkU.js";import"./Dialog-d75pDgMH.js";import"./Button-quH8-MSh.js";import"./utils-9eQBP1kk.js";import"./ProgressBar-D8GoG1d0.js";import"./Label-Dcgw9TtS.js";import"./Hidden-CtG-gAWP.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-EZ6qW8_W.js";import"./context-cbiqA6Ma.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DyqoAsF-.js";import"./useFocus-Dp6Kb8w7.js";import"./useFocusRing-CNdh1loc.js";import"./useFocusable-BEMuxCdm.js";import"./RSPContexts-CJJdSkVj.js";import"./OverlayArrow-J-8UDj7n.js";import"./useControlledState-DwYELHJ7.js";import"./Collection-ytNMUbYn.js";import"./CollectionBuilder-BIND5Hyl.js";import"./Separator-b4M5uB6E.js";import"./Text-Caf7sjAz.js";import"./Group-IN_qKSk9.js";import"./SearchField-cMs68yGv.js";import"./FieldError-Dq9uru64.js";import"./Form-Bh-UgxBm.js";import"./useLocalizedStringFormatter-CJ8Vq7It.js";import"./useTextField-Q2Y51r8y.js";import"./useFormReset-CwVzgzUX.js";import"./TextField-CNxjTF-I.js";import"./useEvent-B_ZLPh5h.js";import"./SelectionManager-DB1_71DO.js";import"./useCollator-CcxdQyrk.js";import"./FocusScope-DirxfVa-.js";import"./VisuallyHidden-vDoGSijP.js";import"./IconWarning-DKtpXb3v.js";import"./Text-sCeau28A.js";import"./browser-CoruqHMI.js";import"./EmulatedBoldText-D19FH_Aq.js";import"./LoadingSpinner-DDnO9vH9.js";import"./context-DIL7reYg.js";import"./useStatic-BuBW5DuY.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
