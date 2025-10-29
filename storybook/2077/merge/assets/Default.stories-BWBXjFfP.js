import{j as r,R as a}from"./iframe-BYlM8TfH.js";import{P as i,u as c}from"./Popover-D-aIXqDf.js";import{B as n}from"./Button-DrjwoUCb.js";import{P as l}from"./PopoverTrigger-_xnNZ9uW.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./context-BILGmIqx.js";import"./flowComponent-CJQUzeBk.js";import"./index-Z9ghxMfX.js";import"./index-BpRuSIpR.js";import"./useStatic-6sdTMqO6.js";import"./OverlayContextProvider-Dz9UAd6s.js";import"./Dialog-BSP5EDkY.js";import"./Button-BmIa1mS-.js";import"./utils-BDqIfUE7.js";import"./ProgressBar--do5EHZn.js";import"./Label-COiWxsLa.js";import"./Hidden-CSqzjE-Z.js";import"./filterDOMProps-i7L6S0l1.js";import"./useLabel-IFSjtkUu.js";import"./context-BxRqKeiD.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./usePress-kOJVCjd_.js";import"./useFocus-B9vfYs8K.js";import"./useFocusRing-BaqqhOKG.js";import"./useFocusable-SxOERRg1.js";import"./RSPContexts-BeeOgZFj.js";import"./OverlayArrow-Dcf6I1B8.js";import"./useControlledState-Bs4hSWnz.js";import"./Collection-C6Fc_Z_x.js";import"./CollectionBuilder-CXjS8Zh0.js";import"./SelectionIndicator-BFnOXggJ.js";import"./Separator-DKnWRjMi.js";import"./Text-Dc8La0ek.js";import"./SelectionManager-Bmb-1_mZ.js";import"./useEvent-DHF942Kq.js";import"./useCollator-BcPpPzi9.js";import"./FocusScope-ChlmKh1V.js";import"./useLocalizedStringFormatter-DNjkRVig.js";import"./VisuallyHidden-D5yM91eE.js";import"./ClearPropsContextView-BJe-Torm.js";import"./ClearPropsContext-BpBo361K.js";import"./IconWarning-WQ4wo7kP.js";import"./Text-ZBSxG77c.js";import"./browser-D2sPcOVM.js";import"./EmulatedBoldText-bM5QDT6k.js";import"./LoadingSpinner-CqJPIXvI.js";import"./OverlayTrigger-B-qRJ8Xp.js";import"./ControlledNotification-Dl6zeRdw.js";const nr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(l,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=c("Popover"),s=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
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
