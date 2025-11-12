import{j as r,R as a}from"./iframe-DKDdzEg2.js";import{P as s,u as c}from"./Popover-FiU_odVZ.js";import{B as n}from"./Button-IIDunxYf.js";import{P as l}from"./PopoverTrigger-C0NOt86m.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./context-CDCUS0mP.js";import"./flowComponent-DT3kn2rn.js";import"./index-6duIgbo8.js";import"./index-BpsioLCE.js";import"./useStatic-D7KAuRzE.js";import"./OverlayTrigger-BFzT5tm9.js";import"./Dialog-B3clCL3D.js";import"./Button-CPtKzFV4.js";import"./utils-glgR2nbC.js";import"./ProgressBar-Wlqbg7O4.js";import"./Hidden-C3L5W06o.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-BHOWQ-F6.js";import"./useFocusRing-C2RFcQ8k.js";import"./useFocusable-DFxE2EDX.js";import"./RSPContexts-CyAJ8woy.js";import"./OverlayArrow-Dk7sPebR.js";import"./useControlledState-Fctu_HD9.js";import"./Collection-B8A5mjCR.js";import"./CollectionBuilder-DqTPNBbL.js";import"./SelectionIndicator-Ba__-_kO.js";import"./Separator-C02nZRTr.js";import"./browser-CFpNIPwD.js";import"./useLocalizedStringFormatter-DYvohNzk.js";import"./ControlledNotification-A-nlkOWl.js";import"./ClearPropsContextView-jEZ-jszv.js";import"./IconWarning-CYZefWcZ.js";import"./Text-CjflxeLx.js";import"./EmulatedBoldText-CD_LMSIk.js";import"./LoadingSpinner-Dty_8Gzu.js";const U={title:"Overlays/Popover",component:s,render:p=>r.jsxs(l,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(s,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const i=c("Popover"),m=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:m,onPress:i.open,children:"Trigger popover"}),r.jsx(s,{triggerRef:m,...p,controller:i,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
