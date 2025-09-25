import{j as r,R}from"./iframe-RErHS549.js";import{P as i,a as x}from"./Popover-D5R_X3qF.js";import{B as h}from"./Button-ICc2foaw.js";import{u as P}from"./DialogTriggerView-DWnrIBjB.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-U9W9I2uQ.js";import"./mergeRefs-tFWMCLRY.js";import"./index-CKO7ssoe.js";import"./ClearPropsContextView-0a_DlM-r.js";import"./useFocus-JMpVLlR6.js";import"./ProgressBar-BrVHyxaL.js";import"./utils-CdmgfGZ7.js";import"./Label-BxIDS5PE.js";import"./Hidden-BOL9WLXj.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-ky1cKMBf.js";import"./context-BoCUnuIe.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-D306zaQt.js";import"./IconWarning-BaoYyhFJ.js";import"./Text-CPoMhumh.js";import"./browser-32b-cNga.js";import"./EmulatedBoldText-JQA-sSfV.js";import"./Text-CT26T-mx.js";import"./LoadingSpinner-BMdPihtW.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-Cy6BSIiI.js";import"./Button-CLgYLV7x.js";import"./usePress-Qq9By8Rc.js";import"./useFocusRing-DWSWsOVe.js";import"./useFocusable-D3_285Zs.js";import"./context-BXN4gM-G.js";import"./useStatic-BxcMFVdb.js";import"./RSPContexts-B8Y67nNQ.js";import"./FocusScope-CM6IwZZ2.js";import"./useCollator-BIKtW1yK.js";import"./VisuallyHidden-L1E0nJWV.js";import"./Collection-C5b3lBlU.js";import"./CollectionBuilder-CejpnVI0.js";import"./Separator-Bss8HbVG.js";import"./Group-Co5LQX_Y.js";import"./SearchField-tD8L5lUZ.js";import"./FieldError-CXwIJwJV.js";import"./Form-CN0G9X2_.js";import"./useTextField-CpUnEOqT.js";import"./useFormReset-8mkS99ko.js";import"./TextField-BRNj-bGL.js";import"./useEvent-CfCGwGWG.js";import"./SelectionManager-Bhum3Vdb.js";const vr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
