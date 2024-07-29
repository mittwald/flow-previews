import{P as n,a as R}from"./PopoverTrigger-CPc_PWRs.js";import{R as r}from"./index-Cs7sjTYM.js";import{B as P}from"./Button-ETWxWgqR.js";import{u as T}from"./OverlayTrigger-05SHITif.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BqZrLudx.js";import"./PropsContextProvider-58HgA8rU.js";import"./index-C8LjR2Bd.js";import"./index-BMdlDBjA.js";import"./_commonjsHelpers-BosuxZz1.js";import"./OverlayArrow-BxlO7pa5.js";import"./useFocusable-OJvPCLGe.js";import"./utils-Ca6JWPXc.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-QuGsJjbc.js";import"./useControlledState-B7K2eYzO.js";import"./IconApp-COwJ0ZRR.js";import"./IconWarning-CBdDJmJC.js";import"./Wrap-DQq6jo70.js";import"./Text-DrKyKMJq.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Text-DkFxhH4d.js";import"./LoadingSpinner-BB5hHLYh.js";import"./Button-DB69cHYY.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-DiyYDbeg.js";import"./RSPContexts-BseA8goh.js";import"./FocusScope-DZAGVQVL.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-DMhdkBu1.js";import"./VisuallyHidden-BF1ug10U.js";import"./context-D6OB3BUw.js";import"./useSelector-D7b7Gg7N.js";const $={title:"Overlays/Popover",component:n,render:p=>r.createElement(R,null,r.createElement(P,null,"Trigger popover"),r.createElement(n,{...p,placement:"bottom right"},"I am a popover."))},e={},o={args:{withTip:!0}},t={render:p=>{const m=T("Popover"),a=r.useRef(null);return r.createElement(r.Fragment,null,r.createElement(P,{ref:a,onPress:m.open},"Trigger popover"),r.createElement(n,{triggerRef:a,...p,controller:m},"I am a popover."))}};var i,s,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var c,u,g;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(d=(v=t.parameters)==null?void 0:v.docs)==null?void 0:d.source}}};const rr=["Default","WithTip","WithController"];export{e as Default,t as WithController,o as WithTip,rr as __namedExportsOrder,$ as default};
