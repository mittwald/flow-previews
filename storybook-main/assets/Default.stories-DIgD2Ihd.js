import{P as n,a as R}from"./PopoverTrigger-sBBumrpB.js";import{R as r}from"./index-Cs7sjTYM.js";import{B as P}from"./Button-DiD_FILt.js";import{u as T}from"./OverlayTrigger-XF11aZ7M.js";import"./clsx-B-dksMZM.js";import"./flowComponent-Cj8AjSn2.js";import"./PropsContextProvider-BmJWDS_p.js";import"./index-C8LjR2Bd.js";import"./index-BU4L-DQy.js";import"./_commonjsHelpers-BosuxZz1.js";import"./OverlayArrow-B9aGSeR2.js";import"./useFocusable-DdFCD-YN.js";import"./utils-CgpzwoFP.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-BSNlGq_b.js";import"./useControlledState-B7K2eYzO.js";import"./IconApp-D7SRtdnL.js";import"./IconWarning-C39p2-2n.js";import"./Wrap-DQq6jo70.js";import"./Text-DaiPF-AG.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Text-BgIWd_-0.js";import"./LoadingSpinner-DfOzCRsp.js";import"./Button-B_pBO4HW.js";import"./Hidden-BsXGu--s.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-C9_maMb0.js";import"./RSPContexts-BseA8goh.js";import"./FocusScope-jwB0dEBj.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-DMhdkBu1.js";import"./VisuallyHidden-Bx6BLr_2.js";import"./context-DynGahZS.js";import"./useSelector-B1H-qoc7.js";const rr={title:"Overlays/Popover",component:n,render:p=>r.createElement(R,null,r.createElement(P,null,"Trigger popover"),r.createElement(n,{...p,placement:"bottom right"},"I am a popover."))},e={},o={args:{withTip:!0}},t={render:p=>{const m=T("Popover"),i=r.useRef(null);return r.createElement(r.Fragment,null,r.createElement(P,{ref:i,onPress:m.open},"Trigger popover"),r.createElement(n,{triggerRef:i,...p,controller:m},"I am a popover."))}};var a,s,l;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var c,u,g;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
