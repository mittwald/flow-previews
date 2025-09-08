import{j as r,R}from"./iframe-CB_IvR8I.js";import{P as i,a as x}from"./Popover-7BARD7J6.js";import{B as h}from"./Button-B6pH5E7T.js";import{u as P}from"./DialogTriggerView-SiWvQg2j.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CQ73sAu4.js";import"./mergeRefs-CSVQQCMz.js";import"./index-dvXJvLk3.js";import"./Dialog-nVDPewl7.js";import"./Button-BNZImaSB.js";import"./utils-g_K47B_Q.js";import"./ProgressBar-DB_rXcaP.js";import"./Label-kjSyRRrG.js";import"./Hidden-jmCIdXP6.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DNzpHOuu.js";import"./context-CQpLcUPr.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BSSkfFZ6.js";import"./useFocus-B0PqsM1A.js";import"./useFocusRing-gt8SzE7T.js";import"./useFocusable-B2StGM5o.js";import"./RSPContexts-PWzkBgmU.js";import"./OverlayArrow-01R9fjkr.js";import"./useControlledState-CS3WyH2d.js";import"./Collection-BYXnLO4u.js";import"./CollectionBuilder-opZAg4uy.js";import"./Separator-Bv7qspKp.js";import"./Text-B8w1c0_W.js";import"./Group-BtoN_DlS.js";import"./SearchField-CR8AG0pb.js";import"./FieldError-7I8SRRkd.js";import"./Form-BSDtEK6z.js";import"./useLocalizedStringFormatter-BKMvXLmW.js";import"./useTextField-Dvn-D0Cy.js";import"./useFormReset-DVL0Bkgs.js";import"./TextField-nXjEyJdg.js";import"./useEvent--a1AA2TN.js";import"./SelectionManager-DyWAPqsT.js";import"./useCollator-3DG3Mrdl.js";import"./FocusScope-2f5e0YPn.js";import"./VisuallyHidden-D4WM3JvY.js";import"./IconWarning-DHvxn9zQ.js";import"./Text-C_h1oOw9.js";import"./browser-CyPw7Cgt.js";import"./EmulatedBoldText-B-vVao8K.js";import"./LoadingSpinner-B018WmYG.js";import"./context-B4EC4nRx.js";import"./useStatic-y0oZYxL5.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
