import{j as r,R}from"./iframe-MIRc1tgM.js";import{P as i,a as x}from"./Popover-D6qyKu9r.js";import{B as h}from"./Button-JGTIxpZE.js";import{u as P}from"./DialogTriggerView-BBSm9KQL.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-D0cKELyM.js";import"./index-nYe53ytP.js";import"./index-Bluht812.js";import"./ClearPropsContextView-BJ9mJsVp.js";import"./useFocus-D5-sLX53.js";import"./ProgressBar-DSHI0B5V.js";import"./utils-Wg8-dAbi.js";import"./Label-BZ6fLiSQ.js";import"./Hidden-CQtTG736.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BYf9ahG7.js";import"./context-7dZHwnb1.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-hbnLpfLJ.js";import"./IconWarning-0xUxCYxJ.js";import"./Text-DB0aA-4n.js";import"./browser-D2aBH95U.js";import"./EmulatedBoldText-tFsrQfu_.js";import"./Text-CqfOq6kd.js";import"./LoadingSpinner-DiZJo45g.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-DiG2EdIp.js";import"./Button-Bb1_Qr-8.js";import"./usePress-BoYI9IsN.js";import"./useFocusRing-BXtZEpMW.js";import"./useFocusable-42wCCaNx.js";import"./context-B5ID5FgA.js";import"./useStatic-4IAJfawn.js";import"./RSPContexts-TWbyIvJO.js";import"./FocusScope-CO7KUiC3.js";import"./useCollator-ChtnueVT.js";import"./VisuallyHidden-hT4NoAo3.js";import"./Collection-BF9KVqKC.js";import"./CollectionBuilder-gc2XqGfN.js";import"./context-gIAWaTnY.js";import"./Separator-CwF2l7Tl.js";import"./SelectionManager-Bb0sVVLv.js";import"./useEvent-C__VA96B.js";import"./ControlledNotification-DAn0r14w.js";const ur={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(v=(f=e.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const dr=["Default","CustomWidth","WithController"];export{t as CustomWidth,o as Default,e as WithController,dr as __namedExportsOrder,ur as default};
