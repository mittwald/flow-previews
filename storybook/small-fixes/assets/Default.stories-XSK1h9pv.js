import{P as n,a as R}from"./PopoverTrigger-ogW-oUPn.js";import{R as r}from"./index-Cs7sjTYM.js";import{B as P}from"./Button-HXKu8JZI.js";import{u as T}from"./OverlayTrigger-CQB85vT6.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CmFvo3FE.js";import"./PropsContextProvider-58HgA8rU.js";import"./index-C8LjR2Bd.js";import"./index-BMdlDBjA.js";import"./_commonjsHelpers-BosuxZz1.js";import"./OverlayArrow-DEf4p40l.js";import"./useFocusable-CMUHH7RC.js";import"./utils-Ca6JWPXc.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-J1nK3MOF.js";import"./useControlledState-B7K2eYzO.js";import"./IconApp-Cq2nF_H2.js";import"./IconWarning-CT4MKmtH.js";import"./Wrap-DQq6jo70.js";import"./Text-CKRVNL4F.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Text-Bu-3W4UG.js";import"./LoadingSpinner-DmXq9kUh.js";import"./Button-ImYwklq8.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-BgSaJexe.js";import"./RSPContexts-BseA8goh.js";import"./FocusScope-CYj0PTxA.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-DMhdkBu1.js";import"./VisuallyHidden-DOEjDcNd.js";import"./context-BnTmsIr7.js";import"./useSelector-57VmxYcA.js";const $={title:"Overlays/Popover",component:n,render:p=>r.createElement(R,null,r.createElement(P,null,"Trigger popover"),r.createElement(n,{...p,placement:"bottom right"},"I am a popover."))},e={},o={args:{withTip:!0}},t={render:p=>{const m=T("Popover"),a=r.useRef(null);return r.createElement(r.Fragment,null,r.createElement(P,{ref:a,onPress:m.open},"Trigger popover"),r.createElement(n,{triggerRef:a,...p,controller:m},"I am a popover."))}};var i,s,l;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:"{}",...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var c,u,g;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
