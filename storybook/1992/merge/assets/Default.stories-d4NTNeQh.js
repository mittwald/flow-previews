import{j as r,R}from"./iframe-Mcl-fp9_.js";import{P as i,a as x}from"./Popover-BWEYPO_l.js";import{B as h}from"./Button-DAKl4AvN.js";import{u as P}from"./DialogTriggerView-4ZuKOHwK.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-D0Qkc9VN.js";import"./mergeRefs-C2rjSGvQ.js";import"./index-LMMmju_F.js";import"./Dialog-Dbuy5IKg.js";import"./Button-B-ha5P18.js";import"./utils-n1fDyKZ3.js";import"./ProgressBar-B-0Imi_2.js";import"./Label-FMQv6veW.js";import"./Hidden-0mHYsG9Y.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DPxX2fH3.js";import"./context-BorfhQA_.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CSmiIi-0.js";import"./useFocus-SsmNYjih.js";import"./useFocusRing-Dg3YPgxl.js";import"./useFocusable-CVnYh69T.js";import"./RSPContexts-D5Q6Wlej.js";import"./OverlayArrow-BjKZColU.js";import"./useControlledState-ECxCAN2t.js";import"./Collection-JtFNZJGn.js";import"./CollectionBuilder-B60nQQtd.js";import"./Separator-BOJM7lM-.js";import"./Text-DoGyCRc9.js";import"./Group-IKUML2BV.js";import"./SearchField-CkC64XB4.js";import"./FieldError-BKKPCq9e.js";import"./Form-W-5ctzVT.js";import"./useLocalizedStringFormatter-T_IfcqNQ.js";import"./useTextField-DMad38Mh.js";import"./useFormReset-2GD2k0-b.js";import"./TextField-Cz-aJsxu.js";import"./useEvent-C1BmSmac.js";import"./SelectionManager-BByY8zyt.js";import"./useCollator-BtrL4jRN.js";import"./FocusScope-D7ZuSfg7.js";import"./VisuallyHidden-CZ8WB-4E.js";import"./IconWarning-Lyb53OnO.js";import"./Text-DEIveL77.js";import"./browser-BsWVSY18.js";import"./EmulatedBoldText-yaK_s2Yh.js";import"./LoadingSpinner-COEYl7Pk.js";import"./context-UATQnsvR.js";import"./useStatic-DehluLPa.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
