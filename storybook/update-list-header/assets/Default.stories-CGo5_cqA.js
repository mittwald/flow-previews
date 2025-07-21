import{j as r,R}from"./iframe-p6Bp2Ow-.js";import{P as i,a as x}from"./Popover-BfkzleVk.js";import{B as h}from"./Button-BLeGlv8j.js";import{u as P}from"./DialogTriggerView-DhZV5udn.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BTW_bpGX.js";import"./mergeRefs-BhA_prJr.js";import"./index-CjBL_wgX.js";import"./Dialog-_gMyH4Hj.js";import"./Button-DuvBnjq7.js";import"./utils-CnAbB5du.js";import"./ProgressBar-NAttgbiM.js";import"./Label-zTn1BqTc.js";import"./Hidden-Bh_0QKLq.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-Db1j6kak.js";import"./context-BreHr6W7.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Dx_e9Euk.js";import"./useFocus-DgSV50G0.js";import"./useFocusRing-BMw7ZmRN.js";import"./useFocusable-B_o37Ayh.js";import"./RSPContexts-D2-zMuP7.js";import"./OverlayArrow-jZ3LH-Hh.js";import"./useControlledState-rcKaJ30A.js";import"./Collection-BslN4fmG.js";import"./CollectionBuilder-0vjbF6vR.js";import"./Separator--jTylhFG.js";import"./Text-Cx3sBrCD.js";import"./Input-CreDFhOd.js";import"./SearchField-Djq6QHUL.js";import"./FieldError-Drz17t_W.js";import"./Form-JnaaWtcr.js";import"./Group-U4W79Xdy.js";import"./useLocalizedStringFormatter-DIJ10SGn.js";import"./useTextField-B_B9v3Ja.js";import"./useFormReset-BpxJN7m8.js";import"./TextField-D4rInykg.js";import"./SelectionManager-D33tAYjc.js";import"./useEvent-yXH8ok0I.js";import"./useCollator-DwKmC7HY.js";import"./FocusScope-U7qUa4av.js";import"./VisuallyHidden-DLIZ8dPS.js";import"./IconWarning-_xRihr7t.js";import"./Text-BtmxEKoY.js";import"./browser-B4AtpSGe.js";import"./EmulatedBoldText-DJP3uLZJ.js";import"./LoadingSpinner-Aq6Gq52o.js";import"./context-B70X11Ud.js";import"./useStatic-3gyrNX_Q.js";const Rr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(v=(f=e.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const xr=["Default","CustomWidth","WithController"];export{t as CustomWidth,o as Default,e as WithController,xr as __namedExportsOrder,Rr as default};
