import{j as r,R}from"./iframe-DaY0X55-.js";import{P as i,a as x}from"./Popover-CX1cowkX.js";import{B as h}from"./Button-DR2yamsk.js";import{u as P}from"./DialogTriggerView-Bf1Z1A17.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BZ-4M9Xw.js";import"./mergeRefs-BGErXhtl.js";import"./index-BnzNbbtM.js";import"./ClearPropsContextView-ubuzjFUL.js";import"./useFocus-Bx9r-om_.js";import"./ProgressBar-feyz4V57.js";import"./utils-BNq2bbe-.js";import"./Label-Y108Eoku.js";import"./Hidden-BWevpR0h.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-5zgngJXY.js";import"./context-C83_ciAo.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-ChlOye-e.js";import"./IconWarning-DpKTVHID.js";import"./Text-ClBV1PzQ.js";import"./browser-DCXXMZF1.js";import"./EmulatedBoldText-NGGT27hA.js";import"./Text-CmOgQYod.js";import"./LoadingSpinner-L8q-c8wY.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-D4QinFaA.js";import"./Button-BFtXZvnQ.js";import"./usePress-C0_kEahO.js";import"./useFocusRing-vJ8fdZaU.js";import"./useFocusable-DsZq_5Zr.js";import"./context-By-CGifB.js";import"./useStatic-uS-e-hBF.js";import"./RSPContexts-DzPn71fZ.js";import"./FocusScope-BkSA93dQ.js";import"./useCollator-0HaIqY_5.js";import"./VisuallyHidden-BYSFBZbq.js";import"./Collection-BNCGMhbn.js";import"./CollectionBuilder-r4GPnu41.js";import"./Separator-B-P32e-W.js";import"./Group-BRma_Z3w.js";import"./SearchField-BRBjfrRR.js";import"./FieldError-B2eDKzT7.js";import"./Form-C_YqGgE4.js";import"./useTextField-ChCqJFCV.js";import"./useFormReset-Cfy0Tx0G.js";import"./TextField-CrD7kLQK.js";import"./useEvent-CVZyjoEr.js";import"./SelectionManager-22HKkmij.js";const vr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
