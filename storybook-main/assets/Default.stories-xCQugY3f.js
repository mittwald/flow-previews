import{r as g,j as r}from"./iframe-DjjV-bH6.js";import{R as t}from"./Rating-BdafbyLE.js";import{L as l}from"./Label-BylmPkwQ.js";import{F as R}from"./FieldError-B3mp1Ofg.js";import{u as h,F as b,t as F}from"./ResetButton-CcrR8bvt.js";import{B as f}from"./Button-B7eEYP7w.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-BVYK-jeQ.js";import"./flowComponent-B_hVkp7X.js";import"./index-B_oezAc9.js";import"./index-CaIAbEHH.js";import"./remote-BKpn4CGf.js";import"./useLocalizedStringFormatter-Crw_1s1h.js";import"./context-CVfxZLio.js";import"./RadioGroup-D_3Gwpjp.js";import"./utils-Wzr-xt4Q.js";import"./FieldError-cqIqfLoK.js";import"./Text-BylF3jjX.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-D8aiQr1-.js";import"./useLabel-DjKMdhxn.js";import"./Label-ay3DRy-y.js";import"./Hidden-BadsEN0y.js";import"./SelectionIndicator-DP9sACdz.js";import"./useFormValidation-CyR0-I-k.js";import"./useFocus-C98Vumo7.js";import"./useFocusRing-2GUlH-Oo.js";import"./useControlledState-DuEj2qRm.js";import"./FocusScope-hoEsPY4t.js";import"./useFormReset-DovS_sbG.js";import"./usePress-CoT418ij.js";import"./useFocusable-BB_F7Uj3.js";import"./VisuallyHidden-CG1EK-5C.js";import"./useFieldComponent-DlP24hgD.js";import"./useMakeFocusable-BDuTkyiJ.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-BWR4-rDO.js";import"./AlertIcon-DcWT0T9A.js";import"./dynamic-BXsvgyJR.js";import"./ActionGroupView-HPF2WmGA.js";import"./Content-D3ZFFpbf.js";import"./Heading-BUvpnBH0.js";import"./Heading-ykLy-LRI.js";import"./RSPContexts-C5x5s972.js";import"./Text-B3EwbE0r.js";import"./browser-DMwaewkm.js";import"./EmulatedBoldText-C0lG4eku.js";import"./ActionGroup-Bya-cpEz.js";import"./getActionGroupSlot-7eRlEqRh.js";import"./useStatic-xFolvGTK.js";import"./Modal-CGyNAbyv.js";import"./useOverlayController-DPRYSY6a.js";import"./Overlay-CeUaOkpN.js";import"./OverlayContextProvider-BMvgy-Zc.js";import"./LoadingSpinner-DTU1PYFj.js";import"./Dialog-Ok_9Edtl.js";import"./Button-DXnJuiQ-.js";import"./ProgressBar-C3Hn1NvH.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./OverlayArrow-CBp_JaqL.js";import"./Collection-B_hpa9r2.js";import"./CollectionBuilder-BTMAD3DD.js";import"./Separator-AXWdobwd.js";import"./SelectionManager-GQN58Gyp.js";import"./useEvent-CuFWGIMh.js";import"./useCollator-BMaztQCL.js";import"./ActionBatch-YJb9tMXC.js";import"./ButtonView-BQL8Rbhr.js";import"./Flex-C9E3B9yt.js";import"./useRef-Pg3VAXpj.js";const kr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},i={args:{isReadOnly:!0}},s={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},n={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    size: "s"
  }
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    isReadOnly: true
  }
}`,...i.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: props => <Rating {...props}>
      <Label>Rating</Label>
    </Rating>
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: props => <Rating {...props} defaultValue={0} isInvalid isRequired>
      <Label>Rating</Label>
      <FieldError>Please rate</FieldError>
    </Rating>
}`,...n.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: props => {
    const [value, setValue] = useState(4);
    return <Rating {...props} value={value} onChange={v => setValue(parseInt(v))}>
        <Label>Rating</Label>
      </Rating>;
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => {
    const form = useForm<{
      rating: number;
    }>({
      defaultValues: {
        rating: 2
      }
    });
    const Field = typedField(form);
    return <Form form={form} onSubmit={async v => console.log(v.rating)}>
        <Field name="rating">
          <Rating>
            <Label>Rating</Label>
          </Rating>
        </Field>
        <br />
        <Button type="submit">Submit</Button>
      </Form>;
  }
}`,...p.parameters?.docs?.source}}};const wr=["Default","Small","ReadOnly","WithLabel","WithFieldError","WithControlledValue","WithForm"];export{o as Default,i as ReadOnly,a as Small,m as WithControlledValue,n as WithFieldError,p as WithForm,s as WithLabel,wr as __namedExportsOrder,kr as default};
