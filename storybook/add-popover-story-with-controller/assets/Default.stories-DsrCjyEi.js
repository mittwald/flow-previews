import{P as m,a as R}from"./PopoverTrigger-CXDE_v-y.js";import{R as r}from"./index-uCp2LrAq.js";import{B as P}from"./Button-C2ojJqM-.js";import{u as T}from"./OverlayTrigger-YOZXkwyI.js";import"./clsx-B-dksMZM.js";import"./flowComponent-dvxR-0IS.js";import"./PropsContextProvider-RdMO5ekw.js";import"./index-CFQDndEx.js";import"./index-BOkhicXD.js";import"./_commonjsHelpers-BosuxZz1.js";import"./OverlayArrow-BCqBDIej.js";import"./useFocusable-DpEA8Hsr.js";import"./utils-DZgOXw50.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-CHReNXSI.js";import"./useControlledState-B8AA3oOY.js";import"./IconApp-CqdsO7mM.js";import"./IconWarning-BSZUxli_.js";import"./Wrap-DQq6jo70.js";import"./Text-Cf3enN5E.js";import"./EmulatedBoldText-DzNCZpDp.js";import"./Text-D6Zjnbf0.js";import"./LoadingSpinner-D0rf0hAS.js";import"./Button-D4VcI4Uu.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-CaJD4Kpr.js";import"./RSPContexts-CJnKmcd7.js";import"./FocusScope-Bpk85l6Y.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-POLqFEYE.js";import"./VisuallyHidden-DWE0U9Im.js";import"./context-CiF9GZYc.js";import"./useSelector-B0FdOkS4.js";const $={title:"Overlays/Popover",component:m,render:p=>r.createElement(R,null,r.createElement(P,null,"Trigger popover"),r.createElement(m,{...p,placement:"bottom right"},"I am a popover."))},e={},o={args:{withTip:!0}},t={render:p=>{const n=T("Popover");let a=r.useRef(null);return r.createElement(r.Fragment,null,r.createElement(P,{ref:a,onPress:n.open},"Trigger popover"),r.createElement(m,{triggerRef:a,...p,controller:n},"I am a popover."))}};var i,s,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var c,u,g;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    withTip: true
  }
}`,...(g=(u=o.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var f,v,d;t.parameters={...t.parameters,docs:{...(f=t.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: props => {
    const controller = useOverlayController("Popover");
    let triggerRef = React.useRef(null);
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
