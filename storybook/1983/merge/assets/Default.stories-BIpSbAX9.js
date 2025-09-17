import{j as r,R}from"./iframe-BAGTntfB.js";import{P as i,a as x}from"./Popover-DIu09GMY.js";import{B as h}from"./Button-ClQyukEh.js";import{u as P}from"./DialogTriggerView-BimJk9-6.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BVEq68NN.js";import"./mergeRefs-Ct4YEWrU.js";import"./index-TExY8AE4.js";import"./OverlayArrow-CIJbDC1X.js";import"./useFocus-kqlw9bYS.js";import"./ProgressBar-yPlEiM2Y.js";import"./utils-DSdQ5U5C.js";import"./Label-CWJf374V.js";import"./Hidden-BFcGcOTS.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-jLc0StSH.js";import"./context-C8vSVPtT.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-hqI-vqoJ.js";import"./IconWarning-SECJkQke.js";import"./Text-oSCAFhn5.js";import"./browser-D8tJ8M3I.js";import"./EmulatedBoldText-hfJfJt2X.js";import"./Text-CZggwRKM.js";import"./LoadingSpinner-DuAh__4X.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-DdilTbMd.js";import"./Button-DldLr0Dh.js";import"./usePress-BeTrTVD4.js";import"./useFocusRing-uRy9P7F2.js";import"./useFocusable-CvI8LjKe.js";import"./context-B68punRm.js";import"./useStatic-B7HpxjOi.js";import"./RSPContexts-u_LIQrA5.js";import"./FocusScope-Dx9vsLFf.js";import"./useCollator-C2nKvxEE.js";import"./VisuallyHidden-CCDJ4X70.js";import"./Collection-CyU2lrEr.js";import"./CollectionBuilder-BjHCxw5W.js";import"./Separator-BoyfOubv.js";import"./Group-CQeggyQD.js";import"./SearchField-BATSQzLF.js";import"./FieldError-DwSlV6wI.js";import"./Form-BImra2vo.js";import"./useTextField-aRRnCdTt.js";import"./useFormReset-DMVQ-F_N.js";import"./TextField-CGb-3Yan.js";import"./useEvent-DLvyF1-Y.js";import"./SelectionManager-DNLJemTe.js";const vr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
