import{P as n,a as R}from"./PopoverTrigger-C23yS8da.js";import{R as r}from"./index-uCp2LrAq.js";import{B as P}from"./Button-D6GiwIW_.js";import{u as T}from"./OverlayTrigger-CInB0dMO.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Cll4pGCY.js";import"./PropsContextProvider-RdMO5ekw.js";import"./index-CFQDndEx.js";import"./index-BOkhicXD.js";import"./_commonjsHelpers-BosuxZz1.js";import"./OverlayArrow-B_2Pd_cl.js";import"./useFocusable-B1CfUGG-.js";import"./utils-DZgOXw50.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-Bpx1Gtyq.js";import"./useControlledState-B8AA3oOY.js";import"./IconApp-DWya8WHB.js";import"./IconWarning-CVIujYNc.js";import"./Wrap-DQq6jo70.js";import"./Text-Dgrf8S-7.js";import"./EmulatedBoldText-DzNCZpDp.js";import"./Text-3FUNhTNc.js";import"./LoadingSpinner-xMX5UQ9s.js";import"./Button-DvIckO9Z.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-Bc78XfGJ.js";import"./RSPContexts-CJnKmcd7.js";import"./FocusScope-CBGue2Od.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-POLqFEYE.js";import"./VisuallyHidden-CVANJuSe.js";import"./context-CSQJgabl.js";import"./useSelector-DpPpxyR7.js";const $={title:"Overlays/Popover",component:n,render:p=>r.createElement(R,null,r.createElement(P,null,"Trigger popover"),r.createElement(n,{...p,placement:"bottom right"},"I am a popover."))},e={},o={args:{withTip:!0}},t={render:p=>{const m=T("Popover"),a=r.useRef(null);return r.createElement(r.Fragment,null,r.createElement(P,{ref:a,onPress:m.open},"Trigger popover"),r.createElement(n,{triggerRef:a,...p,controller:m},"I am a popover."))}};var i,s,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var c,u,g;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
