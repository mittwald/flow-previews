import{j as r}from"./jsx-runtime-CLpGMVip.js";import{P as i,a as R}from"./Popover-BVRZW8kn.js";import{R as x}from"./index-Cf9XvIV_.js";import{B as h}from"./Button-B8Ykdw8u.js";import{u as P}from"./OverlayTrigger-BcgVlnqK.js";import"./flowComponent-CGvK_9lq.js";import"./index-Y1p7vO9S.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-ByctJgwf.js";import"./index-CoqFY4cC.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-CWFvCxZj.js";import"./Dialog-DtCnPnDw.js";import"./Button-TFgGWmnA.js";import"./utils-DbIpkr2E.js";import"./ProgressBar-Bu1Xugb0.js";import"./Label-wrbsGWF5.js";import"./Hidden-le53pkqW.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-ByHVstPj.js";import"./useLocalizedStringFormatter-Dq-FGM-G.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./useFocusable-CJ8wXOex.js";import"./useFocusRing-BUEgee7k.js";import"./usePress-CheaiuQC.js";import"./RSPContexts-BG_vMng8.js";import"./OverlayArrow-C189HunQ.js";import"./useControlledState-19OAjgUP.js";import"./Collection-B01CSX5r.js";import"./CollectionBuilder-bECbC7Nm.js";import"./Separator-CAFr1tdS.js";import"./Text-DUOeOfAn.js";import"./SelectionManager-T3qadk1f.js";import"./FocusScope-CBujmq_y.js";import"./useEvent-C6dKIdOv.js";import"./useCollator-rt50tWWG.js";import"./VisuallyHidden-CFrJCYb7.js";import"./IconApp-6uddCNv0.js";import"./IconWarning-CCrCT0Lo.js";import"./Wrap-DQq6jo70.js";import"./Text-DWihI4Ms.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-CWUNNmIs.js";import"./LoadingSpinner-Caz8lkOu.js";import"./context-DuD98iKb.js";import"./useSelector-CRM3rZ6U.js";const gr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(R,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=x.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(v=(f=e.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const fr=["Default","CustomWidth","WithController"];export{t as CustomWidth,o as Default,e as WithController,fr as __namedExportsOrder,gr as default};
