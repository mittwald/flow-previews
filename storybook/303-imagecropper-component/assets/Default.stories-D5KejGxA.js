import{P as m,a as R}from"./PopoverTrigger-BG2gHMpH.js";import{R as r}from"./index-Cs7sjTYM.js";import{B as P}from"./Button-CP_UNic0.js";import{u as T}from"./OverlayTrigger-Bdr7_DCO.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DojWstBP.js";import"./PropsContextProvider-CE2pl7GD.js";import"./index-DKTAOSvX.js";import"./index-Cf-03bMR.js";import"./_commonjsHelpers-BosuxZz1.js";import"./OverlayArrow-DTpAwzOr.js";import"./useFocusRing-if03xCoO.js";import"./ProgressBar-AEPgO8_B.js";import"./utils-BwYH5X3X.js";import"./Label-z8V7EdU9.js";import"./Hidden-CCrdO6Wk.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-RWB8_cdz.js";import"./useLocalizedStringFormatter-A1OcE67O.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-B7K2eYzO.js";import"./IconApp-BvR14QOm.js";import"./IconWarning-DvIm1kNF.js";import"./Wrap-DQq6jo70.js";import"./Text-U6fXasfV.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Text-Dd84vsje.js";import"./LoadingSpinner-CmBEOOxV.js";import"./Button-BebB4Pfr.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-VJrkZIcY.js";import"./usePress-1fQJjpyE.js";import"./RSPContexts-BseA8goh.js";import"./PressResponder-CCvTmYWN.js";import"./FocusScope--STy3lDT.js";import"./getScrollParent-CcmJp979.js";import"./VisuallyHidden-BWHYRTKp.js";import"./context-D-nUHgHo.js";import"./useSelector-DDdDwEvg.js";const mr={title:"Overlays/Popover",component:m,render:p=>r.createElement(R,null,r.createElement(P,null,"Trigger popover"),r.createElement(m,{...p,placement:"bottom right"},"I am a popover."))},e={},o={args:{withTip:!0}},t={render:p=>{const i=T("Popover"),n=r.useRef(null);return r.createElement(r.Fragment,null,r.createElement(P,{ref:n,onPress:i.open},"Trigger popover"),r.createElement(m,{triggerRef:n,...p,controller:i},"I am a popover."))}};var a,s,l;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var c,u,g;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    withTip: true
  }
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var f,v,d;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(d=(v=t.parameters)==null?void 0:v.docs)==null?void 0:d.source}}};const ir=["Default","WithTip","WithController"];export{e as Default,t as WithController,o as WithTip,ir as __namedExportsOrder,mr as default};
