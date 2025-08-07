import{j as r,R}from"./iframe-D5sJq8Pp.js";import{P as i,a as x}from"./Popover-BrRw5WAn.js";import{B as h}from"./Button-6TUR0Zrk.js";import{u as P}from"./DialogTriggerView-BkTJ82k3.js";import"./clsx-B-dksMZM.js";import"./PropsContextProvider-Bv9cfvHt.js";import"./mergeRefs-9yWIebUE.js";import"./index-Cm1M_r0i.js";import"./Dialog-D26-Wb54.js";import"./Button-B2KXtDin.js";import"./utils-9AX_qn18.js";import"./ProgressBar-B1EDvacE.js";import"./Label-CqbD1Z1V.js";import"./Hidden-DQQQbJzb.js";import"./filterDOMProps-CghfNOdR.js";import"./useLabel-Ch8Q4uqY.js";import"./context-C2iapZe2.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-CeCcBDbP.js";import"./usePress-DXXMSHM3.js";import"./useFocus-RhB9nR94.js";import"./useFocusRing-DOEM_U6y.js";import"./useFocusable-DeL6Y164.js";import"./RSPContexts-DjLkZjo9.js";import"./OverlayArrow-DbUVmUBM.js";import"./useControlledState-BiqnvFAK.js";import"./Collection-CrQdosmw.js";import"./CollectionBuilder-BhFH6yJo.js";import"./Separator-BLR5bueI.js";import"./Text-DkuK7F_5.js";import"./Group-DaTscDKv.js";import"./SearchField-D8zXD-s8.js";import"./FieldError-DPBRE9in.js";import"./Form-B6p3srko.js";import"./useLocalizedStringFormatter-BQN07ymD.js";import"./useTextField-BQF8DS2o.js";import"./useFormReset-BYD-PEh4.js";import"./TextField-Ce9H6aw_.js";import"./useEvent-Nf0LSw3x.js";import"./SelectionManager-B8zwja7I.js";import"./useCollator-i6ItQplZ.js";import"./FocusScope-Rm6rMrw2.js";import"./VisuallyHidden-BeWBbeMu.js";import"./IconWarning-DOhF27zV.js";import"./Text-DSs6zbpd.js";import"./browser-Um_OLCfa.js";import"./EmulatedBoldText-DJswokg6.js";import"./LoadingSpinner-ai3Tl6wI.js";import"./context-Bqz1H1Fh.js";import"./useStatic-C2JikVB-.js";const hr={title:"Overlays/Popover",component:i,render:p=>r.jsxs(x,{children:[r.jsx(h,{children:"Trigger popover"}),r.jsx(i,{...p,placement:"bottom right",children:"I am a popover."})]})},o={},t={args:{width:800}},e={render:p=>{const m=P("Popover"),s=R.useRef(null);return r.jsxs(r.Fragment,{children:[r.jsx(h,{ref:s,onPress:m.open,children:"Trigger popover"}),r.jsx(i,{triggerRef:s,...p,controller:m,children:"I am a popover."})]})}};var n,a,c;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:"{}",...(c=(a=o.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};var l,u,d;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(v=(f=e.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const Rr=["Default","CustomWidth","WithController"];export{t as CustomWidth,o as Default,e as WithController,Rr as __namedExportsOrder,hr as default};
