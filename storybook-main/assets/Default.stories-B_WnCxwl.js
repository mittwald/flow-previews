import{j as r,R}from"./iframe-Cb4Rgx0e.js";import{P as i,a as x}from"./Popover-CIu4Zu5_.js";import{B as h}from"./Button-H4sh-QDS.js";import{u as P}from"./DialogTriggerView-BiIifotB.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CbnVRX13.js";import"./mergeRefs-FGc6ILVF.js";import"./index-BCJuwVXE.js";import"./ClearPropsContextView-CBJyDj7P.js";import"./useFocus-DShqRyJ9.js";import"./ProgressBar-DhcjamRH.js";import"./utils-ClJ9kHS9.js";import"./Label-BSwFIexW.js";import"./Hidden-WIE7yK1s.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-YUMynDBh.js";import"./context-CW2oe5vS.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-CQK5P4gM.js";import"./IconWarning-BnvsEgCq.js";import"./Text-B7bLqwrq.js";import"./browser-GZXaf9ZM.js";import"./EmulatedBoldText-BOxB1C6V.js";import"./Text-U_OSpJmR.js";import"./LoadingSpinner-CjRzs_7S.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-DhwOH6Jh.js";import"./Button-CEnLKZ0o.js";import"./usePress-Q8MCvqvF.js";import"./useFocusRing-BzqCweW_.js";import"./useFocusable-Dx7vOlYc.js";import"./context-DxjXV7eH.js";import"./useStatic-CfZfNe1T.js";import"./RSPContexts-WcRCGlYY.js";import"./FocusScope-soGnmPtw.js";import"./useCollator-BXysv4D3.js";import"./VisuallyHidden-CjQvb6dT.js";import"./Collection-CuwOpF0o.js";import"./CollectionBuilder-BboySDMU.js";import"./context-DsHIbBn4.js";import"./Separator-BKeFtAeg.js";import"./SelectionManager-CDVGcynV.js";import"./useEvent-DD3xMrdQ.js";const lr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    width: 800
  }
}`,...(d=(u=e.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var g,f,v;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(v=(f=t.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const ur=["Default","CustomWidth","WithController"];export{e as CustomWidth,o as Default,t as WithController,ur as __namedExportsOrder,lr as default};
