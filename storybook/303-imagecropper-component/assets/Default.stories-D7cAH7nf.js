import{P as n,a as R}from"./PopoverTrigger-tlRjFQDU.js";import{R as r}from"./index-Cs7sjTYM.js";import{B as P}from"./Button-m5USM9JU.js";import{u as T}from"./OverlayTrigger-BxJNM7zm.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BttIposY.js";import"./PropsContextProvider-C-7PaZ52.js";import"./index-Dy0c0dcE.js";import"./index-BMdlDBjA.js";import"./_commonjsHelpers-BosuxZz1.js";import"./OverlayArrow-BBlidXZz.js";import"./useFocusable-OFlS-6qe.js";import"./utils-Cy-A-nlV.js";import"./number-nHrFdSb-.js";import"./useLocalizedStringFormatter-Ccpl5Mb8.js";import"./useControlledState-B7K2eYzO.js";import"./IconApp-CyHi4WPz.js";import"./IconWarning-DZJaqlYL.js";import"./Wrap-DQq6jo70.js";import"./Text-BM3moMBE.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Text-Dh5WnJTs.js";import"./LoadingSpinner-T2v-ofXf.js";import"./Button-DrQgql3X.js";import"./filterDOMProps-CeZl_uWj.js";import"./usePress-CTrgc7uI.js";import"./RSPContexts-BseA8goh.js";import"./PressResponder-COi_Rbo6.js";import"./FocusScope-67rE8EpU.js";import"./getScrollParent-CcmJp979.js";import"./useLabels-n83dATVM.js";import"./VisuallyHidden-D76woJCP.js";import"./context-ByqglxCN.js";import"./useSelector-e9voYkxv.js";const rr={title:"Overlays/Popover",component:n,render:p=>r.createElement(R,null,r.createElement(P,null,"Trigger popover"),r.createElement(n,{...p,placement:"bottom right"},"I am a popover."))},e={},o={args:{withTip:!0}},t={render:p=>{const m=T("Popover"),i=r.useRef(null);return r.createElement(r.Fragment,null,r.createElement(P,{ref:i,onPress:m.open},"Trigger popover"),r.createElement(n,{triggerRef:i,...p,controller:m},"I am a popover."))}};var a,s,l;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var c,u,g;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
