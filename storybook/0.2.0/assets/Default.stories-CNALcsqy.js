import{P as m,a as R}from"./Popover-DvsbnfGF.js";import{R as r}from"./index-BbMBc-iG.js";import{B as P}from"./Button-1rw05oyV.js";import{u as h}from"./OverlayTrigger-CO8vF-4q.js";import"./flowComponent-CaEd1ouJ.js";import"./index-U7Evrs-N.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-CPTjWdH1.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-BgoMLKZk.js";import"./Dialog-BQ_biHhV.js";import"./Button-8ZRRpxMH.js";import"./utils-D4Vol65q.js";import"./ProgressBar-tRLoFn7O.js";import"./Label-BybFgH_Q.js";import"./Hidden-BN0YEbzJ.js";import"./filterDOMProps-BSfnXAP7.js";import"./useLabel-C5NcpKQ2.js";import"./useLocalizedStringFormatter-DYdTqA_9.js";import"./NumberFormatter-DT0cDaax.js";import"./LiveAnnouncer-DFDjXwI8.js";import"./useFocusable-BA3lYSOI.js";import"./useFocusRing-DA2rHHrb.js";import"./usePress-DotMbixf.js";import"./RSPContexts-CBHfX6hb.js";import"./OverlayArrow-CrZGdHWF.js";import"./useControlledState-CMnoB41k.js";import"./Collection-BUbbDiz9.js";import"./CollectionBuilder-DOwRmyqO.js";import"./Separator-CpmRlxds.js";import"./Text-oWh285ma.js";import"./SelectionManager-DnQnei6w.js";import"./FocusScope-TaiHum7E.js";import"./useEvent-D1lr70i2.js";import"./useCollator-CzQekWjs.js";import"./VisuallyHidden-CAwLSgYE.js";import"./IconApp-B_zPpa1A.js";import"./react-children-utilities-BBO5HXrA.js";import"./IconWarning-CceziLlX.js";import"./Wrap-DQq6jo70.js";import"./Text-D6naXSDy.js";import"./browser-DXl7VCm2.js";import"./EmulatedBoldText-ZO8wNulR.js";import"./LoadingSpinner-y4xqeSCe.js";import"./context-PpKQHRcf.js";import"./useSelector-CI2pTLXu.js";const ur={title:"Overlays/Popover",component:m,render:p=>r.createElement(R,null,r.createElement(P,null,"Trigger popover"),r.createElement(m,{...p,placement:"bottom right"},"I am a popover."))},o={},e={args:{width:800}},t={render:p=>{const i=h("Popover"),n=r.useRef(null);return r.createElement(r.Fragment,null,r.createElement(P,{ref:n,onPress:i.open},"Trigger popover"),r.createElement(m,{triggerRef:n,...p,controller:i},"I am a popover."))}};var a,s,l;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:"{}",...(l=(s=o.parameters)==null?void 0:s.docs)==null?void 0:l.source}}};var c,u,g;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(v=(f=t.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const gr=["Default","CustomWidth","WithController"];export{e as CustomWidth,o as Default,t as WithController,gr as __namedExportsOrder,ur as default};
