import{j as r,R}from"./iframe-Dp_ptgTO.js";import{P as i,a as x}from"./Popover-CLhZGReB.js";import{B as h}from"./Button-Bm7Tf187.js";import{u as P}from"./DialogTriggerView-VHLYNpVx.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BVkYESiU.js";import"./mergeRefs-Ct0p8Qt4.js";import"./index-4oHG5ZZP.js";import"./ClearPropsContextView-BbJozVRy.js";import"./useFocus-BGDVbxBE.js";import"./ProgressBar-DMXo3Oxb.js";import"./utils-jLhJmKpa.js";import"./Label-BqJm3nBk.js";import"./Hidden-g0k1R_XW.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CuGJ_WBQ.js";import"./context-dvnbYm3m.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-rqltzUWl.js";import"./IconWarning-CESkhJY3.js";import"./Text-DKCpryII.js";import"./browser-D6_L72sC.js";import"./EmulatedBoldText-RaOWrRWm.js";import"./Text--dlrpEAx.js";import"./LoadingSpinner-CO7k3E9d.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-Bz9yQxqy.js";import"./Button-CtqZigcv.js";import"./usePress-DgTBEQGy.js";import"./useFocusRing-MWP1ZcQm.js";import"./useFocusable-Pd3lvrKn.js";import"./context-DDTw2-bn.js";import"./useStatic-m8l0C_TU.js";import"./RSPContexts-B9nFdFkt.js";import"./FocusScope-B49GjYPu.js";import"./useCollator-DfaTpKsx.js";import"./VisuallyHidden-pbsZsV6L.js";import"./Collection-DhlfIuKx.js";import"./CollectionBuilder-D4MRH1wH.js";import"./context-DhKk3IGs.js";import"./Separator-BGudjOFK.js";import"./SelectionManager-BktYLEMf.js";import"./useEvent-BAkCuTus.js";const lr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
