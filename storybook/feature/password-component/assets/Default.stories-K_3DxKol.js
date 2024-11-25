import{P as m,a as R}from"./Popover-BlzCrk_Z.js";import{R as r}from"./index-Cs7sjTYM.js";import{B as P}from"./Button-N_hBXId1.js";import{u as h}from"./OverlayTrigger-CS8JLNke.js";import"./flowComponent-BPUkT_mI.js";import"./PropsContextProvider-CRusYdr1.js";import"./index-j_f0pOtZ.js";import"./clsx-B-dksMZM.js";import"./index-Cf-03bMR.js";import"./_commonjsHelpers-BosuxZz1.js";import"./OverlayArrow-DfSRANAL.js";import"./useFocusRing-CqFdZJbR.js";import"./ProgressBar-DKheN8nI.js";import"./utils-BFFU14Eb.js";import"./Label-6hm79Lf2.js";import"./Hidden-C2kgQquV.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-BA8WH6BO.js";import"./useLocalizedStringFormatter-TZkCr3Qr.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-B7K2eYzO.js";import"./IconApp-CHbYnbLr.js";import"./IconWarning-DXJUFqJH.js";import"./Wrap-DQq6jo70.js";import"./Text-CcFqEq5L.js";import"./EmulatedBoldText-Dmze-Iwg.js";import"./Text-CpSy2HXY.js";import"./LoadingSpinner-VvlSDj-i.js";import"./Button-qrG_K1uY.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-Dv7TsfPg.js";import"./usePress-Dcn7RY69.js";import"./RSPContexts-BseA8goh.js";import"./FocusScope-DxaEUeh1.js";import"./getScrollParent-CcmJp979.js";import"./VisuallyHidden-BOk7_Rfy.js";import"./context-B3WeE0v4.js";import"./useSelector-B7WwLw1m.js";const pr={title:"Overlays/Popover",component:m,render:p=>r.createElement(R,null,r.createElement(P,null,"Trigger popover"),r.createElement(m,{...p,placement:"bottom right"},"I am a popover."))},o={},e={args:{width:800}},t={render:p=>{const n=h("Popover"),i=r.useRef(null);return r.createElement(r.Fragment,null,r.createElement(P,{ref:i,onPress:n.open},"Trigger popover"),r.createElement(m,{triggerRef:i,...p,controller:n},"I am a popover."))}};var a,s,l;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(l=(s=o.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var c,u,g;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    width: 800
  }
}`,...(g=(u=e.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var d,f,v;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(v=(f=t.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const mr=["Default","CustomWidth","WithController"];export{e as CustomWidth,o as Default,t as WithController,mr as __namedExportsOrder,pr as default};
