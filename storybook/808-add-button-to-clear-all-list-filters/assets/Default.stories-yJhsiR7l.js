import{P as m,a as R}from"./PopoverTrigger-XlMnyj-9.js";import{R as r}from"./index-Cs7sjTYM.js";import{B as P}from"./Button-BqM2Kenw.js";import{u as T}from"./OverlayTrigger-BvOr0J9V.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D7ioKQ_2.js";import"./PropsContextProvider-BmJWDS_p.js";import"./index-C8LjR2Bd.js";import"./index-Cf-03bMR.js";import"./_commonjsHelpers-BosuxZz1.js";import"./OverlayArrow-B8rEgeMV.js";import"./useFocusRing-CRCkdtud.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-BSNlGq_b.js";import"./useControlledState-B7K2eYzO.js";import"./utils-BBsc42SX.js";import"./IconApp-BOae6dD3.js";import"./IconWarning-P6NmkjLC.js";import"./Wrap-DQq6jo70.js";import"./Text-DYnmzK5R.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Text-C0gOxGaJ.js";import"./LoadingSpinner-ZeZA4Lmj.js";import"./Button-BknGA9dM.js";import"./Hidden-DMUPAT4b.js";import"./filterDOMProps-CeZl_uWj.js";import"./useFocusable-D6sODRzj.js";import"./usePress-Do5SRlXR.js";import"./RSPContexts-BseA8goh.js";import"./FocusScope-CGKzeA_Y.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-DMhdkBu1.js";import"./VisuallyHidden-D4oQIDY4.js";import"./context-Dd6hPQBJ.js";import"./useSelector-0qDIPR45.js";const er={title:"Overlays/Popover",component:m,render:p=>r.createElement(R,null,r.createElement(P,null,"Trigger popover"),r.createElement(m,{...p,placement:"bottom right"},"I am a popover."))},e={},o={args:{withTip:!0}},t={render:p=>{const n=T("Popover"),i=r.useRef(null);return r.createElement(r.Fragment,null,r.createElement(P,{ref:i,onPress:n.open},"Trigger popover"),r.createElement(m,{triggerRef:i,...p,controller:n},"I am a popover."))}};var a,s,l;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var c,u,g;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
