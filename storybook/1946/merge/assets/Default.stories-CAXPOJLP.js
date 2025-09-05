import{j as r,R}from"./iframe-r9Fl_3r-.js";import{P as i,a as x}from"./Popover-DRfqiDmT.js";import{B as h}from"./Button-D0ktHzCI.js";import{u as P}from"./DialogTriggerView-C_n5cTLw.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-_w1UeHmF.js";import"./mergeRefs-D6E7Ef6S.js";import"./index-CrBYWkM2.js";import"./Dialog-CqKbtFhs.js";import"./Button-4Qe77JoQ.js";import"./utils-DXh-iENK.js";import"./ProgressBar-BsRRuR7U.js";import"./Label-C3TZzzex.js";import"./Hidden-BJHVOqWC.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DoVt-K4x.js";import"./context-B1eqcBF6.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CjAT5thu.js";import"./useFocus-DRS9ufOF.js";import"./useFocusRing-C_G4oYuI.js";import"./useFocusable-DI-LrkzR.js";import"./RSPContexts-Bz7sSPBE.js";import"./OverlayArrow-HXzjk5ZA.js";import"./useControlledState-Bxg_NaN0.js";import"./Collection-DOWMAROO.js";import"./CollectionBuilder-CqQF4tYs.js";import"./Separator-Z9TJ6XEa.js";import"./Text-DHfFA3io.js";import"./Group-BdAgZaYl.js";import"./SearchField-DOWcWepW.js";import"./FieldError-D3xuSMMg.js";import"./Form-D9IRbY4n.js";import"./useLocalizedStringFormatter-BlChhJwn.js";import"./useTextField-Bg6cyBen.js";import"./useFormReset-DxbIlA0W.js";import"./TextField-BiW4cyB4.js";import"./useEvent-Dowxq_UB.js";import"./SelectionManager-BmeUKben.js";import"./useCollator-B2W9GfqU.js";import"./FocusScope-C8ZyuACd.js";import"./VisuallyHidden-CHwjrWyl.js";import"./IconWarning-BUxpotmw.js";import"./Text-DD-b1p2M.js";import"./browser-tiRbxzJD.js";import"./EmulatedBoldText-CDsZBMJH.js";import"./LoadingSpinner-zCjOjpaf.js";import"./context-D7mbIFkz.js";import"./useStatic-Dwli2ElM.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
