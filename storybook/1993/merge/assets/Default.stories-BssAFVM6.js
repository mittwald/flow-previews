import{j as r,R}from"./iframe-BKOyO0tU.js";import{P as i,a as x}from"./Popover-Cs1rFuXv.js";import{B as h}from"./Button-BRmnXyIg.js";import{u as P}from"./DialogTriggerView-D92SRtaq.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DS9p18js.js";import"./mergeRefs-D0EZPsCM.js";import"./index-Dkj0bwU1.js";import"./Dialog-BbUqm1un.js";import"./Button-DqwKzt0W.js";import"./utils-B2BekvYW.js";import"./ProgressBar-w7N8Fjyu.js";import"./Label-Vv3VD8Wn.js";import"./Hidden-DB9d8bX3.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-kfVNblq3.js";import"./context-wvutwpZE.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CfgifMFV.js";import"./useFocus-dHggTvNn.js";import"./useFocusRing-D97-YwB6.js";import"./useFocusable-C3wI1ws-.js";import"./RSPContexts-BmPvawj4.js";import"./OverlayArrow-CigCDiMF.js";import"./useControlledState-B16HJi6R.js";import"./Collection-B9hkeg3n.js";import"./CollectionBuilder-We_6F8vb.js";import"./Separator-D6PmSFnu.js";import"./Text-ACnzImZy.js";import"./Group-iIjIB8eM.js";import"./SearchField-BqOdnuK_.js";import"./FieldError-D2kmkBqC.js";import"./Form-D-YH0smr.js";import"./useLocalizedStringFormatter-D0EJq48y.js";import"./useTextField-BsmA_XUC.js";import"./useFormReset-ONA6akXl.js";import"./TextField-tmvkgR0S.js";import"./useEvent-DwmS6HpG.js";import"./SelectionManager-CLkO3KW8.js";import"./useCollator-CK3XalJA.js";import"./FocusScope-Sz51FCf6.js";import"./VisuallyHidden-hdWyDAKj.js";import"./IconWarning-WHLX57m9.js";import"./Text-ExzQZ1Qc.js";import"./browser-8Kbc9Tso.js";import"./EmulatedBoldText-BBGOeiRU.js";import"./LoadingSpinner-B8cx3qaz.js";import"./context-rPjQ9i-i.js";import"./useStatic-DBBw__yr.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
