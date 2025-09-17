import{j as r,R}from"./iframe-Fj9rH4cM.js";import{P as i,a as x}from"./Popover-BFsrpBdt.js";import{B as h}from"./Button-CRDs1G82.js";import{u as P}from"./DialogTriggerView-cCV2n8WK.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-2d7AdEi8.js";import"./mergeRefs-DWVfDnig.js";import"./index-zrl6XAGz.js";import"./OverlayArrow-DopxGRGn.js";import"./useFocus-7HBUp4O0.js";import"./ProgressBar-BwsJFvfU.js";import"./utils-1iPQLSxY.js";import"./Label-BqD1zatE.js";import"./Hidden-Duc9NbhT.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-C-3cKpbA.js";import"./context-qP4IgOj6.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-DkD4o1Gz.js";import"./IconWarning-BqHcxRer.js";import"./Text-CY4-u4so.js";import"./browser-VEiFSO1p.js";import"./EmulatedBoldText-Ctpzt0x1.js";import"./Text-DCFUXQ-H.js";import"./LoadingSpinner-CK8GFOt2.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-CEyIEfqZ.js";import"./Button-ClJ-El1M.js";import"./usePress-CXUdxwPb.js";import"./useFocusRing-CKWUlu0I.js";import"./useFocusable-DA60a4RB.js";import"./context-qzo6W5cX.js";import"./useStatic-g6Dny9ho.js";import"./RSPContexts-CZftLSNz.js";import"./FocusScope-ComN1xIG.js";import"./useCollator-Cv7Z6Bqm.js";import"./VisuallyHidden-6EX0wPu2.js";import"./Collection-DVpJlKDB.js";import"./CollectionBuilder-82bN8UBR.js";import"./Separator-B_gkWTuC.js";import"./Group-DdYjb3kh.js";import"./SearchField-DV7b6fGA.js";import"./FieldError-Dx-XJATE.js";import"./Form-OtjI-dAW.js";import"./useTextField-CyljbYW8.js";import"./useFormReset-D9GIYNIc.js";import"./TextField-HFN8OYQm.js";import"./useEvent-UTIdhTs4.js";import"./SelectionManager-Cy5yrTgT.js";const vr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
