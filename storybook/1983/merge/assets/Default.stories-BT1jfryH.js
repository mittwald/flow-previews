import{j as r,R}from"./iframe-C41GO6P6.js";import{P as i,a as x}from"./Popover-DEl9axMZ.js";import{B as h}from"./Button-EU7ZCBUb.js";import{u as P}from"./DialogTriggerView-BwB5gCJZ.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BlE6VFtE.js";import"./mergeRefs-Hgr2X06A.js";import"./index-D__hiUrI.js";import"./ClearPropsContextView-CpAffOzl.js";import"./useFocus-CcyM5uvG.js";import"./ProgressBar-BdICdwMW.js";import"./utils-Be5F4DcQ.js";import"./Label-I71uq1jB.js";import"./Hidden-COug4O8x.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel--RfYT5XW.js";import"./context-Om8YW_Qo.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-D2xxPiTl.js";import"./IconWarning-C5RwbqDR.js";import"./Text-BYSgteT5.js";import"./browser-DspoMTVt.js";import"./EmulatedBoldText-CJIUXOgz.js";import"./Text-Bnb73OL0.js";import"./LoadingSpinner-MF8PlszG.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-DK3NG-Ma.js";import"./Button-DlD3fRGu.js";import"./usePress-DSqdD5KI.js";import"./useFocusRing-DXsfSaAZ.js";import"./useFocusable-DyjaqCu5.js";import"./context-1RA5jvOs.js";import"./useStatic-DHBtTVNq.js";import"./RSPContexts-B6QAlzIf.js";import"./FocusScope-V0DR1oSw.js";import"./useCollator-D5nYlsQq.js";import"./VisuallyHidden-D1Yd7fBj.js";import"./Collection-C5OyY5G9.js";import"./CollectionBuilder-DOOsEd3G.js";import"./Separator-CWruQEFN.js";import"./Group-celsVWdW.js";import"./SearchField-BbBM1aCT.js";import"./FieldError-qUs-TTn2.js";import"./Form-DZUJdQjd.js";import"./useTextField-CQA55vhK.js";import"./useFormReset-DAlqRR2j.js";import"./TextField-DApuMKmH.js";import"./useEvent-C6r-N21P.js";import"./SelectionManager-ARZMK7nk.js";const vr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
