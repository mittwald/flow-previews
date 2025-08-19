import{j as r,R}from"./iframe-B2KmHf-y.js";import{P as i,a as x}from"./Popover-DNk_YqrN.js";import{B as h}from"./Button-BbFeJzIv.js";import{u as P}from"./DialogTriggerView-CiCobVPa.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DZxLHc6o.js";import"./mergeRefs-CLz2fAhu.js";import"./index-DRuHIqI3.js";import"./Dialog-CNeQhTzc.js";import"./Button-DtifiV_Y.js";import"./utils-CGNLDjxu.js";import"./ProgressBar-BuiHVKZg.js";import"./Label-1elQ--Nx.js";import"./Hidden-B8XFb6rR.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-p5QRldAo.js";import"./context-BMg6CKyL.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DTR6VjFp.js";import"./useFocus-BfYJCy_-.js";import"./useFocusRing-CE2mXCfJ.js";import"./useFocusable-17jCqo4h.js";import"./RSPContexts-D8MVQLAj.js";import"./OverlayArrow-Bl6z6NHA.js";import"./useControlledState-CjBtDVaa.js";import"./Collection-BwA2dvt3.js";import"./CollectionBuilder-BYnkarjY.js";import"./Separator-BMWcHxIk.js";import"./Text-BzjjTZNC.js";import"./Group-BWIcWIx6.js";import"./SearchField-C4xC6zLO.js";import"./FieldError-DUJhKpS8.js";import"./Form-fpEywjGd.js";import"./useLocalizedStringFormatter-C1KZ20Nl.js";import"./useTextField-kEXXX66E.js";import"./useFormReset-DxoPgNRk.js";import"./TextField-qqPTWDF0.js";import"./useEvent-BZTmiYG1.js";import"./SelectionManager-D1JYq7To.js";import"./useCollator-kI-OIdrZ.js";import"./FocusScope-DhJvjcql.js";import"./VisuallyHidden-C6qwrwG6.js";import"./IconWarning-BfZFkMSG.js";import"./Text-BTzROJ4u.js";import"./browser-CAjTLwtK.js";import"./EmulatedBoldText-D4QqJqwf.js";import"./LoadingSpinner-BqqlEuny.js";import"./context-U_3b6bvq.js";import"./useStatic-CZG3tzpM.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
