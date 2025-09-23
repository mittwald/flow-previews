import{j as r,R}from"./iframe-PPscN4tr.js";import{P as i,a as x}from"./Popover-B4Thu_Ca.js";import{B as h}from"./Button-DOt7fXGF.js";import{u as P}from"./DialogTriggerView-B2ubRe0W.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-cBval16A.js";import"./mergeRefs-DnJs-uwA.js";import"./index-DZCrbm-c.js";import"./ClearPropsContextView-CiAwXYC8.js";import"./useFocus-C4zNlByO.js";import"./ProgressBar-jJ6XsPfz.js";import"./utils-DsPiQVUE.js";import"./Label-CdjKXy54.js";import"./Hidden-BSzw0V8U.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BehMUX7z.js";import"./context-BC4DP49M.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-Bj7Ci1Bi.js";import"./IconWarning-DCjExedU.js";import"./Text-Cr4g403k.js";import"./browser-BBEx8dXu.js";import"./EmulatedBoldText-2c05oBpj.js";import"./Text-DOZF1D9Q.js";import"./LoadingSpinner-BmIM-aij.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-DxKsOw5A.js";import"./Button-Dq2iCs8C.js";import"./usePress-BKGHEFGx.js";import"./useFocusRing-gcrQa-4U.js";import"./useFocusable-BzFu29N-.js";import"./context-DPnYEMwE.js";import"./useStatic-BImXXSW3.js";import"./RSPContexts-CmKI408-.js";import"./FocusScope-DT8YcIVm.js";import"./useCollator-DgDjDGmg.js";import"./VisuallyHidden-DdPky-fR.js";import"./Collection-C__y2sy-.js";import"./CollectionBuilder-BAD3bxW3.js";import"./Separator-CQECSlkM.js";import"./Group-Bw_Vhw_L.js";import"./SearchField-BPbBm38f.js";import"./FieldError-Ccwwr1FD.js";import"./Form-D8YNg8fo.js";import"./useTextField-DGdrajZE.js";import"./useFormReset-CpR4G9FH.js";import"./TextField-C9dqtDV6.js";import"./useEvent-Dso9VxuL.js";import"./SelectionManager-D_TAE1Vs.js";const vr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
