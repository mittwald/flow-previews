import{j as r,R as P}from"./iframe-woTOwd7_.js";import{P as i}from"./Popover-2tuG5vCS.js";import{B as h}from"./Button-CqXZY3YI.js";import{P as R}from"./PopoverTrigger-BIROa-7X.js";import{u as x}from"./useOverlayController-OwJfwlq3.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-B-uEZ_V3.js";import"./index-qiybc8_t.js";import"./index-C7RKIbtQ.js";import"./OverlayContextProvider-CObjqvVa.js";import"./context-BxwyR-58.js";import"./useStatic-DuP9qB1q.js";import"./Dialog-BSqtdg0s.js";import"./Button-BJ7HgVKa.js";import"./utils-D3yPsyL0.js";import"./ProgressBar-utMpytcX.js";import"./Label-Cing85ZS.js";import"./Hidden-BDYhUzcR.js";import"./filterDOMProps-CghfNOdR.js";import"./context-FI-dTyul.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DGvsG6co.js";import"./useFocus-BFXKtnCR.js";import"./useFocusRing-CTuyXOeV.js";import"./useFocusable-BkuBS6Cc.js";import"./RSPContexts-BwXj6WuG.js";import"./OverlayArrow-CJHhfWFg.js";import"./useControlledState-BiOxSYVP.js";import"./Collection-hCvzUTfz.js";import"./CollectionBuilder-Dn4dC_2r.js";import"./context-bBTqONPe.js";import"./Separator-CLneeuje.js";import"./Text-CI6uvf20.js";import"./SelectionManager-DNqlxfyL.js";import"./useEvent-DFvoPCa0.js";import"./useCollator-DvLXcCH3.js";import"./FocusScope-CzW3cjLK.js";import"./useLocalizedStringFormatter-D-GXZJS3.js";import"./VisuallyHidden-C2zuidlV.js";import"./ClearPropsContextView-CjyS1sud.js";import"./IconWarning-DjIAWUJ_.js";import"./Text-BJYnGCYe.js";import"./browser-B4P6bty3.js";import"./EmulatedBoldText-BDnx0pnN.js";import"./LoadingSpinner-CNqJtC-J.js";import"./OverlayTrigger-CRF0Gc7N.js";import"./ControlledNotification-LitDRyiB.js";import"./DialogTriggerView-C0oKAAZW.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(R,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=x("Popover"),s=P.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(v=(f=e.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const Pr=["Default","CustomWidth","WithController"];export{t as CustomWidth,o as Default,e as WithController,Pr as __namedExportsOrder,hr as default};
