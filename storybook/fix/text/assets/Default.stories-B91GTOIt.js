import{P as n,a as R}from"./PopoverTrigger-C-NNp23A.js";import{R as r}from"./index-BwDkhjyp.js";import{B as P}from"./Button-BD_35j3o.js";import{u as T}from"./OverlayTrigger-C-T-XlBI.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DpPOHS38.js";import"./PropsContextProvider-DwTel3aB.js";import"./index-DVe9vSxq.js";import"./index-B8XB3FuZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./OverlayArrow-CscfTk_S.js";import"./useFocusable-C-qOUFhv.js";import"./utils-CcQIssJO.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-BNeRQeib.js";import"./useControlledState-C0C-dzuH.js";import"./IconApp-ZB_mDMmk.js";import"./IconWarning-BtAGI7Yn.js";import"./Wrap-DQq6jo70.js";import"./Text-816V_8-v.js";import"./EmulatedBoldText-B1t6hs5E.js";import"./Text-DqgvIX4k.js";import"./LoadingSpinner-CsAgL5A_.js";import"./Button-CoDApBTL.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-Bw-L1sLn.js";import"./RSPContexts-Bc9pl35m.js";import"./FocusScope-DBQ4F6TM.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-kg7v6Afk.js";import"./VisuallyHidden-BopbO3Wg.js";import"./context-D0eOVtdN.js";import"./useSelector-43iio57k.js";const $={title:"Overlays/Popover",component:n,render:p=>r.createElement(R,null,r.createElement(P,null,"Trigger popover"),r.createElement(n,{...p,placement:"bottom right"},"I am a popover."))},e={},o={args:{withTip:!0}},t={render:p=>{const m=T("Popover"),a=r.useRef(null);return r.createElement(r.Fragment,null,r.createElement(P,{ref:a,onPress:m.open},"Trigger popover"),r.createElement(n,{triggerRef:a,...p,controller:m},"I am a popover."))}};var i,s,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var c,u,g;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
