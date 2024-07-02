import{P as n,a as R}from"./PopoverTrigger-6KT5KTFb.js";import{R as r}from"./index-uCp2LrAq.js";import{B as P}from"./Button-CKjWx2QM.js";import{u as T}from"./OverlayTrigger-PMv2-p4P.js";import"./clsx-B-dksMZM.js";import"./flowComponent-d9koHm8X.js";import"./PropsContextProvider-DJl9unei.js";import"./index-CqLFpzzG.js";import"./index-BOkhicXD.js";import"./_commonjsHelpers-BosuxZz1.js";import"./OverlayArrow-DobB3-tX.js";import"./useFocusable-DIY1EfD0.js";import"./utils-CRveUs4Q.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-CPyIEVee.js";import"./useControlledState-B8AA3oOY.js";import"./IconApp-08dtyhav.js";import"./IconWarning--xZ87BQk.js";import"./Wrap-DQq6jo70.js";import"./Text-CzfDsx2u.js";import"./EmulatedBoldText-DzNCZpDp.js";import"./Text-BxG67LRB.js";import"./LoadingSpinner-DBUWTLW8.js";import"./Button-B6RNnFE-.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-B-418flx.js";import"./RSPContexts-CJnKmcd7.js";import"./PressResponder-CvugjgZN.js";import"./FocusScope-DRFNwxZB.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-CrvI0Xse.js";import"./VisuallyHidden-BwH5wu93.js";import"./context-DGHf5otc.js";import"./useSelector-BUIORffs.js";const rr={title:"Overlays/Popover",component:n,render:p=>r.createElement(R,null,r.createElement(P,null,"Trigger popover"),r.createElement(n,{...p,placement:"bottom right"},"I am a popover."))},e={},o={args:{withTip:!0}},t={render:p=>{const m=T("Popover"),i=r.useRef(null);return r.createElement(r.Fragment,null,r.createElement(P,{ref:i,onPress:m.open},"Trigger popover"),r.createElement(n,{triggerRef:i,...p,controller:m},"I am a popover."))}};var a,s,l;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var c,u,g;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(d=(v=t.parameters)==null?void 0:v.docs)==null?void 0:d.source}}};const er=["Default","WithTip","WithController"];export{e as Default,t as WithController,o as WithTip,er as __namedExportsOrder,rr as default};
