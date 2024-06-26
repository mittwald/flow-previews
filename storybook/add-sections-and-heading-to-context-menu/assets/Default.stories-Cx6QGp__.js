import{P as n,a as R}from"./PopoverTrigger-C35F8xkT.js";import{R as r}from"./index-uCp2LrAq.js";import{B as P}from"./Button-COr4qXCu.js";import{u as T}from"./OverlayTrigger-6VtsQuLn.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D0hgC601.js";import"./PropsContextProvider-DJl9unei.js";import"./index-CqLFpzzG.js";import"./index-BOkhicXD.js";import"./_commonjsHelpers-BosuxZz1.js";import"./OverlayArrow-C3Uw9j7L.js";import"./useFocusRing-DQ9q31uS.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-CPyIEVee.js";import"./useControlledState-B8AA3oOY.js";import"./utils-DsDc2z3f.js";import"./IconApp-DZ6iFK1V.js";import"./IconWarning-D5KLWx1O.js";import"./Text-EyCvEgnK.js";import"./EmulatedBoldText-DzNCZpDp.js";import"./Text-DAlZawmB.js";import"./LoadingSpinner-CsLReDiT.js";import"./Button-D3-i4KBG.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-R-ZPDh0R.js";import"./usePress-v15KrNwr.js";import"./RSPContexts-CJnKmcd7.js";import"./FocusScope-tP5bytlL.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-CrvI0Xse.js";import"./VisuallyHidden-rZYQhwXt.js";import"./context-1gARON2y.js";import"./useSelector-CYhu1s7z.js";const $={title:"Overlays/Popover",component:n,render:p=>r.createElement(R,null,r.createElement(P,null,"Trigger popover"),r.createElement(n,{...p,placement:"bottom right"},"I am a popover."))},e={},o={args:{withTip:!0}},t={render:p=>{const m=T("Popover"),a=r.useRef(null);return r.createElement(r.Fragment,null,r.createElement(P,{ref:a,onPress:m.open},"Trigger popover"),r.createElement(n,{triggerRef:a,...p,controller:m},"I am a popover."))}};var i,s,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var c,u,g;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
