import{j as r,R}from"./iframe-fiZAYE2W.js";import{P as i,a as x}from"./Popover-CAMcFRes.js";import{B as h}from"./Button-CPh6A0ie.js";import{u as P}from"./DialogTriggerView-D_9nk-w4.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-DiYt5N9g.js";import"./mergeRefs-DAMFNCwk.js";import"./index-DAzd7Laa.js";import"./Dialog-CPiJaMak.js";import"./Button-DkSlR_xh.js";import"./utils-sHGDZ6Zl.js";import"./ProgressBar-Bh9iJ1Tb.js";import"./Label-DQZrVrfW.js";import"./Hidden-l1NKNxky.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-8IHfk19G.js";import"./context-0IVozT_C.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-j57SM-Nw.js";import"./useFocus-Bwj4tK_H.js";import"./useFocusRing-B57qzYJa.js";import"./useFocusable-DMthjPSk.js";import"./RSPContexts-DEEb3C3L.js";import"./OverlayArrow-CoJAbzkc.js";import"./useControlledState-Dazdo7hG.js";import"./Collection-BspUYjq1.js";import"./CollectionBuilder-DSqxmXm5.js";import"./Separator-DZKWjpX6.js";import"./Text-H6cA9zz3.js";import"./Group-BCt9JR72.js";import"./SearchField-CnjX_-ia.js";import"./FieldError-DfP4BUoL.js";import"./Form-BAG0Y1U9.js";import"./useLocalizedStringFormatter-Dvod7aWF.js";import"./useTextField-CbBTT6Wa.js";import"./useFormReset-Du9grFIi.js";import"./TextField-qcgW8owJ.js";import"./useEvent-BY_cGdFt.js";import"./SelectionManager-F5TK6880.js";import"./useCollator-BdIY4eGy.js";import"./FocusScope-BzxFGsrZ.js";import"./VisuallyHidden-Dzs1b7hj.js";import"./IconWarning-CB_niWR5.js";import"./Text-BgnbdcU8.js";import"./browser-BJ9bzP1_.js";import"./EmulatedBoldText-DpM_ny8g.js";import"./LoadingSpinner-CBRkZ3k2.js";import"./context-BP9RYxVP.js";import"./useStatic-DK8KGoVH.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
