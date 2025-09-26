import{j as r,R}from"./iframe-QYa5fCvd.js";import{P as i,a as x}from"./Popover-BojVT5-a.js";import{B as h}from"./Button-DtEggira.js";import{u as P}from"./DialogTriggerView-DucWr1Mr.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DqxlNqTv.js";import"./mergeRefs-CbLIukJ0.js";import"./index-Dd17el8U.js";import"./ClearPropsContextView-DF7vfwc8.js";import"./useFocus-D2QZKYlR.js";import"./ProgressBar-BeUyRfom.js";import"./utils-lb8KrrIv.js";import"./Label-fRERrzCf.js";import"./Hidden-Py6KbP61.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DR9sPTrv.js";import"./context-BsMul4n4.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-Bu1M14oY.js";import"./IconWarning-DEqdDiS_.js";import"./Text-D98HT4db.js";import"./browser-BNaQCdYt.js";import"./EmulatedBoldText-BuggfMa1.js";import"./Text-BD3o8xQb.js";import"./LoadingSpinner-DKDkxF6a.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-CfiFtED0.js";import"./Button-u3ZYuRRI.js";import"./usePress-BKI1i-pB.js";import"./useFocusRing-sLc_Aawe.js";import"./useFocusable-DEca05gc.js";import"./context-NUuZzhZl.js";import"./useStatic-DIir9R4I.js";import"./RSPContexts-uNufUlk-.js";import"./FocusScope-ByQquqFt.js";import"./useCollator-EfErOZQE.js";import"./VisuallyHidden-B3sifiz6.js";import"./Collection-DAGhelkx.js";import"./CollectionBuilder-DNb6DOFN.js";import"./Separator-CsR4K24c.js";import"./Group-BKMRBfUs.js";import"./SearchField-BY7ftgY4.js";import"./FieldError-BGtuYqZa.js";import"./Form-BOiG0M1T.js";import"./useTextField-gTkvMWQG.js";import"./useFormReset-DzIk_Opn.js";import"./TextField-DYh5UApz.js";import"./useEvent-D3g7XMTk.js";import"./SelectionManager-yhE4bEMZ.js";const vr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
