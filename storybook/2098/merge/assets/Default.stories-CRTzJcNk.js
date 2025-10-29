import{j as r,R as a}from"./iframe-BQyHcTNh.js";import{P as i,u as c}from"./Popover-DSb6ue0f.js";import{B as n}from"./Button-ieCP1ArV.js";import{P as l}from"./PopoverTrigger-DhkGUYO9.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./context-B5Yt5ZbD.js";import"./flowComponent-n43oODHt.js";import"./index-BkXVqc6U.js";import"./index-D5h5WobT.js";import"./useStatic-CIMbf_kn.js";import"./OverlayContextProvider-Cx4xwIBd.js";import"./Dialog-CTkyeFiO.js";import"./Button-C2idEpfM.js";import"./utils-CdCPWCHO.js";import"./ProgressBar-BXdleHGA.js";import"./Label-D_Hg-3H4.js";import"./Hidden-c61kZDYL.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-DeM_oEx1.js";import"./context-BymCJUNL.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-qWGUTJsN.js";import"./useFocus-COF7nP05.js";import"./useFocusRing-gNgZcCH8.js";import"./useFocusable-DJd2VQkc.js";import"./RSPContexts-BtdGc8q9.js";import"./OverlayArrow-Dp6PlRHE.js";import"./useControlledState-TEYDAVm8.js";import"./Collection-DEfh8kkF.js";import"./CollectionBuilder-D9BuGY1P.js";import"./SelectionIndicator-BnroM9vv.js";import"./Separator-BIV1anzw.js";import"./Text-C9BF5CjQ.js";import"./SelectionManager-DeoXhPYy.js";import"./useEvent-BWXlYds5.js";import"./useCollator-B9ukcsEW.js";import"./FocusScope-DELlCJxb.js";import"./useLocalizedStringFormatter--7zmdW8B.js";import"./VisuallyHidden-rd1eTAwo.js";import"./ClearPropsContextView-BeRr4MLk.js";import"./ClearPropsContext-CD4xLCoc.js";import"./IconWarning-D8COeLpG.js";import"./Text-_hc15B6K.js";import"./browser-CktdIn7a.js";import"./EmulatedBoldText-77q4Ify-.js";import"./LoadingSpinner-CEYsHom-.js";import"./OverlayTrigger-CTujVhSf.js";import"./ControlledNotification-CL-0TnDq.js";const nr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(l,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=c("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const ar=["Default","CustomWidth","WithController"];export{t as CustomWidth,o as Default,e as WithController,ar as __namedExportsOrder,nr as default};
