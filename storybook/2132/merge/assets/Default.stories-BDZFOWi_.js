import{j as r,R as a}from"./iframe-Bl9ZNzly.js";import{P as s,u as c}from"./Popover-B6t3DWPA.js";import{B as m}from"./Button-C43dgBgP.js";import{P as l}from"./PopoverTrigger-DSjKq8wS.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./context-B3t2ll3v.js";import"./Button-CmlWxNPG.js";import"./utils-Ba3Wc4Cj.js";import"./mergeRefs-ux46nP0M.js";import"./index-BGoG8N2m.js";import"./ProgressBar-D1AHMkFy.js";import"./Hidden-B2JOjUUO.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-BsRR-XG9.js";import"./useFocusRing-DOvKN8uX.js";import"./useFocusable-JrbUxoa4.js";import"./RSPContexts-CKPxvq-y.js";import"./Collection-2c0i4EEE.js";import"./CollectionBuilder-BRsb4ZNp.js";import"./SelectionIndicator-FRTj7WMW.js";import"./Separator-E4Y45gOI.js";import"./browser-DgAJHjYP.js";import"./useLocalizedStringFormatter-IXeJde12.js";import"./PropsContextProvider-DcJmUF2I.js";import"./useStatic-CHy8y9O8.js";import"./OverlayTrigger-DDLdbzyu.js";import"./IconWarning-CdD_Vr9D.js";import"./Text-DVbVn-gX.js";import"./EmulatedBoldText-C2RodUkO.js";import"./LoadingSpinner-BmMjYWfH.js";const K={title:"Overlays/Popover",component:s,render:p=>r.jsxs(l,{children:[r.jsx(m,{children:"Trigger popover"}),r.jsx(s,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const n=c("Popover"),i=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(m,{ref:i,onPress:n.open,children:"Trigger popover"}),r.jsx(s,{triggerRef:i,...p,controller:n,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
