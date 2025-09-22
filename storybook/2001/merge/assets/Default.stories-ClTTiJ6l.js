import{j as r,R}from"./iframe-DyMBbPqz.js";import{P as i,a as x}from"./Popover-DeFJzkTr.js";import{B as h}from"./Button-BlPqNUGj.js";import{u as P}from"./DialogTriggerView-DxOJ-uUS.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-D5JFbFDv.js";import"./mergeRefs-DzqYcA-L.js";import"./index-DOr1CDfn.js";import"./Dialog-CGM20lGa.js";import"./Button-B4XEqpsk.js";import"./utils-CVBG1xQY.js";import"./ProgressBar-78wlbF0l.js";import"./Label-BeoFpfOq.js";import"./Hidden-DDXBBs4Y.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-_qDqqXns.js";import"./context-Da3l2mom.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-D3aMe8WM.js";import"./useFocus-DU8oSjU-.js";import"./useFocusRing-vfzYXE-6.js";import"./useFocusable-DC8rXwC1.js";import"./RSPContexts-BQIv_6Ah.js";import"./OverlayArrow-LvdRNExG.js";import"./useControlledState-D80JYNPC.js";import"./Collection-BmjshBTi.js";import"./CollectionBuilder-CRQRCBBG.js";import"./Separator-VLOdIwGI.js";import"./Text-CM2C2q3t.js";import"./Group-C7CCq00M.js";import"./SearchField-Bdf4_ahw.js";import"./FieldError-rzK-dnZK.js";import"./Form-XPOYZQVX.js";import"./useLocalizedStringFormatter-Bkn65txD.js";import"./useTextField-BufQoHeE.js";import"./useFormReset-BRpdsPso.js";import"./TextField-COySyIxF.js";import"./useEvent-65UMilnF.js";import"./SelectionManager-S-Cyaza4.js";import"./useCollator-CddKm6Uk.js";import"./FocusScope-D43MAOt-.js";import"./VisuallyHidden-CSYVn4hw.js";import"./IconWarning-ZZpE0RLv.js";import"./Text-CukGSnAt.js";import"./browser-n8MK_CxL.js";import"./EmulatedBoldText-xvO4zYSH.js";import"./LoadingSpinner-zaoUk7MO.js";import"./context-57hv7F4C.js";import"./useStatic-D-Em2Ifs.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
