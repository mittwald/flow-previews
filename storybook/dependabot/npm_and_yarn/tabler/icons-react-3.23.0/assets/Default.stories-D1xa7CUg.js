import{P as m,a as R}from"./Popover-DyNDSVv1.js";import{R as r}from"./index-B-o1Wr-g.js";import{B as P}from"./Button-DuoAUubL.js";import{u as h}from"./OverlayTrigger-BwAo49x6.js";import"./flowComponent-DtNydOjY.js";import"./PropsContextProvider-BHq6Fnml.js";import"./index-ynQ6n1pc.js";import"./clsx-B-dksMZM.js";import"./index-DolzVqEf.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./OverlayArrow-BMY-498z.js";import"./useFocusRing-CTDVvBmm.js";import"./ProgressBar-C7LzY9et.js";import"./utils-CCebJm36.js";import"./Label-BFvRcNt5.js";import"./Hidden-CRdWNeH8.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-DrlXsFf-.js";import"./useLocalizedStringFormatter-BQr1rA-c.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-BgxdDqm0.js";import"./IconApp-BbidcrnQ.js";import"./IconWarning-BMyAMWqC.js";import"./Wrap-DQq6jo70.js";import"./Text-f9zdzMsn.js";import"./EmulatedBoldText-1x_0FOGF.js";import"./Text-CByKVUtS.js";import"./LoadingSpinner-Br3IGbOn.js";import"./Button-DpaYcQnV.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useFocusable-CjESOWAx.js";import"./usePress-C3EQNDer.js";import"./RSPContexts-BT50PPhj.js";import"./Collection-DyVww_gO.js";import"./CollectionBuilder-CRjClK3P.js";import"./Header-Bk-D7IzI.js";import"./Separator-BAc0WD8W.js";import"./SelectionManager-Dnw_ATjh.js";import"./FocusScope-Deam_7e8.js";import"./useEvent-CmPtILZD.js";import"./useCollator-DiB6vpBo.js";import"./VisuallyHidden-lWpahT0S.js";import"./context-DRjkQoUv.js";import"./useSelector-DI6d9Mj-.js";const lr={title:"Overlays/Popover",component:m,render:p=>r.createElement(R,null,r.createElement(P,null,"Trigger popover"),r.createElement(m,{...p,placement:"bottom right"},"I am a popover."))},o={},e={args:{width:800}},t={render:p=>{const i=h("Popover"),n=r.useRef(null);return r.createElement(r.Fragment,null,r.createElement(P,{ref:n,onPress:i.open},"Trigger popover"),r.createElement(m,{triggerRef:n,...p,controller:i},"I am a popover."))}};var a,s,l;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(l=(s=o.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var c,u,g;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(v=(f=t.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const cr=["Default","CustomWidth","WithController"];export{e as CustomWidth,o as Default,t as WithController,cr as __namedExportsOrder,lr as default};
