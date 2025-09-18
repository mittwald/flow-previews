import{j as r,R}from"./iframe-DjIVRH0F.js";import{P as i,a as x}from"./Popover-DlX03nO8.js";import{B as h}from"./Button-CKSxfzxQ.js";import{u as P}from"./DialogTriggerView-CgY0Mhwe.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DXkyia6O.js";import"./mergeRefs-CZW2uA-H.js";import"./index-Bk9vRPW2.js";import"./ClearPropsContextView-BhG_516u.js";import"./useFocus-diUUCuvP.js";import"./ProgressBar-BaoSLR_g.js";import"./utils-G1KHONaq.js";import"./Label-C0V31i8v.js";import"./Hidden-BYb4omOQ.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-sV0m1Yjo.js";import"./context-C7KKbhVC.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-Cd9JFs6w.js";import"./IconWarning-uc5JkYTm.js";import"./Text-B5KpGvlT.js";import"./browser-Ba6KZWy-.js";import"./EmulatedBoldText-BSrsAcTM.js";import"./Text-9ugGFdig.js";import"./LoadingSpinner-BHwXHxWg.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-DnbCLLYR.js";import"./Button-D_xR0uNa.js";import"./usePress-QkjqUEXJ.js";import"./useFocusRing-CVljaIJQ.js";import"./useFocusable-DNULE2pv.js";import"./context-DDhUpvCG.js";import"./useStatic-CHo6Lgk7.js";import"./RSPContexts-yaPVYaSw.js";import"./FocusScope-CAKHANYN.js";import"./useCollator-CAX-XvSk.js";import"./VisuallyHidden-snqvTAFU.js";import"./Collection-CjltVSE8.js";import"./CollectionBuilder-CJ_fIWoO.js";import"./Separator-BOn94nxb.js";import"./Group-C6OJiXrI.js";import"./SearchField-CkG4r_An.js";import"./FieldError-NAgWSsRG.js";import"./Form-Dzmx2_fB.js";import"./useTextField-CS3TmGDB.js";import"./useFormReset-BnKMoc5n.js";import"./TextField-BtiUxXGx.js";import"./useEvent-DGXxwH7A.js";import"./SelectionManager-Btp5kxfY.js";const vr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
