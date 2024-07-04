import{P as n,a as R}from"./PopoverTrigger-DfYVWCk8.js";import{R as r}from"./index-BwDkhjyp.js";import{B as P}from"./Button-CGYujOOx.js";import{u as T}from"./OverlayTrigger-CcMw9uE5.js";import"./clsx-B-dksMZM.js";import"./flowComponent-pf1ZT_RA.js";import"./PropsContextProvider-DR_AoDrQ.js";import"./index-D1Z7wIYD.js";import"./index-B8XB3FuZ.js";import"./_commonjsHelpers-BosuxZz1.js";import"./OverlayArrow-CTAo9QmE.js";import"./useFocusable-Di1f8vLw.js";import"./utils-_0I8Kdxf.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-BgjAeG81.js";import"./useControlledState-C0C-dzuH.js";import"./IconApp-C-B10zNi.js";import"./IconWarning-D08KcEGW.js";import"./Wrap-DQq6jo70.js";import"./Text-OHQxmlAI.js";import"./EmulatedBoldText-B1t6hs5E.js";import"./Text-YaHrFsZr.js";import"./LoadingSpinner-BjsJqdEZ.js";import"./Button-j9P20aTv.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-CipJ8IEr.js";import"./RSPContexts-Bc9pl35m.js";import"./PressResponder-CS6YBkA6.js";import"./FocusScope-h9apr_hQ.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-h5MY4Xo1.js";import"./VisuallyHidden-CctDujdB.js";import"./context-ZkthLU-2.js";import"./useSelector-Pyc-engy.js";const rr={title:"Overlays/Popover",component:n,render:p=>r.createElement(R,null,r.createElement(P,null,"Trigger popover"),r.createElement(n,{...p,placement:"bottom right"},"I am a popover."))},e={},o={args:{withTip:!0}},t={render:p=>{const m=T("Popover"),i=r.useRef(null);return r.createElement(r.Fragment,null,r.createElement(P,{ref:i,onPress:m.open},"Trigger popover"),r.createElement(n,{triggerRef:i,...p,controller:m},"I am a popover."))}};var a,s,l;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var c,u,g;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
