import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{P as i,a as R}from"./Popover-08eVlGsC.js";import{R as x}from"./index-BZISi7jw.js";import{B as h}from"./Button-Bennxrpq.js";import{u as P}from"./MenuTrigger-CgDcxEMY.js";import"./clsx-B-dksMZM.js";import"./flowComponent-C3EXXnsB.js";import"./index-DdDGTNSf.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-C0qn59OO.js";import"./index-IBhSrjl6.js";import"./PropsContextProvider-CnD-oO9S.js";import"./DialogTriggerView-BivZP39j.js";import"./IconApp-Bw6C1rcI.js";import"./Dialog-aWU289xm.js";import"./Button-DrJb4gk9.js";import"./utils-CzVyYWZn.js";import"./ProgressBar-CZau9lss.js";import"./Label-aZfeS6Au.js";import"./Hidden-C5TwESSa.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-Hju3pN3c.js";import"./useLocalizedStringFormatter-D6AjEcek.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-CdO2YIL_.js";import"./useFocusRing-DzGSygZM.js";import"./usePress-DZCrAIzv.js";import"./RSPContexts-BEYwq1Zw.js";import"./OverlayArrow-bn_YbkxG.js";import"./useControlledState-4nfZ-XMX.js";import"./Collection-CQ_IbO82.js";import"./CollectionBuilder-DndhQU5l.js";import"./Separator-DkG5lMhT.js";import"./Text-PTaPc_Ci.js";import"./SelectionManager-BkpGC1Gn.js";import"./useEvent-CPQp9FCP.js";import"./useCollator-C0JtIjTO.js";import"./FocusScope-BnLtY9jQ.js";import"./VisuallyHidden-DJvehTyr.js";import"./IconWarning-CYpqa6CU.js";import"./Wrap-DQq6jo70.js";import"./Text-BwHAtMVi.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-BfYT5ZHF.js";import"./LoadingSpinner-By9gTf-N.js";import"./context-DPIhxZmd.js";import"./useStatic-CRo9aToR.js";const fr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(R,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=x.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(v=(f=e.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const vr=["Default","CustomWidth","WithController"];export{t as CustomWidth,o as Default,e as WithController,vr as __namedExportsOrder,fr as default};
