import{j as r,R}from"./iframe-CmZc2bqi.js";import{P as i,a as x}from"./Popover-Brwgt09W.js";import{B as h}from"./Button-VEnTPgt_.js";import{u as P}from"./DialogTriggerView-Devfp8nk.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Dzg9xpLh.js";import"./mergeRefs-rrkuZ5lZ.js";import"./index-EhdKi2rO.js";import"./Dialog-C8j6vy7m.js";import"./Button-CwlwACKZ.js";import"./utils-fQLXfhJQ.js";import"./ProgressBar-CSln1win.js";import"./Label-CpNDP5E5.js";import"./Hidden-BSO18HGs.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-CtvvIYui.js";import"./context-Cw7k38tl.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DHN_pdfM.js";import"./useFocus-DY4K5Od-.js";import"./useFocusRing-sPcGsq2F.js";import"./useFocusable-D9qZqDJ-.js";import"./RSPContexts-BZzxK-gf.js";import"./OverlayArrow-DglMoI2B.js";import"./useControlledState-CRvbu7Hz.js";import"./Collection-DjdIGVi0.js";import"./CollectionBuilder-CnF6WRcM.js";import"./Separator-7rE_vwQ_.js";import"./Text-Bx1XUj_S.js";import"./Group-BrnlYKy2.js";import"./SearchField-CHmOEpRX.js";import"./FieldError-CDojZsJo.js";import"./Form-DSe96I0y.js";import"./useLocalizedStringFormatter-DzGub7xE.js";import"./useTextField-yJLMliYt.js";import"./useFormReset-sUUVL5Mg.js";import"./TextField-B6Lvx4B_.js";import"./useEvent-Bt3Pdp32.js";import"./SelectionManager-Bx2-6Dwl.js";import"./useCollator-auH5hY6V.js";import"./FocusScope-CVBsChQR.js";import"./VisuallyHidden-BIaD2K_8.js";import"./IconWarning-B3Gp2u9T.js";import"./Text-COKPMQN9.js";import"./browser-Cqy7wjuz.js";import"./EmulatedBoldText-B0pwgNBL.js";import"./LoadingSpinner-CdGxMhIP.js";import"./context-BhzXq7hi.js";import"./useStatic-UpaM-E4a.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
