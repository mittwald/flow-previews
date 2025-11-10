import{j as r,R as a}from"./iframe-D4AGuMnx.js";import{P as s,u as c}from"./Popover-dCAEc0Wh.js";import{B as n}from"./Button-DtTeM47l.js";import{P as l}from"./PopoverTrigger-CvAH8Qs9.js";import"./index-nuYtCEEu.js";import"./clsx-B-dksMZM.js";import"./context-DUgKYd_B.js";import"./flowComponent-BIyscBzo.js";import"./index-Cd_u2pV_.js";import"./index-DNvdHJqk.js";import"./useStatic-CK2cw9Tx.js";import"./OverlayTrigger-Dm3E0-9T.js";import"./Dialog-Dct0khyO.js";import"./Button-84EHC3SL.js";import"./utils-CqMmhAxq.js";import"./ProgressBar-_bs3wo-c.js";import"./Hidden-BnByJu4s.js";import"./filterDOMProps-i7L6S0l1.js";import"./context-Bzk-5tqO.js";import"./useFocusRing-B0_rzNcg.js";import"./useFocusable-qdXI3c9W.js";import"./RSPContexts-B4Pxvc-Q.js";import"./OverlayArrow-DclzRyUb.js";import"./useControlledState-DvYaxqI_.js";import"./Collection-BeK_S4wY.js";import"./CollectionBuilder-CWpdOayg.js";import"./SelectionIndicator-D5j5oFjn.js";import"./Separator-YST-GtXN.js";import"./browser-3OZPWisM.js";import"./useLocalizedStringFormatter-BNVQM74q.js";import"./ControlledNotification-RGp8id5u.js";import"./ClearPropsContextView-BN-YBkpQ.js";import"./IconWarning-BC3tK9kj.js";import"./Text-BtpbrdrH.js";import"./EmulatedBoldText-IEU2-xTn.js";import"./LoadingSpinner-u-oBwaFl.js";const U={title:"Overlays/Popover",component:s,render:p=>r.jsxs(l,{children:[r.jsx(n,{children:"Trigger popover"}),r.jsx(s,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const i=c("Popover"),m=a.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(n,{ref:m,onPress:i.open,children:"Trigger popover"}),r.jsx(s,{triggerRef:m,...p,controller:i,children:"I am a popover."})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
