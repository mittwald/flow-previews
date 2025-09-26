import{j as r,R}from"./iframe-JrijvI0G.js";import{P as i,a as x}from"./Popover-irUcUI-O.js";import{B as h}from"./Button-nOLp9HyP.js";import{u as P}from"./DialogTriggerView-DOh3nc4_.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Bc6JGim9.js";import"./mergeRefs-CbRd_Ras.js";import"./index-BPCP2ZZE.js";import"./ClearPropsContextView-Dl_oHLSA.js";import"./useFocus-DA61-eEI.js";import"./ProgressBar-D10mUZdz.js";import"./utils-DhZkrhHH.js";import"./Label-1jXHzd37.js";import"./Hidden-CHpGmdBq.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-D5nQ4vXC.js";import"./context-CnkMg4nA.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-DQPwS-UF.js";import"./IconWarning-B3U3_U2s.js";import"./Text-9s7Vdafx.js";import"./browser-eHAjn9uV.js";import"./EmulatedBoldText-BVZ71ko2.js";import"./Text-Bm8Zb_oa.js";import"./LoadingSpinner-BpDSxo2f.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-M08v5G9w.js";import"./Button-Bp13GR3E.js";import"./usePress-JaoXEhrO.js";import"./useFocusRing-DCbTuOGO.js";import"./useFocusable-DIk21gkV.js";import"./context-CS_K62PD.js";import"./useStatic-9jHtrOTK.js";import"./RSPContexts-bEimFc0k.js";import"./FocusScope-Bwbpfbbo.js";import"./useCollator-ChdaOTfc.js";import"./VisuallyHidden-B4SYhrOy.js";import"./Collection-yP15xrib.js";import"./CollectionBuilder-CnCpguDd.js";import"./context-SLDg-fw2.js";import"./Separator-D6-9qD1D.js";import"./SelectionManager-C2kTlReE.js";import"./useEvent-BTKtfW_h.js";const lr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
