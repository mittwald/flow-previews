import{j as r,R as P}from"./iframe-DE21mSiE.js";import{P as i}from"./Popover-DHByEabR.js";import{B as h}from"./Button-DdcjdJkJ.js";import{P as R}from"./PopoverTrigger-Co7iXxMR.js";import{u as x}from"./useOverlayController-Fy6NErhC.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./flowComponent-CyATdwQg.js";import"./index-DVBAlOxg.js";import"./index-ssZEpx-s.js";import"./OverlayContextProvider-B008JOFK.js";import"./context-6jqGW8Yr.js";import"./useStatic-Cbl6RHQu.js";import"./Dialog-CqjG3TV5.js";import"./Button-CbR0WrFZ.js";import"./utils-DqYJbNsI.js";import"./ProgressBar-ByrF5SpY.js";import"./Label-C-oTvvPr.js";import"./Hidden-C98sYe40.js";import"./filterDOMProps-CghfNOdR.js";import"./context-Br9w7yZh.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-Dv9orCJu.js";import"./useFocus-CRZNnr1R.js";import"./useFocusRing-pH6mNL0D.js";import"./useFocusable-AVRnrAkJ.js";import"./RSPContexts-BtJsn2IM.js";import"./OverlayArrow-D4IsQ9Uw.js";import"./useControlledState-Bml9wY_-.js";import"./Collection-CtBmofMr.js";import"./CollectionBuilder-OPUz1gD2.js";import"./SelectionIndicator-Daa_H3OJ.js";import"./Separator-BLbs5DM2.js";import"./Text-CutbQTmF.js";import"./SelectionManager-RcCyJikL.js";import"./useEvent-9zXlgdze.js";import"./useCollator-BKBsR6-a.js";import"./FocusScope-1KdfzaZh.js";import"./useLocalizedStringFormatter-Bn_AwxOr.js";import"./VisuallyHidden-pa5WzvsI.js";import"./ClearPropsContextView-DDfoOlOf.js";import"./IconWarning-iWnf9NI2.js";import"./Text-DOdVur7X.js";import"./browser-BjU0tWvf.js";import"./EmulatedBoldText-BOQZ24Hi.js";import"./LoadingSpinner-CObpOXYq.js";import"./OverlayTrigger-DvrZWjw0.js";import"./ControlledNotification-BgQ4ySbx.js";import"./DialogTriggerView-DWxzmU-C.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(R,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=x("Popover"),s=P.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
