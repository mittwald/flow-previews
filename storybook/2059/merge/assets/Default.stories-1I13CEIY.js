import{j as r,R as P}from"./iframe-4Q3VdU3W.js";import{P as i}from"./Popover-Df0MAnGC.js";import{B as h}from"./Button-DtfrCWpg.js";import{P as R}from"./PopoverTrigger-CqTv2BCe.js";import{u as x}from"./useOverlayController-CkYiJEJ3.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CWhymxNW.js";import"./index-D-slKUrQ.js";import"./index-PS7XpSls.js";import"./OverlayContextProvider-DGLKtVpY.js";import"./context-HST9WQNh.js";import"./useStatic-J4yhNwyX.js";import"./Dialog-eTJli1DK.js";import"./Button-CVw6sY0j.js";import"./utils-BDqSegOF.js";import"./ProgressBar-DDVhQ4Au.js";import"./Label-BPYRgbkp.js";import"./Hidden-B-Sfeo6e.js";import"./filterDOMProps-CghfNOdR.js";import"./context-Ctn7vzaA.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-gN-0t-oA.js";import"./useFocus-B23mYmqe.js";import"./useFocusRing-JPznIV6A.js";import"./useFocusable-xMViE0rI.js";import"./RSPContexts-BraqArs8.js";import"./OverlayArrow-C0bCojbN.js";import"./useControlledState-DDubLIo_.js";import"./Collection-BcdTAldV.js";import"./CollectionBuilder-Djb2_WqG.js";import"./context-Crr8Yx7q.js";import"./Separator-V229l451.js";import"./Text-CbQs5VbJ.js";import"./SelectionManager-DSIHg9Rl.js";import"./useEvent-X_MmbY8S.js";import"./useCollator-DKF-AEK0.js";import"./FocusScope-CdBaHhXi.js";import"./useLocalizedStringFormatter-BfINV5Nx.js";import"./VisuallyHidden-Bs3ruDlE.js";import"./ClearPropsContextView-QV--h8ts.js";import"./IconWarning-C7969b2c.js";import"./Text-Dj8BftP4.js";import"./browser-BefUj7Q1.js";import"./EmulatedBoldText-VlnzXvNR.js";import"./LoadingSpinner-DB05D1_y.js";import"./OverlayTrigger-C1FeU66V.js";import"./ControlledNotification-Btlekvi2.js";import"./DialogTriggerView-DWxklP8W.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(R,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=x("Popover"),s=P.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(v=(f=e.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const Pr=["Default","CustomWidth","WithController"];export{t as CustomWidth,o as Default,e as WithController,Pr as __namedExportsOrder,hr as default};
