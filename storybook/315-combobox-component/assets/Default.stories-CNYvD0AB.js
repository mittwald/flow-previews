import{P as m,a as R}from"./Popover-7GUZlquZ.js";import{R as r}from"./index-Cs7sjTYM.js";import{B as P}from"./Button-BuU2L9Cz.js";import{u as T}from"./OverlayTrigger-C9c93hgx.js";import"./flowComponent-BPK-Va1R.js";import"./PropsContextProvider-DXo7lD_U.js";import"./index-j_f0pOtZ.js";import"./clsx-B-dksMZM.js";import"./index-Cf-03bMR.js";import"./_commonjsHelpers-BosuxZz1.js";import"./OverlayArrow-Tk1JcXPS.js";import"./useFocusRing-CT1maULe.js";import"./ProgressBar-K2upHjuk.js";import"./utils-Cd8r7pc9.js";import"./Label-C-iBdzH7.js";import"./Hidden-C2kgQquV.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-BA8WH6BO.js";import"./useLocalizedStringFormatter-TZkCr3Qr.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-B7K2eYzO.js";import"./IconApp-B6hDZZIl.js";import"./IconWarning-Drpj9upb.js";import"./Wrap-DQq6jo70.js";import"./Text-Cd3nXJGb.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Text-Bnjm0IRl.js";import"./LoadingSpinner-CgFD_RmC.js";import"./Button-DzOzTnc5.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-C99EnWuo.js";import"./usePress-BCyoy2Gl.js";import"./RSPContexts-BseA8goh.js";import"./FocusScope-jamPpPQB.js";import"./getScrollParent-CcmJp979.js";import"./VisuallyHidden-cynug30a.js";import"./context-BQrxIDoz.js";import"./useSelector-CsJYK-4v.js";const pr={title:"Overlays/Popover",component:m,render:p=>r.createElement(R,null,r.createElement(P,null,"Trigger popover"),r.createElement(m,{...p,placement:"bottom right"},"I am a popover."))},e={},o={args:{withTip:!0}},t={render:p=>{const n=T("Popover"),i=r.useRef(null);return r.createElement(r.Fragment,null,r.createElement(P,{ref:i,onPress:n.open},"Trigger popover"),r.createElement(m,{triggerRef:i,...p,controller:n},"I am a popover."))}};var a,s,l;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(l=(s=e.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var c,u,g;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(d=(v=t.parameters)==null?void 0:v.docs)==null?void 0:d.source}}};const mr=["Default","WithTip","WithController"];export{e as Default,t as WithController,o as WithTip,mr as __namedExportsOrder,pr as default};
