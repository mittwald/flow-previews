import{j as r,R}from"./iframe-CqlVwSqw.js";import{P as i,a as x}from"./Popover-BBrX7Bk6.js";import{B as h}from"./Button-OTaF8oie.js";import{u as P}from"./DialogTriggerView-BZ0wf3vM.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BuREg09C.js";import"./mergeRefs-Cx0s-cU7.js";import"./index-BuKaDIt4.js";import"./ClearPropsContextView-C3Bv20Xw.js";import"./useFocus-qWrFSXYF.js";import"./ProgressBar-B0gZeOOM.js";import"./utils-B7PoWZoE.js";import"./Label-CpU_ziWP.js";import"./Hidden-tYtqWYMe.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-B6FfxehJ.js";import"./context-QfY8Pr6d.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-DZt2Tj7Y.js";import"./IconWarning-CQ60jK8P.js";import"./Text-CQKhljzJ.js";import"./browser-D8TCc1uG.js";import"./EmulatedBoldText-C871-J_1.js";import"./Text-BcRGqQ7g.js";import"./LoadingSpinner-3xwEonu_.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-BiVzy_IK.js";import"./Button-2nj66ItS.js";import"./usePress-5TW4P5t1.js";import"./useFocusRing-DLxcniMF.js";import"./useFocusable-BReVx9rr.js";import"./context-CxE1sBmK.js";import"./useStatic-BR1_jZPV.js";import"./RSPContexts-C439z8nI.js";import"./FocusScope-Bgk9tnAX.js";import"./useCollator-CpH_e3F2.js";import"./VisuallyHidden-leZhq3qV.js";import"./Collection-DMTTSBS8.js";import"./CollectionBuilder-EuTbufj2.js";import"./Separator-PuUe3HZt.js";import"./Group-DKePUrRV.js";import"./SearchField-C2GAQJuB.js";import"./FieldError-CjaQ5IB_.js";import"./Form-Ce3Yvr6A.js";import"./useTextField-g_oQkODH.js";import"./useFormReset-DOLEs5qD.js";import"./TextField-BmXGUsbn.js";import"./useEvent-Bpofckl7.js";import"./SelectionManager-BUQAScfd.js";const vr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
