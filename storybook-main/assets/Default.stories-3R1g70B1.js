import{j as r,R}from"./iframe-CPZzz606.js";import{P as i,a as x}from"./Popover-BrkdeB_0.js";import{B as h}from"./Button-pCBSultP.js";import{u as P}from"./DialogTriggerView-CzpBmyqI.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CRqwxMEv.js";import"./mergeRefs-C0rS3-iA.js";import"./index-DEYSJV5h.js";import"./Dialog-DwMRnG84.js";import"./Button-Duf2neHD.js";import"./utils-hIOiRbRa.js";import"./ProgressBar-Bt4eS-sP.js";import"./Label-NfUS4-fW.js";import"./Hidden-Dc7FsRzF.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-z4mqv1Jd.js";import"./context-CViJrtm-.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Cx1ggqha.js";import"./useFocus-C_gNEsKA.js";import"./useFocusRing-B6XF-T5t.js";import"./useFocusable-Ci-OciRZ.js";import"./RSPContexts-CvcQ69I6.js";import"./OverlayArrow-BDHME5Dc.js";import"./useControlledState-9qfYMj22.js";import"./Collection-7BVyTjlZ.js";import"./CollectionBuilder-CzrpBRcI.js";import"./Separator-BiRydKiO.js";import"./Text-BoUJhWX_.js";import"./Group-C8G6Zc28.js";import"./SearchField-AT0aPHjw.js";import"./FieldError-zYKEm-70.js";import"./Form-BILDQ_LX.js";import"./useLocalizedStringFormatter-DPLafpGQ.js";import"./useTextField-BMmwbaof.js";import"./useFormReset-C84L7XAZ.js";import"./TextField-DmRYj9dm.js";import"./useEvent-7mKEowYR.js";import"./SelectionManager-aTZIig9u.js";import"./useCollator-B1cTbBXX.js";import"./FocusScope-jLRXpVZJ.js";import"./VisuallyHidden-CPq3vmdG.js";import"./IconWarning-BPgxt_jx.js";import"./Text-DzdHITqg.js";import"./browser-CzF8oOuQ.js";import"./EmulatedBoldText-28L-LsQV.js";import"./LoadingSpinner-BcRThk1E.js";import"./context-AQX-vkQB.js";import"./useStatic-Dc3QDw1T.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
