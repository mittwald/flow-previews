import{j as r,R as P}from"./iframe-B7R3Cp0m.js";import{P as i}from"./Popover-BWO2bA7O.js";import{B as h}from"./Button-BfLhmrhP.js";import{P as R}from"./PopoverTrigger-BYvqH-ON.js";import{u as x}from"./useOverlayController-DNghvfr6.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-W1sLmgeU.js";import"./index-DeoRyUxP.js";import"./index-DEEeTq16.js";import"./OverlayContextProvider-B7mj50o_.js";import"./context-s2Psh2SW.js";import"./useStatic-B9aD_BAc.js";import"./Dialog-qQprQaf0.js";import"./Button-DTyr71oU.js";import"./utils-Cx-QUl4i.js";import"./ProgressBar-BUsdfXWy.js";import"./Label-CciGw-jp.js";import"./Hidden-Cw4vRCn8.js";import"./filterDOMProps-CghfNOdR.js";import"./context-DZWDYeWp.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-CZzcdL0j.js";import"./useFocus-BfnX2cH5.js";import"./useFocusRing-KQNrYpLi.js";import"./useFocusable-gE9kDuNJ.js";import"./RSPContexts-nV9TqCtk.js";import"./OverlayArrow-BoyqVqhR.js";import"./useControlledState-DvHwfOTB.js";import"./Collection-DVhSH9ed.js";import"./CollectionBuilder-CIEMJSOs.js";import"./context-DaR2uroz.js";import"./Separator-BVTEwXXm.js";import"./Text-Cq8XMVEi.js";import"./SelectionManager-D3KJzfXx.js";import"./useEvent-2yiTmDJR.js";import"./useCollator-DXIp2FB0.js";import"./FocusScope-DeadHndu.js";import"./useLocalizedStringFormatter-BoxQ9ugt.js";import"./VisuallyHidden-7GIVT4u3.js";import"./ClearPropsContextView-hmq_Snis.js";import"./IconWarning-CiDVbDUI.js";import"./Text-mmmtihIj.js";import"./browser-D9qXvoab.js";import"./EmulatedBoldText-Bu0mLg2V.js";import"./LoadingSpinner-CBvMx9JI.js";import"./OverlayTrigger-CAnQWu2d.js";import"./ControlledNotification-C5B5aMg4.js";import"./DialogTriggerView-DbJ-L5yy.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(R,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=x("Popover"),s=P.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
