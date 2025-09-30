import{j as r,R}from"./iframe-lUo2nGnz.js";import{P as i,a as x}from"./Popover-DptWEuw1.js";import{B as h}from"./Button-BJSwvuxb.js";import{u as P}from"./DialogTriggerView-7b0oIJZS.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-B2pQApQK.js";import"./mergeRefs-1r9WJl4m.js";import"./index-CW-GEE7m.js";import"./ClearPropsContextView-Bo_EMYcr.js";import"./useFocus-C7dEKa6p.js";import"./ProgressBar-3LATX2wa.js";import"./utils-D2KvaKmW.js";import"./Label-CYuE9nkF.js";import"./Hidden-BOpFHvF6.js";import"./filterDOMProps-CghfNOdR.js";import"./context-FIeePqeN.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-DwS5X_XZ.js";import"./IconWarning-BtoswtWr.js";import"./Text-BGPM5sar.js";import"./browser-BBsn6OTc.js";import"./EmulatedBoldText-DD5sDuaA.js";import"./Text-C5QP4r7D.js";import"./LoadingSpinner-DTzdlBQ_.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-JjnBJVka.js";import"./Button-D-InGAKb.js";import"./usePress-Iu709INZ.js";import"./useFocusRing-frjSVRec.js";import"./useFocusable-2sr9c9hg.js";import"./context-D7GWSiW-.js";import"./useStatic-DLvoHQpQ.js";import"./RSPContexts-CxDqvi-e.js";import"./FocusScope-CjtAQOUp.js";import"./useCollator-BFbNb1L5.js";import"./VisuallyHidden-A1EOSTtD.js";import"./Collection-BInid-on.js";import"./CollectionBuilder-CGFi4T7n.js";import"./context-BgyeT2oB.js";import"./Separator-DsGZOlbx.js";import"./SelectionManager-Bj6Jwl9K.js";import"./useEvent-CfApzY12.js";const cr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    width: 800
  }
}`,...(d=(u=e.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var g,f,v;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(v=(f=t.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const lr=["Default","CustomWidth","WithController"];export{e as CustomWidth,o as Default,t as WithController,lr as __namedExportsOrder,cr as default};
