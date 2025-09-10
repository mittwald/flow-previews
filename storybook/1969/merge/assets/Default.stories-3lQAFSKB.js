import{j as r,R}from"./iframe-CRsb57af.js";import{P as i,a as x}from"./Popover-Bdy4v_RX.js";import{B as h}from"./Button-c2AsubDx.js";import{u as P}from"./DialogTriggerView-DbRMXRJO.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BR4-1agz.js";import"./mergeRefs-DplnSgkI.js";import"./index-CuZmym5e.js";import"./Dialog-J7-PabLc.js";import"./Button-kIpzmIw-.js";import"./utils-CwotMdLX.js";import"./ProgressBar-B7_oEUBN.js";import"./Label-ePem4EPa.js";import"./Hidden-CvrWtM-J.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CtSNSJe6.js";import"./context-DoWLFUeS.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DBBuz-CW.js";import"./useFocus-DbNAjYIm.js";import"./useFocusRing-UHNYZFwC.js";import"./useFocusable-YH2tkZSf.js";import"./RSPContexts-BEiHDPhP.js";import"./OverlayArrow-CXvzgL8W.js";import"./useControlledState-DgD7b91N.js";import"./Collection-BmFAT2ID.js";import"./CollectionBuilder-CTW40qd5.js";import"./Separator-Be5OBuwC.js";import"./Text-Dc62rOGI.js";import"./Group-BRcAYOXB.js";import"./SearchField-Dc_y5Vr7.js";import"./FieldError-B33IY45p.js";import"./Form-DcCFXF0q.js";import"./useLocalizedStringFormatter-BRTflqfT.js";import"./useTextField-DakxfzUT.js";import"./useFormReset-Dz46-Gvc.js";import"./TextField-CrxNrIk9.js";import"./useEvent-DYe7cJIX.js";import"./SelectionManager-vl9_ChBd.js";import"./useCollator-BqnPvmV5.js";import"./FocusScope-B2MzAavW.js";import"./VisuallyHidden-zV1rhxGD.js";import"./IconWarning-CcDYRP7s.js";import"./Text-BeV7pvCv.js";import"./browser-KjD5DeSR.js";import"./EmulatedBoldText-LP_9OJ0Q.js";import"./LoadingSpinner-BbraRPFj.js";import"./context-q8TPx0Dl.js";import"./useStatic-l_ZOo8Ze.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
