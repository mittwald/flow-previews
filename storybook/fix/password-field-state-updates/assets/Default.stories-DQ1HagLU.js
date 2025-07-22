import{j as r,R}from"./iframe-RyyXbGrI.js";import{P as i,a as x}from"./Popover-qTkiQdIC.js";import{B as h}from"./Button-FN0w0vAZ.js";import{u as P}from"./DialogTriggerView-B2iMm6M7.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-B1uYDNh0.js";import"./mergeRefs-TzEeC_ny.js";import"./index-CkUh_6WG.js";import"./Dialog-Dzx6c2m8.js";import"./Button-BVPFu0Yj.js";import"./utils-CSApR2SK.js";import"./ProgressBar-C1MhwVHg.js";import"./Label-DyZcxK1e.js";import"./Hidden-CBQwCv0D.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DfsiheSh.js";import"./context-CVBx-lw8.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BifiEpzl.js";import"./useFocus-CDHSIkFG.js";import"./useFocusRing-Cp5tV9bB.js";import"./useFocusable-B1PzsIJa.js";import"./RSPContexts-CZzeIyng.js";import"./OverlayArrow-Dd73_Jpk.js";import"./useControlledState-BAW98GGA.js";import"./Collection-C_jXpzbR.js";import"./CollectionBuilder-BR9WT68g.js";import"./Separator-D5NfBiGb.js";import"./Text-BimzKAGJ.js";import"./Input-BJStptK8.js";import"./SearchField-lGDi9OEc.js";import"./FieldError-BvyzplcM.js";import"./Form-BkhipvRR.js";import"./Group-l6ZdH-Sd.js";import"./useLocalizedStringFormatter-D3yp90gU.js";import"./useTextField-CBuiCA3E.js";import"./useFormReset-BKdfKWXM.js";import"./TextField-aC9_w8eq.js";import"./SelectionManager-DjIO02do.js";import"./useEvent-B55JhqGe.js";import"./useCollator-Cz2D5_0V.js";import"./FocusScope-BOeRx0u7.js";import"./VisuallyHidden-BRg-FWnS.js";import"./IconWarning-C52r753T.js";import"./Text-Bwgmr3xm.js";import"./browser-DZnqvRXk.js";import"./EmulatedBoldText-BGBtIkEw.js";import"./LoadingSpinner-CXoKjikv.js";import"./context-DCO0IxwY.js";import"./useStatic-CSsf_UFn.js";const Rr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(v=(f=e.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const xr=["Default","CustomWidth","WithController"];export{t as CustomWidth,o as Default,e as WithController,xr as __namedExportsOrder,Rr as default};
