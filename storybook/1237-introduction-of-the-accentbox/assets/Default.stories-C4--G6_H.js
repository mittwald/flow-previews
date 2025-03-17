import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{P as i,a as R}from"./Popover-C72a6c-h.js";import{R as x}from"./index-BZISi7jw.js";import{B as h}from"./Button-X6Ol6DAx.js";import{u as P}from"./MenuTrigger-Czsj__mT.js";import"./clsx-B-dksMZM.js";import"./flowComponent-BQKp_5Ng.js";import"./index-BBXbSWyk.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-C0qn59OO.js";import"./index-Dfd2pZHs.js";import"./DialogTriggerView-lqQQK5Sp.js";import"./Dialog-BXcqMr2E.js";import"./Button-DAivm4ks.js";import"./utils-BAtcVSHo.js";import"./ProgressBar-B6tGqqoL.js";import"./Label--FbMCZJS.js";import"./Hidden-kqRI_mPI.js";import"./filterDOMProps-CeZl_uWj.js";import"./useLabel-Bh1EGhcd.js";import"./useLocalizedStringFormatter-CZn_2Om1.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-ChNHSMR7.js";import"./useFocus-B7LXpZ-i.js";import"./useFocusRing-CYqHz5Aw.js";import"./useFocusable-XxrpiuTs.js";import"./RSPContexts-BEYwq1Zw.js";import"./OverlayArrow-PYb9PIt4.js";import"./useControlledState-4nfZ-XMX.js";import"./Collection-BNxR9rC7.js";import"./CollectionBuilder-BlZkV0U0.js";import"./Separator-xQlHCyu8.js";import"./Text-CxIdO6ok.js";import"./SelectionManager-B6hW899S.js";import"./useEvent-0eO3yNkM.js";import"./useCollator-CDl7pGf-.js";import"./FocusScope-BXsjqcwe.js";import"./VisuallyHidden-CfzjMNmM.js";import"./IconApp-DZf0STiH.js";import"./IconWarning-BqX4qer7.js";import"./Wrap-DQq6jo70.js";import"./Text-BPAvSiAh.js";import"./browser-B1A6F7LW.js";import"./EmulatedBoldText-BfYT5ZHF.js";import"./LoadingSpinner-_BP_ZOWb.js";import"./context-BWt75kQX.js";import"./useStatic-CZ_o1reA.js";const fr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(R,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=x.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(v=(f=e.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const vr=["Default","CustomWidth","WithController"];export{t as CustomWidth,o as Default,e as WithController,vr as __namedExportsOrder,fr as default};
