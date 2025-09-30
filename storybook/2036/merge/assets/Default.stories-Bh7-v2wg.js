import{j as r,R}from"./iframe-Co5olYEg.js";import{P as i,a as x}from"./Popover-PLO4F2vM.js";import{B as h}from"./Button-W4WIo1el.js";import{u as P}from"./DialogTriggerView-CesmwlI4.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-B3fcy-aZ.js";import"./mergeRefs-DCCfFRi5.js";import"./index-dJ4wby8j.js";import"./ClearPropsContextView-ZglcEVcs.js";import"./useFocus-D_PcVBPO.js";import"./ProgressBar-CLW14R0J.js";import"./utils-CfsHCmXQ.js";import"./Label-z037IMCX.js";import"./Hidden-DTncj6eg.js";import"./filterDOMProps-CghfNOdR.js";import"./context-VmB2ki6S.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-BLXlsrOK.js";import"./IconWarning-Deg5RPPa.js";import"./Text-D64yDBkh.js";import"./browser-Lvchr8XH.js";import"./EmulatedBoldText-m8x9dOVA.js";import"./Text-DL7aZegp.js";import"./LoadingSpinner-CRLYV60Z.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-CMxRm_Et.js";import"./Button-B1uEfXYj.js";import"./usePress-BWYiyAlu.js";import"./useFocusRing-CNR6shO8.js";import"./useFocusable-CeUOSLWr.js";import"./context-ppKN523Y.js";import"./useStatic-BjVSqcP9.js";import"./RSPContexts-DTaEDLKz.js";import"./FocusScope-Dnc6FNOh.js";import"./useCollator-BMKqU-cc.js";import"./VisuallyHidden-CTHGVqVW.js";import"./Collection-Zbxmz5mL.js";import"./CollectionBuilder-BnPgo0UY.js";import"./context-C8LB4vR8.js";import"./Separator-BmXooASW.js";import"./SelectionManager-DPLcFzYl.js";import"./useEvent-DsDRYPQb.js";const cr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
