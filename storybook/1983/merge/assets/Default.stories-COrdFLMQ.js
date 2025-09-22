import{j as r,R}from"./iframe-CqLmdNeC.js";import{P as i,a as x}from"./Popover-Cd3uYlMm.js";import{B as h}from"./Button-Cck2R8d6.js";import{u as P}from"./DialogTriggerView-zx0O_dOm.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CftNG7hR.js";import"./mergeRefs-o29IfSv-.js";import"./index-DuAYVIUn.js";import"./ClearPropsContextView-CGyUIuEX.js";import"./useFocus-CLcOeBIv.js";import"./ProgressBar-Bc_l3bRQ.js";import"./utils-DVF3OaDc.js";import"./Label-DbnvS1ga.js";import"./Hidden-K4MIyCcS.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BygwjnmG.js";import"./context-DzYatHkR.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-Blr5WM8A.js";import"./IconWarning-CMS0_eHL.js";import"./Text-BZ3j-6fi.js";import"./browser-D8TwyJaY.js";import"./EmulatedBoldText-EL8QFNsm.js";import"./Text-BpEumjQQ.js";import"./LoadingSpinner-CTcHqu9G.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-C4FReXuX.js";import"./Button-D6TKDn6h.js";import"./usePress-CKz354k3.js";import"./useFocusRing-B3V5UxLb.js";import"./useFocusable-zATjwRwW.js";import"./context-BV-Ks7Oh.js";import"./useStatic-suMR32Og.js";import"./RSPContexts-BcXX2Wqq.js";import"./FocusScope-D6JShGuB.js";import"./useCollator-BJ0ATcQr.js";import"./VisuallyHidden-DFEHY8aA.js";import"./Collection-BtI4BBrq.js";import"./CollectionBuilder-BR0_mY_7.js";import"./Separator-Bx0e0X1l.js";import"./Group-DSZMysmZ.js";import"./SearchField-Bt3pj5UO.js";import"./FieldError-BRlNdIVM.js";import"./Form-Dz9VUwD7.js";import"./useTextField-CZX3v4eA.js";import"./useFormReset-6nvbbxGv.js";import"./TextField-lXG7M95o.js";import"./useEvent-CulDTTvx.js";import"./SelectionManager-mPjiaJaA.js";const vr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
