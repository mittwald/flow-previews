import{j as r,R as a}from"./iframe-BjQgS_dl.js";import{P as s,u as c}from"./Popover-DNrzHtdF.js";import{B as m}from"./Button-mR6tCl9f.js";import{P as l}from"./PopoverTrigger-vpZCTXgF.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./context-C9CRIziz.js";import"./Button-CWLE3PAH.js";import"./utils-C6Mwuf68.js";import"./mergeRefs-BqcSeRH_.js";import"./index-CCcXhUlF.js";import"./ProgressBar-DBLE5koh.js";import"./Hidden-CbsoacY0.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-3TgVXJa8.js";import"./useFocusRing-BWD7k8n6.js";import"./useFocusable-CMVEVLbf.js";import"./RSPContexts-JWS-CQt4.js";import"./Collection-Uuc2P1Rm.js";import"./CollectionBuilder-SW3JOyLp.js";import"./SelectionIndicator-DDS3Avz9.js";import"./Separator-DKQ5QqW9.js";import"./browser-D8Ytpe6r.js";import"./useLocalizedStringFormatter-Dg6sdA5Z.js";import"./PropsContextProvider-B3msEGiP.js";import"./useStatic-CbhvCGnA.js";import"./OverlayTrigger-BZYsa2Ar.js";import"./IconWarning-wUhw_T8r.js";import"./Text-hFF5yDpy.js";import"./EmulatedBoldText-CmEhCy_I.js";import"./LoadingSpinner-BVWf40cO.js";const K={title:"Overlays/Popover",component:s,render:p=>r.jsxs(l,{children:[r.jsx(m,{children:"Trigger popover"}),r.jsx(s,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const n=c("Popover"),i=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(m,{ref:i,onPress:n.open,children:"Trigger popover"}),r.jsx(s,{triggerRef:i,...p,controller:n,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
