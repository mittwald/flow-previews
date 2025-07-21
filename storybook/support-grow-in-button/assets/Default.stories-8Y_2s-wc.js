import{j as r,R}from"./iframe-cREoqKkU.js";import{P as i,a as x}from"./Popover-D0iKC4-k.js";import{B as h}from"./Button-BiI53Bc2.js";import{u as P}from"./DialogTriggerView-DDpbwryG.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CoBIOD9m.js";import"./mergeRefs-qT8HekK4.js";import"./index-sbMuRXJ-.js";import"./Dialog-le0_HQU8.js";import"./Button-Cu-YDSLu.js";import"./utils-yXINXq--.js";import"./ProgressBar-CUbrDEJ6.js";import"./Label-CiJ2ihSa.js";import"./Hidden-lwWUIJBj.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-lx63atcd.js";import"./context-B2t2DGfo.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CDwaJuL4.js";import"./useFocus-DdT7TrV6.js";import"./useFocusRing-BqHxEjMi.js";import"./useFocusable-6okJE7SL.js";import"./RSPContexts-BbhueAoC.js";import"./OverlayArrow-C8FHnWmq.js";import"./useControlledState-CU5MoX31.js";import"./Collection-DyOpwtKv.js";import"./CollectionBuilder-DBdNKsot.js";import"./Separator-BbGpBOgo.js";import"./Text-IBVIMvOc.js";import"./Input-V1vrGjHl.js";import"./SearchField-CSUzKRpw.js";import"./FieldError-CvRuj6qL.js";import"./Form-FfGMTlZb.js";import"./Group-BI8C3Od1.js";import"./useLocalizedStringFormatter-VGcwbP3j.js";import"./useTextField-RgubrTZC.js";import"./useFormReset-D4g7a1lX.js";import"./TextField-BSAOaaLk.js";import"./SelectionManager-BiiBfqxw.js";import"./useEvent-CzSnF3qn.js";import"./useCollator-JlvF5Y_E.js";import"./FocusScope-D9lXdOdd.js";import"./VisuallyHidden--yTRKci1.js";import"./IconWarning-BZ0g_Se0.js";import"./Text-n81s0DiV.js";import"./browser-DLud-_LN.js";import"./EmulatedBoldText-Do4ZwDP6.js";import"./LoadingSpinner-BEZ9UYVH.js";import"./context-C3KwCnKN.js";import"./useStatic-BAYq7Sdb.js";const Rr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
