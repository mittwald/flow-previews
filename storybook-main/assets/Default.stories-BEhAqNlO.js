import{j as r,R}from"./iframe-yblUafAy.js";import{P as i,a as x}from"./Popover-BTOGgCa7.js";import{B as h}from"./Button-D2p8-L8R.js";import{u as P}from"./DialogTriggerView-ChCW7gG4.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-B8EIY1Jj.js";import"./mergeRefs-DPuRbqjH.js";import"./index-DA6b7LJX.js";import"./Dialog-DycU1Q-J.js";import"./Button-Zp10QsFY.js";import"./utils-Cuf_iXmO.js";import"./ProgressBar-p6bTWqPO.js";import"./Label-g9pCZyAY.js";import"./Hidden-C5uXlRoq.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DopEiXYz.js";import"./context-DmpjBdtt.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-io38-WAj.js";import"./useFocus-BRMNIepO.js";import"./useFocusRing-BEFChVB0.js";import"./useFocusable-BbfkEIfW.js";import"./RSPContexts-D2F1j_VZ.js";import"./OverlayArrow-Dvm2kmG0.js";import"./useControlledState-DwQ-hYmo.js";import"./Collection-CsnkEDh_.js";import"./CollectionBuilder-Bu8NYt0R.js";import"./Separator-DEwk_MDL.js";import"./Text-DWcsfeqF.js";import"./Group-kAvMkrn8.js";import"./SearchField-cM2IEerl.js";import"./FieldError-Ct0jDKO_.js";import"./Form-DT2Igymc.js";import"./useLocalizedStringFormatter-DLiSbhJn.js";import"./useTextField-ByVXoEs-.js";import"./useFormReset-BYGEl6Av.js";import"./TextField-BJiBvQru.js";import"./useEvent-C69ifmQP.js";import"./SelectionManager-B7efpdFx.js";import"./useCollator-CBzKX_g0.js";import"./FocusScope-Cc14swpk.js";import"./VisuallyHidden-iXpVyW0k.js";import"./IconWarning-FTunGjDP.js";import"./Text-Bue8FNqz.js";import"./browser-B_6hcHr6.js";import"./EmulatedBoldText-FggCtMpU.js";import"./LoadingSpinner-Y4JEbMCH.js";import"./context-BkC5jRlB.js";import"./useStatic-73QSveBS.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
