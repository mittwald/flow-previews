import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{P as i,a as R}from"./Popover-Cv5CotnU.js";import{R as x}from"./index-CgfFrydU.js";import{B as h}from"./Button-HNIyHWur.js";import{u as P}from"./OverlayTrigger-zrHS2epI.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BLvIrsPJ.js";import"./mergeRefs-CQveTfyF.js";import"./index-Brqd7pHr.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-B2KKL2uI.js";import"./DialogTriggerView-BcFm6CFN.js";import"./Dialog-B0vEu32W.js";import"./Button-C4BByqx5.js";import"./utils-D9H5ZYVa.js";import"./ProgressBar-BwjDzH8d.js";import"./Label-nK1nmjBx.js";import"./Hidden-DwT0szmK.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-CVdsQLKm.js";import"./useLocalizedStringFormatter-2OBKXYKe.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress--lgM-7rV.js";import"./useFocus-Dz5Sgz6F.js";import"./useFocusRing-VURPolDQ.js";import"./useFocusable-B6XldfNl.js";import"./RSPContexts-9nj2DFX_.js";import"./OverlayArrow-DLYo5xVk.js";import"./useControlledState-YIijONQK.js";import"./Collection-DH8MVYRU.js";import"./CollectionBuilder-B62dxoFp.js";import"./Separator-CJYrkcAH.js";import"./Text-RYc5i20l.js";import"./SelectionManager-Clajy7Q-.js";import"./useEvent-CfLopXbq.js";import"./useCollator-B5zTmuon.js";import"./FocusScope-me2WFoLK.js";import"./VisuallyHidden-CNMq674x.js";import"./IconWarning-Dhqk9c5Q.js";import"./Text-DAta9oPQ.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-KnQ_Srvn.js";import"./LoadingSpinner-DV38nRyp.js";import"./context-C9AG9o4h.js";import"./useStatic-_S75A7Vn.js";const dr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(R,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=x.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(v=(f=e.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const gr=["Default","CustomWidth","WithController"];export{t as CustomWidth,o as Default,e as WithController,gr as __namedExportsOrder,dr as default};
