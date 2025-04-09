import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{P as i,a as R}from"./Popover-LCccCEfa.js";import{R as x}from"./index-CtQTiInQ.js";import{B as h}from"./Button-CkVi4rXV.js";import{u as P}from"./OverlayTrigger-C2ciT0Db.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CcavWj25.js";import"./mergeProps-BKLeaOo7.js";import"./index-DTllGi7h.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-Cdp0xV4M.js";import"./Popover.module-BJC3BRN9.js";import"./DialogTriggerView-D98NT4gk.js";import"./Dialog-D2bUbTtQ.js";import"./Button-BEBevqbU.js";import"./utils-D0CTRpvX.js";import"./ProgressBar-DPPT7aTs.js";import"./Label-BZrcB42p.js";import"./Hidden-Dd0lSYNZ.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-BhTOAlCQ.js";import"./useLocalizedStringFormatter-DpLhROVm.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CEYeyB88.js";import"./useFocus-HZduNndM.js";import"./useFocusRing-HsOmCAqc.js";import"./useFocusable-43R3EC9q.js";import"./RSPContexts-8O1fXkhd.js";import"./OverlayArrow-Cidi8nN7.js";import"./Collection-mdal2UB1.js";import"./CollectionBuilder-Bzd5BBwK.js";import"./Separator-CJeFikfz.js";import"./Text-oMr6ueMZ.js";import"./useOverlayTriggerState-BZ_Sugy1.js";import"./useControlledState-BKUqB07S.js";import"./SelectionManager-BAB-BMSj.js";import"./useEvent-BQK_0uZ_.js";import"./useCollator-B4aWBoUu.js";import"./FocusScope-Cx-5Cw_n.js";import"./VisuallyHidden-p5Z0Rn92.js";import"./IconApp-ZwiVKkvj.js";import"./IconWarning-DwN0_tyk.js";import"./Text-VF_oP7nB.js";import"./browser-BJKb5O22.js";import"./EmulatedBoldText-D1jUzRoU.js";import"./LoadingSpinner-CuFSnwXw.js";import"./context-CTL7IXlD.js";import"./useStatic-6gmUMcuL.js";const vr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(R,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=x.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    width: 800
  }
}`,...(d=(u=t.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var g,f,v;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(v=(f=e.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const hr=["Default","CustomWidth","WithController"];export{t as CustomWidth,o as Default,e as WithController,hr as __namedExportsOrder,vr as default};
