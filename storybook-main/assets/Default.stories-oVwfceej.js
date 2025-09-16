import{j as r,R}from"./iframe-d9P-aV0W.js";import{P as i,a as x}from"./Popover-DPVZXXeh.js";import{B as h}from"./Button-B1lQe4CG.js";import{u as P}from"./DialogTriggerView-FP1ivMgD.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-COJEgxrC.js";import"./mergeRefs-COfeY-J9.js";import"./index-DNfeWXBl.js";import"./Dialog-e74qD_EA.js";import"./Button-DwY3a-D1.js";import"./utils-D3Cd9kCb.js";import"./ProgressBar-Sdd768YE.js";import"./Label-Dkt1SH7U.js";import"./Hidden-ATL9oYS4.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DJC774kJ.js";import"./context-3d2O_dpD.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CdPHlHdZ.js";import"./useFocus-Db-Axcue.js";import"./useFocusRing-CufwTJs4.js";import"./useFocusable-CU14CpV2.js";import"./RSPContexts-CIfamJXM.js";import"./OverlayArrow-Cjv7HVcg.js";import"./useControlledState-CiRgye4r.js";import"./Collection-CdCCPlVo.js";import"./CollectionBuilder-DsV7XKjH.js";import"./Separator-p90sXtPP.js";import"./Text-D1KGOeak.js";import"./Group-DNqxyc_c.js";import"./SearchField-CGJ3SG_G.js";import"./FieldError-DZyu-lh_.js";import"./Form-D0Rr0MG7.js";import"./useLocalizedStringFormatter-BD0NOEPb.js";import"./useTextField-BsPcuE2q.js";import"./useFormReset-BRhy_R9s.js";import"./TextField-CBm_F67z.js";import"./useEvent-BUfOZTC1.js";import"./SelectionManager-CdLcEL5b.js";import"./useCollator-D1fE0zhK.js";import"./FocusScope-Bqouiiv6.js";import"./VisuallyHidden-D6ugaIjO.js";import"./IconWarning-BjZlRYlZ.js";import"./Text-Be7zee3C.js";import"./browser-7zjo9sS-.js";import"./EmulatedBoldText-DaFZXsc7.js";import"./LoadingSpinner-BMYPjKuf.js";import"./context-DNdMdfyQ.js";import"./useStatic-BCruP98g.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
