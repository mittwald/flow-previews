import{j as r,R}from"./iframe-DUtcAVii.js";import{P as i,a as x}from"./Popover-Bm-rwUXe.js";import{B as h}from"./Button-DULuqu_l.js";import{u as P}from"./DialogTriggerView-D0BwiIeE.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CwzFOg6G.js";import"./mergeRefs-DwJumFt0.js";import"./index-CKYZupSE.js";import"./ClearPropsContextView-CAu383Hu.js";import"./useFocus-BBGclxaJ.js";import"./ProgressBar-DzueJvvV.js";import"./utils-BJK0bMVs.js";import"./Label-Cx6s_AVf.js";import"./Hidden-nF8inpoX.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-DY6IDqCz.js";import"./context-DAjKPHt4.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-G4tJUSCb.js";import"./IconWarning-BDc9REUs.js";import"./Text-CIiZgPf0.js";import"./browser-TyqKNGpG.js";import"./EmulatedBoldText-DtNQdD50.js";import"./Text-DD2-gbIJ.js";import"./LoadingSpinner-3c39ELf0.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-D3e_UDLJ.js";import"./Button-2XgEXCNC.js";import"./usePress-DbIX1hOn.js";import"./useFocusRing-4VM8yV9h.js";import"./useFocusable-B2RmLQJm.js";import"./context-DAzA1DTj.js";import"./useStatic-BRK6B1ib.js";import"./RSPContexts-DD7I-zbI.js";import"./FocusScope-Bx_BpPkG.js";import"./useCollator-BJahqQL5.js";import"./VisuallyHidden-CsqdnZMW.js";import"./Collection-YnS658O_.js";import"./CollectionBuilder-ByXQf4MT.js";import"./Separator-DNulUYCD.js";import"./Group-QAGn5nhU.js";import"./SearchField-6u-M9e2f.js";import"./FieldError-B_KU3Njk.js";import"./Form-pelauJUP.js";import"./useTextField-rIWZAcfs.js";import"./useFormReset-CnZg8poR.js";import"./TextField-w7amMjDR.js";import"./useEvent-BWtfFYs6.js";import"./SelectionManager-DxFegUxo.js";const vr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
