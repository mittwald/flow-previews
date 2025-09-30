import{j as r,R}from"./iframe-BxDpVhRd.js";import{P as i,a as x}from"./Popover-DsSNZzMW.js";import{B as h}from"./Button-COfabfFq.js";import{u as P}from"./DialogTriggerView-GlI_-8yJ.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-D577-dj4.js";import"./mergeRefs-Bevg5I71.js";import"./index-BnQUCq-S.js";import"./ClearPropsContextView-Ff-_bWul.js";import"./useFocus-DCdhMrgy.js";import"./ProgressBar-CjBgSU-K.js";import"./utils-CpjREF5t.js";import"./Label-CcH2uIQ5.js";import"./Hidden-sa0o7Y_i.js";import"./filterDOMProps-CghfNOdR.js";import"./context-CSPhd592.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-B0hr1ZXY.js";import"./IconWarning-CR1PBxFk.js";import"./Text-HfVZjSfr.js";import"./browser-DkE4SP-u.js";import"./EmulatedBoldText-Di64OaFb.js";import"./Text-Bq0GBBEx.js";import"./LoadingSpinner-D1vbb_I_.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-BeMG850z.js";import"./Button-CJ12dAAc.js";import"./usePress-Cfg_1SLq.js";import"./useFocusRing-DkmhKsWm.js";import"./useFocusable-Bb-ubJOz.js";import"./context-CdLDj7bD.js";import"./useStatic-DKuo4ovu.js";import"./RSPContexts-CaPgNpVT.js";import"./FocusScope-CQY-r9mi.js";import"./useCollator-1chl5SyN.js";import"./VisuallyHidden-DX-N6FS4.js";import"./Collection-tycL-zcz.js";import"./CollectionBuilder-DsOEphd0.js";import"./context-BRTadV_G.js";import"./Separator-CnqlmT3o.js";import"./SelectionManager-BIdKqwjQ.js";import"./useEvent-DUrYkmv0.js";const cr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    width: 800
  }
}`,...(d=(u=e.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var g,f,v;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(v=(f=t.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const lr=["Default","CustomWidth","WithController"];export{e as CustomWidth,o as Default,t as WithController,lr as __namedExportsOrder,cr as default};
