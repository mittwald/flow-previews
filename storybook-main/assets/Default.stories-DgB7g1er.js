import{r as g,j as r}from"./iframe-DAdEF_a9.js";import{R as t}from"./Rating-DIkNGun4.js";import{L as l}from"./Label-D1h8c298.js";import{F as R}from"./FieldError-DAuD7Eqr.js";import{u as h,F as b,t as F}from"./FormRootError-DFCTJN0D.js";import{B as f}from"./Button-BL7hv3yg.js";import"./preload-helper-PPVm8Dsz.js";import"./clsx-B-dksMZM.js";import"./IconWarning-B_QPuDoh.js";import"./flowComponent-CSaST_uw.js";import"./index-UhVc0W_W.js";import"./index-DqNUQeP9.js";import"./remote-BQ_isGLI.js";import"./useLocalizedStringFormatter-DuO1Wowh.js";import"./context-DrtV74MG.js";import"./RadioGroup-BEbGSTDU.js";import"./utils-B1o5BDIk.js";import"./FieldError-Be27Lv36.js";import"./Text-ConA-l-E.js";import"./filterDOMProps-BNnC3YgW.js";import"./Form-B4U7K7S8.js";import"./useLabel-CcpSY4Um.js";import"./Label-DvwKTMzw.js";import"./Hidden-CcrF8gwt.js";import"./SelectionIndicator-BbyFO4Ic.js";import"./useFormValidation-CWgfw6QX.js";import"./useFocus-BHQGBA4R.js";import"./useFocusRing-5n4vvaIx.js";import"./useControlledState-D1JeUT3E.js";import"./FocusScope-Cya-_QqL.js";import"./useFormReset-BoqlzNfE.js";import"./usePress-AnOXMqB9.js";import"./useFocusable-vdr5CzJ0.js";import"./VisuallyHidden-DtDztoAI.js";import"./useFieldComponent-CLfspKSt.js";import"./useMakeFocusable-CgWPsGDF.js";import"./Label.module-CUYTf9Jc.js";import"./AlertText-kiIxGYqF.js";import"./AlertIcon-DxXhtuAo.js";import"./dynamic-pIUCZeo6.js";import"./ActionGroupView-oVftnOVm.js";import"./Content-CJNhBNrl.js";import"./Heading-CRr1Ukpo.js";import"./Heading-B0L1HgOG.js";import"./RSPContexts-BAZVNF9B.js";import"./Text-BlXexclX.js";import"./browser-DTw6e149.js";import"./EmulatedBoldText-DRN0x44S.js";import"./ActionGroup-BlNNsUJ6.js";import"./getActionGroupSlot-2bD_hcYD.js";import"./useStatic-CKtHP4uD.js";import"./Modal-Bw_NLwNU.js";import"./useOverlayController-BdzCJ-ub.js";import"./Overlay-BvmU2R8J.js";import"./OverlayContextProvider-DG82vmF2.js";import"./LoadingSpinner-BzYwrllt.js";import"./Dialog-CWk-zVbe.js";import"./Button-DZLmAbDI.js";import"./ProgressBar-Cv5-QMXF.js";import"./NumberFormatter-DNR9MAW-.js";import"./LiveAnnouncer-Cy654hVN.js";import"./OverlayArrow-DM34mO9f.js";import"./Collection-kYozbpbp.js";import"./CollectionBuilder-T5ZwCV3b.js";import"./Separator-DdtELOBz.js";import"./SelectionManager-CNmnVwle.js";import"./useEvent-DyHBlkna.js";import"./useCollator-BUCuy1eS.js";import"./ActionBatch-BtBHZwy0.js";import"./ButtonView-B0xnqfb2.js";import"./Flex-BMWRjUwl.js";import"./useRef-DEVjfIov.js";const kr={title:"Form Controls/Rating",component:t,args:{defaultValue:2},render:e=>r.jsx(t,{"aria-label":"Rating",...e})},o={},a={args:{size:"s"}},i={args:{isReadOnly:!0}},s={render:e=>r.jsx(t,{...e,children:r.jsx(l,{children:"Rating"})})},n={render:e=>r.jsxs(t,{...e,defaultValue:0,isInvalid:!0,isRequired:!0,children:[r.jsx(l,{children:"Rating"}),r.jsx(R,{children:"Please rate"})]})},m={render:e=>{const[c,d]=g.useState(4);return r.jsx(t,{...e,value:c,onChange:u=>d(parseInt(u)),children:r.jsx(l,{children:"Rating"})})}},p={render:()=>{const e=h({defaultValues:{rating:2}}),c=F();return r.jsxs(b,{form:e,onSubmit:async d=>console.log(d.rating),children:[r.jsx(c,{name:"rating",children:r.jsx(t,{children:r.jsx(l,{children:"Rating"})})}),r.jsx("br",{}),r.jsx(f,{type:"submit",children:"Submit"})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:"{}",...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
