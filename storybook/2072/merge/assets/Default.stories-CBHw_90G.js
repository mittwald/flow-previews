import{j as r,R as a}from"./iframe-CRkLAjqu.js";import{P as s,u as c}from"./Popover-JmyjzJuR.js";import{B as n}from"./Button-iYH795Vf.js";import{P as l}from"./PopoverTrigger-BZFX4_wd.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./context-B-s8oBfA.js";import"./flowComponent-DkSEV7yV.js";import"./index-DwXT3Bgk.js";import"./index-CMjPCm5R.js";import"./useStatic-CAsZlBox.js";import"./OverlayTrigger-8Ptq7Mev.js";import"./Dialog-aAfd-0c1.js";import"./Button-CPrLpUny.js";import"./utils-BtHHKbwG.js";import"./ProgressBar-N5kov_o0.js";import"./Hidden-PDlBagOD.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-DLoU3qmJ.js";import"./useFocusRing-PsHB6P7A.js";import"./useFocusable-ybZYv2TC.js";import"./RSPContexts-Bb59CEQZ.js";import"./OverlayArrow-CxWIXwnM.js";import"./useControlledState-6rabR8D5.js";import"./Collection-B5dOcGsH.js";import"./CollectionBuilder-uHK_yZ9p.js";import"./SelectionIndicator-CTOSa6og.js";import"./Separator-ARlWDSvP.js";import"./browser-C4srWScu.js";import"./useLocalizedStringFormatter-lA2Sw6DW.js";import"./ControlledNotification-D2TmofCz.js";import"./ClearPropsContextView-C5LrpGQW.js";import"./IconWarning-4dYG6Emm.js";import"./Text-SnGLDLtK.js";import"./EmulatedBoldText-UBCiYBJN.js";import"./LoadingSpinner-DRDb2q6e.js";const U={title:"Overlays/Popover",component:s,render:p=>r.jsxs(l,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(s,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const i=c("Popover"),m=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:m,onPress:i.open,children:"Trigger popover"}),r.jsx(s,{triggerRef:m,...p,controller:i,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...t.parameters?.docs?.source}}};const V=["Default","CustomWidth","WithController"];export{e as CustomWidth,o as Default,t as WithController,V as __namedExportsOrder,U as default};
