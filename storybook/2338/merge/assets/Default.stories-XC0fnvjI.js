import{j as r,R as a}from"./iframe-BZ1p44Xs.js";import{P as i}from"./Popover-CWPz-1RW.js";import{B as n}from"./Button-BXzJaHaH.js";import{P as c}from"./PopoverTrigger-n4V6rmb3.js";import"./flowComponent-DJzVmXlH.js";import{u as l}from"./useOverlayController-Dfa0MUCA.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./OverlayContextProvider-1UbC6cTJ.js";import"./Dialog-DlxSrM7S.js";import"./Button-DOqybSdu.js";import"./utils-Cc2PUaBi.js";import"./index-CP4XrxM9.js";import"./index-39FgH5sT.js";import"./ProgressBar-B4598OFN.js";import"./Label-9zEXlfwO.js";import"./Hidden-VD2bsukW.js";import"./filterDOMProps-BNnC3YgW.js";import"./useLabel-CnpKVv_a.js";import"./context-C5KsUqFD.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-CQ2PTrK5.js";import"./useFocus-O4gnqY9s.js";import"./useFocusRing-vNPEpCai.js";import"./useFocusable-BXiUGBNe.js";import"./RSPContexts-C2tYRgOg.js";import"./OverlayArrow-DcvNa8Le.js";import"./useControlledState-CZ5q_fud.js";import"./Collection-C32khOyt.js";import"./CollectionBuilder-BsYN8aRw.js";import"./SelectionIndicator-CGKICc1u.js";import"./Separator-edxS6LV2.js";import"./Text-DOPFHCGV.js";import"./SelectionManager-BMIvnbkU.js";import"./useCollator-D08tnIgu.js";import"./FocusScope-C1V2bg9k.js";import"./useLocalizedStringFormatter-DIeJHpIF.js";import"./VisuallyHidden-7tUyfyiG.js";import"./IconWarning-BeCXg6tW.js";import"./remote-BEHhGsYi.js";import"./Text-CplKG2wk.js";import"./browser-N7XS9wRL.js";import"./EmulatedBoldText-VgOMGZVr.js";import"./LoadingSpinner-C6Zwv4pY.js";import"./OverlayTrigger-DzQUlxLA.js";import"./DialogTriggerView-p9c1x_E0.js";import"./useStatic-BVYP0IGX.js";const mr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(c,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=l("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    width: 800
  }
}`,...t.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const sr=["Default","CustomWidth","WithController"];export{t as CustomWidth,o as Default,e as WithController,sr as __namedExportsOrder,mr as default};
