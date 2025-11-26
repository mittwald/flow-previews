import{j as r,R as a}from"./iframe-BZ309vyP.js";import{P as s,u as c}from"./Popover-X1T8rxjL.js";import{B as m}from"./Button-D_IowAzf.js";import{P as l}from"./PopoverTrigger-fvbDiyfk.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./context-DqVMPo4j.js";import"./Button-CF0FSAUf.js";import"./utils-JyFk5TTa.js";import"./mergeRefs-DOKtgXIl.js";import"./index-D_qUUaJn.js";import"./ProgressBar-BUFkxRcJ.js";import"./Hidden-Dy-Kvk-F.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-B2ssQm4M.js";import"./useFocusRing-BtfZpnq2.js";import"./useFocusable-CnzH4q2c.js";import"./RSPContexts-CvJVTBp5.js";import"./Collection-Jfb5Oz2B.js";import"./CollectionBuilder-BxUVDWC-.js";import"./SelectionIndicator-B3TjwCoM.js";import"./Separator-Dgou7g2f.js";import"./browser-6QOIIU7n.js";import"./useLocalizedStringFormatter-D2Npicej.js";import"./PropsContextProvider-P_wGPXL3.js";import"./useStatic-5dWEA-L1.js";import"./OverlayTrigger-D_yTwUd7.js";import"./IconWarning-DvQ_83sT.js";import"./Text-C4LG1QU9.js";import"./EmulatedBoldText-BN5KbGVs.js";import"./LoadingSpinner-CP4vAouS.js";const K={title:"Overlays/Popover",component:s,render:p=>r.jsxs(l,{children:[r.jsx(m,{children:"Trigger popover"}),r.jsx(s,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const n=c("Popover"),i=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(m,{ref:i,onPress:n.open,children:"Trigger popover"}),r.jsx(s,{triggerRef:i,...p,controller:n,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    width: 800
  }
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const L=["Default","CustomWidth","WithController"];export{e as CustomWidth,o as Default,t as WithController,L as __namedExportsOrder,K as default};
