import{j as r,R}from"./iframe-DkzCwCX4.js";import{P as i,a as x}from"./Popover-DLWa551b.js";import{B as h}from"./Button-BnlekXC3.js";import{u as P}from"./DialogTriggerView-C0Uk_5SJ.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-j536x9wb.js";import"./mergeRefs-T0LNBBZh.js";import"./index-BnjSe9nq.js";import"./ClearPropsContextView-DIYe_PJW.js";import"./useFocus-ib9l0UKV.js";import"./ProgressBar-BPpVJdpP.js";import"./utils-CLIXtwVU.js";import"./Label-CxXDsSed.js";import"./Hidden-Co6TepXZ.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-BJPqeoy6.js";import"./context-R4HBJhIj.js";import"./NumberFormatter-DNR9MAW-.js";import"./useControlledState-BOJEDAaV.js";import"./IconWarning-DW3eva0Y.js";import"./Text-nAHNspGp.js";import"./browser-Dj2wjmgz.js";import"./EmulatedBoldText-DFUvlzyn.js";import"./Text-lQk_ytCv.js";import"./LoadingSpinner-CQddXTjo.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./useLocalizedStringFormatter-D8Y9ojCx.js";import"./Button-BmtE6ca-.js";import"./usePress-Bo4yNuZG.js";import"./useFocusRing-D8oCWed-.js";import"./useFocusable-DGleC9_O.js";import"./context-C3VhVMcy.js";import"./useStatic-DPeMNtEl.js";import"./RSPContexts-ypxcCxo7.js";import"./FocusScope-DTdzqE55.js";import"./useCollator-CJfXA3qY.js";import"./VisuallyHidden-CyZzuY0Z.js";import"./Collection-DoEHjGcH.js";import"./CollectionBuilder-BePk8bko.js";import"./Separator-uSA5LFxj.js";import"./Group-0pV7udqg.js";import"./SearchField-Cdw14afw.js";import"./FieldError-Jo1S5986.js";import"./Form-Bd46is8r.js";import"./useTextField-DDEFSut-.js";import"./useFormReset-Dtav30sm.js";import"./TextField-DIeR-UPB.js";import"./useEvent-D_rPsZtc.js";import"./SelectionManager-Dg3ay1FE.js";const vr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(v=(f=e.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const hr=["Default","CustomWidth","WithController"];export{t as CustomWidth,o as Default,e as WithController,hr as __namedExportsOrder,vr as default};
