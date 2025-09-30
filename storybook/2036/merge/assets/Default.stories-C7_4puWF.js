import{j as r,R}from"./iframe-CxmXe-_O.js";import{P as i,a as x}from"./Popover-Boo6uHgA.js";import{B as h}from"./Button-DVo7WD-1.js";import{u as P}from"./DialogTriggerView-BttboI6J.js";import"./index-Cun1SEai.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-D0hpqFCU.js";import"./mergeRefs-DrFPU8wS.js";import"./index-D4JkFdbd.js";import"./ClearPropsContextView-DkF-i5cN.js";import"./useFocus-BpzuXZ8X.js";import"./ProgressBar-FqWf0sr1.js";import"./utils-Cd13syVz.js";import"./Label-2vh9UW-y.js";import"./Hidden-fABZRyqD.js";import"./filterDOMProps-CghfNOdR.js";import"./context-BaUvMDTJ.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-y5DploKZ.js";import"./IconWarning-DZNLduw-.js";import"./Text-BT2KT2kR.js";import"./browser-fsrkaBj_.js";import"./EmulatedBoldText-D2nyMxZT.js";import"./Text-DV04N56Q.js";import"./LoadingSpinner-DUEgH9Lr.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-D3SJZW6Q.js";import"./Button-DXwv69Ey.js";import"./usePress-BIfsm19n.js";import"./useFocusRing-D7TcncFW.js";import"./useFocusable-CZtfPtCy.js";import"./context-CxNyIzEe.js";import"./useStatic-8bLBY8Gb.js";import"./RSPContexts-RLIssCdn.js";import"./FocusScope-DfTm09Tq.js";import"./useCollator-Crzbf2Ra.js";import"./VisuallyHidden--eIM32hM.js";import"./Collection-DWMrbndQ.js";import"./CollectionBuilder-BDxApjdE.js";import"./context-DGTiufFM.js";import"./Separator-zPxV8vEZ.js";import"./SelectionManager-wV6Nrrvy.js";import"./useEvent-CrG2vQ4Z.js";const cr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},e={args:{width:800}},t={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(v=(f=t.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const lr=["Default","CustomWidth","WithController"];export{e as CustomWidth,o as Default,t as WithController,lr as __namedExportsOrder,cr as default};
