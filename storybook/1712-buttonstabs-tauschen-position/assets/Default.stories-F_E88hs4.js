import{j as r,R}from"./iframe-Cf8YTZ8I.js";import{P as i,a as x}from"./Popover-CiGSAkfw.js";import{B as h}from"./Button-BNQl0TTz.js";import{u as P}from"./DialogTriggerView-CQZB8ThO.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DTkA4BUB.js";import"./mergeRefs-D3ggMSJr.js";import"./index-B8aDKTw0.js";import"./Dialog-6YoxT38u.js";import"./Button-BRubt609.js";import"./utils-mApyKjAg.js";import"./ProgressBar-rV3H6G0W.js";import"./Label-CYpSb4aj.js";import"./Hidden-CFe2gnmC.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-kBnuahGK.js";import"./context-D-u3TSjV.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CjpkCDJv.js";import"./useFocus-_Kohxctg.js";import"./useFocusRing-WtizUsSm.js";import"./useFocusable-n963r6Th.js";import"./RSPContexts-Dm9xNQ69.js";import"./OverlayArrow-HeKEp-x3.js";import"./useControlledState-J34_Aqnk.js";import"./Collection-CMDC5_M-.js";import"./CollectionBuilder-CsDuHlxm.js";import"./Separator-DLSAHNez.js";import"./Text-CQanMjNI.js";import"./Group-DhHWVTLL.js";import"./SearchField-Diw_8zQw.js";import"./FieldError-CCTqX3Np.js";import"./Form-C0YUiO3s.js";import"./useLocalizedStringFormatter-BO4NN1ph.js";import"./useTextField-Bh5lkpvQ.js";import"./useFormReset-Ctmxo4kM.js";import"./TextField-BlSj4EDo.js";import"./useEvent-ZIquWn1z.js";import"./SelectionManager-CdSvY_6Y.js";import"./useCollator-C0E035kT.js";import"./FocusScope-Bp1tS9Sq.js";import"./VisuallyHidden-CDGiYjfo.js";import"./IconWarning-qh9NwBsS.js";import"./Text-CzCYKR38.js";import"./browser-DfZCu7HF.js";import"./EmulatedBoldText-5p9uCxGs.js";import"./LoadingSpinner-CGCXLsJe.js";import"./context-ByqUf3rB.js";import"./useStatic-B_n6r0Ik.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
