import{j as r,R}from"./iframe-DqL79zQf.js";import{P as i,a as x}from"./Popover-BGSi_Qng.js";import{B as h}from"./Button-QUsEiN5S.js";import{u as P}from"./DialogTriggerView-isVpv3Jo.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CyLvSquV.js";import"./mergeRefs-D6gEpmO4.js";import"./index-7IubYRC5.js";import"./Dialog-DObE5EO4.js";import"./Button-BgVR6Xai.js";import"./utils-z68HW5Om.js";import"./ProgressBar-CH989tir.js";import"./Label-CMzThDyg.js";import"./Hidden-BIJxogKe.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BjvlKqLd.js";import"./context-CSgowZ2Z.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CO3SG6lx.js";import"./useFocus-BD5ovWzl.js";import"./useFocusRing-CbrFyu86.js";import"./useFocusable-B73WrcgM.js";import"./RSPContexts-9NN5zZW2.js";import"./OverlayArrow-5jZt71m1.js";import"./useControlledState--BvK6IW4.js";import"./Collection-8wT1TvCk.js";import"./CollectionBuilder-CvELNXxX.js";import"./Separator-DaCZt9C1.js";import"./Text-zdoGkENQ.js";import"./Group-DPDytGTQ.js";import"./SearchField-C7aME9MG.js";import"./FieldError-DNlWKJE8.js";import"./Form-R5LTMmOa.js";import"./useLocalizedStringFormatter-0rSYolxh.js";import"./useTextField-Cpjxci2I.js";import"./useFormReset-CsKPjgKa.js";import"./TextField-2CLvDbyV.js";import"./useEvent-nuKRicCO.js";import"./SelectionManager-Jx2Za9Eq.js";import"./useCollator-DUL5JuJR.js";import"./FocusScope-DbqtD9id.js";import"./VisuallyHidden-BQckF0OS.js";import"./IconWarning-B2WreSxS.js";import"./Text-M86zJQcf.js";import"./browser-AVTBNrkm.js";import"./EmulatedBoldText-DYcpE2hW.js";import"./LoadingSpinner-BTTfXDBN.js";import"./context-J1QRUcAO.js";import"./useStatic-iq1b9ojT.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
