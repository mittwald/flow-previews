import{j as r,R}from"./iframe--ZPVLz8g.js";import{P as i,a as x}from"./Popover-CwXjY44O.js";import{B as h}from"./Button-ipeD2xQq.js";import{u as P}from"./DialogTriggerView-CLfTDJ19.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-nWC3VOMj.js";import"./mergeRefs-VsgLfvv3.js";import"./index-CUxE1TYv.js";import"./Dialog-C5Xh-9_q.js";import"./Button-nXFtpqu6.js";import"./utils-CjuahFs2.js";import"./ProgressBar-C7iwaIvl.js";import"./Label-jWQ4-Gqi.js";import"./Hidden-F0y0p3A_.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-rVnfHrLk.js";import"./context-CYq-vfev.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-BT12SUT-.js";import"./useFocus-BI6mVvV1.js";import"./useFocusRing-CQfGGNBr.js";import"./useFocusable-CySdtwHN.js";import"./RSPContexts-4UEDZgUk.js";import"./OverlayArrow-BrvbOkZ-.js";import"./useControlledState-CTCa-DaJ.js";import"./Collection-BOzi5_VH.js";import"./CollectionBuilder-BMRUZo1e.js";import"./Separator-BUnYRuL5.js";import"./Text-du_1NL-y.js";import"./Group-CTVEw3FJ.js";import"./SearchField-DDwMLnUN.js";import"./FieldError-jq5pvDUD.js";import"./Form-CzoyYLrP.js";import"./useLocalizedStringFormatter-D8nOtH8X.js";import"./useTextField-DLQgkNBY.js";import"./useFormReset-B3ZybcNU.js";import"./TextField-BusVcIbT.js";import"./useEvent-Co8EjSPm.js";import"./SelectionManager-V388soIh.js";import"./useCollator-CfPt7Von.js";import"./FocusScope-C9FAKDVz.js";import"./VisuallyHidden-CbNFz2F0.js";import"./IconWarning-4_E3WNTs.js";import"./Text-BWChA6Qp.js";import"./browser-D6_kvesK.js";import"./EmulatedBoldText-Qqp8fG5V.js";import"./LoadingSpinner-DOWHWybS.js";import"./context-BCg0Ekp8.js";import"./useStatic-IQie-ZqP.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
