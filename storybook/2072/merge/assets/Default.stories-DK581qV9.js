import{j as r,R as P}from"./iframe-CqjcYzEy.js";import{P as i}from"./Popover-C0Icy7BB.js";import{B as h}from"./Button-_n3f2tJI.js";import{P as R}from"./PopoverTrigger-DN5BRnLC.js";import{u as x}from"./useOverlayController-CtOPQD7l.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DQ6MTfU-.js";import"./index-D26L2zGu.js";import"./index-0TrhkGFb.js";import"./OverlayContextProvider-BmYGwoWC.js";import"./context-BZQvEHSq.js";import"./useStatic-B0fjiaVy.js";import"./Dialog-S-MpwxP2.js";import"./Button-BkLoBLwO.js";import"./utils-CEH4bJOc.js";import"./ProgressBar-CdOohM5f.js";import"./Label-D2Nd0YkC.js";import"./Hidden-D7Skj8Od.js";import"./filterDOMProps-CghfNOdR.js";import"./context-CVWMzqu0.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-C-6OBS1L.js";import"./useFocus-BSqxszdS.js";import"./useFocusRing-Cq8bWJ4k.js";import"./useFocusable-Cui5lI-x.js";import"./RSPContexts-CWbXVAY-.js";import"./OverlayArrow-wycJn0we.js";import"./useControlledState-D11yMwJT.js";import"./Collection-BS6hKJ97.js";import"./CollectionBuilder-Ke-tvOIi.js";import"./context-os1nJ67Y.js";import"./Separator-CumANQwW.js";import"./Text-DBGfsT13.js";import"./SelectionManager-7ttSlvgr.js";import"./useEvent-CkTqiin2.js";import"./useCollator-qMQcDonM.js";import"./FocusScope-BTKvvs_H.js";import"./useLocalizedStringFormatter-CfOyXNn0.js";import"./VisuallyHidden-l-GsqitC.js";import"./ClearPropsContextView-BEsUC-dX.js";import"./IconWarning-D54OF1fr.js";import"./Text-C88kvj5Y.js";import"./browser-BlhuXvad.js";import"./EmulatedBoldText-CpIdef6b.js";import"./LoadingSpinner-BJn8yItu.js";import"./OverlayTrigger-ckZkQZqX.js";import"./ControlledNotification-BgE0fw7j.js";import"./DialogTriggerView-G5ODpB3E.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(R,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=x("Popover"),s=P.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
