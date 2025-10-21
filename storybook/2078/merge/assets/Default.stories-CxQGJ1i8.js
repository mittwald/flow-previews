import{j as r,R as P}from"./iframe-DW8JgK09.js";import{P as i}from"./Popover-BwqmKO2L.js";import{B as h}from"./Button-DVfVMpGI.js";import{P as R}from"./PopoverTrigger-Bz_Y9AtA.js";import{u as x}from"./useOverlayController-I2I_tOTO.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-DVStQUuA.js";import"./index-SxHndKnJ.js";import"./index-7zpoyBXT.js";import"./OverlayContextProvider-C8Nzf3Jv.js";import"./context-BXN8qI2U.js";import"./useStatic-Dd3Fa8_Q.js";import"./Dialog-Ch87mkCh.js";import"./Button-B7FVzAyg.js";import"./utils-qQbsMKok.js";import"./ProgressBar-CK1_umDo.js";import"./Label-CI_LuAln.js";import"./Hidden-DtieFvyE.js";import"./filterDOMProps-CghfNOdR.js";import"./context-MVg0njeL.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Gti5y3pG.js";import"./useFocus-BeoGO6Gw.js";import"./useFocusRing-GKfEZ5du.js";import"./useFocusable-ClSVLyWP.js";import"./RSPContexts-DSsYPi0N.js";import"./OverlayArrow-Cbixw9Yo.js";import"./useControlledState-BE2AOUIF.js";import"./Collection-C1Fkd8Xr.js";import"./CollectionBuilder-CBDSTuoJ.js";import"./SelectionIndicator-CLj4WkbT.js";import"./Separator-CkUHVVyK.js";import"./Text-Dj-iJoJL.js";import"./SelectionManager-BpH8C0of.js";import"./useEvent-DPuiGjqT.js";import"./useCollator-JcvJSriM.js";import"./FocusScope-BFAEdpe6.js";import"./useLocalizedStringFormatter-Dqx84O-E.js";import"./VisuallyHidden-Da3g07dP.js";import"./ClearPropsContextView-E99s4u78.js";import"./IconWarning-Bj3cOyEj.js";import"./Text-DqrSOA-D.js";import"./browser-Ddqyq5_4.js";import"./EmulatedBoldText-C-FDCcHS.js";import"./LoadingSpinner-3AaEPCkk.js";import"./OverlayTrigger-scn-DxI7.js";import"./ControlledNotification-DddFzpg9.js";import"./DialogTriggerView-BpukwSUt.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(R,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=x("Popover"),s=P.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
