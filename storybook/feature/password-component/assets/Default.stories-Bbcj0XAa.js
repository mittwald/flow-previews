import{P as m,a as R}from"./Popover-JWZxBsOr.js";import{R as r}from"./index-B-o1Wr-g.js";import{B as P}from"./Button-CdyldGEh.js";import{u as h}from"./OverlayTrigger-BsE9VmBK.js";import"./flowComponent-DzRn2dHN.js";import"./PropsContextProvider-BHq6Fnml.js";import"./index-ynQ6n1pc.js";import"./clsx-B-dksMZM.js";import"./index-DolzVqEf.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./Dialog-B2ZKBZvY.js";import"./Button-CQNWHC4E.js";import"./utils-DQkeZTYT.js";import"./ProgressBar-BOrlGNM-.js";import"./Label-DFSCGvPu.js";import"./Hidden-CRdWNeH8.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DrlXsFf-.js";import"./useLocalizedStringFormatter-BQr1rA-c.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-DbryJmtU.js";import"./useFocusRing-CTDVvBmm.js";import"./usePress-C3EQNDer.js";import"./RSPContexts-BT50PPhj.js";import"./OverlayArrow-Dus-MUVG.js";import"./useControlledState-BgxdDqm0.js";import"./Collection-CYXS91v-.js";import"./CollectionBuilder-cPXIJfS-.js";import"./Separator-BjdLMd1e.js";import"./Text-CFSbYzT7.js";import"./SelectionManager-Dnw_ATjh.js";import"./FocusScope-Deam_7e8.js";import"./useEvent-CmPtILZD.js";import"./useCollator-DiB6vpBo.js";import"./VisuallyHidden-lWpahT0S.js";import"./IconApp-CD2056Zv.js";import"./IconWarning-Cztu4aW_.js";import"./Wrap-DQq6jo70.js";import"./Text-BIf8deIo.js";import"./browser-B3hGj0u-.js";import"./EmulatedBoldText-1x_0FOGF.js";import"./LoadingSpinner-D0g-HjTF.js";import"./context-KYSo3Igr.js";import"./useSelector-CycUQxPi.js";const cr={title:"Overlays/Popover",component:m,render:p=>r.createElement(R,null,r.createElement(P,null,"Trigger popover"),r.createElement(m,{...p,placement:"bottom right"},"I am a popover."))},o={},e={args:{width:800}},t={render:p=>{const i=h("Popover"),n=r.useRef(null);return r.createElement(r.Fragment,null,r.createElement(P,{ref:n,onPress:i.open},"Trigger popover"),r.createElement(m,{triggerRef:n,...p,controller:i},"I am a popover."))}};var a,s,l;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(l=(s=o.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var c,u,g;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    width: 800
  }
}`,...(g=(u=e.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};var d,f,v;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(v=(f=t.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const ur=["Default","CustomWidth","WithController"];export{e as CustomWidth,o as Default,t as WithController,ur as __namedExportsOrder,cr as default};
