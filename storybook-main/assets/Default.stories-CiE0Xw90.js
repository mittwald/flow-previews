import{j as r,R}from"./iframe-CXqVlE5o.js";import{P as i,a as x}from"./Popover-CTOMC3qA.js";import{B as h}from"./Button-Du00uc9D.js";import{u as P}from"./DialogTriggerView-CiNaj0jt.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-NXXeTbsd.js";import"./mergeRefs-DQ42lkDZ.js";import"./index-ClGSVCJF.js";import"./Dialog-B8n0JlRf.js";import"./Button-DUPqVliB.js";import"./utils-DhntlPo5.js";import"./ProgressBar-vJhN7QSw.js";import"./Label-CEgZ5zSu.js";import"./Hidden-DGVcGJhp.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-BoMX0OaP.js";import"./context-b4vYPaxO.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BIfqd23k.js";import"./useFocus-GvwPC70C.js";import"./useFocusRing-B7D_5WWT.js";import"./useFocusable-Be_5Opbr.js";import"./RSPContexts-ChZvsbky.js";import"./OverlayArrow-DyP_8nEw.js";import"./useControlledState-CFQ9Vv_1.js";import"./Collection-BFmkHyuD.js";import"./CollectionBuilder-BNyKaLrq.js";import"./Separator-p7bJa_SD.js";import"./Text-Bve5DhhS.js";import"./Input-Bbua86z1.js";import"./SearchField-CXyAr8lf.js";import"./FieldError-CFZuL0-a.js";import"./Form-WS4i-nO-.js";import"./Group-Q7U48ggJ.js";import"./useLocalizedStringFormatter-CWaF9vId.js";import"./useTextField-YoCmK9Gk.js";import"./useFormReset-BNnepUUT.js";import"./TextField-CHQyl2Bp.js";import"./SelectionManager-B3YIcTuf.js";import"./useEvent-D6qlNMlI.js";import"./useCollator-BhxnC7fV.js";import"./FocusScope-BugPP909.js";import"./VisuallyHidden-CCMgatrd.js";import"./IconWarning-DQKg17Kq.js";import"./Text-CH29UKf3.js";import"./browser-C-6Px3BF.js";import"./EmulatedBoldText-sAcZVeZh.js";import"./LoadingSpinner-RoF3sq9N.js";import"./context-DB5D0RgA.js";import"./useStatic-CfGR59On.js";const Rr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(v=(f=e.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const xr=["Default","CustomWidth","WithController"];export{t as CustomWidth,o as Default,e as WithController,xr as __namedExportsOrder,Rr as default};
