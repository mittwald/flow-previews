import{j as r,R}from"./iframe-ezKPDceg.js";import{P as i,a as x}from"./Popover-BMGoBdJj.js";import{B as h}from"./Button-DbzZMeUS.js";import{u as P}from"./DialogTriggerView-B6gXU8vi.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BFVzvp7W.js";import"./mergeRefs-BdUJJdBQ.js";import"./index-Dda9fw4h.js";import"./Dialog-CsG1YX16.js";import"./Button-DO9HCw5q.js";import"./utils-DzswpBsb.js";import"./ProgressBar-C6U_wRip.js";import"./Label-1idoYD8W.js";import"./Hidden-CFBb6iNG.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CN4tRF6C.js";import"./context-BrV7YpGK.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DYKNfU9_.js";import"./useFocus-DJ-TYVVM.js";import"./useFocusRing-gH5JHApn.js";import"./useFocusable-B-msIfGP.js";import"./RSPContexts-D9JC3ke5.js";import"./OverlayArrow-Cg5cqTaC.js";import"./useControlledState-BblR5lPL.js";import"./Collection-ZxatR5QS.js";import"./CollectionBuilder-CeLFQwBB.js";import"./Separator-Dbz-9PCT.js";import"./Text-BuR4UJfD.js";import"./Group-BDVVyk9o.js";import"./SearchField-CcD3FqPJ.js";import"./FieldError-D8wvACBx.js";import"./Form-CmBAUGhT.js";import"./useLocalizedStringFormatter-B6DQD-FE.js";import"./useTextField-Dj17RY-h.js";import"./useFormReset-pmH2UUNu.js";import"./TextField-CfP2mJzy.js";import"./useEvent-RmC2LF0W.js";import"./SelectionManager-DbiWXVNm.js";import"./useCollator-CIKaMC9W.js";import"./FocusScope-eYFIheUb.js";import"./VisuallyHidden-CoNZ8DQ3.js";import"./IconWarning-iHRHTv2O.js";import"./Text-CUR3tOrp.js";import"./browser-BOjVaVGi.js";import"./EmulatedBoldText-BpljTSGS.js";import"./LoadingSpinner-BRfDN20n.js";import"./context-dSZ45fFT.js";import"./useStatic-CNaXVqhs.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(v=(f=e.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const Rr=["Default","CustomWidth","WithController"];export{t as CustomWidth,o as Default,e as WithController,Rr as __namedExportsOrder,hr as default};
