import{j as r,R}from"./iframe-DaJUcpT8.js";import{P as i,a as x}from"./Popover-C3BJJ-PT.js";import{B as h}from"./Button-VCV9ziEp.js";import{u as P}from"./DialogTriggerView-CfzLhP0J.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-ADMZzlWa.js";import"./mergeRefs-BEqFWw_4.js";import"./index-D3N8NcCI.js";import"./Dialog-D9LWMemg.js";import"./Button-BRzam8Ar.js";import"./utils-cm5Xkl-u.js";import"./ProgressBar-Cnbrmi-n.js";import"./Label-CVkBl_Lv.js";import"./Hidden-DcO9dlXt.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-prd9XZsG.js";import"./context-BvSX8hdd.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CEpf8EyH.js";import"./useFocus-BmgQs_EM.js";import"./useFocusRing-BGPs1fr9.js";import"./useFocusable-BAN9nHDM.js";import"./RSPContexts-hBgp-JuF.js";import"./OverlayArrow-CK2mB8Cb.js";import"./useControlledState-CRRDqDT-.js";import"./Collection-Wdd3SW29.js";import"./CollectionBuilder-Bz5wg4gw.js";import"./Separator-DuKCDsxL.js";import"./Text-D1R_5zV7.js";import"./Group-DcjqWYxF.js";import"./SearchField-UXIbzWx2.js";import"./FieldError-CSXHy091.js";import"./Form-68wNlegC.js";import"./useLocalizedStringFormatter-DgJlXYZm.js";import"./useTextField-D2U5Ytm3.js";import"./useFormReset-wR0NNvKg.js";import"./TextField-Usv5aNlb.js";import"./useEvent-rPQ2UWvx.js";import"./SelectionManager-WCXi6IP8.js";import"./useCollator-CWhSIfWE.js";import"./FocusScope-DS_o-PRb.js";import"./VisuallyHidden-DvK-wDtX.js";import"./IconWarning-Di7G1N2l.js";import"./Text-onzY52Lv.js";import"./browser-kRBy5Vjm.js";import"./EmulatedBoldText-Dp6a6rFz.js";import"./LoadingSpinner-8zd3RGCO.js";import"./context-nDH_4RW_.js";import"./useStatic-llywhH4U.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
