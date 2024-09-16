import{P as m,a as R}from"./PopoverTrigger-CMWz8wiC.js";import{R as r}from"./index-Cs7sjTYM.js";import{B as P}from"./Button-CSV5PcNg.js";import{u as T}from"./OverlayTrigger-uZ2IyM3m.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C5nr8jLZ.js";import"./PropsContextProvider-BmJWDS_p.js";import"./index-C8LjR2Bd.js";import"./index-BU4L-DQy.js";import"./_commonjsHelpers-BosuxZz1.js";import"./OverlayArrow-B3YixoJg.js";import"./useFocusRing-CRCkdtud.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-BSNlGq_b.js";import"./useControlledState-B7K2eYzO.js";import"./utils-CSHM5tWr.js";import"./IconApp-Cw6LIZ6L.js";import"./IconWarning-CYODic7s.js";import"./Wrap-DQq6jo70.js";import"./Text-BeE63-Dr.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Text-BNegcRvf.js";import"./LoadingSpinner-Bx2kpYXf.js";import"./Button-CkDWo4mt.js";import"./Hidden-BsXGu--s.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-Dtk_6mL9.js";import"./usePress-Do5SRlXR.js";import"./RSPContexts-BseA8goh.js";import"./FocusScope-CGKzeA_Y.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-DMhdkBu1.js";import"./VisuallyHidden-D4oQIDY4.js";import"./context-SbXjCjP8.js";import"./useSelector-r0W13MRO.js";const er={title:"Overlays/Popover",component:m,render:p=>r.createElement(R,null,r.createElement(P,null,"Trigger popover"),r.createElement(m,{...p,placement:"bottom right"},"I am a popover."))},e={},o={args:{withTip:!0}},t={render:p=>{const n=T("Popover"),i=r.useRef(null);return r.createElement(r.Fragment,null,r.createElement(P,{ref:i,onPress:n.open},"Trigger popover"),r.createElement(m,{triggerRef:i,...p,controller:n},"I am a popover."))}};var a,s,l;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var c,u,g;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(d=(v=t.parameters)==null?void 0:v.docs)==null?void 0:d.source}}};const or=["Default","WithTip","WithController"];export{e as Default,t as WithController,o as WithTip,or as __namedExportsOrder,er as default};
