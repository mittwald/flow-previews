import{j as r,R}from"./iframe-D9T-SQ_w.js";import{P as i,a as x}from"./Popover-Dr2PIhPL.js";import{B as h}from"./Button-DTUBFRfD.js";import{u as P}from"./DialogTriggerView-DmIfJbrm.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DOfdVnxG.js";import"./mergeRefs-Dpt4nLOm.js";import"./index-MwhQmWus.js";import"./Dialog-CcOmolEx.js";import"./Button-CgtNxK_E.js";import"./utils-DnMOHCo2.js";import"./ProgressBar-DwCiEGCB.js";import"./Label-BiAaxhJ7.js";import"./Hidden-SV0U3IVR.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DgmVUIzX.js";import"./context-1X1M6th-.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DglIwZgS.js";import"./useFocus-BzfdG_e6.js";import"./useFocusRing-ZVwQEQ-X.js";import"./useFocusable-BvY9usgM.js";import"./RSPContexts-Mr9JIPza.js";import"./OverlayArrow-C2Xh83El.js";import"./useControlledState-iBkipCXW.js";import"./Collection-DoXxkf38.js";import"./CollectionBuilder-F1uF5_xz.js";import"./Separator-BPxbBsrv.js";import"./Text-ClgQ9ANO.js";import"./Group-D8pjdbbd.js";import"./SearchField-BlkgpjOt.js";import"./FieldError-CZoysCXy.js";import"./Form-CWxNV6uB.js";import"./useLocalizedStringFormatter-DPVccqQm.js";import"./useTextField-q7WjWLDn.js";import"./useFormReset-BokEu4v1.js";import"./TextField-CQIeTEIt.js";import"./useEvent-B9biFPGH.js";import"./SelectionManager-C0FPyjqE.js";import"./useCollator-CYP1g-jw.js";import"./FocusScope-Bai1ujT7.js";import"./VisuallyHidden-DQCLJ5yw.js";import"./IconWarning-D9gb5D__.js";import"./Text-DV6mBCf8.js";import"./browser-BxWBoSIU.js";import"./EmulatedBoldText-DAr7Y6gD.js";import"./LoadingSpinner-DnW7ID0m.js";import"./context-4_PGxGcD.js";import"./useStatic-CzpehBqE.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
