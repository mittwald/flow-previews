import{j as r,R}from"./iframe-QjFTiyQe.js";import{P as i,a as x}from"./Popover-B3H4bpbb.js";import{B as h}from"./Button-DswPXoPV.js";import{u as P}from"./DialogTriggerView-nOYLeOX3.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-PqleG2qG.js";import"./mergeRefs-DEBbLA0v.js";import"./index-DHnDWVTa.js";import"./ClearPropsContextView-BPsPBjo2.js";import"./useFocus-CRsfU1Oq.js";import"./ProgressBar-gZUBqeyg.js";import"./utils-r8e_N1jc.js";import"./Label-5Cz2mi-i.js";import"./Hidden-DTf8hiFE.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BzcwXIx3.js";import"./context-CTF16ofK.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-Dx1OInf3.js";import"./IconWarning-I1gVfg4d.js";import"./Text-BZfLsL9o.js";import"./browser-CetGLHjc.js";import"./EmulatedBoldText-B1qs5w8y.js";import"./Text-C66hVS57.js";import"./LoadingSpinner-DWbOqfQP.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-DQP_vP71.js";import"./Button-Czs8nreM.js";import"./usePress-CnoQHIlJ.js";import"./useFocusRing-xi6RBNRG.js";import"./useFocusable-D3z6GPZp.js";import"./context-Be1upz9q.js";import"./useStatic-Dq12R2u8.js";import"./RSPContexts-D-dV82T_.js";import"./FocusScope-zGp-W5qB.js";import"./useCollator-CVr4ya_1.js";import"./VisuallyHidden-YhvwkWEW.js";import"./Collection-CqUJc8bm.js";import"./CollectionBuilder-D_prnUUR.js";import"./context-BV634MuB.js";import"./Separator-C2SfW9_n.js";import"./SelectionManager-Da7BobSD.js";import"./useEvent-C1lgvXKS.js";const lr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    width: 800
  }
}`,...(d=(u=e.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var g,f,v;t.parameters={...t.parameters,docs:{...(g=t.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
}`,...(v=(f=t.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const ur=["Default","CustomWidth","WithController"];export{e as CustomWidth,o as Default,t as WithController,ur as __namedExportsOrder,lr as default};
