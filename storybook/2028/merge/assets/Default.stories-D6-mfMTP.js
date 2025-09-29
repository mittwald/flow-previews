import{j as r,R as P}from"./iframe-CP2gb4h4.js";import{P as i}from"./Popover-DiNyTyGh.js";import{B as h}from"./Button-D4XL1rEM.js";import{P as R}from"./PopoverTrigger-CEKo5KNO.js";import{u as x}from"./useOverlayController-BHsxb3JP.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BPf_B31n.js";import"./index-BSCJfbqF.js";import"./index-Cu5Se3_L.js";import"./OverlayContextProvider-BzrNIylh.js";import"./context-DCT4qJcM.js";import"./useStatic-B6aSEDsB.js";import"./Dialog-BATijwiU.js";import"./Button-BqMMv05B.js";import"./utils-D_s8y5un.js";import"./ProgressBar-antzpYY8.js";import"./Label-683tI7vQ.js";import"./Hidden-BIuobSa8.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-INWae1Ce.js";import"./context-BA56fXp2.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-B35msVos.js";import"./useFocus-DJT_GDyJ.js";import"./useFocusRing-B2VMeUUD.js";import"./useFocusable-B9L3OVB4.js";import"./RSPContexts-CjMIBS3_.js";import"./OverlayArrow-DcwP4WPp.js";import"./useControlledState-4L3XIdhl.js";import"./Collection-O2YnEgLD.js";import"./CollectionBuilder-Cm1DEo3g.js";import"./context-ScZH95Xu.js";import"./Separator-DiCclCCI.js";import"./Text-CxBtgOGW.js";import"./SelectionManager-Dx1qQpQA.js";import"./useEvent-rLgwngju.js";import"./useCollator-CVHtnlLz.js";import"./FocusScope-8zrVT8FZ.js";import"./useLocalizedStringFormatter-JiHDNkwa.js";import"./VisuallyHidden-GZJ9Ibhy.js";import"./ClearPropsContextView-YbrwDHkX.js";import"./IconWarning-D-rMLbvq.js";import"./Text-D1BFrV-v.js";import"./browser-Cy2PTbDb.js";import"./EmulatedBoldText-DPtC43a-.js";import"./LoadingSpinner-CCoJakpE.js";import"./OverlayTrigger-DMAetqx7.js";import"./ControlledNotification-DPwgQBkl.js";import"./DialogTriggerView-BC-YGFEK.js";const Pr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(R,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=x("Popover"),s=P.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(v=(f=e.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const Rr=["Default","CustomWidth","WithController"];export{t as CustomWidth,o as Default,e as WithController,Rr as __namedExportsOrder,Pr as default};
