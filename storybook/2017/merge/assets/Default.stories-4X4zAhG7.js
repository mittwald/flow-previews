import{j as r,R}from"./iframe-ygucezpU.js";import{P as i,a as x}from"./Popover-BoT9uJpy.js";import{B as h}from"./Button-Dsp-uMAe.js";import{u as P}from"./DialogTriggerView-C9zXFnun.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Bv8w3zYd.js";import"./mergeRefs-C0ZYRiin.js";import"./index-BaLSpMVi.js";import"./ClearPropsContextView-DkeNy3v-.js";import"./useFocus-BBcZge3l.js";import"./ProgressBar-CbOwlFL2.js";import"./utils-Dm2BIGqk.js";import"./Label-BffVQixZ.js";import"./Hidden-sZrOLhP9.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BIOlG5Yn.js";import"./context-DzmzBjoy.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-y1NsnI_K.js";import"./IconWarning-Cs0D7_PK.js";import"./Text-c8GLfZrX.js";import"./browser-BpjCDOvP.js";import"./EmulatedBoldText-oasbrdcJ.js";import"./Text-DGTV1FYP.js";import"./LoadingSpinner-DHdSJfkf.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-TZqZqT18.js";import"./Button-CrpDhUsv.js";import"./usePress-BqrMcV_T.js";import"./useFocusRing-CFbBFNPO.js";import"./useFocusable-CmrOOHc4.js";import"./context-stas4iuT.js";import"./useStatic-B18UmQuP.js";import"./RSPContexts-Bg25W6Pr.js";import"./FocusScope-kmUkL49h.js";import"./useCollator-CZ70YDPg.js";import"./VisuallyHidden-CIvyEb44.js";import"./Collection-CP_tcz-x.js";import"./CollectionBuilder-ZRNciRSk.js";import"./context-Bf2zQWgY.js";import"./Separator-CbVhXDvO.js";import"./SelectionManager-D4AWNFz3.js";import"./useEvent-Dau2XfVg.js";const lr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    width: 800
  }
}`,...(d=(u=e.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var g,f,v;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(v=(f=t.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const ur=["Default","CustomWidth","WithController"];export{e as CustomWidth,o as Default,t as WithController,ur as __namedExportsOrder,lr as default};
